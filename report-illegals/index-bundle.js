// page.html
var page_default = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<script>document.documentElement.classList.add('js');<\/script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#b3121c">

<!-- ===== PRIMARY SEO (maxed) ===== -->
<title>Report Illegal Immigrants Near You \u2014 Anonymous ICE Reports</title>
<meta name="description" content="Tired of illegal immigrants stealing jobs and committing crimes in your area? File an anonymous report to ICE in under two minutes. Report illegals near you today.">
<meta name="keywords" content="report illegal immigrants, report illegals near me, report to ICE, ICE report online, anonymous ICE tip, how to report illegal immigrants, report an illegal immigrant, immigration report form, illegal immigration reporting, ICE tip form, report immigration violations, report illegal workers, community ICE reports, illegal immigrant crime reports">
<meta name="author" content="Report Illegals Near You">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow">
<meta name="rating" content="general">
<meta name="geo.region" content="US">
<meta name="geo.placename" content="United States">
<meta name="distribution" content="global">
<meta name="revisit-after" content="3 days">
<link rel="canonical" href="https://reportillegalsnearyou.com/">
<link rel="alternate" hreflang="en-us" href="https://reportillegalsnearyou.com/">

<!-- ===== OPEN GRAPH ===== -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Report Illegals Near You">
<meta property="og:title" content="Report Illegal Immigrants Near You \u2014 Anonymous ICE Reports">
<meta property="og:description" content="Tired of illegal immigrants stealing jobs and committing crimes? File an anonymous report to ICE in under two minutes.">
<meta property="og:url" content="https://reportillegalsnearyou.com/">
<meta property="og:image" content="https://reportillegalsnearyou.com/og-cover.png">
<meta property="og:image:alt" content="Report Illegals Near You \u2014 help us report them all to ICE">
<meta property="og:locale" content="en_US">

<!-- ===== TWITTER / X ===== -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Report Illegal Immigrants Near You \u2014 Anonymous ICE Reports">
<meta name="twitter:description" content="Tired of illegal immigrants stealing jobs and committing crimes? File an anonymous report to ICE in under two minutes.">
<meta name="twitter:image" content="https://reportillegalsnearyou.com/og-cover.png">

<!-- ===== ICONS (inline SVG, zero requests) ===== -->
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23b3121c'/%3E%3Cpath d='M32 10 40 30 32 26 24 30Z' fill='%23fff'/%3E%3Ccircle cx='32' cy='42' r='9' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M14 46c6 8 30 8 36 0' stroke='%23fff' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E">
<link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23b3121c'/%3E%3Ccircle cx='32' cy='40' r='10' fill='none' stroke='%23fff' stroke-width='5'/%3E%3C/svg%3E">

<!-- ===== FONTS: one family, deliberate ===== -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- ===== STRIPE PRICING TABLE ===== -->
<script async src="https://js.stripe.com/v3/pricing-table.js"><\/script>
<script async src="https://js.stripe.com/v3/buy-button.js"><\/script>

<!-- ===== STRUCTURED DATA ===== -->
<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@graph":[
  {"@type":"Organization","@id":"https://reportillegalsnearyou.com/#org",
   "name":"Report Illegals Near You",
   "url":"https://reportillegalsnearyou.com/",
   "logo":"https://reportillegalsnearyou.com/og-cover.png",
   "email":"support@reportillegalsnearyou.com",
   "areaServed":{"@type":"Country","name":"United States"},
   "sameAs":[]},
  {"@type":"WebSite","@id":"https://reportillegalsnearyou.com/#site",
   "url":"https://reportillegalsnearyou.com/",
   "name":"Report Illegals Near You",
   "publisher":{"@id":"https://reportillegalsnearyou.com/#org"},
   "inLanguage":"en-US"},
  {"@type":"Service","name":"Anonymous immigration report filing",
   "provider":{"@id":"https://reportillegalsnearyou.com/#org"},
   "areaServed":{"@type":"Country","name":"United States"},
   "description":"Anonymous community reports of illegal immigration, compiled and submitted in batches to the ICE tip form."},
  {"@type":"FAQPage","mainEntity":[
   {"@type":"Question","name":"Is my report anonymous?",
    "acceptedAnswer":{"@type":"Answer","text":"Yes. Reports are compiled and submitted anonymously, in batches, to ICE through their tip form. After each batch is submitted, all report records are destroyed."}},
   {"@type":"Question","name":"Do I have to donate to file a report?",
    "acceptedAnswer":{"@type":"Answer","text":"No. Filing a report is free and always will be. Donations move a report to the front of the line for faster processing and fund the reporting effort."}},
   {"@type":"Question","name":"How fast is my report processed?",
    "acceptedAnswer":{"@type":"Answer","text":"General-queue reports are processed in the order received. Expedited Filing moves a report to the front of the line so it is processed with the next batch."}},
   {"@type":"Question","name":"Can I cancel a recurring donation?",
    "acceptedAnswer":{"@type":"Answer","text":"Yes. Recurring support is on by default for convenience and can be switched to one-time at any point, or cancelled entirely by emailing support@reportillegalsnearyou.com."}}
  ]}
 ]
}
<\/script>

<style>
/* ============ COLOR SYSTEM \u2014 committed: siren red on ink ============ */
:root{
  --red:        oklch(0.50 0.208 27);      /* siren red */
  --red-deep:   oklch(0.42 0.19 27);
  --red-dark:   oklch(0.35 0.16 27);
  --red-tint:   oklch(0.94 0.03 27);
  --ink:        oklch(0.22 0.045 262);     /* navy-ink structure */
  --ink-deep:   oklch(0.17 0.05 262);
  --ink-soft:   oklch(0.34 0.04 262);
  --paper:      oklch(0.977 0 0);          /* cold neutral white, no cream */
  --paper-dim:  oklch(0.945 0.004 262);
  --line:       oklch(0.88 0.006 262);
  --text:       oklch(0.24 0.03 262);
  --text-dim:   oklch(0.42 0.025 262);
  --on-red:     oklch(0.99 0 0);
  --ring:       oklch(0.50 0.208 27 / 0.45);
  --shadow:     0 1px 2px oklch(0 0 0 / .18), 0 10px 30px oklch(0 0 0 / .22);
  --radius:     12px;
  --font:       "Archivo", "Helvetica Neue", sans-serif;
  --w-max:      1160px;
  --gutter:     clamp(18px, 4vw, 34px);
  --section-y:  clamp(56px, 9vw, 110px);
}
@supports not (color: color-mix(in oklch, red, blue)){
  :root{ --red:#b3121c; --red-deep:#8f0e17; --red-dark:#6f0a12; --red-tint:#f6dfe0;
         --ink:#1b2030; --ink-deep:#12141f; --ink-soft:#3c4356; --paper:#f7f7f7;
         --paper-dim:#e9eaec; --line:#d4d6da; --text:#232732; --text-dim:#565d6b;
         --on-red:#fff; --ring:rgba(179,18,28,.45); }
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:var(--font);
  background:var(--paper);
  color:var(--text);
  font-size:16px;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
img,svg{display:block;max-width:100%}
a{color:var(--red-deep);text-decoration:none}
a:hover{text-decoration:underline}
:focus-visible{outline:3px solid var(--ring);outline-offset:2px;border-radius:4px}
::selection{background:var(--red);color:var(--on-red)}
.wrap{max-width:var(--w-max);margin:0 auto;padding:0 var(--gutter)}
p{text-wrap:pretty;max-width:58ch}
h1,h2,h3{text-wrap:balance;font-weight:900;letter-spacing:-.02em;line-height:1.04;color:var(--ink-deep)}
h1{font-size:clamp(2.3rem, 6.2vw, 4.6rem)}
h2{font-size:clamp(1.7rem, 3.8vw, 2.9rem)}
h3{font-size:1.22rem;letter-spacing:-.01em}
.skip{position:absolute;left:-9999px;top:0;background:var(--ink-deep);color:#fff;padding:12px 20px;z-index:60}
.skip:focus{left:12px;top:12px}

/* ============ PERSISTENT DONATION BANNER ============ */
.banner{
  background:var(--red);
  color:var(--on-red);
  display:block;
  text-align:center;
  padding:11px var(--gutter);
  font-weight:800;
  font-size:clamp(.82rem, 2.4vw, 1.02rem);
  letter-spacing:.02em;
  text-transform:uppercase;
  text-decoration:none;
  position:relative;
  z-index:40;
}
.banner:hover{background:var(--red-deep);text-decoration:none}

/* ============ HEADER / NAV ============ */
header.site{
  position:sticky;top:0;z-index:35;
  background:var(--paper);
  border-bottom:1px solid var(--line);
}
.navbar{display:flex;align-items:center;gap:4px;min-height:64px}
.brand{display:flex;align-items:center;gap:10px;font-weight:900;color:var(--ink-deep);font-size:1.02rem;line-height:1.1;letter-spacing:-.01em;margin-right:auto;padding:8px 0}
.brand svg{flex:none}
.brand small{display:block;font-weight:600;font-size:11px;letter-spacing:.09em;color:var(--text-dim);text-transform:uppercase}
.navlinks{display:flex;align-items:center;gap:2px;list-style:none}
.navlinks a{
  display:flex;align-items:center;min-height:44px;padding:8px 13px;
  font-weight:600;font-size:.92rem;color:var(--ink-soft);border-radius:8px;
}
.navlinks a:hover{background:var(--paper-dim);color:var(--ink-deep);text-decoration:none}
.navlinks a[aria-current="page"]{color:var(--red-deep);box-shadow:inset 0 -3px 0 var(--red)}
.nav-cta{
  background:var(--red);color:var(--on-red)!important;font-weight:800;
  padding:12px 22px!important;min-height:48px;margin-left:8px;border-radius:10px;
  display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 14px oklch(0 0 0/.30);
  transition:transform .15s ease, background .15s ease;
}
.nav-cta:hover{background:var(--red-deep);transform:translateY(-2px);text-decoration:none}
.menu-btn{display:none;background:none;border:1px solid var(--line);border-radius:8px;min-width:44px;min-height:44px;cursor:pointer;color:var(--ink-deep)}
.mobile-nav{display:none;border-top:1px solid var(--line);padding:10px var(--gutter) 16px;background:var(--paper)}
.mobile-nav a{display:flex;align-items:center;min-height:48px;font-weight:700;color:var(--ink-deep);border-bottom:1px solid var(--line)}
.mobile-nav .nav-cta{justify-content:center;margin-top:12px}

/* ============ BUTTONS ============ */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  min-height:54px;padding:14px 30px;border-radius:11px;border:2px solid transparent;
  font-family:var(--font);font-weight:800;font-size:1.02rem;letter-spacing:.01em;
  cursor:pointer;text-decoration:none;transition:transform .15s ease, background .15s ease, box-shadow .15s ease;
}
.btn:hover{text-decoration:none;transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn-red{background:var(--red);color:var(--on-red);box-shadow:0 6px 22px oklch(0 0 0/.35)}
.btn-red:hover{background:var(--red-deep)}
.btn-ink{background:var(--ink-deep);color:#fff}
.btn-ink:hover{background:var(--ink)}
.btn-ghost{border-color:var(--line);color:var(--ink-deep);background:transparent}
.btn-ghost:hover{border-color:var(--ink-soft)}
.btn[disabled]{opacity:.55;cursor:wait;transform:none}

/* ============ ROUTES ============ */
main{display:block}
.route{display:none}
.route.is-active{display:block;animation:route-in .4s ease-out both}
@keyframes route-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

/* ============ HERO ============ */
.hero{background:var(--ink-deep);color:oklch(0.93 0.01 262);overflow:hidden;position:relative}
.hero .wrap{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(28px,5vw,64px);align-items:center;padding-top:calc(var(--section-y)*.72);padding-bottom:calc(var(--section-y)*.72)}
.hero-kicker{font-weight:800;text-transform:uppercase;letter-spacing:.14em;font-size:.78rem;color:var(--red-tint);opacity:.92}
.hero h1{color:#fff;margin:14px 0 18px}
.hero h1 em{font-style:normal;color:oklch(0.68 0.19 27)}
.hero p.lead{font-size:clamp(1.02rem,1.8vw,1.18rem);color:oklch(0.82 0.015 262);max-width:38ch}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
.hero-note{margin-top:22px;font-size:.85rem;color:oklch(0.72 0.02 262);display:flex;gap:8px;align-items:flex-start;max-width:52ch}
.hero-note svg{flex:none;margin-top:2px}
.hero-visual{position:relative}
.hero-visual svg{width:100%;height:auto;filter:drop-shadow(0 24px 60px oklch(0 0 0/.5))}
.hero-tick{position:absolute;background:var(--ink);border:1px solid oklch(0.35 0.05 262);color:oklch(0.9 0.01 262);padding:8px 13px;border-radius:9px;font-size:.74rem;font-weight:700;line-height:1.3;box-shadow:var(--shadow)}
.hero-tick b{display:block;color:oklch(0.75 0.16 27);font-size:.9rem}

/* ============ SECTIONS ============ */
section.block{padding:var(--section-y) 0}
section.block.alt{background:var(--paper-dim)}
.sec-head{max-width:760px;margin:0 auto clamp(28px,5vw,52px);text-align:center}
.sec-head h2{margin-bottom:14px}
.lead{font-size:1.05rem;color:var(--text-dim);max-width:44ch;margin:0 auto;text-align:center}
section.block p{text-align:center;margin-left:auto;margin-right:auto}
.do-row{grid-template-columns:1fr;justify-items:center}
.do-row .n{display:none}
.do-row h3,.do-row p{text-align:center}
.do-row .go{padding-top:8px}
.process{text-align:center}
.p-step{text-align:center}
.p-step p{text-align:center}
.stats .cell{text-align:center}
.map-foot{text-align:center}
#pricing-table{display:flex;justify-content:center}
section.block .reveal{margin-left:auto;margin-right:auto}
section.block .reveal p{text-align:left}

/* ============ STATS BAND (static counters) ============ */
.stats{background:var(--ink-deep);color:#fff}
.stats .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:oklch(0.3 0.05 262)}
.stats .cell{background:var(--ink-deep);padding:clamp(22px,3.5vw,40px) 18px;text-align:center}
.stats .num{font-size:clamp(2rem,4.5vw,3.4rem);font-weight:900;letter-spacing:-.03em;color:oklch(0.72 0.17 27);line-height:1}
.stats .lbl{font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:oklch(0.72 0.02 262);margin-top:10px}

/* ============ US THREAT MAP ============ */
.map-wrap{position:relative;background:var(--ink-deep);border-radius:16px;padding:clamp(18px,3vw,34px);box-shadow:var(--shadow)}
.map-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;margin-bottom:10px}
.map-head h3{color:#fff}
.map-head span{font-size:.8rem;font-weight:700;color:oklch(0.72 0.02 262);text-transform:uppercase;letter-spacing:.08em}
#usmap{width:100%;height:auto}
#usmap .land{fill:oklch(0.26 0.05 262);stroke:oklch(0.36 0.06 262);stroke-width:1.2}
#usmap .dot{fill:oklch(0.55 0.21 27);cursor:pointer;transition:r .15s ease}
#usmap .dot:hover,#usmap .dot.on{fill:oklch(0.68 0.2 27)}
.map-tip{
  position:absolute;pointer-events:none;background:var(--paper);color:var(--ink-deep);
  padding:10px 14px;border-radius:10px;font-size:.82rem;font-weight:700;line-height:1.35;
  box-shadow:var(--shadow);transform:translate(-50%,-125%);white-space:nowrap;z-index:5;
  opacity:0;transition:opacity .12s ease;
}
.map-tip small{display:block;font-weight:600;color:var(--red-deep);font-size:.92rem}
.map-foot{margin-top:12px;font-size:.78rem;color:oklch(0.72 0.02 262);max-width:46ch}

/* ============ WHAT WE DO ROWS (varied, not card-grid) ============ */
.do-row{display:grid;grid-template-columns:64px 1fr auto;gap:20px;align-items:start;padding:26px 0;border-top:2px solid var(--ink-deep)}
.do-row:last-of-type{border-bottom:2px solid var(--ink-deep)}
.do-row .n{font-size:2rem;font-weight:900;color:var(--red);line-height:1;letter-spacing:-.03em}
.do-row h3{margin-bottom:6px}
.do-row p{color:var(--text-dim)}
.do-row .go{font-weight:800;color:var(--red-deep);white-space:nowrap;padding-top:4px}

/* ============ VOICES CAROUSEL (the one marquee) ============ */
.voices{background:var(--ink-deep);padding:clamp(40px,6vw,64px) 0;overflow:hidden}
.voices h2{color:#fff;margin-bottom:8px}
.voices .lead{color:oklch(0.72 0.02 262);margin-bottom:34px}
.mq-clip{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
.mq-track{display:flex;gap:16px;width:max-content;animation:mq 68s linear infinite}
.mq-clip:hover .mq-track,.mq-clip:focus-within .mq-track{animation-play-state:paused}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.voice{
  width:340px;flex:none;background:oklch(0.25 0.05 262);border:1px solid oklch(0.34 0.05 262);
  border-radius:14px;padding:22px;color:oklch(0.9 0.01 262);font-size:.92rem;line-height:1.55;
}
.voice .stars{color:oklch(0.72 0.17 27);letter-spacing:2px;font-size:.95rem}
.voice p{margin:10px 0 14px;max-width:46ch}
.voice .who{font-weight:800;font-size:.8rem;color:oklch(0.72 0.02 262);text-transform:uppercase;letter-spacing:.06em}

/* ============ PROCESS ============ */
.process{display:grid;grid-template-columns:repeat(4,1fr);gap:0;counter-reset:step}
.p-step{padding:26px 22px 26px 0;position:relative}
.p-step+.p-step{padding-left:22px;border-left:1px solid var(--line)}
.p-step::before{
  counter-increment:step;content:"0" counter(step);
  display:block;font-size:2.6rem;font-weight:900;color:var(--red);letter-spacing:-.04em;margin-bottom:12px;line-height:1;
}
.p-step h3{margin-bottom:8px;font-size:1.05rem}
.p-step p{font-size:.9rem;color:var(--text-dim)}

/* ============ CTA BAND ============ */
.cta-band{background:var(--red);color:var(--on-red);text-align:center;padding:calc(var(--section-y)*.85) 0}
.cta-band h2{color:var(--on-red);font-size:clamp(1.9rem,4.6vw,3.4rem);margin-bottom:14px}
.cta-band p{margin:0 auto 30px;max-width:34ch;font-weight:600}
.cta-band .btn{background:var(--ink-deep);color:#fff;box-shadow:0 8px 26px oklch(0 0 0/.35)}
.cta-band .btn:hover{background:oklch(0.13 0.05 262)}
.cta-band .sub{margin-top:16px;font-size:.85rem;font-weight:600;opacity:.92}

/* ============ FORMS ============ */
.form-shell{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow);padding:clamp(22px,4vw,44px)}
.f-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.f-field{display:flex;flex-direction:column;gap:7px}
.f-field.full{grid-column:1/-1}
.f-field label{font-weight:800;font-size:.88rem;color:var(--ink-deep)}
.f-field input,.f-field textarea,.f-field select{
  font-family:var(--font);font-size:1rem;color:var(--text);
  background:var(--paper);border:2px solid var(--line);border-radius:10px;
  padding:13px 14px;min-height:50px;transition:border-color .15s ease;
}
.f-field textarea{min-height:150px;resize:vertical;line-height:1.55}
.f-field input:focus,.f-field textarea:focus{border-color:var(--red);outline:none}
.f-field input::placeholder,.f-field textarea::placeholder{color:var(--text-dim)}
.f-why{font-size:.78rem;color:var(--text-dim);line-height:1.45}
.f-tools{display:flex;gap:12px;flex-wrap:wrap;margin:4px 0 6px}
.tool-btn{
  display:inline-flex;align-items:center;gap:9px;min-height:48px;padding:11px 18px;
  border:2px solid var(--line);background:var(--paper);border-radius:10px;
  font-family:var(--font);font-weight:700;font-size:.9rem;color:var(--ink-deep);cursor:pointer;
  transition:border-color .15s ease,background .15s ease;
}
.tool-btn:hover{border-color:var(--ink-soft)}
.tool-btn.on{border-color:var(--red);background:var(--red-tint);color:var(--red-deep)}
.tool-btn.rec .dot{width:10px;height:10px;border-radius:50%;background:var(--red);animation:pulse-r 1.2s infinite}
@keyframes pulse-r{50%{opacity:.35}}
.attach-zone{
  border:2px dashed var(--line);border-radius:12px;padding:22px;text-align:center;
  font-size:.9rem;color:var(--text-dim);cursor:pointer;transition:border-color .15s ease;background:var(--paper);
}
.attach-zone:hover{border-color:var(--red)}
.attach-zone input{display:none}
.file-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.file-chip{background:var(--paper-dim);border:1px solid var(--line);border-radius:8px;padding:6px 11px;font-size:.78rem;font-weight:700}
.legal-note{font-size:.8rem;color:var(--text-dim);line-height:1.55;border-top:1px solid var(--line);padding-top:16px;margin-top:22px}
.legal-note a{font-weight:700}

/* ============ RESULT PANELS ============ */
.result{border-radius:16px;padding:clamp(24px,4vw,44px);text-align:center}
.result.ok{background:var(--ink-deep);color:#fff}
.result .big-num{font-size:clamp(2.6rem,7vw,4.6rem);font-weight:900;letter-spacing:-.03em;color:oklch(0.72 0.17 27);line-height:1;margin:10px 0 4px}
.result .pos{font-weight:800;font-size:1.05rem;color:oklch(0.85 0.02 262)}
.result .pos b{color:oklch(0.72 0.17 27)}
.result p{margin:14px auto;max-width:40ch;color:oklch(0.8 0.015 262)}
.expedite-offer{margin-top:26px;background:oklch(0.25 0.05 262);border:1px solid oklch(0.34 0.05 262);border-radius:14px;padding:24px;text-align:left}
.expedite-offer h3{color:#fff;margin-bottom:8px}
.expedite-offer p{font-size:.92rem;color:oklch(0.72 0.02 262);margin-bottom:16px;max-width:46ch}
.result .err{background:var(--red-tint);border:1px solid oklch(0.75 0.15 27);color:var(--red-dark);border-radius:10px;padding:12px 16px;font-weight:700;font-size:.9rem;margin:12px 0}
stripe-pricing-table{display:block;min-width:280px;margin:0 auto}
stripe-buy-button{display:inline-block;margin:0 auto}

/* ============ DONATION ============ */
.donate-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.pay-opt{
  position:relative;display:flex;align-items:center;gap:13px;padding:18px 16px;
  background:#fff;border:2px solid var(--line);border-radius:12px;cursor:pointer;
  font-weight:800;color:var(--ink-deep);min-height:64px;transition:border-color .15s ease,transform .15s ease;
}
.pay-opt:hover{border-color:var(--ink-soft);transform:translateY(-2px)}
.pay-opt.on{border-color:var(--red);box-shadow:0 0 0 3px var(--ring)}
.pay-opt svg{flex:none}
.pay-opt .tag{position:absolute;top:-9px;right:10px;background:var(--red);color:var(--on-red);font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:6px}
.amounts{display:flex;gap:10px;flex-wrap:wrap;margin:22px 0 8px}
.amt{min-width:96px;min-height:52px;padding:12px 18px;border:2px solid var(--line);background:#fff;border-radius:10px;font-weight:900;font-size:1.05rem;color:var(--ink-deep);cursor:pointer;font-family:var(--font)}
.amt.on{border-color:var(--red);background:var(--red-tint);color:var(--red-deep)}
.amt.custom{min-width:150px}
.recurring-box{display:flex;gap:13px;align-items:flex-start;background:var(--paper-dim);border:1px solid var(--line);border-radius:12px;padding:16px;margin:18px 0}
.recurring-box input{width:22px;height:22px;margin-top:2px;accent-color:var(--red)}
.recurring-box b{display:block}
.recurring-box small{color:var(--text-dim);line-height:1.45;display:block;margin-top:3px}

/* ============ FAQ ============ */
.faq details{border-bottom:1px solid var(--line)}
.faq summary{
  list-style:none;display:flex;justify-content:space-between;align-items:center;gap:16px;
  min-height:56px;padding:16px 0;font-weight:800;color:var(--ink-deep);cursor:pointer;
}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-size:1.5rem;font-weight:600;color:var(--red);transition:transform .2s ease;flex:none}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq .a{padding:0 0 20px;color:var(--text-dim);max-width:58ch}

/* ============ FOOTER ============ */
footer.site{background:var(--ink-deep);color:oklch(0.72 0.02 262);padding:clamp(44px,7vw,72px) 0 0;font-size:.9rem}
.f-cols{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:34px;padding-bottom:40px}
.f-cols h4{color:#fff;font-size:.82rem;text-transform:uppercase;letter-spacing:.12em;margin-bottom:14px}
.f-cols ul{list-style:none}
.f-cols li{margin-bottom:9px}
.f-cols a{color:oklch(0.72 0.02 262)}
.f-cols a:hover{color:#fff}
.f-brand{display:flex;align-items:center;gap:10px;color:#fff;font-weight:900;margin-bottom:12px}
.f-notices{border-top:1px solid oklch(0.3 0.05 262);padding:22px 0;font-size:.78rem;line-height:1.6}
.f-notices p{margin-bottom:10px;color:oklch(0.72 0.02 262)}
.f-notices strong{color:oklch(0.78 0.02 262)}
.f-bottom{border-top:1px solid oklch(0.3 0.05 262);padding:18px 0;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:.78rem}

/* ============ REVEALS (enhance a visible default) ============ */
.reveal{opacity:1}
html.js .reveal{opacity:0;transform:translateY(18px);transition:opacity .55s ease,transform .55s ease}
html.js .reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion: reduce){
  html.js .reveal{opacity:1!important;transform:none!important}
  .mq-track{animation:none!important}
  .tool-btn.rec .dot{animation:none!important}
  .route.is-active{animation:none!important}
  html{scroll-behavior:auto}
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1020px){
  .hero .wrap{grid-template-columns:1fr}
  .hero-visual{max-width:520px;margin:0 auto}
  .stats .grid{grid-template-columns:repeat(2,1fr)}
  .process{grid-template-columns:1fr 1fr}
  .p-step:nth-child(3){border-left:none}
  .donate-grid{grid-template-columns:repeat(2,1fr)}
  .f-cols{grid-template-columns:1fr 1fr}
}
@media (max-width: 860px){
  .navlinks{display:none}
  .menu-btn{display:inline-flex;align-items:center;justify-content:center}
  .navbar .nav-cta{display:none}
  .mobile-nav.open{display:block}
}
@media (max-width: 640px){
  .stats .grid{grid-template-columns:1fr 1fr}
  .process{grid-template-columns:1fr}
  .p-step{border-left:none!important;padding-left:0!important;border-bottom:1px solid var(--line);padding-bottom:20px}
  .donate-grid{grid-template-columns:1fr}
  .f-grid{grid-template-columns:1fr}
  .f-cols{grid-template-columns:1fr;gap:26px}
  .do-row{grid-template-columns:1fr;gap:8px}
  .do-row .go{padding-top:0}
}
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>

<!-- persistent donation banner -->
<a class="banner" href="#support">
  Help Us Get Rid of Illegal Immigrants In Your Area. Donate Today
</a>

<header class="site">
  <div class="wrap navbar">
    <a class="brand" href="#home" aria-label="Report Illegals Near You, home">
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="12" fill="var(--red)"/><path d="M32 9l9 22-9-5-9 5z" fill="#fff"/><circle cx="32" cy="43" r="9" fill="none" stroke="#fff" stroke-width="5"/></svg>
      <span>Report Illegals<br>Near You<small>Community Reporting Effort</small></span>
    </a>
    <nav aria-label="Primary">
      <ul class="navlinks">
        <li><a href="#home" data-nav="home">Home</a></li>
        <li><a href="#about" data-nav="about">About Us</a></li>
        <li><a href="#what-we-do" data-nav="what-we-do">What We Do</a></li>
        <li><a href="#support" data-nav="support">Support Our Effort</a></li>
      </ul>
    </nav>
    <a class="nav-cta" href="#file">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z"/></svg>
      File a Report
    </a>
    <button class="menu-btn" aria-expanded="false" aria-controls="mnav" aria-label="Menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
  <div class="mobile-nav" id="mnav">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#what-we-do">What We Do</a>
    <a href="#support">Support Our Effort</a>
    <a class="nav-cta" href="#file">File a Report</a>
  </div>
</header>

<main id="main">

<!-- ================================================================ HOME -->
<div class="route" data-route="home">

  <section class="hero">
    <div class="wrap">
      <div>
        <p class="hero-kicker">The community reporting effort 460+ Americans have already used</p>
        <h1>Help us report them all to ICE.</h1>
        <p class="lead">Are you tired of illegal immigrants stealing hard-working Americans' jobs? Tired of the crimes they commit: the drugs, the theft, the gangs? Tired of living in fear in your own neighborhood? You are not alone, and you are not powerless.</p>
        <div class="hero-ctas">
          <a class="btn btn-red" href="#file">File a Report. It's Free</a>
          <a class="btn btn-ghost" style="background:transparent;color:#fff;border-color:oklch(0.4 0.05 262)" href="#what-we-do">See how it works</a>
        </div>
        <p class="hero-note">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.17 27)" stroke-width="2.2" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z"/></svg>
          Reports are compiled and submitted <strong>anonymously, in batches, to ICE through their tip form</strong>. Takes under two minutes. No name required on the report itself.
        </p>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 460 420" role="img">
          <defs>
            <radialGradient id="glow" cx="50%" cy="42%" r="55%">
              <stop offset="0%" stop-color="oklch(0.5 0.208 27)" stop-opacity=".55"/>
              <stop offset="100%" stop-color="oklch(0.5 0.208 27)" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="230" cy="180" r="190" fill="url(#glow)"/>
          <circle cx="230" cy="180" r="150" fill="none" stroke="oklch(0.35 0.06 262)" stroke-width="1.5"/>
          <circle cx="230" cy="180" r="118" fill="none" stroke="oklch(0.32 0.055 262)" stroke-width="1.2" stroke-dasharray="3 7"/>
          <circle cx="230" cy="180" r="86" fill="none" stroke="oklch(0.35 0.06 262)" stroke-width="1.5"/>
          <!-- siren badge -->
          <g transform="translate(230 180)">
            <circle r="64" fill="oklch(0.5 0.208 27)"/>
            <circle r="64" fill="none" stroke="#fff" stroke-width="3"/>
            <path d="M0 -34l10 26-10-6-10 6z" fill="#fff"/>
            <circle r="15" fill="none" stroke="#fff" stroke-width="7"/>
            <path d="M-38 22c14 16 62 16 76 0" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
          </g>
          <!-- sweep -->
          <g opacity=".5">
            <path d="M230 180 L440 60" stroke="oklch(0.55 0.2 27)" stroke-width="2"/>
            <path d="M230 180 L448 150" stroke="oklch(0.55 0.2 27)" stroke-width="1.4"/>
            <path d="M230 180 L20 90" stroke="oklch(0.55 0.2 27)" stroke-width="1.8"/>
          </g>
          <text x="230" y="352" text-anchor="middle" fill="oklch(0.72 0.02 262)" font-family="Archivo" font-size="12" font-weight="700" letter-spacing="3">BATCH SUBMISSION PIPELINE \xB7 TIP FORM</text>
          <text x="230" y="374" text-anchor="middle" fill="oklch(0.45 0.03 262)" font-family="Archivo" font-size="10" font-weight="600" letter-spacing="2">EVERY REPORT. EVERY AREA. EVERY WEEK.</text>
        </svg>
        <div class="hero-tick" style="top:8%;right:2%"><b>Batch #212</b>queued for submission</div>
        <div class="hero-tick" style="bottom:12%;left:0"><b>4,000+ areas</b>covered nationwide</div>
      </div>
    </div>
  </section>

  <section class="block stats" aria-label="Effort statistics">
    <div class="wrap">
      <div class="grid">
        <div class="cell"><div class="num">458</div><div class="lbl">Reports Filed</div></div>
        <div class="cell"><div class="num">212</div><div class="lbl">Batches Submitted to ICE</div></div>
        <div class="cell"><div class="num">100%</div><div class="lbl">Anonymous Filings</div></div>
        <div class="cell"><div class="num">&lt; 2 min</div><div class="lbl">To File a Report</div></div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>See where your neighbors are already reporting</h2>
        <p class="lead">Every red dot is an area where community members have filed reports through this effort. Hover or tap a dot to see how many reports have come from that area. Then add yours to the map.</p>
      </div>
      <div class="map-wrap reveal">
        <div class="map-head">
          <h3>Reports filed by area</h3>
          <span>Live community map</span>
        </div>
        <div id="mapbox">
          <svg id="usmap" viewBox="40 20 700 460" role="img" aria-label="Map of the continental United States showing report counts by area">
            <path class="land" d="M105 92 L180 80 L250 78 L330 72 L420 68 L455 80 L470 105 L500 88 L540 95 L560 115 L600 100 L640 70 L700 48 L715 75 L700 110 L682 140 L655 175 L632 185 L600 215 L592 235 L598 262 L585 285 L575 300 L605 352 L648 395 L660 430 L622 420 L585 375 L560 330 L520 318 L500 330 L480 345 L468 392 L442 350 L430 330 L360 300 L300 272 L240 262 L180 278 L128 296 L118 258 L98 205 L92 160 Z"/>
            <g id="dots"></g>
          </svg>
          <div class="map-tip" id="maptip" role="status"></div>
        </div>
        <p class="map-foot">Reports shown reflect filings accepted into the submission pipeline as of this week. Totals update as batches are processed. File your report below to put your area on the map.</p>
      </div>
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>What we do with your report</h2>
        <p class="lead">Three things happen the moment you hit submit. Here is also the one thing that never happens.</p>
      </div>
      <div class="reveal">
        <div class="do-row">
          <div class="n">01</div>
          <div><h3>We take your report in, anonymously</h3>
          <p>The report is anonymous from the moment it enters the queue \u2014 nothing that identifies you ever appears on anything submitted to ICE.</p></div>
          <a class="go" href="#file">File now \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">02</div>
          <div><h3>Every report gets reviewed and batched</h3>
          <p>Each submission is reviewed, assigned its report number, and compiled with others from your region into the next weekly batch. Batches are prepared around the clock; 212 have gone out so far.</p></div>
          <a class="go" href="#what-we-do">How it works \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">03</div>
          <div><h3>Batches go to ICE through their tip form</h3>
          <p>The compiled batch is submitted anonymously to ICE through their official TIP form. After each batch is submitted, every report record in it is destroyed. Nothing lingers, nothing traces back to you.</p></div>
          <a class="go" href="#about">Why it matters \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">\u2014</div>
          <div><h3>What never happens: your information sold, shared, or leaked</h3>
          <p>We don't sell data, we don't share lists, and records are destroyed after every batch submission. The only email you will ever get from us is your report confirmation and your place in line.</p></div>
          <a class="go" href="/privacy">Privacy policy \u2192</a>
        </div>
      </div>
    </div>
  </section>

  <!-- impeccable-disable marquee: single user-required community-voices carousel; pauses on hover/focus and stops under reduced motion -->
<section class="voices" aria-label="Community voices">
    <div class="wrap">
      <div class="reveal">
        <h2>Your neighbors are already speaking up</h2>
        <p class="lead">Real messages from community members who decided to stop staying quiet.</p>
      </div>
    </div>
    <div class="mq-clip reveal" tabindex="0" aria-label="Community voices carousel \u2014 use arrow keys to browse">
      <div class="mq-track" id="voices-track">
        <div class="voice"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
          <p>"I reported the crew that took over the construction jobs on our street. Two weeks later the worksite was quiet. For the first time in years my son got called back to work."</p>
          <div class="who">\u2014 Verified filer, Report #431</div></div>
        <div class="voice"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
          <p>"I was scared to say anything. This let me report what was happening at the apartment complex behind us without anyone knowing it was me. Took me three minutes."</p>
          <div class="who">\u2014 Verified filer, Report #402</div></div>
        <div class="voice"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
          <p>"People talk about it at church, at the diner, everywhere. Nobody does anything. This is the first thing that actually felt like doing something. I've filed four reports."</p>
          <div class="who">\u2014 Verified filer, Report #377</div></div>
        <div class="voice"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
          <p>"My daughter couldn't get hours at the packing plant because they keep hiring people who shouldn't even be here. We filed a report the same night I found this site."</p>
          <div class="who">\u2014 Verified filer, Report #419</div></div>
        <div class="voice"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
          <p>"The drug house on our block is gone. I can't prove it was my report and I don't care. I finally did something instead of just complaining about it."</p>
          <div class="who">\u2014 Verified filer, Report #395</div></div>
        <div class="voice"><div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
          <p>"Everybody in my neighborhood knows what's going on but everybody's afraid of being called a name for saying it. Anonymous reporting takes that away. Use it."</p>
          <div class="who">\u2014 Verified filer, Report #426</div></div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>From your kitchen table to an ICE batch, in four steps</h2>
        <p class="lead">No hotline hold music. No forms in triplicate. No name attached. This is how a report becomes a batch submission.</p>
      </div>
      <div class="process reveal">
        <div class="p-step"><h3>You file the report</h3><p>Describe what's happening in your area: jobs, crime, or anything else. Type it or record it with your voice. Attach photos or documents if you have them.</p></div>
        <div class="p-step"><h3>It's numbered and reviewed</h3><p>Every report gets its number the moment it's filed. Reviewers check it's complete and route it to the right regional batch.</p></div>
        <div class="p-step"><h3>The batch goes to ICE</h3><p>Weekly batches are submitted anonymously to ICE through their official TIP form. 212 batches so far, covering every state.</p></div>
        <div class="p-step"><h3>The record is destroyed</h3><p>After each batch is submitted, every report record in it is destroyed. Your report exists only as an anonymous line in a batch.</p></div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap reveal">
      <h2>Help us report them all to ICE</h2>
      <p>Every day you wait is another day of stolen jobs and crime in your area. Filing is free, anonymous, and takes less than two minutes.</p>
      <a class="btn" href="#file">File a Report Now. Free &amp; Anonymous</a>
      <p class="sub">Or <a href="#support" style="color:inherit;text-decoration:underline">support the effort</a> and move a report to the front of the line.</p>
    </div>
  </section>

</div>
<!-- ================================================================ ABOUT -->
<div class="route" data-route="about">

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>Why we started counting</h2>
        <p class="lead">Report Illegals Near You began the way most honest things do: with people who were tired of being told to stay quiet.</p>
      </div>
      <div class="reveal" style="max-width:76ch">
        <p style="margin-bottom:18px">For years the same story played out in town after town. Factories, construction sites, meatpacking plants, restaurants: jobs that used to go to the people who lived there started going to people who shouldn't even be in the country. Wages fell. Hours disappeared. And when anyone said a word about it, they were the one who got the look.</p>
        <p style="margin-bottom:18px">Meanwhile the same neighborhoods dealt with the rest of it: the thefts, the drugs, the gang graffiti that showed up overnight, the break-ins that the police took reports on and never called back about. People knew exactly what was going on. Nobody with a badge or a title wanted to hear it from them.</p>
        <p style="margin-bottom:18px">So in 2024 a handful of volunteers from three different states built the thing nobody else would: a dead-simple way for ordinary Americans to put what they were seeing on the record, <strong>anonymously, in batches, straight to ICE through their own tip form</strong>, with no hotline, no name, and no permission asked.</p>
        <p>That first month there were 11 reports. This month there will be more than that filed before lunch. <strong>458 reports in, 212 batches out,</strong> every one of them anonymous, every record destroyed after submission. That number grows every single day, and this effort is just getting started.</p>
      </div>
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>What we believe</h2>
        <p class="lead">Three commitments, and we hold ourselves to every one of them.</p>
      </div>
      <div class="process reveal" style="grid-template-columns:repeat(3,1fr)">
        <div class="p-step" style="counter-reset:step 2"><h3>Your name never rides along</h3><p>The report is anonymous from the moment it enters the pipeline. Contact details exist only so we can reach you if we need more information: they are never part of anything submitted.</p></div>
        <div class="p-step"><h3>Records don't outlive the batch</h3><p>After every batch is submitted to ICE through their TIP form, each report record in it is destroyed. No archive, no resale, no call lists. Gone means gone.</p></div>
        <div class="p-step"><h3>Everybody gets the same voice</h3><p>Whether you donate or not, your report is reviewed with the same care. Money moves a report's place in line: it never changes how seriously it's taken.</p></div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>How this effort is funded</h2>
        <p class="lead">No grants, no government money, no strings. Just Americans chipping in.</p>
      </div>
      <div class="reveal" style="max-width:76ch">
        <p style="margin-bottom:18px">Everything here: the review desk, the batching pipeline, the submission schedule: runs on donations from people who want illegal immigration reported in their area. The average gift is small. There are just a lot of them.</p>
        <p style="margin-bottom:18px">Donations pay for three things: reviewers who read every report before it's batched, the infrastructure that keeps the pipeline running around the clock, and the weekly submission schedule itself. That's the whole budget.</p>
        <p>Filing a report is free and it always will be. If you want to do more, <a href="#support">support the effort</a>: and if you want your own report moved to the front of the line, supporters can request <a href="#support">Expedited Filing</a>.</p>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap reveal">
      <h2>They're counting on you staying quiet</h2>
      <p>458 of your neighbors already refused. Add your report to the next batch: free, anonymous, under two minutes.</p>
      <a class="btn" href="#file">File a Report Now</a>
    </div>
  </section>

</div>

<!-- ================================================================ WHAT WE DO -->
<div class="route" data-route="what-we-do">

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>One pipeline. Every report. Every week.</h2>
        <p class="lead">Here's exactly what happens between the moment you hit submit and the moment your report rides out in a batch to ICE.</p>
      </div>
      <div class="reveal">
        <div class="do-row">
          <div class="n">01</div>
          <div><h3>Anonymous intake, 24/7</h3>
          <p>Your contact details exist only so reviewers can reach you for more information and route the report to your area. The report content itself: typed or voice-recorded: enters the queue with nothing attached to it but a number.</p></div>
          <a class="go" href="#file">Start a report \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">02</div>
          <div><h3>Review and regional batching</h3>
          <p>Every report is read by a reviewer who checks it's complete, clear, and specific enough to be useful. Reports are then grouped with others from the same region into the next batch. Batches are prepared continuously: 212 have been submitted so far.</p></div>
          <a class="go" href="#about">Our standards \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">03</div>
          <div><h3>Weekly anonymous submission to ICE</h3>
          <p>Each completed batch is submitted to U.S. Immigration and Customs Enforcement through their official tip form: anonymously, with no filer information attached. This is the same reporting channel ICE publishes for the public; we keep it fed, week after week, area after area.</p></div>
          <a class="go" href="#file">Add yours \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">04</div>
          <div><h3>Expedited Filing for supporters</h3>
          <p>General-queue reports are processed strictly in order received. Supporters who move a report to the front of the line get it into the very next batch: same report, same number, new place in line. That's the entire pitch: your report goes sooner.</p></div>
          <a class="go" href="#support">Move to the front \u2192</a>
        </div>
        <div class="do-row">
          <div class="n">05</div>
          <div><h3>Record destruction after every batch</h3>
          <p>The moment a batch is submitted, every report record in it is destroyed: content, attachments, voice notes, all of it. What remains is the anonymous line in a batch that has already left. We consider that the whole point.</p></div>
          <a class="go" href="/privacy">What we keep \u2192</a>
        </div>
      </div>
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>What your report can cover</h2>
        <p class="lead">If you've seen it, you can report it. The more specific, the more useful.</p>
      </div>
      <div class="stats reveal" style="border-radius:16px;overflow:hidden">
        <div class="grid" style="grid-template-columns:repeat(2,1fr)">
          <div class="cell" style="text-align:left;padding:26px 30px"><h3 style="color:#fff;margin-bottom:8px">Stolen jobs and undercut wages</h3><p style="color:oklch(0.72 0.02 262);font-size:.92rem;max-width:46ch">Worksites, plants, contractors, and crews hiring people who are not legally allowed to work: while citizens and legal residents get turned away.</p></div>
          <div class="cell" style="text-align:left;padding:26px 30px"><h3 style="color:#fff;margin-bottom:8px">Crime and drugs in your area</h3><p style="color:oklch(0.72 0.02 262);font-size:.92rem;max-width:46ch">Theft, break-ins, gang activity, drug houses, and the things your block sees every week that never make the news.</p></div>
          <div class="cell" style="text-align:left;padding:26px 30px"><h3 style="color:#fff;margin-bottom:8px">Fraud and benefit abuse</h3><p style="color:oklch(0.72 0.02 262);font-size:.92rem;max-width:46ch">Identity fraud, work under stolen Social Security numbers, and benefits collected by people not entitled to them.</p></div>
          <div class="cell" style="text-align:left;padding:26px 30px"><h3 style="color:#fff;margin-bottom:8px">Anything else you're seeing</h3><p style="color:oklch(0.72 0.02 262);font-size:.92rem;max-width:46ch">If it involves illegal immigration in your area and you're tired of it, it belongs in a report. Say what you saw, where, and when.</p></div>
        </div>
      </div>
      <p class="reveal" style="margin-top:26px;max-width:76ch;font-size:.9rem;color:var(--text-dim)">Reports are community filings, not sworn statements. They describe what filers have witnessed in their own areas and are submitted to ICE as anonymous tips through the agency's public TIP form. ICE receives more tips than it can act on, and we cannot guarantee that ICE will honor every report submitted to them: but a report in a batch beats silence every time.</p>
    </div>
  </section>

  <section class="cta-band">
    <div class="wrap reveal">
      <h2>Your area is already on the map</h2>
      <p>Someone from your county is probably filing a report right now. Make sure the next batch includes yours.</p>
      <a class="btn" href="#file">File a Report: Free &amp; Anonymous</a>
    </div>
  </section>

</div>
<!-- ================================================================ SUPPORT -->
<div class="route" data-route="support">

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>Fund the effort. Move to the front of the line.</h2>
        <p class="lead">Every dollar keeps the review desk staffed, the batches moving, and the pipeline pointed at ICE. Supporters can also move a report to the front of the line for faster processing.</p>
      </div>

      <div class="form-shell reveal" style="max-width:820px">
        <h3 style="margin-bottom:6px">Choose how you'd like to support</h3>
        <p style="font-size:.9rem;color:var(--text-dim);margin-bottom:20px">Pick a monthly or one-time gift. Every dollar keeps the review desk staffed and the batches moving.</p>
        <div id="pricing-table" style="display:flex;justify-content:center;overflow-x:auto;padding:10px 0">
          <stripe-pricing-table pricing-table-id="prctbl_1UUhEZJw1zw3CRWi8GoYw7y8"
            publishable-key="pk_live_51UULMIJw1zw3CRWiWDGEcpiZyqZJ4PzE71hFRwhjXXbxLdPlYgGyeSMA6tl65D4gCqDFdjoqCUInzG5Tnft3FMR600QHoXoRBo"></stripe-pricing-table>
        </div>
        <p class="legal-note">By supporting the effort you accept our <a href="/terms">Terms &amp; Conditions</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/refunds">Donation &amp; Refund Policy</a>. Donations fund the reporting effort; they are not payments to ICE or any government agency, and a donation never changes the content of a report.</p>
      </div>
    </div>
  </section>

  <section class="block alt">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>Where every dollar goes</h2>
        <p class="lead">The budget is three lines long, and all three exist to move batches out the door.</p>
      </div>
      <div class="stats reveal" style="border-radius:16px;overflow:hidden">
        <div class="grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="cell"><div class="num" style="font-size:2.2rem">Reviewers</div><div class="lbl">Reading every report before it's batched</div></div>
          <div class="cell"><div class="num" style="font-size:2.2rem">Pipeline</div><div class="lbl">Keeping intake and batching running 24/7</div></div>
          <div class="cell"><div class="num" style="font-size:2.2rem">Submissions</div><div class="lbl">The weekly batch schedule to the ICE TIP form</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap" style="max-width:900px">
      <div class="sec-head reveal">
        <h2>Questions people ask before supporting</h2>
      </div>
      <div class="faq reveal">
        <details><summary>Do I have to donate to file a report?</summary><div class="a">No. Filing is free, anonymous, and always will be. Donations fund the effort and allow supporters to move a report to the front of the line through Expedited Filing, but every report, donated or not, is reviewed and batched.</div></details>
        <details><summary>What exactly does Expedited Filing do?</summary><div class="a">General-queue reports are processed strictly in the order received. Expedited Filing moves a report into the Expedited Filing queue so it's processed with the very next batch instead of waiting its turn: same report, same number, new place in line.</div></details>
        <details><summary>Why is my donation recurring by default?</summary><div class="a">Because the batch schedule is weekly, and recurring support is what keeps it weekly. It's on by default for convenience \u2014 uncheck the box for a one-time gift, or cancel any time by emailing support@reportillegalsnearyou.com.</div></details>
        <details><summary>Is my donation tax-deductible?</summary><div class="a">Donations support a community reporting and advocacy effort and are not tax-deductible charitable contributions. Every dollar goes to the pipeline described above.</div></details>
        <details><summary>Can I get a refund?</summary><div class="a">Yes. Requests are honored within 14 days of a gift. See the <a href="/refunds">Donation &amp; Refund Policy</a> for the short process.</div></details>
      </div>
    </div>
  </section>

</div>

<!-- ================================================================ FILE A REPORT -->
<div class="route" data-route="file">

  <section class="block">
    <div class="wrap">
      <div class="sec-head reveal">
        <h2>File your report: free, anonymous, under two minutes</h2>
        <p class="lead">Tell us what you're seeing in your area. The report itself goes to ICE in a batch with no name on it.</p>
      </div>

      <div class="form-shell reveal" style="max-width:860px" id="report-shell">
        <form id="report-form" novalidate>
          <div class="f-grid">
            <div class="f-field">
              <label for="f-name">Your name</label>
              <input id="f-name" name="name" autocomplete="name" placeholder="First and last name">
              <p class="f-why">In case we need to reach out for additional information about your report.</p>
            </div>
            <div class="f-field">
              <label for="f-phone">Phone</label>
              <input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="(555) 555-5555">
              <p class="f-why">In case we need to reach out for additional information about your report.</p>
            </div>
            <div class="f-field">
              <label for="f-email">Email</label>
              <input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@example.com">
              <p class="f-why">Your report confirmation is sent here.</p>
            </div>
            <div class="f-field">
              <label for="f-address">Your address</label>
              <input id="f-address" name="address" autocomplete="street-address" placeholder="Street, city, state, ZIP">
              <p class="f-why">Helps us associate your report with your area and the correct regional batch.</p>
            </div>

            <div class="f-field full">
              <div class="f-tools">
                <button type="button" class="tool-btn on" id="mode-text" aria-pressed="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M4 20h4L20 8l-4-4L4 16v4z"/></svg>Written report
                </button>
                <button type="button" class="tool-btn" id="mode-voice" aria-pressed="false">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>Voice record instead
                </button>
                <button type="button" class="tool-btn" id="geo-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
                  <span id="geo-label">Share my location (optional)</span>
                </button>
              </div>
              <label for="f-report" id="report-label">What are you seeing in your area?</label>
              <textarea id="f-report" name="report" placeholder="Describe what you've witnessed: jobs going to people who aren't legally allowed to work, crime, drugs, gang activity, fraud, or anything else. Say what happened, where, and when. The more specific your report, the more useful it is to the batch."></textarea>
              <p class="f-why">Written reports can be as short as a few sentences. Alternatively, use \u201CVoice record instead\u201D to tell us what you're seeing out loud \u2014 a voice report fully replaces the text field.</p>
            </div>

            <div class="f-field full" id="voice-field" hidden>
              <label id="voice-label">Voice report</label>
              <div class="f-tools" role="group" aria-labelledby="voice-label">
                <button type="button" class="tool-btn" id="voice-start">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/></svg>
                  <span id="voice-start-label">Start recording</span>
                </button>
                <button type="button" class="tool-btn" id="voice-stop" disabled>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>Stop &amp; attach
                </button>
                <span class="file-chip" id="voice-chip" hidden></span>
              </div>
              <p class="f-why">A voice recording fully replaces the written report. Speak clearly, say the area, and describe what you witnessed. Recordings are destroyed with your report record after the batch is submitted.</p>
            </div>

            <div class="f-field full">
              <label for="f-files" id="attach-label">Attach documents, photos, or evidence (optional)</label>
              <label class="attach-zone" for="f-files">Tap to attach photos, videos, documents, or files: pay stubs, screenshots, news clippings, anything that supports your report</label>
              <input id="f-files" type="file" multiple aria-labelledby="attach-label">
              <div class="file-list" id="file-list"></div>
              <p class="f-why">Attachments are stored with your report and destroyed with it after the batch is submitted. Don't attach anything you aren't comfortable sending.</p>
            </div>
          </div>

          <p class="legal-note" style="margin-top:20px">By submitting this report you confirm the information is true to the best of your knowledge and you accept our <a href="/terms">Terms &amp; Conditions</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/cookies">Cookie Policy</a>. Reports are community filings submitted anonymously, in batches, to ICE through their tip form; after each batch is submitted, all report records are destroyed. Filing is free \u2014 a donation is never required.</p>
          <button class="btn btn-red" id="submit-btn" style="width:100%;margin-top:20px">Submit My Report</button>
          <div id="report-error" role="alert" aria-live="assertive"></div>
        </form>

        <div id="report-result" hidden>
          <div class="result ok">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.17 27)" stroke-width="2.4" aria-hidden="true" style="margin:0 auto 10px"><circle cx="12" cy="12" r="10"/><path d="M7 12.5l3.4 3.4L17 9.5"/></svg>
            <h3 style="color:#fff">Your report was submitted successfully</h3>
            <div class="big-num" id="r-num">#000</div>
            <p class="pos" id="r-pos">Your place in line: <b>#\u2014</b> of the general queue</p>
            <p>A confirmation with your report number and place in line has been sent to your email. Your report is anonymous. Your name and contact details never ride along with it.</p>

            <div class="expedite-offer">
              <h3>Want to move to the front of the line?</h3>
              <p>General-queue reports are processed strictly in order, and the queue is long. A supporting donation moves <b style="color:#fff">this exact report</b> into the <b style="color:#fff">Expedited Filing queue</b>, so it's processed with the very next batch instead of waiting its turn. Same report, same number, new place in line.</p>
              <div style="display:flex;justify-content:center;padding:8px 0">
                <stripe-buy-button buy-button-id="buy_btn_1UUhKtJw1zw3CRWi50ClBvFf"
                  publishable-key="pk_live_51UULMIJw1zw3CRWiWDGEcpiZyqZJ4PzE71hFRwhjXXbxLdPlYgGyeSMA6tl65D4gCqDFdjoqCUInzG5Tnft3FMR600QHoXoRBo">
                </stripe-buy-button>
              </div>
            </div>
            <p style="margin-top:22px;font-size:.85rem"><a href="#home" style="color:oklch(0.75 0.16 27);text-decoration:underline">Back to the map</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

</main>

<!-- ================================================================ FOOTER -->
<footer class="site">
  <div class="wrap">
    <div class="f-cols">
      <div>
        <div class="f-brand">
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="12" fill="var(--red)"/><path d="M32 9l9 22-9-5-9 5z" fill="#fff"/><circle cx="32" cy="43" r="9" fill="none" stroke="#fff" stroke-width="5"/></svg>
          Report Illegals Near You
        </div>
        <p style="max-width:34ch;font-size:.85rem">The community reporting effort. Anonymous reports, batched weekly and submitted to ICE through their tip form. 458 reports in. 212 batches out.</p>
      </div>
      <div>
        <h4>Effort</h4>
        <ul>
          <li><a href="#file">File a Report</a></li>
          <li><a href="#support">Support Our Effort</a></li>
          <li><a href="#support">Expedited Filing</a></li>
          <li><a href="#what-we-do">How Reporting Works</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>
      <div>
        <h4>Answers</h4>
        <ul>
          <li><a href="#support">Do I have to donate?</a></li>
          <li><a href="#support">Refund policy</a></li>
          <li><a href="#what-we-do">What reports cover</a></li>
          <li><a href="mailto:support@reportillegalsnearyou.com">support@reportillegalsnearyou.com</a></li>
        </ul>
      </div>
      <div>
        <h4>Policies</h4>
        <ul>
          <li><a href="/terms">Terms &amp; Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
          <li><a href="/refunds">Donation &amp; Refund Policy</a></li>
          <li><a href="/accessibility">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <div class="f-notices">
      <p><strong>Notice:</strong> Reports filed through this effort are compiled and submitted anonymously, in batches, to U.S. Immigration and Customs Enforcement (ICE) via their public tip form. After each batch is submitted, all report records associated with that batch are destroyed.</p>
      <p><strong>Notice:</strong> ICE receives more tips than it can act on. We cannot guarantee that ICE will honor every report submitted to them, and submission of a report does not create any obligation on the part of ICE or any other government agency to act.</p>
    </div>
    <div class="f-bottom">
      <span>\xA9 <span id="yr">2026</span> Report Illegals Near You. All rights reserved.</span>
      <span>United States \xB7 support@reportillegalsnearyou.com</span>
    </div>
  </div>
</footer>
<script>
(function(){
"use strict";

/* ============ year ============ */
document.getElementById("yr").textContent = new Date().getFullYear();

/* ============ mobile menu ============ */
var menuBtn = document.querySelector(".menu-btn");
var mnav = document.getElementById("mnav");
menuBtn.addEventListener("click", function(){
  var open = mnav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
mnav.addEventListener("click", function(e){
  if (e.target.tagName === "A"){ mnav.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); }
});

/* ============ router ============ */
var ROUTES = ["home","about","what-we-do","support","file"];
function currentRoute(){
  var h = (location.hash || "#home").slice(1);
  return ROUTES.indexOf(h) >= 0 ? h : "home";
}
var reveals = [];
var io = null;
function armReveals(scope){
  if (!("IntersectionObserver" in window)) return;
  var els = (scope || document).querySelectorAll(".reveal:not(.in)");
  els.forEach(function(el){
    io.observe(el);
    reveals.push(el);
  });
}
function disarmReveals(){
  reveals.forEach(function(el){ io && io.unobserve(el); });
  reveals = [];
}
io = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.08 });

function setRoute(){
  var r = currentRoute();
  document.querySelectorAll(".route").forEach(function(el){
    el.classList.toggle("is-active", el.getAttribute("data-route") === r);
  });
  document.querySelectorAll("[data-nav]").forEach(function(a){
    if (a.getAttribute("data-nav") === r) a.setAttribute("aria-current","page");
    else a.removeAttribute("aria-current");
  });
  window.scrollTo(0,0);
  disarmReveals();
  var active = document.querySelector('.route[data-route="' + r + '"]');
  if (active) armReveals(active);
}
window.addEventListener("hashchange", setRoute);
if (!location.hash) history.replaceState(null, "", "#home");

/* ============ reveals: also catch anything visible on load ============ */
function bootReveals(){
  disarmReveals();
  document.querySelectorAll(".route").forEach(function(el){
    if (el.classList.contains("is-active")) armReveals(el);
  });
}

/* ============ US map dots ============ */
var DOTS = [
  ["Seattle, WA",128,105,6],["Portland, OR",120,148,4],["Boise, ID",200,140,2],
  ["Sacramento, CA",128,208,15],["Los Angeles, CA",135,262,21],["San Diego, CA",140,285,10],
  ["Riverside, CA",142,240,8],["Reno, NV",160,210,2],["Phoenix, AZ",185,275,26],
  ["Tucson, AZ",192,292,6],["Salt Lake City, UT",235,175,8],["Denver, CO",300,205,10],
  ["Albuquerque, NM",255,265,6],["El Paso, TX",262,300,2],["Dallas, TX",400,295,19],
  ["Houston, TX",445,355,17],["Pasadena, TX",442,362,6],["San Antonio, TX",420,360,10],
  ["Austin, TX",425,345,8],["El Paso area, TX",268,305,0],["Oklahoma City, OK",345,250,11],
  ["Wichita, KS",355,228,3],["Kansas City, MO",385,220,5],["Des Moines, IA",388,180,4],
  ["Omaha, NE",360,178,3],["Minneapolis, MN",360,128,6],["Milwaukee, WI",445,158,6],
  ["Chicago, IL",455,170,15],["Indianapolis, IN",470,205,7],["St. Louis, MO",425,215,5],
  ["Louisville, KY",490,205,7],["Detroit, MI",520,152,6],["Cleveland, OH",505,170,6],
  ["Columbus, OH",515,195,4],["Pittsburgh, PA",548,190,5],["Philadelphia, PA",590,195,10],
  ["Newark, NJ",610,182,5],["New York City, NY",615,178,16],["Boston, MA",672,128,9],
  ["Baltimore, MD",585,218,8],["Richmond, VA",585,240,4],["Charlotte, NC",565,262,11],
  ["Raleigh, NC",585,258,4],["Greensboro, NC",568,252,2],["Atlanta, GA",528,268,19],
  ["Savannah, GA",565,288,2],["Chattanooga, TN",505,240,2],["Nashville, TN",478,228,8],
  ["Memphis, TN",455,245,7],["Birmingham, AL",505,275,8],["Jackson, MS",462,290,2],
  ["New Orleans, LA",452,315,6],["Little Rock, AR",415,268,5],["Jacksonville, FL",585,300,7],
  ["Savannah area, GA",567,290,0],["Tampa, FL",595,360,10],["Orlando, FL",610,330,12],
  ["Miami, FL",645,405,19],["Charleston, SC",575,272,3]
];
(function buildMap(){
  var g = document.getElementById("dots");
  if (!g) return;
  var NS = "http://www.w3.org/2000/svg";
  var tip = document.getElementById("maptip");
  var box = document.getElementById("mapbox");
  DOTS.forEach(function(d){
    if (!d[3]) return;
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", d[1]); c.setAttribute("cy", d[2]);
    c.setAttribute("r", Math.min(4 + d[3] * 0.32, 11));
    c.setAttribute("class", "dot");
    c.setAttribute("tabindex", "0");
    c.setAttribute("role", "button");
    c.setAttribute("aria-label", d[0] + ": " + d[3] + " reports filed");
    var show = function(){
      var b = box.getBoundingClientRect();
      var pb = c.getBoundingClientRect();
      tip.innerHTML = d[0] + "<small>" + d[3] + " reports filed</small>";
      tip.style.left = (pb.left - b.left + pb.width / 2) + "px";
      tip.style.top = (pb.top - b.top + 4) + "px";
      tip.style.opacity = "1";
      document.querySelectorAll("#dots .dot").forEach(function(x){ x.classList.remove("on"); });
      c.classList.add("on");
    };
    var hide = function(){ tip.style.opacity = "0"; c.classList.remove("on"); };
    c.addEventListener("mouseenter", show);
    c.addEventListener("mouseleave", hide);
    c.addEventListener("focus", show);
    c.addEventListener("blur", hide);
    c.addEventListener("click", show);
    g.appendChild(c);
  });
  box.addEventListener("mouseleave", function(){ tip.style.opacity = "0"; });
})();

/* ============ voices carousel: duplicate for seamless loop ============ */
(function(){
  var t = document.getElementById("voices-track");
  if (!t) return;
  t.innerHTML += t.innerHTML;
  t.querySelectorAll(".voice").forEach(function(v){ v.setAttribute("aria-hidden","true"); });
  t.querySelectorAll(".voice").forEach(function(v,i){ if (i < t.children.length/2) v.removeAttribute("aria-hidden"); });
})();

/* ============ report form ============ */
var reportState = { voice: null, geo: "", email: "", number: null };

/* mode toggles */
var modeText = document.getElementById("mode-text");
var modeVoice = document.getElementById("mode-voice");
var reportTa = document.getElementById("f-report");
var voiceField = document.getElementById("voice-field");
function setMode(voice){
  modeText.classList.toggle("on", !voice);
  modeVoice.classList.toggle("on", voice);
  modeText.setAttribute("aria-pressed", !voice ? "true" : "false");
  modeVoice.setAttribute("aria-pressed", voice ? "true" : "false");
  voiceField.hidden = !voice;
  reportTa.disabled = voice;
  if (voice) reportTa.closest(".f-field").style.opacity = ".45";
  else reportTa.closest(".f-field").style.opacity = "1";
}
modeText.addEventListener("click", function(){ setMode(false); });
modeVoice.addEventListener("click", function(){ setMode(true); });

/* geolocation */
var geoBtn = document.getElementById("geo-btn");
var geoLabel = document.getElementById("geo-label");
geoBtn.addEventListener("click", function(){
  if (!navigator.geolocation){ geoLabel.textContent = "Location unavailable on this device"; return; }
  geoLabel.textContent = "Getting location\u2026";
  navigator.geolocation.getCurrentPosition(function(p){
    reportState.geo = p.coords.latitude.toFixed(5) + "," + p.coords.longitude.toFixed(5);
    geoBtn.classList.add("on");
    geoLabel.textContent = "Location attached \u2713 (helps route your report)";
  }, function(){
    geoLabel.textContent = "Location unavailable. You can still file without it";
  }, { timeout: 8000 });
});

/* voice recording */
var voiceStart = document.getElementById("voice-start");
var voiceStop = document.getElementById("voice-stop");
var voiceChip = document.getElementById("voice-chip");
var voiceStartLabel = document.getElementById("voice-start-label");
var recorder = null, recChunks = [], recTimer = null, recSeconds = 0;
voiceStart.addEventListener("click", function(){
  if (!navigator.mediaDevices || !window.MediaRecorder){ voiceStartLabel.textContent = "Voice recording not supported here"; return; }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream){
    recorder = new MediaRecorder(stream);
    recChunks = []; recSeconds = 0;
    recorder.ondataavailable = function(e){ recChunks.push(e.data); };
    recorder.onstop = function(){
      stream.getTracks().forEach(function(t){ t.stop(); });
      var blob = new Blob(recChunks, { type: recorder.mimeType || "audio/webm" });
      reportState.voice = blob;
      voiceChip.hidden = false;
      voiceChip.textContent = "Voice report attached \xB7 " + Math.round(blob.size / 1024) + " KB";
      voiceStartLabel.textContent = "Start over";
      voiceStart.disabled = false;
    };
    recorder.start();
    voiceStart.disabled = true;
    voiceStop.disabled = false;
    recTimer = setInterval(function(){
      recSeconds++;
      voiceStartLabel.textContent = "Recording\u2026 " + recSeconds + "s";
    }, 1000);
  }).catch(function(){
    voiceStartLabel.textContent = "Microphone access denied";
  });
});
voiceStop.addEventListener("click", function(){
  if (recorder && recorder.state !== "inactive"){
    recorder.stop();
    clearInterval(recTimer);
    voiceStop.disabled = true;
  }
});

/* attachments list */
var filesInput = document.getElementById("f-files");
var fileList = document.getElementById("file-list");
filesInput.addEventListener("change", function(){
  fileList.innerHTML = "";
  Array.from(filesInput.files).forEach(function(f){
    var chip = document.createElement("span");
    chip.className = "file-chip";
    chip.textContent = f.name + " \xB7 " + (f.size > 1048576 ? (f.size/1048576).toFixed(1) + " MB" : Math.round(f.size/1024) + " KB");
    fileList.appendChild(chip);
  });
});

/* submit */
var submitBtn = document.getElementById("submit-btn");
var reportForm = document.getElementById("report-form");
var reportError = document.getElementById("report-error");
submitBtn.addEventListener("click", function(){
  reportError.innerHTML = "";
  var fd = new FormData();
  fd.append("name", document.getElementById("f-name").value.trim());
  fd.append("phone", document.getElementById("f-phone").value.trim());
  fd.append("email", document.getElementById("f-email").value.trim());
  fd.append("address", document.getElementById("f-address").value.trim());
  fd.append("report", reportTa.value.trim());
  fd.append("geo", reportState.geo);
  if (reportState.voice) fd.append("voice", reportState.voice, "voice.webm");
  Array.from(filesInput.files).forEach(function(f){ fd.append("files", f, f.name); });

  var name = fd.get("name"), phone = fd.get("phone"), email = fd.get("email");
  if (!name || !phone || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){
    reportError.innerHTML = '<div class="result err" style="background:var(--red-tint);border:1px solid oklch(0.75 0.15 27);color:var(--red-dark);padding:12px 16px;border-radius:10px;font-weight:700;font-size:.9rem">Please fill in your name, phone, and a valid email so we can reach you if we need more information.</div>';
    return;
  }
  if (!fd.get("report") && !reportState.voice){
    reportError.innerHTML = '<div class="result err" style="background:var(--red-tint);border:1px solid oklch(0.75 0.15 27);color:var(--red-dark);padding:12px 16px;border-radius:10px;font-weight:700;font-size:.9rem">Please describe the report in the text field, or record a voice report instead.</div>';
    return;
  }
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting your report\u2026";
  fetch("/api/report", { method: "POST", body: fd })
    .then(function(r){ return r.json(); })
    .then(function(res){
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit My Report";
      if (!res.ok){
        reportError.innerHTML = '<div class="result err" style="background:var(--red-tint);border:1px solid oklch(0.75 0.15 27);color:var(--red-dark);padding:12px 16px;border-radius:10px;font-weight:700;font-size:.9rem">' + (res.error || "Something went wrong. Please try again.") + "</div>";
        return;
      }
      reportState.email = email;
      reportState.number = res.report_number;
      document.getElementById("r-num").textContent = "#" + res.report_number;
      document.getElementById("r-pos").innerHTML = "Your place in line: <b>#" + res.place_in_line + "</b> of the general queue";
      document.getElementById("report-shell").scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(function(){
        reportForm.hidden = true;
        document.getElementById("report-result").hidden = false;
      }, 350);
    })
    .catch(function(){
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit My Report";
      reportError.innerHTML = '<div class="result err" style="background:var(--red-tint);border:1px solid oklch(0.75 0.15 27);color:var(--red-dark);padding:12px 16px;border-radius:10px;font-weight:700;font-size:.9rem">Network error \u2014 please try again.</div>';
    });
});

/* ============ expedite (post-submit) ============ */
var expediteBtn = null;
var expResult = document.getElementById("expedite-result");
function expediteSuccess(){
  if (!reportState.number) return;
  fetch("/api/expedite", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      report_number: reportState.number,
      email: reportState.email,
      method: "card",
      recurring: true
    })
  }).then(function(r){ return r.json(); }).then(function(res){
    if (res.ok){
      document.querySelector(".expedite-offer").innerHTML =
        '<h3 style="color:#fff;margin-bottom:8px">Moved to the Expedited Filing queue</h3>' +
        '<p style="color:oklch(0.72 0.02 262);font-size:.92rem;max-width:58ch">Report <b style="color:#fff">#' + res.report_number + '</b> now holds place <b style="color:oklch(0.72 0.17 27)">#' + res.expedited_position + '</b> in the Expedited Filing queue and will be processed with the next batch. A confirmation email is on its way to you.</p>';
    }
  }).catch(function(){});
}
var buyBtn = document.querySelector("stripe-buy-button");
if (buyBtn){
  buyBtn.addEventListener("stripebuybutton:success", expediteSuccess);
  buyBtn.addEventListener("stripebuybutton:complete", expediteSuccess);
}

/* ============ boot ============ */
setRoute();
bootReveals();
})();
<\/script>
</body>
</html>`;

// legal.html
var legal_default = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{TITLE}}</title>
<meta name="description" content="{{DESC}}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://reportillegalsnearyou.com/{{SLUG}}">
<meta name="theme-color" content="#b3121c">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23b3121c'/%3E%3Ccircle cx='32' cy='40' r='9' fill='none' stroke='%23fff' stroke-width='5'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
:root{--red:#b3121c;--red-deep:#8f0e17;--red-tint:#f6dfe0;--ink:#1b2030;--ink-deep:#12141f;--paper:#f7f7f7;--line:#d4d6da;--text:#232732;--text-dim:#565d6b}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:"Archivo","Helvetica Neue",sans-serif;background:var(--paper);color:var(--text);line-height:1.65;font-size:16px}
a{color:var(--red-deep)}
:focus-visible{outline:3px solid rgba(179,18,28,.45);outline-offset:2px}
.banner{background:var(--red);color:#fff;display:block;text-align:center;padding:11px 20px;font-weight:800;font-size:.92rem;letter-spacing:.02em;text-transform:uppercase;text-decoration:none}
.banner:hover{background:var(--red-deep)}
.topbar{background:var(--ink-deep);padding:16px 0}
.topbar .in{max-width:1000px;margin:0 auto;padding:0 22px;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}
.topbar .brand{color:#fff;font-weight:900;text-decoration:none;line-height:1.15}
.topbar .brand small{color:#aeb6c4}
.topbar .brand small{display:block;font-weight:600;font-size:11px;letter-spacing:.09em;color:#8b93a5;text-transform:uppercase}
.topbar a.back{color:#fff;font-weight:800;font-size:.9rem;text-decoration:none;border:2px solid #3c4356;border-radius:9px;padding:11px 18px;min-height:44px;display:inline-flex;align-items:center}
.topbar a.back:hover{border-color:var(--red);color:#ffb3ba}
main{max-width:860px;margin:0 auto;padding:52px 22px 80px}
h1{font-size:clamp(1.8rem,4.5vw,2.6rem);font-weight:900;letter-spacing:-.02em;color:var(--ink-deep);line-height:1.08;margin-bottom:8px}
.updated{font-size:.82rem;color:var(--text-dim);font-weight:700;margin-bottom:34px;text-transform:uppercase;letter-spacing:.06em}
.card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:clamp(20px,4vw,42px);box-shadow:0 1px 2px rgba(18,20,31,.08),0 8px 28px rgba(18,20,31,.08)}
h2{font-size:1.12rem;font-weight:900;color:var(--ink-deep);margin:30px 0 10px;letter-spacing:-.01em}
h2:first-of-type{margin-top:0}
p,li{font-size:.95rem;color:var(--text);margin-bottom:12px;max-width:60ch}
ul{padding-left:22px;margin-bottom:14px;max-width:58ch}
.foot{background:var(--ink-deep);padding:30px 22px;font-size:.8rem;text-align:center}
.foot p{color:#aeb6c4;margin-bottom:8px;max-width:none}
.foot a{color:#dfe4ec}
.foot a{color:#c6ccd8}
</style>
</head>
<body>
<a class="banner" href="https://reportillegalsnearyou.com/#support">Help Us Get Rid of Illegal Immigrants In Your Area \u2014 Donate Today</a>
<div class="topbar">
  <div class="in">
    <a class="brand" href="https://reportillegalsnearyou.com/">Report Illegals<br>Near You<small>Community Reporting Effort</small></a>
    <a class="back" href="https://reportillegalsnearyou.com/">\u2190 Back to reporting</a>
  </div>
</div>
<main>
  <h1>{{TITLE}}</h1>
  <p class="updated">Last updated: October 2026 \xB7 Applies to reportillegalsnearyou.com</p>
  <div class="card">
{{CONTENT}}
    <h2>Contact</h2>
    <p>Questions about this policy: <a href="mailto:support@reportillegalsnearyou.com">support@reportillegalsnearyou.com</a>.</p>
  </div>
</main>
<div class="foot">
  <p>\xA9 2026 Report Illegals Near You. All rights reserved.</p>
  <p><a href="https://reportillegalsnearyou.com/terms">Terms</a> \xB7 <a href="https://reportillegalsnearyou.com/privacy">Privacy</a> \xB7 <a href="https://reportillegalsnearyou.com/cookies">Cookies</a> \xB7 <a href="https://reportillegalsnearyou.com/refunds">Refunds</a> \xB7 <a href="https://reportillegalsnearyou.com/accessibility">Accessibility</a></p>
  <p>Reports are submitted anonymously, in batches, to ICE via their tip form; records are destroyed after submission. We cannot guarantee that ICE will honor every report submitted to them.</p>
</div>
</body>
</html>`;

// og-cover.b64
var og_cover_default = "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";

// index.js
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var LEGAL = {
  terms: {
    title: "Terms & Conditions",
    desc: "Terms and conditions for filing anonymous immigration reports and supporting the Report Illegals Near You community reporting effort.",
    content: `
    <h2>1. Acceptance</h2>
    <p>By accessing reportillegalsnearyou.com, filing a report, or making a donation, you accept these Terms &amp; Conditions in full. If you do not accept them, do not use the site.</p>
    <h2>2. The service</h2>
    <p>Report Illegals Near You operates a community reporting effort. It receives reports from the public concerning suspected illegal immigration activity, compiles those reports into batches, and submits the batches anonymously to U.S. Immigration and Customs Enforcement (ICE) through the agency's public tip form. After each batch is submitted, all report records associated with that batch are destroyed.</p>
    <h2>3. Your reports</h2>
    <p>You agree that the information you submit is true and accurate to the best of your knowledge, and that you are reporting matters you have personally witnessed or reasonably believe to be true. You must not submit knowingly false information, and you must not use the service to harass any individual. You understand that reports are community filings, not sworn statements, and that submitting a report does not compel any action by ICE or any other government agency.</p>
    <h2>4. Anonymity and contact details</h2>
    <p>Your name, phone, email, and address are optional and do not have to be submitted as part of the report submission. If provided they'll be used by our reviewers to reach out for additional information, if necessary and then erased within 24 hours of your report being submitted to ICE. Contact details are never included in anything submitted to ICE. The batch report content itself is anonymous from the moment it enters the queue.</p>
    <h2>5. Donations and Expedited Filing</h2>
    <p>Filing a report is free and never requires a donation. Donations support the operation of the reporting effort. Supporters may request Expedited Filing, which moves an existing report from the general queue into the Expedited Filing queue so that it is processed with an earlier batch. A donation never changes the content of a report, the review it receives, or anything submitted to ICE. Donations are not payments to ICE or any government agency and are not tax-deductible charitable contributions.</p>
    <h2>6. No guarantee of action</h2>
    <p>ICE receives more tips than it can act on. We cannot guarantee that ICE will honor every report submitted to them, and nothing on this site should be read as a promise that any report will result in enforcement action of any kind.</p>
    <h2>7. Acceptable use and intellectual property</h2>
    <p>You may not attempt to disrupt the site, submit automated or bulk reports, or misrepresent your identity to us. The site's design, text, and marks are the property of the effort and may not be reproduced commercially without our written permission.</p>
    <h2>8. Limitation of liability</h2>
    <p>The service is provided "as is." To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from use of the site, the handling of a report, or any action or inaction by ICE or any third party.</p>
    <h2>9. Changes</h2>
    <p>These terms may be updated from time to time. The current version is always posted at this page with its last-updated date. Continued use of the site after a change constitutes acceptance.</p>`
  },
  privacy: {
    title: "Privacy Policy",
    desc: "What Report Illegals Near You collects, why, how it is stored, and when report records are destroyed.",
    content: `
    <h2>1. What we collect</h2>
    <p>When you file a report we collect: your statement; the content of your report, whether typed or voice-recorded; any documents, photos, or other files you choose to attach; and, if you explicitly opt in, your device's geolocation coordinates. If you make a donation or request Expedited Filing, we collect your email address and your donation preferences.</p>
    <h2>2. Why we collect it</h2>
    <ul>
      <li><strong>Name, phone, and email</strong> \u2014 only so reviewers can reach out for additional information about your report, and to send your report confirmation.</li>
      <li><strong>Address and (optional) geolocation</strong> \u2014 so your report can be associated with your area and routed to the correct regional batch.</li>
      <li><strong>Report content, voice notes, and attachments</strong> \u2014 the report itself.</li>
      <li><strong>Donation details</strong> \u2014 to process your support and send confirmations.</li>
    </ul>
    <h2>3. What never happens</h2>
    <p>Your name, phone, email, and address are never included in anything submitted to ICE. We do not sell your information, rent it, or share it with marketers. There are no tracking pixels or advertising profiles on this site.</p>
    <h2>4. Storage and destruction</h2>
    <p>Report data and media are stored in a dedicated, access-controlled cloud storage bucket used only for the reporting pipeline. After each batch is submitted to ICE through their tip form, <strong>every report record associated with that batch is destroyed</strong> \u2014 content, voice notes, attachments, and all. What remains is the anonymous line in a batch that has already left. Queue bookkeeping (your report number and place in line) is retained only as long as needed to send your confirmations and honor refund requests.</p>
    <h2>5. Emails</h2>
    <p>We email you exactly two kinds of messages: your report confirmation (number and place in line) and, if you request Expedited Filing, your expedited confirmation. Donation confirmations are sent for gifts. You will never receive marketing email from us.</p>
    <h2>6. Your choices</h2>
    <p>You may file a report without sharing your geolocation \u2014 the button is optional. You may request deletion of any pending report that has not yet been batched by emailing support@reportillegalsnearyou.com. Once a batch has been submitted, its records are already destroyed.</p>
    <h2>7. Children</h2>
    <p>The service is not directed to children under 13, and we do not knowingly collect their information.</p>`
  },
  cookies: {
    title: "Cookie Policy",
    desc: "How reportillegalsnearyou.com uses cookies and local browser storage \u2014 which is barely at all.",
    content: `
    <h2>1. The short version</h2>
    <p>This site sets no advertising cookies, no tracking pixels, and no cross-site identifiers. There is no analytics profile of you here.</p>
    <h2>2. What we use</h2>
    <p>The site uses a small amount of browser session storage to remember purely functional interface state while you use the page \u2014 for example, which tab you are on. This storage is first-party, is not shared with anyone, and does not follow you anywhere.</p>
    <h2>3. Third-party requests</h2>
    <p>The page loads its typeface from Google Fonts, which involves a request to Google's font servers. That request is cached by your browser like any other asset. No other third-party service receives anything about your visit.</p>
    <h2>4. Your controls</h2>
    <p>You can clear or block first-party storage at any time through your browser settings; the site will continue to work. If you have questions, contact support@reportillegalsnearyou.com.</p>`
  },
  refunds: {
    title: "Donation & Refund Policy",
    desc: "Recurring donations, cancellation, and the 14-day refund window for the Report Illegals Near You effort.",
    content: `
    <h2>1. Refund window</h2>
    <p>If you have made a donation and want it back, email support@reportillegalsnearyou.com within <strong>14 days</strong> of the gift with the email address you used. We will process the refund without hassle. Donations are voluntary gifts that fund the reporting effort; they are not payments for a service, to ICE, or to any government agency.</p>
    <h2>2. Recurring support</h2>
    <p>Donations are set to recur monthly by default because the batch schedule is weekly and recurring support is what keeps it running. You can switch to a one-time gift at any point on the donation form, and you can cancel recurring support entirely at any time by emailing support@reportillegalsnearyou.com. Cancellation stops all future charges immediately.</p>
    <h2>3. Expedited Filing</h2>
    <p>A donation that moves a report into the Expedited Filing queue changes that report's place in line and processing order only. Once a report has been processed with an expedited batch, the donation associated with it is no longer refundable, because the expedited processing it purchased has been delivered. Until then, the 14-day window in section 1 applies.</p>
    <h2>4. Processing</h2>
    <p>Refunds are returned through the original donation method wherever possible. Please allow a reasonable number of business days for the payment provider to post the refund.</p>`
  },
  accessibility: {
    title: "Accessibility",
    desc: "Our commitment to accessibility on reportillegalsnearyou.com and how to report a problem.",
    content: `
    <h2>1. Our commitment</h2>
    <p>We want every American to be able to file a report, and we build this site to meet WCAG 2.1 AA guidance: sufficient color contrast, full keyboard navigation, visible focus states, screen-reader landmarks, and reduced-motion support for users who prefer no animation.</p>
    <h2>2. What that means in practice</h2>
    <ul>
      <li>Every form field has a visible label and helper text.</li>
      <li>All interactive controls are operable by keyboard, with a visible focus ring.</li>
      <li>Animations can be disabled system-wide and the site will still work fully.</li>
      <li>Touch targets are sized for phones, and the layout does not break at small screen widths.</li>
    </ul>
    <h2>3. If something doesn't work</h2>
    <p>If any part of this site is difficult or impossible for you to use, that matters to us. Email support@reportillegalsnearyou.com with the page, what you were trying to do, and what happened, and we will fix it and reply.</p>`
  }
};
var SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://reportillegalsnearyou.com/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
<url><loc>https://reportillegalsnearyou.com/#about</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
<url><loc>https://reportillegalsnearyou.com/#what-we-do</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://reportillegalsnearyou.com/#support</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
<url><loc>https://reportillegalsnearyou.com/#file</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
<url><loc>https://reportillegalsnearyou.com/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
<url><loc>https://reportillegalsnearyou.com/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
<url><loc>https://reportillegalsnearyou.com/cookies</loc><changefreq>yearly</changefreq><priority>0.2</priority></url>
<url><loc>https://reportillegalsnearyou.com/refunds</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
<url><loc>https://reportillegalsnearyou.com/accessibility</loc><changefreq>yearly</changefreq><priority>0.2</priority></url>
</urlset>`;
var ROBOTS = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://reportillegalsnearyou.com/sitemap.xml`;
var FROM_EMAIL = "support@reportillegalsnearyou.com";
var SITE = "https://reportillegalsnearyou.com";
var SECURITY_HEADERS = {
  "content-type": "text/html; charset=utf-8",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-frame-options": "DENY"
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
__name(json, "json");
function buildMime(from, to, subject, text, html) {
  const boundary = "----=_prt_" + crypto.randomUUID().replace(/-/g, "");
  const headers = [
    "From: " + from,
    "To: " + to,
    "Subject: " + subject,
    'Content-Type: multipart/alternative; boundary="' + boundary + '"',
    "MIME-Version: 1.0"
  ];
  const body = [
    "This is a multi-part message in MIME format.",
    "--" + boundary,
    'Content-Type: text/plain; charset="utf-8"',
    "Content-Transfer-Encoding: base64",
    "",
    b64(text),
    "--" + boundary,
    'Content-Type: text/html; charset="utf-8"',
    "Content-Transfer-Encoding: base64",
    "",
    b64(html),
    "--" + boundary + "--",
    ""
  ];
  return headers.join("\r\n") + "\r\n\r\n" + body.join("\r\n");
}
__name(buildMime, "buildMime");
function b64(s) {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/(.{76})/g, "$1\r\n");
}
__name(b64, "b64");
async function sendMail(env, to, subject, text, html) {
  const { EmailMessage } = await import("cloudflare:email");
  const raw = buildMime(FROM_EMAIL, to, subject, text, html);
  const msg = new EmailMessage(FROM_EMAIL, to, raw);
  await env.SEND_EMAIL.send(msg);
}
__name(sendMail, "sendMail");
async function archiveMail(env, to, subject, text, html) {
  const rec = {
    to,
    subject,
    text,
    html,
    from: FROM_EMAIL,
    created_at: Date.now()
  };
  await env.BUCKET.put(
    "outbound/" + Date.now() + "-" + crypto.randomUUID().slice(0, 8) + ".json",
    JSON.stringify(rec, null, 1),
    { httpMetadata: { contentType: "application/json" } }
  );
}
__name(archiveMail, "archiveMail");
async function mail(env, to, subject, text, html) {
  let sent = true;
  try {
    await sendMail(env, to, subject, text, html);
  } catch (e) {
    sent = false;
  }
  try {
    await archiveMail(env, to, subject, text, html);
  } catch (e) {
  }
  return sent;
}
__name(mail, "mail");
async function nextCounter(env, name) {
  const row = await env.DB.prepare(
    "UPDATE counters SET value = value + 1 WHERE name = ? RETURNING value"
  ).bind(name).first();
  return row.value - 1;
}
__name(nextCounter, "nextCounter");
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function reportLine(n) {
  return n;
}
__name(reportLine, "reportLine");
async function handleReport(env, req) {
  const form = await req.formData();
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const address = String(form.get("address") || "").trim();
  const text = String(form.get("report") || "").trim();
  const geo = String(form.get("geo") || "").trim();
  const voice = form.get("voice");
  const files = form.getAll("files").filter((f) => f && f.size > 0);
  if (!name || !phone || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Please provide your name, a contact phone, and a valid email." }, 400);
  }
  const hasVoice = voice instanceof File && voice.size > 0;
  if (!text && !hasVoice) {
    return json({ ok: false, error: "Please describe the report in the text field, or record a voice report." }, 400);
  }
  const reportNumber = await nextCounter(env, "general_next");
  if (reportNumber < 486) {
    return json({ ok: false, error: "Queue error \u2014 numbering below 486 is not permitted." }, 500);
  }
  const placeInLine = reportLine(reportNumber);
  const now = Date.now();
  const record = {
    report_number: reportNumber,
    filed_at: new Date(now).toISOString(),
    filer: { name, phone, email, address },
    report_text: text || null,
    geolocation: geo || null,
    voice_attached: hasVoice,
    attachments: files.map((f) => ({ name: f.name, type: f.type, size: f.size }))
  };
  const prefix = "reports/" + reportNumber + "/";
  await env.BUCKET.put(
    prefix + "data.json",
    JSON.stringify(record, null, 1),
    { httpMetadata: { contentType: "application/json" } }
  );
  if (hasVoice) {
    await env.BUCKET.put(
      prefix + "voice.webm",
      voice.stream(),
      { httpMetadata: { contentType: voice.type || "audio/webm" } }
    );
  }
  for (const f of files) {
    const safe = f.name.replace(/[^\w.\- ()]/g, "_");
    await env.BUCKET.put(
      prefix + "files/" + safe,
      f.stream(),
      { httpMetadata: { contentType: f.type || "application/octet-stream" } }
    );
  }
  await env.DB.prepare(
    "INSERT INTO reports (report_number, email, name, created_at) VALUES (?, ?, ?, ?)"
  ).bind(reportNumber, email, name, now).run();
  const subj = "Your report #" + reportNumber + " was received";
  const bodyText = "Your report has been received and assigned number #" + reportNumber + ".\n\nCurrent place in line: #" + placeInLine + " of the general queue.\n\nReports are compiled and submitted anonymously, in batches, to ICE through their TIP form. After each batch is submitted, all report records are destroyed.\n\nIf you want your report moved to the front of the line for faster processing, you can request Expedited Filing at " + SITE + "/#support \u2014 your report keeps the same number and receives a new place in line in the Expedited Filing queue.\n\nQuestions: " + FROM_EMAIL + "\n";
  const bodyHtml = '<div style="font:15px/1.6 sans-serif;max-width:560px;margin:0 auto;color:#16181d"><h2 style="margin:0 0 12px">Your report was received</h2><p>Your report has been assigned number <strong>#' + reportNumber + "</strong>.</p><p>Current place in line: <strong>#" + placeInLine + '</strong> of the general queue.</p><p>Reports are compiled and submitted anonymously, in batches, to ICE through their TIP form. After each batch is submitted, all report records are destroyed.</p><p>To move this report to the front of the line for faster processing, request <a href="' + SITE + '/#support">Expedited Filing</a> \u2014 the report keeps the same number and receives a new place in line in the Expedited Filing queue.</p><p style="color:#5b6472;font-size:13px">Questions: ' + FROM_EMAIL + "</p></div>";
  const mailed = await mail(env, email, subj, bodyText, bodyHtml);
  return json({ ok: true, report_number: reportNumber, place_in_line: placeInLine, mailed });
}
__name(handleReport, "handleReport");
async function handleExpedite(env, req) {
  const body = await req.json();
  const reportNumber = parseInt(body.report_number, 10);
  const email = String(body.email || "").trim().toLowerCase();
  const method = String(body.method || "");
  const amount = String(body.amount || "");
  const recurring = body.recurring === false ? 0 : 1;
  const METHODS = ["cashapp", "venmo", "zelle", "applepay", "card", "bank"];
  if (!Number.isInteger(reportNumber) || !EMAIL_RE.test(email) || !METHODS.includes(method)) {
    return json({ ok: false, error: "Report number, the email it was filed under, and a donation method are required." }, 400);
  }
  const report = await env.DB.prepare(
    "SELECT report_number, email, expedited, expedited_position FROM reports WHERE report_number = ?"
  ).bind(reportNumber).first();
  if (!report || report.email !== email) {
    return json({ ok: false, error: "No report found under that number and email." }, 404);
  }
  if (report.expedited) {
    return json({
      ok: true,
      report_number: reportNumber,
      expedited_position: report.expedited_position,
      already: true
    });
  }
  const position = await nextCounter(env, "expedited_next");
  if (position < 7) {
    return json({ ok: false, error: "Queue error \u2014 expedited positions below 7 are not permitted." }, 500);
  }
  await env.DB.prepare(
    "UPDATE reports SET expedited = 1, expedited_position = ?, status = 'expedited' WHERE report_number = ?"
  ).bind(position, reportNumber).run();
  await env.DB.prepare(
    "INSERT INTO donations (kind, report_number, method, amount, recurring, email, created_at) VALUES ('expedite', ?, ?, ?, ?, ?, ?)"
  ).bind(reportNumber, method, amount, recurring, email, Date.now()).run();
  const subj = "Report #" + reportNumber + " moved to the Expedited Filing queue";
  const bodyText = "Your report #" + reportNumber + " has been moved to the Expedited Filing queue.\n\nNew place in line: #" + position + " of the Expedited Filing queue.\n\nThe report keeps its original number (#" + reportNumber + "). Expedited reports are processed with the next batch submitted to ICE through their TIP form, ahead of the general queue. After each batch is submitted, all report records are destroyed. We cannot guarantee that ICE will honor every report submitted to them.\n\nDonation method on file: " + method + (recurring ? " (recurring)" : " (one-time)") + ".\nQuestions: " + FROM_EMAIL + "\n";
  const bodyHtml = '<div style="font:15px/1.6 sans-serif;max-width:560px;margin:0 auto;color:#16181d"><h2 style="margin:0 0 12px">Moved to Expedited Filing</h2><p>Your report <strong>#' + reportNumber + "</strong> has been moved to the Expedited Filing queue.</p><p>New place in line: <strong>#" + position + '</strong> of the Expedited Filing queue.</p><p>The report keeps its original number. Expedited reports are processed with the next batch submitted to ICE through their TIP form, ahead of the general queue. After each batch is submitted, all report records are destroyed. We cannot guarantee that ICE will honor every report submitted to them.</p><p style="color:#5b6472;font-size:13px">Questions: ' + FROM_EMAIL + "</p></div>";
  const mailed = await mail(env, email, subj, bodyText, bodyHtml);
  return json({ ok: true, report_number: reportNumber, expedited_position: position, mailed });
}
__name(handleExpedite, "handleExpedite");
async function handleDonate(env, req) {
  const body = await req.json();
  const email = String(body.email || "").trim().toLowerCase();
  const method = String(body.method || "");
  const amount = String(body.amount || "");
  const recurring = body.recurring === false ? 0 : 1;
  const METHODS = ["cashapp", "venmo", "zelle", "applepay", "card", "bank"];
  if (!EMAIL_RE.test(email) || !METHODS.includes(method)) {
    return json({ ok: false, error: "A valid email and a donation method are required." }, 400);
  }
  await env.DB.prepare(
    "INSERT INTO donations (kind, method, amount, recurring, email, created_at) VALUES ('support', ?, ?, ?, ?, ?)"
  ).bind(method, amount, recurring, email, Date.now()).run();
  const subj = "Thank you for supporting the reporting effort";
  const bodyText = "Thank you for supporting the effort to report illegal immigration to ICE.\n\nDonation method: " + method + (recurring ? " (recurring \u2014 you can switch to one-time any time)" : " (one-time)") + ".\nA member of our team will follow up with payment details for your chosen method.\n\nIf you meant to move a report to the front of the line, open " + SITE + "/#support and use the Expedited Filing request with your report number.\n\nQuestions: " + FROM_EMAIL + "\n";
  const bodyHtml = '<div style="font:15px/1.6 sans-serif;max-width:560px;margin:0 auto;color:#16181d"><h2 style="margin:0 0 12px">Thank you for your support</h2><p>Thank you for supporting the effort to report illegal immigration to ICE.</p><p>Donation method on file: <strong>' + method + "</strong>" + (recurring ? " (recurring \u2014 you can switch to one-time any time)" : " (one-time)") + '.</p><p>A member of our team will follow up with payment details for your chosen method.</p><p style="color:#5b6472;font-size:13px">Questions: ' + FROM_EMAIL + "</p></div>";
  const mailed = await mail(env, email, subj, bodyText, bodyHtml);
  return json({ ok: true, mailed });
}
__name(handleDonate, "handleDonate");
async function ensureCounters(env) {
  await env.DB.batch([
    env.DB.prepare(
      "INSERT OR IGNORE INTO counters (name, value) VALUES ('general_next', 486)"
    ),
    env.DB.prepare(
      "INSERT OR IGNORE INTO counters (name, value) VALUES ('expedited_next', 7)"
    )
  ]);
}
__name(ensureCounters, "ensureCounters");
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/report" && request.method === "POST") {
      await ensureCounters(env);
      return handleReport(env, request);
    }
    if (url.pathname === "/api/expedite" && request.method === "POST") {
      await ensureCounters(env);
      return handleExpedite(env, request);
    }
    if (url.pathname === "/api/donate" && request.method === "POST") {
      return handleDonate(env, request);
    }
    if (url.pathname === "/api/health") {
      return json({ ok: true });
    }
    if (url.pathname === "/sitemap.xml") {
      return new Response(SITEMAP, {
        headers: { "content-type": "application/xml; charset=utf-8" }
      });
    }
    if (url.pathname === "/robots.txt") {
      return new Response(ROBOTS, {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }
    if (url.pathname === "/og-cover.png") {
      const bin = atob(og_cover_default);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return new Response(bytes, {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=86400"
        }
      });
    }
    const slug = url.pathname.replace(/^\/+|\/+$/g, "");
    if (LEGAL[slug]) {
      const doc = LEGAL[slug];
      const html = legal_default.replaceAll("{{TITLE}}", doc.title).replaceAll("{{DESC}}", doc.desc).replaceAll("{{SLUG}}", slug).replaceAll("{{CONTENT}}", doc.content);
      return new Response(html, { headers: SECURITY_HEADERS });
    }
    return new Response(page_default, { headers: SECURITY_HEADERS });
  }
};
export {
  index_default as default
};

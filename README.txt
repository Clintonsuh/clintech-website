# ClinTech website starter

A responsive static website built with HTML, CSS and JavaScript. It is ready to preview locally and deploy to Cloudflare Pages.

## Preview on Windows
1. Extract this ZIP file.
2. Open the `ClinTech_Website_Starter` folder.
3. Double-click `index.html` to preview in Chrome.

## Before publishing
Open `script.js` and add at least one real contact method:
- `email`: your official email address
- `whatsapp`: your WhatsApp number in international format, without `+`, spaces or dashes (Cameroon numbers begin with 237).

Replace or confirm the service descriptions, prices (if you decide to publish them), location and portfolio examples. Do not claim that ClinTech is an incorporated SARL unless registration is complete. The current text avoids making that claim.

## Deploy to Cloudflare Pages using GitHub
1. Create a GitHub repository named `clintech-website`.
2. Upload the contents of this folder (make sure `index.html` is at the repository root).
3. In Cloudflare Dashboard, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Select the `clintech-website` repository.
5. For plain HTML, set the build command to `exit 0` (or leave it blank if accepted) and the build output directory to `/` or the repository root as supported by the setup screen.
6. Deploy. Cloudflare will provide a `*.pages.dev` address.

Official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Files
- `index.html` — page content and structure
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and contact form behavior

/* CLINTECH PREMIUM BLACK & PURPLE THEME */

:root {
  --navy: #101018;
  --navy2: #191927;
  --green: #8B5CF6;
  --ink: #F8FAFC;
  --muted: #A1A1B5;
  --paper: #11111B;
  --line: #303044;
}

body {
  background: #0D0D16;
  color: #F8FAFC;
}

.site-header,
.hero,
.work-section {
  background: #101018;
}

.hero-glow {
  background: radial-gradient(circle, #49248b 0, rgba(16,16,24,0) 70%);
}

.eyebrow,
.eyebrow.dark,
.section h2 em,
.about-copy h2 em {
  color: #A78BFA;
}

.pulse,
.check,
.button-primary,
.service-icon,
.service-card > a,
.work-arrow,
.values b {
  color: #C4B5FD;
}

.button-primary {
  background: #8B5CF6;
  color: white;
}

.button-primary:hover {
  background: #A78BFA;
}

.button-light {
  background: #F8FAFC;
  color: #171326;
}

.card-main {
  background: linear-gradient(145deg, #27203D, #151322);
  border-color: #59418A;
}

.visual-heading span,
.mini-mark span,
.arrow-round {
  color: #A78BFA;
}

.mini-mark {
  background: #7041C8;
}

.floating-tag {
  background: #211B31;
  color: #F8FAFC;
}

.trust-strip,
.contact-section {
  background: #151522;
  border-color: #303044;
}

.trust-inner b {
  color: #E2D9F7;
}

.section {
  background: #0D0D16;
}

.services-grid {
  border-color: #303044;
}

.service-card {
  background: #141421;
  border-color: #303044;
}

.service-card.featured {
  background: #211A32;
}

.service-card p,
.section-intro,
.about-copy p,
.contact-section > div > div > p {
  color: #B0AEC2;
}

.service-card h3,
.section h2,
.about-copy h2 {
  color: #F8FAFC;
}

.service-note {
  background: #211A32;
}

.about-mark {
  background: #1A1728;
}

.about-mark:before,
.about-mark:after {
  border-color: #59418A;
}

.big-ct {
  color: #F8FAFC;
}

.about-caption,
.values span {
  color: #B0AEC2;
}

.contact-panel {
  background: #201C2D;
  color: #F8FAFC;
  border: 1px solid #39304D;
}

.contact-panel label {
  color: #E5DDF7;
}

.contact-panel input,
.contact-panel select,
.contact-panel textarea {
  background: #11111B;
  color: #F8FAFC;
  border-color: #45405A;
}

.contact-panel input:focus,
.contact-panel select:focus,
.contact-panel textarea:focus {
  border-color: #A78BFA;
}

.panel-top {
  color: #C4B5FD;
}

.form-hint {
  color: #B0AEC2;
}

.footer {
  background: #080810;
}

.nav-links {
  color: #E5E1EF;
}

.nav-links a:hover {
  color: #A78BFA;
}

.nav-cta {
  border-color: #59418A;
}

.work-item {
  border-color: #39304D;
}

.work-item small,
.work-disclaimer {
  color: #B0AEC2;
}

.footer-bottom {
  border-color: #303044;
}


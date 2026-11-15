# ClinTech website

Static site: `index.html`, `styles.css`, `script.js`. No build step, no dependencies (Manrope loads from Google Fonts with a system-font fallback).

## Run locally
Open `index.html` in a modern browser.

## Before going live
- Replace `hello@clintech.example`, `+237 600 000 000` and the WhatsApp number (`wa.me/237600000000`) in `index.html`; update `EMAIL` in `script.js`.
- The contact form opens the visitor's email app (mailto). For server-side delivery, connect a form service such as Formspree or Cloudflare Pages Functions.
- Portfolio cards are illustrative; replace with real case studies when available.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository and push these files to the root.
2. In Cloudflare: Workers & Pages > Create > Pages > Connect to Git, select the repo.
3. Framework preset: None. Build command: leave empty. Output directory: `/`.
4. Deploy, then add your custom domain under Custom domains.

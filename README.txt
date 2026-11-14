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

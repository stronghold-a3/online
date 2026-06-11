# Stronghold A3 Security Agency — PWA

**Eastern Visayas' Premier "Zero-Liability" Security Partner**

## 🚀 Deployment (GitHub Pages)

1. Push this repository to GitHub
2. Go to **Settings → Pages → Source**: Select `GitHub Actions`
3. The included workflow (`.github/workflows/deploy.yml`) auto-deploys on push to `main`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

## 🔐 Operations Portal Password

Default password: `stronghold2026`

> ⚠️ **Change before production deployment** — update `APP.password` in `js/app.js`

## 📁 File Structure

```
stronghold-a3/
├── index.html              # PWA entry point + SEO meta
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (offline support)
├── css/
│   └── main.css            # Full design system
├── js/
│   └── app.js              # SPA router, all pages, BSC data
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions auto-deploy
```

## 📄 Pages

### Public (No Authentication)
- **Home** — Hero, Zero-Liability Moat, Core Competencies, Capability Statement, Phase Preview
- **Services** — Full service catalog, 3-Bridge Tech Stack, Cloud SMS CTA
- **About Us** — Vision/Mission/Values images, Guiding Principles, Capability Statement
- **Contact** — Form with service inquiry, contact info, service area

### Internal (Password Protected: `stronghold2026`)
- **BSC Dashboard** — Interactive Balanced Scorecard with all 4 perspectives, collapsible rows, KPI gauges, tooltips, Strategy Map image
- **Strategy Map** — Full 4-Phase Stronghold Sequence with phase cards + strategy map image
- **Cloud SMS** — Embedded iframe to `https://resilient-secure-mobile.deploypad.app/`

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#0A1628` Deep Navy |
| Accent | `#3B82F6` Bright Blue |
| Text | `#FFFFFF` White |
| Body | `#CBD5E1` Gray-300 |
| Display Font | Oswald (Google Fonts) |
| Body Font | Roboto Condensed (Google Fonts) |

## ✅ SEO Features

- Structured data (JSON-LD LocalBusiness schema)
- Open Graph meta tags
- Twitter Card meta tags
- Semantic HTML5 headings
- Alt text on all images
- `rel="manifest"` for PWA
- `theme-color` meta tag

## 🛡️ PWA Features

- Service Worker with cache-first strategy
- Offline fallback to `index.html`
- Installable on mobile and desktop
- App icons linked from Supabase storage

## 📊 BSC Data Source

Balanced Scorecard data is embedded in `js/app.js` from the Google Sheets:
`https://docs.google.com/spreadsheets/d/1YHN02Kwzy0FFMVV7ctl0NK_q-jWlUs7wqFHQvDyszvs`

All 19 objectives across 4 perspectives (Financial, Customer, Internal Processes, Learning & Growth) are included with phase, timeline, owner, KPI, baseline, and target.

## 🔗 Files

| File  | URL |
|-------|-----|
| CLIENT FOLLOW-UP-SOP | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/SOP-Initial%20Lead%20Follow-Up%20%26%20Qualification%20Protocol.pdf) |
| Digital Bayanihan Playbook | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Digital%20Bayanihan.png) |
| CRISIS-PROOF OPERATIONAL WORKFLOW | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/CRISIS-PROOF%20OPERATIONAL%20WORKFLOW%20-%20Stronghold%20A3.pdf
) 72-Hour CLIENT Onboarding SOP | ((https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/STANDARD%20OPERATING%20PROCEDURES-Client%20Onboarding%20%26%20Deployment%20Protocol-%20Stronghold%20A3.pdf)) |
| CLOUD SMS VENDOR CHECKLIST |(https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/CLOUD%20SMS%20VENDOR%20EVALUATION%20CHECKLIST.pdf))|

## 🔗 External Assets

| Asset | URL |
|-------|-----|
| Logo | Supabase Storage (Stronghold Logo.png) |
|Context-Macro-threats| (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Macro-Threats.png) |
| Zero-Liability Moat | Supabase Storage (Zero-Liablity Moat.png) |
| Vision-Mission-Values | Supabase Storage (VMV.png) |
| Guiding Principles | Supabase Storage (Guiding Principles.png) |
| Strategy Map | Supabase Storage (The Stronghiold Sequence-2.png) |
| Cloud SMS | https://resilient-secure-mobile.deploypad.app/ |
| Context- Key Internal Constraints | {https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Key%20Constraints.png)|
| The Strategic Sequence | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/The%20Stronghiold%20Sequence-2.png) \
| Vision-Mission | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/VMV.png) |
| Guiding Principles | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Guiding%20Principles.png) |
| Offline-first Crisis BCP | ((https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Offline-first%20Crisis%20BCP.png) |
| RACI Framework image: | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/RACI%20Funnel.png) |
| Digital Bayanihan image: | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Digital%20Bayanihan.png) |
| Zsro Liability Moat | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Zero-Liablity%20Moat.png) |
| Zsro Liability  Market Capture | (https://fhwhqoiucfxmfsclianh.databasepad.com/storage/v1/object/public/sop-files/public/Launching%20Zero%20Liability%20Market%20capture.png) |
















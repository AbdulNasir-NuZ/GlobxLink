# GlobxLink

Responsive Next.js implementation of the supplied GlobxLink website. The
service-led site focuses on the Africa–Türkiye corridor, two real service
offers, and practical cross-border trade insights.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` for a production build and
`npm start` to serve it.

## Routes and assets

- `/` — GlobxLink landing page.
- `/services/` — overview of the Trade Readiness & Coordination Assessment
  and Provider Request.
- `/services/trade-readiness-assessment/` — assessment detail.
- `/services/provider-request/` — provider request detail.
- `/insights/` — article hub with three practical guides.
- `/privacy/` — notice for the browser-only inquiry form.
- `/trade-coordination/` — embedded proposal studio and local inquiry-draft
  fallback.
- `public/images/` — artwork organized in `trade-question-cards`, `process-stages`,
  `industries`, `corridors`, `Team`, and `originals` subfolders.
- `public/logos/` — locally served site logos.

The contact form downloads a text draft in the browser and does not submit
inquiries to a backend. Add a verified business email or connect a backend
before enabling online submissions. The supplied proposal studio is embedded
in the Next.js route. All authored page and route files are TypeScript/TSX.

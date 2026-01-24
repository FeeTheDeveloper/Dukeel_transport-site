# Dukeel Transport Marketing Site

Production-grade marketing site for dukeeltransport.com built with Next.js App Router, TypeScript, and Tailwind CSS.

## ✅ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS 4**
- **Node.js 20+**
- **Vercel-safe** deployment (no custom server)

## 📁 Complete File Tree

```
.
├── .gitignore
├── .nvmrc
├── README.md
├── app
│   ├── about
│   │   └── page.tsx
│   ├── contact
│   │   ├── ContactForm.tsx
│   │   ├── actions.ts
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── services
│       └── page.tsx
├── components
│   ├── .gitkeep
│   ├── sections
│   │   ├── CTASection.tsx
│   │   ├── CoverageBand.tsx
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   └── index.ts
│   └── ui
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── SectionHeading.tsx
│       ├── SignatureStamp.tsx
│       └── index.ts
├── eslint.config.mjs
├── lib
│   └── .gitkeep
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   └── assets
│       ├── coverage-map.svg
│       ├── hero-fleet.svg
│       ├── logo.png
│       ├── logo.svg
│       └── og-image.svg
└── tsconfig.json
```

## 🛠️ Local Run Steps

```bash
nvm use
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🚀 Vercel Deploy Steps

1. Push this repo to GitHub.
2. In Vercel, click **New Project** → import the repo.
3. Framework preset: **Next.js** (defaults are correct).
4. Build Command: `npm run build`
5. Output: `.next`
6. Deploy.

## 🖼️ Logo & Asset Replacement

- **Primary logo:** `public/assets/logo.png` (keep aspect ratio; transparent PNG recommended).
- **Alternate SVG logo:** `public/assets/logo.svg`
- **Hero illustration placeholder:** `public/assets/hero-fleet.svg`
- **Coverage map placeholder:** `public/assets/coverage-map.svg`
- **Open Graph image placeholder:** `public/assets/og-image.svg`

Swap files with the same filenames to update visuals without code changes.

## 🎨 Brand Color Adjustments

Brand tokens live in `app/globals.css` under `@theme`. Update color values there to change the palette safely.

## ✅ Deploy Checklist (Vercel-Ready)

- [x] `npm ci` completes successfully
- [x] `npm run build` succeeds
- [x] No TypeScript errors during build
- [x] `npm run lint` has no blocking issues

## 📚 Key Files

- `app/layout.tsx` — global metadata and layout shell
- `app/page.tsx` — marketing home page
- `app/services/page.tsx` — services page
- `app/about/page.tsx` — about page
- `app/contact/page.tsx` — contact page with server action

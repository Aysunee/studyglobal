# Study Global — Next.js Migration Design Spec

## Overview

Migrate the existing static HTML education consultancy site (25+ pages) to a Next.js App Router project with Tailwind CSS. The site serves Turkish students seeking international university education.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Form | Controlled form (React Hook Form later) |
| Form backend | None (stub — Supabase later) |
| Hosting | Vercel |
| Analytics | GA4 + Meta Pixel |
| SEO | Next.js metadata, sitemap, schema markup |
| CMS | None (data files — Strapi/Sanity/Supabase CMS later) |

## Project Structure

```
studyglobal-next/
├── app/
│   ├── layout.tsx                 # Root layout (Header, Footer, ChatWidget, Analytics)
│   ├── page.tsx                   # Ana sayfa
│   ├── universite/page.tsx
│   ├── akademik-programlar/page.tsx
│   ├── sinavlar/page.tsx
│   ├── iletisim/page.tsx
│   ├── ulkeler/
│   │   └── [slug]/page.tsx        # Dynamic: 14 country pages
│   ├── hizmetler/
│   │   └── [slug]/page.tsx        # Dynamic: 6 service pages
│   └── yurt-disi-egitim/page.tsx  # Listing page for countries + services
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ChatWidget.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHead.tsx
│   │   └── FilterChip.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── HeroSlider.tsx         # Client component
│       ├── TrustStrip.tsx
│       ├── BenefitGrid.tsx
│       ├── SpotlightGrid.tsx
│       ├── StepList.tsx
│       ├── DarkSection.tsx
│       ├── CTASection.tsx
│       └── CountryCardGrid.tsx    # Client component
├── data/
│   ├── countries.ts               # 14 country data objects
│   └── services.ts                # 6 service data objects
├── lib/
│   └── utils.ts
├── public/
│   ├── assets/                    # Images from existing site
│   └── logo.png
├── tailwind.config.ts
└── next.config.ts
```

## URL Structure

| Page | URL |
|------|-----|
| Ana Sayfa | `/` |
| Üniversite | `/universite` |
| Akademik Programlar | `/akademik-programlar` |
| Sınavlar | `/sinavlar` |
| Yurt Dışı Eğitim | `/yurt-disi-egitim` |
| İletişim | `/iletisim` |
| Ülke detay | `/ulkeler/[slug]` (ingiltere, almanya, finlandiya...) |
| Hizmet detay | `/hizmetler/[slug]` (ucas-basvuru, clearing, belgeler...) |

## Data Models

### Country

```typescript
export interface Country {
  slug: string;
  name: string;
  flag: string;
  eyebrow: string;
  heroText: string;
  region: "europe" | "north-america" | "asia";
  premium: boolean;
  metrics: { label: string; value: string }[];
  benefits: { title: string; text: string }[];
  universities: { name: string; text: string }[];
  costs: { title: string; text: string }[];
  heroPoints: string[];
  ctaTitle: string;
  ctaText: string;
  image: string;
}
```

### Service

```typescript
export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  heroText: string;
  heroPoints: string[];
  metrics: { label: string; value: string }[];
  sections: Section[];
  ctaTitle: string;
  ctaText: string;
}

type Section =
  | { type: "benefits"; title: string; eyebrow: string; items: { title: string; text: string }[] }
  | { type: "spotlights"; title: string; eyebrow: string; items: { title: string; text: string }[] }
  | { type: "steps"; title: string; eyebrow: string; items: { title: string; text: string }[] }
  | { type: "dark-benefits"; title: string; eyebrow: string; items: { title: string; text: string }[] }
```

## Component Architecture

### Server Components (default)
- All page files, Hero, TrustStrip, BenefitGrid, SpotlightGrid, StepList, DarkSection, CTASection, SectionHead, Button, Footer

### Client Components ("use client")
- HeroSlider — background image carousel with auto-advance
- CountryCardGrid — filter chips + animated card grid
- ChatWidget — expandable chat panel with quick replies (mockup now, API-ready later)
- Header — mobile hamburger menu toggle

### Design Token Migration

Existing CSS variables and colors migrate to `tailwind.config.ts`:

```typescript
// tailwind.config.ts theme.extend
colors: {
  navy: '#061735',
  'navy-light': '#0a2a5e',
  accent: '#2563eb',    // derived from existing site
}
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
}
```

## SEO Strategy

- `generateMetadata()` on every page — title, description, og:title, og:description, og:image
- `app/sitemap.ts` — auto-generates sitemap.xml from country + service slugs
- `app/robots.ts` — standard robots.txt
- Schema markup: `Organization` (home), `EducationalOrganization`, `BreadcrumbList` (subpages)
- `lang="tr"` on html element
- Canonical URLs on all pages

## Analytics

- `components/Analytics.tsx` — GA4 + Meta Pixel scripts
- Loaded in root layout via `next/script` with `strategy="afterInteractive"`
- IDs from environment variables: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`

## Performance

- Images via `next/image` — auto WebP, lazy loading, responsive sizes
- Fonts via `next/font/google` — zero layout shift
- Hero slider images — `priority` prop for LCP
- Minimal client JS — most components are server-rendered
- Static generation via `generateStaticParams()` for all dynamic routes

## Contact Form (Stub)

- Controlled form with fields: Ad Soyad, E-posta, Telefon, Hedef Ulke (dropdown), Egitim Seviyesi (dropdown), Mesaj (textarea)
- Client-side validation (required fields, email format)
- Submit handler: `console.log(data)` + success toast
- Ready for Supabase integration — only submit handler changes

## Chat Widget (Mockup)

- Expandable panel with quick reply buttons
- Hardcoded responses for quick replies
- Component structured for future API integration:
  - Message state array
  - Send function abstracted — swap with API call later
  - Typing indicator placeholder

## Assets

- All existing images from `assets/` copied to `public/assets/`
- `logo.png` → `public/logo.png`
- Country flag images → `public/assets/countries/`

## Migration Scope

### Included
- All 25+ pages migrated to Next.js
- Full Tailwind CSS conversion (no legacy CSS)
- Dynamic routes for countries and services
- SEO metadata, sitemap, robots
- Analytics integration stubs
- Contact form stub
- Chat widget mockup
- Hero slider with existing images
- Country filter functionality
- Responsive design (mobile-first)

### Excluded (future work)
- Real chatbot API integration
- Supabase form backend
- CMS integration
- Blog section
- Authentication
- i18n / multi-language

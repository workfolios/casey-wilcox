# Casey Wilcox Digital Business Card Website

Controlled-preview digital business card and project-based consulting website for Casey Wilcox.

## Overview
- **Project Name**: Casey Wilcox Digital Business Card Website
- **Status**: Controlled Preview (Shared for feedback only; not publicly launched)
- **Framework & Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, `@formspree/react`, Lucide React
- **Base Path**: `/casey-wilcox/` (Configured for GitHub Pages deployment)
- **Indexing Status**: `noindex, nofollow, noarchive, nosnippet` (Blocked from web crawlers)

## Local Development & Setup

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Installation
```bash
npm ci
```

### Environment Configuration
Copy `.env.example` to `.env` or `.env.local`:
```bash
cp .env.example .env.local
```

Required variable:
- `VITE_FORMSPREE_FORM_ID`: Formspree form ID owned or controlled by `casewilcox@gmail.com`.
  *Note: When this variable is absent or unset, the contact form will operate in safe inactive mode and present a clear configuration notice upon submit attempt.*

### Local Server
```bash
npm run dev
```

### Build & Preview
```bash
npm run build
npm run preview
```

## Deployment Readiness & Activation Notes
- **Deployment Target**: `workfolios/casey-wilcox`
- **Preview URL**: `https://workfolios.github.io/casey-wilcox/`
- **Deployment Status**: Automated deployment via GitHub Actions is configured in `.github/workflows/deploy-pages.yml`.
- **Form Activation Requirement**: Final public site launch and live contact channel delivery remain blocked until a verified Formspree form ID is supplied and delivery to `casewilcox@gmail.com` is verified.
- **Public Release**: Subject to explicit approval and confirmation by Casey Wilcox.

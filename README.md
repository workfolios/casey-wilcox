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
- Node.js 20+
- npm

### Installation
```bash
npm install --no-audit --no-fund
```

The `predev`, `prelint`, and `prebuild` hooks reconstruct the deployment-optimized image assets from the committed `.assets-src/` files. This avoids the binary corruption introduced by the Google AI Studio export while preserving the approved master-image compositions.

### Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Required variable:
- `VITE_FORMSPREE_FORM_ID`: verified Formspree form ID configured to deliver submissions to `casewilcox@gmail.com`.

When this variable is absent, the form stays in safe inactive mode, sends no network request, preserves entered data, and presents an accessible configuration message.

### Local Server
```bash
npm run dev
```

### Build & Preview
```bash
npm run lint
npm run build
npm run preview
```

## Deployment Readiness & Activation Notes
- **Deployment Target**: `workfolios/casey-wilcox`
- **Preview URL**: `https://workfolios.github.io/casey-wilcox/`
- **Deployment Method**: GitHub Actions workflow in `.github/workflows/deploy-pages.yml`
- **Form Activation Requirement**: live submission remains blocked until the Formspree ID is configured and Gmail delivery is verified
- **Public Release**: subject to explicit Casey Wilcox confirmation and final release approval

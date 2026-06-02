# Portfolio (terminal)

Minimal Astro portfolio — black background, amber terminal aesthetic.

Live: https://lemonsix.github.io

## Setup

```bash
pnpm install
```

Optional: copy `.env.example` to `.env` and add `GITHUB_TOKEN` for server-side contribution fetch during build. Client-side fallback works without it.

## Commands

```bash
pnpm dev
pnpm build
pnpm preview
```

## Data

Edit JSON files in `src/data/` — types in `src/types/portfolio.ts`.

## Deploy

Pushes to `main` deploy automatically via GitHub Actions to GitHub Pages.

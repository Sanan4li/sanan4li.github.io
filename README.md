# sanan4li.github.io

Personal portfolio of **Abdul Qadir Sanan (Sanan Ali)** — Senior Software Engineer.

Built with Next.js 15, TypeScript, Tailwind CSS 4 and Framer Motion, exported as a static site and deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export in ./out
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages.

> Note: In the repo settings → Pages, the source must be set to **GitHub Actions** (not "Deploy from a branch").

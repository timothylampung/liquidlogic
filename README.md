# Liquid Logic — Landing Page

This repo contains the Next.js landing page for **Liquid Logic**, an Auto Beverage Dispenser.

## Where is the app?

Because the workspace initially contained images, `create-next-app` scaffolded the project inside the **`liquid-logic/`** subfolder. The actual Next.js app lives there.

## Quick Start

```bash
cd liquid-logic
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. In the import settings, set **Root Directory** to: `liquid-logic`
4. Click **Deploy**.

Vercel will automatically detect Next.js, install dependencies, and build the project.

## Design Highlights

- **Elegant Metallic Theme**: Gunmetal backgrounds, chrome gradients, silver accents.
- **High-Converting Sections**: Hero, social proof stats, feature grid, product gallery, how-it-works, and a strong waitlist CTA.
- **Animations**: Scroll reveals and floating badges powered by Framer Motion.
- **Icons**: Lucide React iconography throughout.

## Product Images

The four product photos are stored in `liquid-logic/public/product/` and rendered with `next/image`.

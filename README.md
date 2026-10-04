# ResearchPortfolio

A researcher-focused portfolio built with Next.js and React, with GSAP scroll animations and Lenis smooth scrolling.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. If port 3000 is already in use, Next.js selects another port.

## Portfolio view counter

The shared page-view counter uses Supabase. Follow [the setup guide](docs/view-counter-setup.md) to deploy its migration through the Supabase GitHub integration and configure the Next.js server environment. Never expose the Supabase secret key in client-side code or commit it.

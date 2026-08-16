# Japan's Goods — E-Commerce Storefront

<p><a href="https://verno-dev-studio.github.io/japans-goods-e-store/"><b>&#9654; Live demo</b></a> &nbsp;&middot;&nbsp; <a href="https://github.com/verno-dev-studio/japans-goods-e-store">Source</a></p>

## Overview

A multi-page React storefront for a shop selling Japanese goods: a catalogue browsable by category, product pages, a shopping cart and client-side routing. The most substantial front-end build in the portfolio.

## ✨ Features

- Client-side routing with React Router (catalogue, category, product, cart, about)
- Product catalogue organised by category
- Shopping cart with add/remove and quantity
- Reusable component library (cards, layout, controls)
- Context/state for cart and app data
- Responsive across mobile, tablet and desktop
- Sass styling with a structured architecture

## 🛠️ Tech stack

- **React** — SPA component architecture
- **React Router** — Client-side navigation and nested routes
- **Vite** — Build tooling and dev server
- **Sass** — Structured, maintainable styles
- **Context API** — Cart / app state without prop drilling

## 📁 Project structure

```
src/
  components/   shared UI
  pages/        routed views
  context/      cart & app state
  data/         product data
  utils/        helpers
  sass/         styles
  App.jsx / main.jsx
```

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

> Requires Node.js 18+. Deployed to GitHub Pages automatically on push via GitHub Actions.

---
<sub>Portfolio demo. Live site built and deployed from source via GitHub Actions.</sub>

# KreatorAI Studio — Next.js Landing Site

Premium Next.js 15 landing page for [kreatoraistudio.com](https://kreatoraistudio.com).

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Framer Motion** — page animations & scroll reveals
- **@splinetool/react-spline** — 3D Spline model in hero
- **Tailwind CSS v4**
- **TypeScript**

## Project Structure

```
src/
  app/
    layout.tsx          ← Root layout: fonts, Navbar, Footer, ClientShell
    globals.css         ← All shared styles (design tokens, nav, footer, components)
    page.tsx            ← Home page (hero with Spline + all sections)
    services/page.tsx   ← Services page
    pricing/page.tsx    ← Pricing page
    about/page.tsx      ← About & founder page
  components/
    Navbar.tsx          ← Fixed navbar with scroll state & mobile menu
    Footer.tsx          ← Footer with links & social icons
    ClientShell.tsx     ← Scroll progress bar + back-to-top button
    ScrollReveal.tsx    ← Framer Motion scroll reveal wrapper
    SplineScene.tsx     ← Dynamic Spline 3D embed (no SSR)
```

## Spline 3D Setup

The hero uses `@splinetool/react-spline` loaded dynamically (SSR disabled).

**To change the Spline scene:**
1. Open your scene on [spline.design](https://spline.design)
2. Click **Export → Web (Embed)**
3. Copy the `.splinecode` URL
4. Replace the `scene` prop in `src/app/page.tsx`:

```tsx
<SplineScene
  scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode"
  onLoad={() => setSplineLoaded(true)}
/>
```

> **Performance tip:** Spline scenes can be large. For best LCP, keep your scene file under 5MB. The component shows an animated gradient fallback while loading.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

For Firebase Hosting, output mode `export` is recommended. Add to `next.config.ts`:
```ts
const nextConfig = {
  output: "export",
};
```
Then run `npm run build` and deploy the `out/` folder.

## Design Tokens

All tokens live in `globals.css` under `:root`:

| Token | Value |
|-------|-------|
| `--bg` | `#07070f` |
| `--p1` | `#7c4dff` (purple) |
| `--pk` | `#ff4d8d` (pink) |
| `--grad` | Purple → pink gradient |
| `--fh` | Bricolage Grotesque |
| `--fb` | DM Sans |

# ⚡ Web Performance

> 💼 **Industry Perspective:** In professional frontend teams, **Web Performance** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Fast sites convert better, rank higher, and feel more trustworthy. Performance work targets three things: **loading** quickly, **rendering** smoothly, and **staying** responsive.

⬅ [Back to Index](../README.md)

---

## 📊 Core Web Vitals (Google's key metrics)

| Metric | Measures | Good |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Loading — biggest element visible | < 2.5s |
| **INP** (Interaction to Next Paint) | Responsiveness to input | < 200ms |
| **CLS** (Cumulative Layout Shift) | Visual stability (no jumping) | < 0.1 |

Other useful metrics: **FCP** (First Contentful Paint), **TTFB** (Time To First Byte), **TBT** (Total Blocking Time).

---

## 🚚 Optimize Loading

### Resource hints

```html
<link rel="preconnect" href="https://api.example.com" />
<link rel="dns-prefetch" href="https://cdn.example.com" />
<link rel="preload" href="/fonts/main.woff2" as="font" crossorigin />
<link rel="prefetch" href="/next-page.js" />       <!-- likely-needed later -->
```

### Scripts

```html
<script src="app.js" defer></script>  <!-- parse HTML uninterrupted, run in order -->
<script src="analytics.js" async></script> <!-- independent, run ASAP -->
```

### Images (usually the biggest bytes)

```html
<img src="hero.jpg" alt="" width="800" height="450"
	 loading="lazy" decoding="async"
	 srcset="hero-400.jpg 400w, hero-800.jpg 800w"
	 sizes="(max-width: 600px) 400px, 800px" />
```

- Use modern formats: **AVIF**, **WebP**.
- Always set `width`/`height` (or `aspect-ratio`) to prevent **CLS**.
- `loading="lazy"` for below-the-fold images.

### Fonts

```css
@font-face { font-family: "X"; src: url(x.woff2) format("woff2"); font-display: swap; }
```
Preload critical fonts; subset to needed characters.

---

## 📦 Reduce Bundle Size (JavaScript)

```js
// Code splitting — load routes/components on demand
const Dashboard = React.lazy(() => import("./Dashboard"));

// Dynamic import on interaction
button.addEventListener("click", async () => {
  const { showModal } = await import("./modal.js");
  showModal();
});
```

- **Tree shaking** — bundlers drop unused exports (use ES modules, avoid side effects).
- **Import only what you use**: `import debounce from "lodash-es/debounce"` not the whole library.
- Analyze with `rollup-plugin-visualizer` / `webpack-bundle-analyzer`.
- **Minify + compress** (Brotli/gzip) at the server/CDN.

---

## 🖼️ Optimize Rendering

- **Avoid layout thrashing** — batch DOM reads then writes; don't interleave.
- **Animate only `transform` and `opacity`** (GPU-composited, no reflow).
- Use `will-change` sparingly to hint the compositor.
- Use `content-visibility: auto` to skip rendering offscreen content.
- Virtualize long lists (react-window, TanStack Virtual).

```css
.card-list { content-visibility: auto; contain-intrinsic-size: 200px; }
.animate { transition: transform 0.2s, opacity 0.2s; }
```

```js
// Debounce/throttle expensive handlers
window.addEventListener("resize", debounce(onResize, 150));
window.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
```

---

## 🌐 Caching & Delivery

- Serve static assets from a **CDN**.
- **Cache-Control** headers + content hashing (`app.3f2a.js`) for long-term caching + cache busting.
- **HTTP/2 & HTTP/3** for multiplexing.
- **Service Worker** caching for repeat visits (see PWA chapter).

---

## 🏗️ Rendering Strategies

| Strategy | When content is built | Good for |
|---|---|---|
| **CSR** (Client-Side Rendering) | In the browser | Highly interactive apps |
| **SSR** (Server-Side Rendering) | Per request on server | SEO + dynamic data |
| **SSG** (Static Site Generation) | At build time | Blogs, docs, marketing |
| **ISR** (Incremental Static Regen) | Build + revalidate | Large mostly-static sites |
| **Streaming / RSC** | Progressive from server | Fast TTFB, partial hydration |

---

## 🧪 Measuring Performance

```js
// Web Vitals in the field
import { onLCP, onINP, onCLS } from "web-vitals";
onLCP(console.log); onINP(console.log); onCLS(console.log);

// Performance API
performance.mark("start");
// … work …
performance.measure("task", "start");
performance.getEntriesByType("navigation")[0].loadEventEnd;
```

Tools: **Lighthouse**, **Chrome DevTools Performance panel**, **WebPageTest**, **PageSpeed Insights**, **CrUX** (real-user data).

---

## ✅ Key Takeaways

- Optimize for **LCP, INP, CLS**.
- Ship less JS: **code split, tree shake, lazy load**.
- Images and fonts are usually the biggest wins.
- Animate `transform`/`opacity`; set dimensions to avoid layout shift.
- **Measure** in the lab (Lighthouse) and the field (web-vitals/CrUX).

➡ **Next:** [Frontend Security](../44-Frontend-Security/frontend-security.md)

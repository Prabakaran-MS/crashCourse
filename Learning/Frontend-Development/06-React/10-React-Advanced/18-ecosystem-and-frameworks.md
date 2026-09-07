# 🌍 Ecosystem & Frameworks

> 💼 **Industry Perspective:** In professional frontend teams, **Ecosystem & Frameworks** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** React is a library, not a full framework. Real apps combine it with a **meta-framework** and supporting libraries for routing, SSR, forms, and more.

---

## 🖼️ Meta-frameworks (build production apps)

### Next.js — the most popular React framework
- **File-based routing**, **Server Components**, SSR/SSG/ISR, API routes, image optimization.

```tsx
// app/page.tsx (App Router) — a Server Component by default
export default async function Page() {
	const data = await fetch("https://api.example.com").then((r) => r.json());
	return <h1>{data.title}</h1>;
}
```

### Remix
- Focus on **web standards**, nested routes, loaders/actions, progressive enhancement.

### Others
- **Gatsby** — static sites with a rich data layer.
- **Astro** — content sites; ships zero JS by default, "islands" of React.

---

## 🧩 Rendering strategies

| Strategy | Meaning |
|----------|---------|
| CSR | Client-Side Rendering (plain React SPA) |
| SSR | Server-Side Rendering (HTML per request) |
| SSG | Static Site Generation (HTML at build time) |
| ISR | Incremental Static Regeneration (rebuild on demand) |
| RSC | React Server Components (render on server, zero client JS) |

---

## 🆕 React Server Components (RSC)

Components that run **only on the server**, sending rendered output (not JS) to the client — smaller bundles, direct DB/API access.

```tsx
// Server Component (no useState/useEffect here)
async function Products() {
	const items = await db.products.findMany();
	return <ul>{items.map((p) => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

Mark interactive parts with `"use client"`:

```tsx
"use client";
import { useState } from "react";
export function AddToCart() { const [n, setN] = useState(0); /* ... */ }
```

---

## 🛠️ Commonly paired libraries

| Concern | Popular libraries |
|---------|-------------------|
| Routing | React Router, TanStack Router |
| Server state | TanStack Query, SWR, RTK Query |
| Client state | Redux Toolkit, Zustand, Jotai |
| Forms | React Hook Form, Formik |
| Validation | Zod, Yup |
| UI components | MUI, Chakra, shadcn/ui, Radix |
| Animation | Framer Motion, React Spring |
| Tables | TanStack Table |
| Charts | Recharts, Victory, visx |
| i18n | react-i18next |
| Dates | date-fns, Day.js |

---

## 📱 Beyond the web

- **React Native** — build native iOS/Android apps with React.
- **Electron / Tauri** — desktop apps using React for the UI.

---

## 🧰 Tooling

- **Vite** — fast dev server & bundler (recommended).
- **ESLint + Prettier** — linting & formatting.
- **React DevTools** — inspect components, props, and profiling.
- **Storybook** — develop and document components in isolation.

---

⬅ [Back to Index](../README.md)

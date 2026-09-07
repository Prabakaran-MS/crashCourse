# 🌐 Server Components, SSR & Next.js

> 💼 **Industry Perspective:** In professional frontend teams, **Server Components, SSR & Next.js** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** React can render on the **server** for faster first paint, better SEO, and less client JS. **React Server Components (RSC)** run only on the server; frameworks like **Next.js** and **Remix** make this practical.

---

## 🖥️ Rendering strategies

| Strategy | What | When |
| --- | --- | --- |
| CSR | Client renders everything | Highly interactive apps/dashboards |
| SSR | HTML rendered per request | Dynamic, SEO-sensitive pages |
| SSG | HTML built at build time | Mostly static content |
| ISR | SSG + periodic revalidation | Static with occasional updates |
| RSC | Components render on server, stream to client | Reduce client JS, data-close rendering |

---

## 🧩 Server vs Client Components (RSC)

```tsx
// Server Component (default in Next.js app/): can fetch data directly, no hooks/state
async function Page() {
	const posts = await db.posts.findMany();
	return <PostList posts={posts} />;
}
```

```tsx
"use client"; // opt into a Client Component — needed for state, effects, event handlers
import { useState } from "react";
function Counter() {
	const [n, setN] = useState(0);
	return <button onClick={() => setN(n + 1)}>{n}</button>;
}
```

> **Rule:** Server Components can't use `useState`/`useEffect`/browser APIs. Add `"use client"` at the top of files that need interactivity.

---

## ▲ Next.js App Router essentials

```
app/
	layout.tsx      → shared shell (persists across routes)
	page.tsx        → route UI (/)
	loading.tsx     → Suspense fallback
	error.tsx       → error boundary
	blog/[slug]/page.tsx → dynamic route
```

### Data fetching & caching

```tsx
// Fetch runs on the server; caching controlled per request
const res = await fetch("https://api.example.com/posts", {
	next: { revalidate: 60 }, // ISR: revalidate every 60s
});
```

### Server Actions (mutations)

```tsx
async function createPost(formData: FormData) {
	"use server";
	await db.posts.create({ title: formData.get("title") as string });
}

<form action={createPost}><input name="title" /><button>Add</button></form>;
```

---

## 🌊 Streaming & Suspense on the server

```tsx
<Suspense fallback={<Skeleton />}>
	<SlowServerComponent />
</Suspense>
```

> The server streams HTML as pieces resolve — users see content sooner.

---

## 🧭 Frameworks

- **Next.js** — App Router, RSC, server actions, ISR.
- **Remix / React Router (framework mode)** — nested routes, loaders/actions, web-standard focus.
- **Astro** — islands architecture, ship minimal JS.

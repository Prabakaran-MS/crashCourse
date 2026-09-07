# 🔁 Effects & Lifecycle

> 💼 **Industry Perspective:** In professional frontend teams, **Effects & Lifecycle** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** `useEffect` lets a component **run side effects** — data fetching, subscriptions, timers, manual DOM work — *after* render, and clean them up when needed.

---

## 🪝 useEffect basics

```tsx
import { useEffect, useState } from "react";

function Clock() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(id); // cleanup
	}, []); // empty deps → run once on mount

	return <p>{now.toLocaleTimeString()}</p>;
}
```

---

## 📦 The dependency array

```tsx
useEffect(() => { /* runs after EVERY render */ });
useEffect(() => { /* runs once on mount */ }, []);
useEffect(() => { /* runs when `id` changes */ }, [id]);
```

| Deps | When effect runs |
|------|------------------|
| *(omitted)* | After every render |
| `[]` | Once, after mount |
| `[a, b]` | When `a` or `b` changes |

The **cleanup function** runs before the effect re-runs and on unmount.

---

## 🌐 Data fetching in an effect

```tsx
function User({ id }: { id: number }) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		let cancelled = false;
		fetch(`/api/users/${id}`)
			.then((r) => r.json())
			.then((data) => { if (!cancelled) setUser(data); });
		return () => { cancelled = true; }; // avoid setting state after unmount
	}, [id]);

	if (!user) return <p>Loading…</p>;
	return <h1>{user.name}</h1>;
}
```

---

## 🗺️ Class lifecycle → hooks mapping

| Class method | Hook equivalent |
|--------------|-----------------|
| `componentDidMount` | `useEffect(fn, [])` |
| `componentDidUpdate` | `useEffect(fn, [deps])` |
| `componentWillUnmount` | cleanup `return () => {}` |

---

## ⚡ useLayoutEffect

Runs **synchronously after DOM mutations, before the browser paints** — use for measuring layout to avoid flicker. Prefer `useEffect` unless you must read layout.

```tsx
useLayoutEffect(() => {
	const height = ref.current?.offsetHeight;
	// position something based on height before paint
}, []);
```

---

## 🚫 Common pitfalls

- **Missing dependencies** → stale values. Include everything the effect uses.
- **Infinite loops** → setting state that's also a dependency without a guard.
- **Not cleaning up** → memory leaks from timers/subscriptions.

> **Tip:** In React 18 Strict Mode (dev), effects run twice on mount to help you catch missing cleanup. This does not happen in production.

---

⬅ [Back to Index](../README.md)

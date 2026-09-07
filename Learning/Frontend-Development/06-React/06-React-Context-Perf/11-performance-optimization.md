# 🚀 Performance Optimization

> 💼 **Industry Perspective:** In professional frontend teams, **Performance Optimization** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** React is fast by default. Optimize only when you measure a problem — then use **memoization** and **code splitting** to avoid unnecessary work.

---

## 🧠 React.memo — skip re-rendering unchanged components

```tsx
const Row = React.memo(function Row({ item }: { item: Item }) {
	return <li>{item.text}</li>;
});
// Row re-renders only when its props actually change (shallow compare)
```

---

## 🧮 useMemo — cache expensive calculations

```tsx
const sortedItems = useMemo(() => {
	return [...items].sort((a, b) => a.value - b.value);
}, [items]); // recompute only when `items` changes
```

## 🔗 useCallback — stable function identity

Useful when passing callbacks to memoized children.

```tsx
const handleSelect = useCallback((id: number) => {
	setSelected(id);
}, []);

<Row onSelect={handleSelect} /> // Row (memoized) won't re-render needlessly
```

> `useMemo` caches a **value**; `useCallback` caches a **function**. `useCallback(fn, deps)` = `useMemo(() => fn, deps)`.

---

## ✂️ Code splitting with lazy + Suspense

Load components only when needed to shrink the initial bundle.

```tsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
	return (
		<Suspense fallback={<p>Loading…</p>}>
			<Dashboard />
		</Suspense>
	);
}
```

---

## 🗝️ Keys & list performance

- Stable `key`s let React reuse DOM nodes instead of recreating them.
- Virtualize very long lists with **react-window** or **react-virtualized** (render only visible rows).

---

## ⚡ Concurrent features (React 18)

```tsx
// Keep the UI responsive during heavy updates
const [isPending, startTransition] = useTransition();
startTransition(() => setFilter(value));

// Defer a slow-changing value
const deferredQuery = useDeferredValue(query);
```

---

## 📏 Measure before optimizing

- **React DevTools Profiler** — find components that re-render too often.
- **why-did-you-render** — logs avoidable re-renders.
- Browser Performance tab — real timing.

> **Rule:** Don't sprinkle `useMemo`/`useCallback` everywhere — they have a cost. Optimize proven hotspots.

---

⬅ [Back to Index](../README.md)

# 🛡️ Error Boundaries, Portals & Suspense

> 💼 **Industry Perspective:** In professional frontend teams, **Error Boundaries, Portals & Suspense** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** These are React's tools for **handling render errors gracefully**, **rendering outside the parent DOM tree**, and **waiting for async content**.

---

## 🛡️ Error Boundaries

An error boundary is a component that **catches render errors** in its child tree and shows a fallback instead of crashing the whole app. Currently must be a **class component**.

```tsx
import { Component, ReactNode } from "react";

class ErrorBoundary extends Component<
	{ children: ReactNode; fallback: ReactNode },
	{ hasError: boolean }
> {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		console.error("Caught:", error, info);
	}

	render() {
		return this.state.hasError ? this.props.fallback : this.props.children;
	}
}

// Usage
<ErrorBoundary fallback={<p>Something went wrong.</p>}>
	<RiskyComponent />
</ErrorBoundary>
```

> For a hook-friendly API, use the **react-error-boundary** library.

**What they catch:** errors during rendering, in lifecycle methods, and in constructors of the tree below.
**What they don't catch:** event handlers, async code, SSR, and errors thrown in the boundary itself (use `try/catch` for those).

---

## 🚪 Portals — render outside the parent DOM

Portals render children into a **different DOM node** (great for modals, tooltips, toasts that must escape overflow/z-index).

```tsx
import { createPortal } from "react-dom";

function Modal({ children }: { children: React.ReactNode }) {
	return createPortal(
		<div className="modal-overlay">{children}</div>,
		document.getElementById("modal-root")! // a node outside your app root
	);
}
```

```html
<body>
	<div id="root"></div>
	<div id="modal-root"></div>
</body>
```

Events still **bubble through the React tree**, not the DOM tree — so context and handlers work as expected.

---

## ⏳ Suspense — waiting for async content

Suspense lets components "wait" for something before rendering, showing a fallback meanwhile.

```tsx
import { Suspense, lazy } from "react";

const Profile = lazy(() => import("./Profile"));

<Suspense fallback={<Spinner />}>
	<Profile />
</Suspense>
```

Uses:
- **Code splitting** with `lazy()` (works today).
- **Data fetching** with Suspense-enabled libraries (e.g., TanStack Query, Relay) and frameworks like **Next.js**.

You can nest boundaries for granular loading states:

```tsx
<Suspense fallback={<PageSkeleton />}>
	<Header />
	<Suspense fallback={<FeedSkeleton />}>
		<Feed />
	</Suspense>
</Suspense>
```

---

⬅ [Back to Index](../README.md)

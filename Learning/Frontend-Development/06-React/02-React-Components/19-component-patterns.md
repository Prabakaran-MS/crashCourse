# 🧩 Component Composition Patterns

> 💼 **Industry Perspective:** In professional frontend teams, **Component Composition Patterns** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** React favors **composition over inheritance**. Instead of extending classes, you build flexible UIs by combining components, passing `children`, and sharing logic with patterns like render props, HOCs, and compound components.

---

## 👶 Composition with `children`

```tsx
function Card({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="card">
			<h2>{title}</h2>
			<div className="card-body">{children}</div>
		</section>
	);
}

// Usage — anything between the tags becomes `children`
<Card title="Profile">
	<Avatar />
	<p>Hello!</p>
</Card>
```

---

## 🎰 Slots (named children via props)

```tsx
function Layout({ header, sidebar, content }: {
	header: React.ReactNode;
	sidebar: React.ReactNode;
	content: React.ReactNode;
}) {
	return (
		<div className="layout">
			<header>{header}</header>
			<aside>{sidebar}</aside>
			<main>{content}</main>
		</div>
	);
}
```

---

## 🎁 Render props

Share logic by passing a **function as a child** (or prop) that receives data.

```tsx
function MouseTracker({ children }: { children: (pos: { x: number; y: number }) => React.ReactNode }) {
	const [pos, setPos] = React.useState({ x: 0, y: 0 });
	return (
		<div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
			{children(pos)}
		</div>
	);
}

<MouseTracker>{({ x, y }) => <p>{x}, {y}</p>}</MouseTracker>
```

---

## 🏭 Higher-Order Components (HOC)

A function that takes a component and returns an enhanced component.

```tsx
function withLoading<P extends object>(Wrapped: React.ComponentType<P>) {
	return function WithLoading(props: P & { loading: boolean }) {
		if (props.loading) return <Spinner />;
		return <Wrapped {...props} />;
	};
}
```

> Modern React prefers **custom hooks** over HOCs for most logic sharing.

---

## 🧱 Compound components

Related components share implicit state via context.

```tsx
const TabsContext = React.createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ defaultTab, children }: { defaultTab: string; children: React.ReactNode }) {
	const [active, setActive] = React.useState(defaultTab);
	return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

function Tab({ id, children }: { id: string; children: React.ReactNode }) {
	const ctx = React.useContext(TabsContext)!;
	return <button aria-selected={ctx.active === id} onClick={() => ctx.setActive(id)}>{children}</button>;
}

Tabs.Tab = Tab;

// Usage
<Tabs defaultTab="a">
	<Tabs.Tab id="a">First</Tabs.Tab>
	<Tabs.Tab id="b">Second</Tabs.Tab>
</Tabs>
```

---

## 🎛️ Controlled vs uncontrolled components

- **Controlled** — parent owns the value via state and `onChange`.
- **Uncontrolled** — the DOM owns the value; read it with a `ref`.

```tsx
// Controlled
<input value={name} onChange={(e) => setName(e.target.value)} />
// Uncontrolled
<input defaultValue="Ada" ref={inputRef} />
```

---

## ✅ Choosing a pattern

| Need | Prefer |
| --- | --- |
| Share layout/markup | `children` / slots |
| Share stateful logic | **custom hook** |
| Enhance many components | HOC (legacy) or hook |
| Group related UI + shared state | compound components |

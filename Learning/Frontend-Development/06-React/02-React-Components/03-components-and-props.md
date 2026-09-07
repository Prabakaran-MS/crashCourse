# 🧱 Components & Props

> 💼 **Industry Perspective:** In professional frontend teams, **Components & Props** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Components are **functions that return UI**. **Props** are the arguments you pass to them — read-only inputs from parent to child.

---

## 🔧 Function components (the standard)

```tsx
function Welcome() {
	return <h1>Welcome!</h1>;
}

// Arrow-function form
const Welcome2 = () => <h1>Welcome!</h1>;
```

> Component names **must start with a capital letter** so React treats them as components, not HTML tags.

---

## 📦 Props — passing data in

```tsx
type GreetingProps = {
	name: string;
	age?: number; // optional
};

function Greeting({ name, age }: GreetingProps) {
	return <p>Hi {name}{age ? `, age ${age}` : ""}</p>;
}

// Usage
<Greeting name="Ada" age={36} />
```

Props are **read-only** — a component must never modify its own props.

---

## 👶 The `children` prop

```tsx
type CardProps = { title: string; children: React.ReactNode };

function Card({ title, children }: CardProps) {
	return (
		<div className="card">
			<h2>{title}</h2>
			{children}
		</div>
	);
}

// Usage — anything between the tags becomes `children`
<Card title="Profile">
	<p>Some content here</p>
</Card>
```

---

## 🎛️ Default props & spreading

```tsx
function Button({ label = "Click", ...rest }: { label?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return <button {...rest}>{label}</button>;
}
```

---

## 🏛️ Class components (legacy, still valid)

```tsx
import { Component } from "react";

class Welcome extends Component<{ name: string }> {
	render() {
		return <h1>Hi {this.props.name}</h1>;
	}
}
```

> Modern React uses **function components + hooks**. You'll mostly see classes in older codebases.

---

## 🧩 Composition over inheritance

Build complex UIs by **nesting** components, not by extending them.

```tsx
function Page() {
	return (
		<Layout>
			<Header />
			<Content />
			<Footer />
		</Layout>
	);
}
```

---

⬅ [Back to Index](../README.md)

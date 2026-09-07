# 🏷️ JSX

> 💼 **Industry Perspective:** In professional frontend teams, **JSX** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** JSX is a syntax that lets you write **HTML-like markup inside JavaScript**. It compiles to `React.createElement(...)` calls.

---

## ✍️ Basic JSX

```tsx
const element = <h1>Hello, world!</h1>;
```

JSX is **not** a string and **not** HTML — it's JavaScript. Under the hood:

```tsx
// This JSX...
const el = <h1 className="title">Hi</h1>;
// ...compiles to:
const el2 = React.createElement("h1", { className: "title" }, "Hi");
```

---

## 🔣 Embedding expressions with `{ }`

```tsx
const name = "Ada";
const el = <h1>Hello, {name}!</h1>;
const sum = <p>2 + 2 = {2 + 2}</p>;
```

Only **expressions** go inside `{ }` (no `if`/`for` statements — use ternaries or `.map`).

---

## 🎨 Attributes & differences from HTML

```tsx
<div className="box" />        // class → className
<label htmlFor="name" />       // for → htmlFor
<input value={val} onChange={handle} />
<img src={url} alt="pic" />
<button style={{ color: "red", fontSize: 14 }} /> // style is an object
```

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| `onclick` | `onClick` (camelCase) |
| `style="..."` | `style={{ }}` (object) |

---

## 🧷 One root element & fragments

A component must return a **single** root. Use a Fragment to avoid extra DOM nodes.

```tsx
return (
	<>
		<h1>Title</h1>
		<p>Body</p>
	</>
);
// <> </> is shorthand for <React.Fragment>
```

---

## 🧵 Self-closing & children

```tsx
<img src={url} alt="pic" />          {/* self-closing */}
<Card>
	<p>I am a child</p>               {/* children passed to <Card> */}
</Card>
```

## 💬 Comments in JSX

```tsx
return (
	<div>
		{/* this is a JSX comment */}
		<p>Hi</p>
	</div>
);
```

---

⬅ [Back to Index](../README.md)

# 🔀 Conditional Rendering & Lists

> 💼 **Industry Perspective:** In professional frontend teams, **Conditional Rendering & Lists** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** In React you render UI conditionally with **plain JavaScript** (ternaries, `&&`), and render collections with **`.map()`** — each item needs a stable **`key`**.

---

## ❓ Conditional rendering

```tsx
function Status({ loggedIn }: { loggedIn: boolean }) {
	// Ternary
	return loggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
}
```

### Short-circuit with `&&`

```tsx
{unreadCount > 0 && <span>You have {unreadCount} messages</span>}
```

> ⚠️ Beware `0 && ...` — `0` renders as `0`. Use `count > 0 && ...`.

### Early return

```tsx
function Profile({ user }: { user?: User }) {
	if (!user) return <p>Loading…</p>;
	return <h1>{user.name}</h1>;
}
```

### Multiple branches

```tsx
function Badge({ role }: { role: "admin" | "user" | "guest" }) {
	if (role === "admin") return <span>👑 Admin</span>;
	if (role === "user") return <span>🙂 User</span>;
	return <span>👋 Guest</span>;
}
```

---

## 📋 Rendering lists with `.map()`

```tsx
function TodoList({ todos }: { todos: { id: number; text: string }[] }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.text}</li>
			))}
		</ul>
	);
}
```

---

## 🔑 Keys — why they matter

- Keys help React identify which items changed, were added, or removed.
- Use a **stable, unique** id — **not** the array index (index causes bugs when the list reorders).

```tsx
{items.map((item) => <Row key={item.id} item={item} />)} // ✅
{items.map((item, i) => <Row key={i} item={item} />)}    // ⚠️ avoid
```

---

## 🧮 Filtering & transforming before render

```tsx
{users
	.filter((u) => u.active)
	.map((u) => <UserCard key={u.id} user={u} />)}
```

---

## 🈳 Empty & fallback states

```tsx
{items.length === 0 ? <p>No items yet</p> : (
	<ul>{items.map((i) => <li key={i.id}>{i.text}</li>)}</ul>
)}
```

---

⬅ [Back to Index](../README.md)

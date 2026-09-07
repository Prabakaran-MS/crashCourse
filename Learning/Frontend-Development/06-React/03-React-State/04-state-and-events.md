# 🎚️ State & Events

> 💼 **Industry Perspective:** In professional frontend teams, **State & Events** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** **State** is data a component owns and can change over time. When state changes, React **re-renders** the component. **Events** (clicks, typing) are how users trigger those changes.

---

## 🪝 useState

```tsx
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0); // [value, setter]

	return (
		<button onClick={() => setCount(count + 1)}>
			Clicked {count} times
		</button>
	);
}
```

- `useState(initial)` returns the **current value** and a **setter**.
- Calling the setter schedules a re-render with the new value.

---

## 🔄 Updating based on previous state

Always use the **functional updater** when the new value depends on the old one.

```tsx
setCount((prev) => prev + 1); // ✅ safe with batching
setCount(count + 1);          // ⚠️ can be stale in rapid updates
```

---

## 🧊 State is immutable — replace, don't mutate

```tsx
const [user, setUser] = useState({ name: "Ada", age: 36 });

// ✅ create a new object
setUser((prev) => ({ ...prev, age: 37 }));

// ✅ arrays — create a new array
const [items, setItems] = useState<string[]>([]);
setItems((prev) => [...prev, "new"]);

// ❌ never do this
user.age = 37; setUser(user); // React won't detect the change
```

---

## 🖱️ Handling events

```tsx
function Form() {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		console.log("clicked");
	}

	return <button onClick={handleClick}>Go</button>;
}
```

Common events: `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onMouseEnter`, `onFocus`, `onBlur`.

---

## ⌨️ Reading input values

```tsx
function NameInput() {
	const [name, setName] = useState("");
	return (
		<input
			value={name}
			onChange={(e) => setName(e.target.value)}
			placeholder="Your name"
		/>
	);
}
```

---

## 🧮 Multiple state variables

```tsx
const [first, setFirst] = useState("");
const [last, setLast] = useState("");
// Keep unrelated pieces of state separate for clarity.
```

> **Rule:** State should be the *minimum* data needed. Derive everything else during render.

---

⬅ [Back to Index](../README.md)

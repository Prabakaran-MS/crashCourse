# ⚛️ Concurrent React & React 19 Features

> 💼 **Industry Perspective:** In professional frontend teams, **Concurrent React & React 19 Features** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Modern React can keep the UI responsive during heavy updates (**concurrent rendering**) and adds first-class support for async work with **Actions** and new hooks in React 18/19.

---

## 🚦 `useTransition` — mark non-urgent updates

```tsx
const [isPending, startTransition] = useTransition();

function onChange(value: string) {
	setInput(value);                 // urgent
	startTransition(() => setResults(filter(value))); // non-urgent, interruptible
}
```

> Keeps typing snappy while expensive re-renders happen in the background.

---

## ⌛ `useDeferredValue` — defer a value

```tsx
const deferredQuery = useDeferredValue(query);
const list = useMemo(() => filter(deferredQuery), [deferredQuery]);
```

---

## 🎬 Actions & `useActionState` (React 19)

```tsx
async function updateName(prev: State, formData: FormData) {
	const name = formData.get("name") as string;
	await api.save(name);
	return { name };
}

function Profile() {
	const [state, formAction, isPending] = useActionState(updateName, { name: "" });
	return (
		<form action={formAction}>
			<input name="name" />
			<button disabled={isPending}>Save</button>
		</form>
	);
}
```

> `<form action={fn}>` runs a function on submit; pending state is built-in.

---

## ✨ `useOptimistic` — optimistic UI

```tsx
const [optimisticTodos, addOptimistic] = useOptimistic(
	todos,
	(state, newTodo: Todo) => [...state, newTodo]
);

async function add(todo: Todo) {
	addOptimistic(todo);       // show immediately
	await api.create(todo);    // reconcile when done
}
```

---

## 📥 `use` — read promises/context in render (React 19)

```tsx
function Comments({ promise }: { promise: Promise<Comment[]> }) {
	const comments = use(promise); // suspends until resolved
	return <ul>{comments.map((c) => <li key={c.id}>{c.text}</li>)}</ul>;
}
```

> `use` can be called conditionally (unlike other hooks) and integrates with `<Suspense>`.

---

## 📝 `useFormStatus` (React 19)

```tsx
import { useFormStatus } from "react-dom";
function SubmitButton() {
	const { pending } = useFormStatus();
	return <button disabled={pending}>Submit</button>;
}
```

---

## 🧠 Other React 19 improvements

- **Ref as a prop** — `forwardRef` largely no longer needed for function components.
- **Document metadata** — render `<title>`/`<meta>` anywhere; React hoists them.
- **Async transitions** — `startTransition` supports async functions.

# 🪝 Custom Hooks

> 💼 **Industry Perspective:** In professional frontend teams, **Custom Hooks** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** A **custom hook** is a function starting with `use` that calls other hooks to package and reuse stateful logic — without changing your component tree.

---

## 📏 Rules

1. Name must start with `use`.
2. Only call hooks at the top level and only from components or other hooks.
3. A custom hook can call `useState`, `useEffect`, `useRef`, other custom hooks, etc.

---

## 🧪 Example: `useToggle`

```tsx
function useToggle(initial = false) {
	const [on, setOn] = useState(initial);
	const toggle = useCallback(() => setOn((v) => !v), []);
	return [on, toggle] as const;
}

const [open, toggleOpen] = useToggle();
```

---

## 🌐 Example: `useFetch`

```tsx
function useFetch<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let cancelled = false;
		setLoading(true);
		fetch(url)
			.then((r) => r.json())
			.then((d) => { if (!cancelled) setData(d); })
			.catch((e) => { if (!cancelled) setError(e); })
			.finally(() => { if (!cancelled) setLoading(false); });
		return () => { cancelled = true; };
	}, [url]);

	return { data, error, loading };
}
```

---

## ⌨️ Example: `useDebounce`

```tsx
function useDebounce<T>(value: T, delay = 300) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const id = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(id);
	}, [value, delay]);
	return debounced;
}
```

---

## 💾 Example: `useLocalStorage`

```tsx
function useLocalStorage<T>(key: string, initial: T) {
	const [value, setValue] = useState<T>(() => {
		const raw = localStorage.getItem(key);
		return raw ? (JSON.parse(raw) as T) : initial;
	});
	useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
	return [value, setValue] as const;
}
```

---

## ✅ Design tips

- Return a **tuple** (`as const`) for toggle-like hooks, an **object** for many named values.
- Keep hooks **pure of UI** — no JSX inside.
- Compose small hooks into bigger ones.
- Memoize returned callbacks with `useCallback` when consumers depend on identity.

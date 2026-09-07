# 🪝 Hooks — Complete Reference

> 💼 **Industry Perspective:** In professional frontend teams, **Hooks — Complete Reference** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Hooks are functions that let function components use state, lifecycle, context, and more. This is the **full list** of built-in hooks plus how to build your own.

**The two rules of hooks:**
1. Only call hooks at the **top level** (not inside loops, conditions, or nested functions).
2. Only call hooks from **React function components** or **custom hooks**.

---

## 🎚️ State hooks

### useState
```tsx
const [count, setCount] = useState(0);
setCount((c) => c + 1);
```

### useReducer — for complex state logic
```tsx
type Action = { type: "inc" } | { type: "dec" } | { type: "set"; value: number };

function reducer(state: number, action: Action): number {
	switch (action.type) {
		case "inc": return state + 1;
		case "dec": return state - 1;
		case "set": return action.value;
	}
}

const [count, dispatch] = useReducer(reducer, 0);
dispatch({ type: "inc" });
```

---

## 🌐 Context hook

### useContext
```tsx
const ThemeContext = createContext("light");
const theme = useContext(ThemeContext); // reads nearest provider value
```

---

## 📌 Ref hooks

### useRef — mutable value that persists, doesn't cause re-render
```tsx
const inputRef = useRef<HTMLInputElement>(null);
const renderCount = useRef(0); // survives renders, no re-render on change
```

### useImperativeHandle — customize the ref exposed by a component
```tsx
useImperativeHandle(ref, () => ({
	focus: () => inputRef.current?.focus(),
}));
```

---

## ⚡ Effect hooks

### useEffect — side effects after paint
```tsx
useEffect(() => { /* ... */ return () => { /* cleanup */ }; }, [deps]);
```

### useLayoutEffect — synchronously before paint (layout measurement)

### useInsertionEffect — for CSS-in-JS libraries to inject styles (rarely used directly)

---

## 🚀 Performance hooks

### useMemo — cache an expensive computed value
```tsx
const sorted = useMemo(() => bigList.slice().sort(), [bigList]);
```

### useCallback — cache a function identity between renders
```tsx
const handleClick = useCallback(() => doThing(id), [id]);
```

---

## 🆕 React 18 hooks

### useId — stable unique IDs (SSR-safe)
```tsx
const id = useId();
<label htmlFor={id}>Name</label><input id={id} />
```

### useTransition — mark non-urgent state updates
```tsx
const [isPending, startTransition] = useTransition();
startTransition(() => setSearch(query)); // keeps UI responsive
```

### useDeferredValue — defer a slow-changing value
```tsx
const deferredQuery = useDeferredValue(query);
```

### useSyncExternalStore — subscribe to external stores (used by libraries)
```tsx
const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
```

### useDebugValue — label custom hooks in React DevTools
```tsx
useDebugValue(isOnline ? "Online" : "Offline");
```

---

## 🛠️ Custom hooks — reuse logic

A custom hook is just a function starting with `use` that calls other hooks.

```tsx
function useLocalStorage<T>(key: string, initial: T) {
	const [value, setValue] = useState<T>(() => {
		const stored = localStorage.getItem(key);
		return stored ? JSON.parse(stored) : initial;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
}

// Usage
const [name, setName] = useLocalStorage("name", "Ada");
```

Another example:

```tsx
function useToggle(initial = false) {
	const [on, setOn] = useState(initial);
	const toggle = useCallback(() => setOn((o) => !o), []);
	return [on, toggle] as const;
}
```

---

## 📋 Hook cheat table

| Hook | Purpose |
|------|---------|
| `useState` | Local state |
| `useReducer` | Complex state transitions |
| `useContext` | Read context value |
| `useRef` | Persistent mutable value / DOM ref |
| `useImperativeHandle` | Customize exposed ref |
| `useEffect` | Side effects after paint |
| `useLayoutEffect` | Effects before paint |
| `useInsertionEffect` | Inject styles (CSS-in-JS) |
| `useMemo` | Memoize a value |
| `useCallback` | Memoize a function |
| `useId` | Stable unique ids |
| `useTransition` | Non-urgent updates |
| `useDeferredValue` | Defer a value |
| `useSyncExternalStore` | Subscribe to external store |
| `useDebugValue` | DevTools label |

---

⬅ [Back to Index](../README.md)

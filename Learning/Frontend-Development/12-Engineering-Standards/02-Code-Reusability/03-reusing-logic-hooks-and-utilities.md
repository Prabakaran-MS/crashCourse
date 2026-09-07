# 🪝 Reusing Logic — Hooks, Composables & Utilities

> 💼 **Industry Perspective:** In professional frontend teams, **Reusing Logic — Hooks, Composables & Utilities** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Beyond UI, you reuse **behavior** and **pure logic**. Custom hooks (React), composables (Vue), and utility modules keep logic DRY.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Extract repeated **stateful logic** into custom hooks/composables, and repeated **pure logic** into utility functions.

---

## 🪝 Custom Hooks (React)

```js
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
	const stored = localStorage.getItem(key);
	return stored ? JSON.parse(stored) : initial;
  });
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}
```

Reuse stateful behavior across components: `const [theme, setTheme] = useLocalStorage('theme', 'light')`.

---

## 🧪 Composables (Vue)

```js
export function useCounter(start = 0) {
  const count = ref(start);
  const increment = () => count.value++;
  return { count, increment };
}
```

Same idea: reusable reactive logic.

---

## 🛠️ Utility Functions

Pure, testable helpers with no side effects:

```js
export const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
export const debounce = (fn, ms) => { /* ... */ };
```

Group them in a `utils/` module; keep them pure and unit-tested.

---

## 📦 When to Reach for a Library

Don't reinvent well-solved problems — date handling (`date-fns`), validation (`zod`), utilities (`lodash-es`). Balance bundle size vs. build time.

---

## 🎯 Key Takeaways

1. Extract stateful logic into **hooks/composables**.
2. Extract pure logic into **utility functions**.
3. Keep utilities **pure and tested**.
4. Reuse behavior, not just UI.
5. Use libraries for **solved problems**.

⬅ [Back to Index](../README.md)

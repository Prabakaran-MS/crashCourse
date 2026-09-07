# 🌐 Context API

> 💼 **Industry Perspective:** In professional frontend teams, **Context API** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Context lets you share data (theme, user, language) **without passing props through every level** ("prop drilling"). Any component can read it directly.

---

## 🕳️ The problem: prop drilling

```tsx
// Passing `user` through components that don't need it, just to reach the bottom
<App user={user}>
	<Layout user={user}>
		<Sidebar user={user}>
			<Profile user={user} /> {/* only this one actually needs it */}
```

---

## 🏗️ Creating & providing context

```tsx
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<Theme>("light");

function App() {
	const [theme, setTheme] = useState<Theme>("dark");
	return (
		<ThemeContext.Provider value={theme}>
			<Toolbar />
		</ThemeContext.Provider>
	);
}
```

## 📥 Consuming context

```tsx
function Toolbar() {
	const theme = useContext(ThemeContext); // reads nearest Provider
	return <div className={theme}>Current theme: {theme}</div>;
}
```

---

## 🔄 Context with state (value + updater)

```tsx
type ThemeCtx = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<ThemeCtx | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");
	const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

// Custom hook for safety
function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
```

---

## ⚠️ Performance note

When a Provider's `value` changes, **all consumers re-render**. To limit this:

- Split contexts (e.g., separate `ThemeContext` and `UserContext`).
- Memoize the `value` object with `useMemo`.
- For high-frequency updates, prefer a state library (Redux/Zustand).

```tsx
const value = useMemo(() => ({ theme, toggle }), [theme]);
```

---

## 🆚 When to use Context vs a state library

| Use Context | Use Redux/Zustand |
|-------------|-------------------|
| Theme, locale, current user | Large, frequently-updated global state |
| Low-frequency updates | Complex logic, middleware, devtools |
| A few consumers | Many consumers, performance-critical |

---

⬅ [Back to Index](../README.md)

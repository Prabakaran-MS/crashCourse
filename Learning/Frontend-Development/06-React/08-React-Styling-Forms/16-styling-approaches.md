# 🎨 Styling Approaches

> 💼 **Industry Perspective:** In professional frontend teams, **Styling Approaches** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** React is unopinionated about styling. Pick from plain CSS, CSS Modules, CSS-in-JS, or utility frameworks — each with tradeoffs.

---

## 🎽 Inline styles

```tsx
<div style={{ color: "red", fontSize: 16, padding: "8px 12px" }} />
```

Good for dynamic one-offs; no pseudo-classes/media queries. Note camelCase properties.

---

## 📄 Plain CSS & CSS Modules

```tsx
// Plain CSS — global scope
import "./styles.css";
<div className="card" />

// CSS Modules — locally scoped class names
import styles from "./Card.module.css";
<div className={styles.card} />
```

CSS Modules auto-generate unique class names, preventing collisions.

---

## 💅 CSS-in-JS: styled-components / Emotion

```bash
npm install styled-components
```

```tsx
import styled from "styled-components";

const Button = styled.button<{ primary?: boolean }>`
	background: ${(p) => (p.primary ? "#3178c6" : "#eee")};
	color: ${(p) => (p.primary ? "white" : "black")};
	padding: 8px 16px;
	border-radius: 6px;
`;

<Button primary>Save</Button>
```

Styles are scoped, dynamic (props-driven), and colocated with components.

---

## 🌬️ Tailwind CSS — utility classes

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```tsx
<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
	Save
</button>
```

No context-switching to CSS files; rapid prototyping via utility classes.

---

## 🧮 Conditional & combined classes

```tsx
// clsx / classnames helper
import clsx from "clsx";
<div className={clsx("btn", { "btn-active": isActive, "btn-disabled": disabled })} />
```

---

## 🧩 Component libraries (pre-styled)

- **Material UI (MUI)** — Google Material design.
- **Chakra UI** — accessible, themeable.
- **Ant Design** — enterprise components.
- **shadcn/ui** — copy-paste components on Tailwind + Radix.
- **Radix UI / Headless UI** — unstyled, accessible primitives you style yourself.

---

## 🧭 Choosing

| Approach | Best when |
|----------|-----------|
| CSS Modules | You like plain CSS with scoping |
| Tailwind | Fast iteration, design systems |
| styled-components/Emotion | Dynamic, prop-driven styles |
| Component library | You want ready-made, accessible UI |

---

⬅ [Back to Index](../README.md)

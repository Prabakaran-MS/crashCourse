# ✨ Modern CSS & Styling Systems

> 💼 **Industry Perspective:** In professional frontend teams, **Modern CSS & Styling Systems** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Beyond the basics: custom properties, animations, preprocessors (Sass), utility frameworks (Tailwind), and CSS-in-JS. These are the tools real teams use to scale styling.

⬅ [Back to Index](../README.md)

---

## 🎛️ CSS Custom Properties (Variables)

Native, dynamic variables — readable at runtime and by JavaScript.

```css
:root {
  --color-primary: #4f46e5;
  --spacing: 8px;
  --radius: 0.5rem;
}
.button {
  background: var(--color-primary);
  padding: calc(var(--spacing) * 2);
  border-radius: var(--radius);
  color: var(--text, #fff); /* fallback value */
}
/* Theming by overriding on a scope */
.dark { --color-primary: #818cf8; }
```

```js
// Read/write from JavaScript
const root = document.documentElement;
root.style.setProperty("--color-primary", "#e11d48");
getComputedStyle(root).getPropertyValue("--spacing");
```

---

## 🎬 Animations & Keyframes

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card {
  animation: fadeInUp 0.5s ease-out forwards;
  animation-delay: 0.1s;
}

/* Looping spinner */
@keyframes spin { to { transform: rotate(360deg); } }
.spinner { animation: spin 1s linear infinite; }
```

Shorthand: `animation: name duration timing delay iteration direction fill-mode;`

> ♿ Respect `@media (prefers-reduced-motion: reduce)`.

---

## 🧩 Modern CSS Features

```css
/* Nesting (native, no preprocessor needed) */
.card {
  color: #333;
  & .title { font-weight: 700; }
  &:hover { box-shadow: 0 4px 12px rgb(0 0 0 / 0.1); }
}

/* :has() — the "parent selector" */
.card:has(img) { padding-top: 0; }
form:has(:invalid) .submit { opacity: 0.5; }

/* Logical properties (RTL-friendly) */
.box { margin-inline: auto; padding-block: 1rem; }

/* Scroll snap */
.carousel { scroll-snap-type: x mandatory; overflow-x: auto; }
.slide { scroll-snap-align: start; }

/* Modern functions */
.el { width: min(90%, 60ch); height: max(200px, 30vh); }
.el { color: color-mix(in oklch, blue 60%, white); }
```

---

## 🅢 Sass / SCSS (Preprocessor)

Adds variables, nesting, mixins, functions, partials — compiled to CSS.

```scss
// _variables.scss
$primary: #4f46e5;
$breakpoints: (sm: 640px, md: 768px, lg: 1024px);

@mixin respond($key) {
  @media (min-width: map-get($breakpoints, $key)) { @content; }
}

.card {
  $pad: 16px;
  padding: $pad;
  background: $primary;
  .title { font-size: 1.25rem; }        // nesting
  &:hover { background: darken($primary, 10%); } // functions

  @include respond(md) { padding: $pad * 2; }    // mixin usage
}

// Loops
@each $name, $val in (success: green, error: red) {
  .text-#{$name} { color: $val; }
}
```

Key features: `@use`/`@forward` (modules), `@mixin`/`@include`, `@function`, `@if`/`@each`/`@for`, placeholder selectors `%`.

---

## 🌬️ Tailwind CSS (Utility-First)

Compose designs from small utility classes; no custom CSS files for most work.

```html
<button class="px-4 py-2 rounded-lg bg-indigo-600 text-white
			   hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400
			   md:px-6 dark:bg-indigo-500 transition">
  Save
</button>
```

```js
// tailwind.config.js
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
	extend: {
	  colors: { brand: "#4f46e5" },
	  spacing: { 18: "4.5rem" },
	},
  },
  plugins: [],
};
```

- **Responsive/state prefixes**: `sm:`, `md:`, `hover:`, `focus:`, `dark:`, `group-hover:`.
- **`@apply`** to extract repeated utilities into a class.
- Pairs with **clsx**/**tailwind-merge** for conditional classes.

---

## 💅 CSS-in-JS (Component-Scoped Styles)

Popular in React. Styles co-located with components, scoped automatically.

```jsx
// styled-components / Emotion
import styled from "styled-components";

const Button = styled.button`
  padding: 8px 16px;
  background: ${(props) => (props.$primary ? "#4f46e5" : "#e5e7eb")};
  color: ${(props) => (props.$primary ? "#fff" : "#111")};
  &:hover { opacity: 0.9; }
`;

<Button $primary>Save</Button>;
```

### CSS Modules (scoped without runtime cost)

```css
/* Button.module.css */
.button { padding: 8px 16px; }
```
```jsx
import styles from "./Button.module.css";
<button className={styles.button}>Save</button>;
```

### Zero-runtime options
**Vanilla Extract**, **Linaria**, **Panda CSS** — type-safe styles compiled at build time.

---

## 🧠 Choosing a Styling Approach

| Approach | Best for |
|---|---|
| Plain CSS + custom properties | Small projects, full control |
| CSS Modules | Component scoping, no runtime |
| Sass | Design systems, complex logic |
| Tailwind | Fast iteration, consistency, teams |
| CSS-in-JS | Dynamic, prop-driven styling in React |

---

## 🎨 Design Tokens & Systems

Centralize colors, spacing, typography as **tokens** (CSS variables or a theme object) so the whole app stays consistent. Component libraries built on this idea: **Material UI**, **Chakra UI**, **shadcn/ui**, **Radix**, **Bootstrap**.

---

## ✅ Key Takeaways

- Custom properties enable runtime theming and JS interop.
- Native nesting, `:has()`, and logical properties reduce the need for preprocessors.
- Sass, Tailwind, and CSS-in-JS solve **scaling** styles differently — pick per project.
- Design tokens keep large apps visually consistent.

➡ **Next:** [Browser, DOM & Web APIs](../41-Browser-DOM-Web-APIs/browser-dom-web-apis.md)

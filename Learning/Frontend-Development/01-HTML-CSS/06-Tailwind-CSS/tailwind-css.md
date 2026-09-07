# 🌬️ Tailwind CSS — Utility-First Styling

> 💼 **Industry Perspective:** In professional frontend teams, **Tailwind CSS — Utility-First Styling** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Tailwind CSS** is a *utility-first* framework. Instead of writing custom CSS classes, you compose designs directly in your markup using small, single-purpose classes like `flex`, `pt-4`, `text-center`, and `bg-blue-500`.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Traditional CSS: you invent semantic class names and write rules in a separate file.

```html
<!-- Traditional -->
<div class="card">...</div>
<style>
  .card { padding: 1rem; border-radius: .5rem; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
</style>
```

Tailwind: you apply pre-built **utility classes** right where you need them.

```html
<!-- Tailwind -->
<div class="p-4 rounded-lg bg-white shadow">...</div>
```

You stop context-switching between HTML and CSS, and you stop inventing class names.

---

## ⚙️ Setup

The modern way (Tailwind v4) uses the Vite plugin or the CLI.

```bash
npm install tailwindcss @tailwindcss/vite
```

```js
// vite.config.js
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
};
```

```css
/* src/style.css */
@import "tailwindcss";
```

Then include the stylesheet and start writing utilities in your HTML/JSX.

---

## 📏 Spacing, Sizing & the Scale

Tailwind uses a numeric scale where each unit ≈ `0.25rem` (4px).

```html
<div class="p-4">padding: 1rem</div>
<div class="mt-2 mb-6">margin-top .5rem, margin-bottom 1.5rem</div>
<div class="px-8 py-3">horizontal 2rem, vertical .75rem</div>
<div class="w-64 h-32">width 16rem, height 8rem</div>
```

| Prefix | Property |
|--------|----------|
| `p` / `m` | padding / margin (`t b l r x y`) |
| `w` / `h` | width / height |
| `gap` | grid/flex gap |
| `space-x` / `space-y` | spacing between children |

---

## 🎨 Colors, Typography & Backgrounds

```html
<p class="text-lg font-semibold text-gray-800">Heading-ish text</p>
<p class="text-sm text-blue-600 underline">A link</p>
<div class="bg-indigo-500 text-white rounded-md">Colored box</div>
```

Colors follow a `color-shade` pattern (`50`–`950`): `bg-red-100`, `bg-red-500`, `bg-red-900`.

---

## 📐 Layout — Flexbox & Grid

```html
<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div><div>2</div><div>3</div>
</div>
```

---

## 📱 Responsive Design

Tailwind is **mobile-first**. Unprefixed utilities apply to all sizes; prefixes apply from that breakpoint **up**.

```html
<div class="text-center sm:text-left md:flex lg:grid lg:grid-cols-4">
  <!-- centered on mobile, left on ≥640px, flex on ≥768px, 4-col grid on ≥1024px -->
</div>
```

| Prefix | Min width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## ✨ States: Hover, Focus, Dark Mode

Prefix any utility with a state variant.

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 active:scale-95
			   dark:bg-blue-300 dark:text-black rounded px-4 py-2 transition">
  Click me
</button>
```

- `hover:` `focus:` `active:` `disabled:` `group-hover:` `peer-checked:` and more.
- `dark:` applies in dark mode.

---

## 🔁 Avoiding Repetition

Repeating long class lists? Two clean approaches:

```html
<!-- 1. Extract a component (React/Vue/etc.) -->
<Button>Save</Button>
```

```css
/* 2. Compose with @apply for genuinely reused patterns */
.btn {
  @apply px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700;
}
```

> Prefer components over `@apply` — the whole point of Tailwind is to avoid inventing class names.

---

## 🛠️ Arbitrary Values

Need a value not on the scale? Use square brackets.

```html
<div class="top-[117px] bg-[#1da1f2] w-[calc(100%-2rem)] text-[13px]">
  Custom one-off values
</div>
```

---

## 🎯 Key Takeaways

1. Tailwind is **utility-first** — style in your markup, not in separate CSS files.
2. Use the **spacing scale** (`p-4`, `mt-2`) and semantic **color shades** (`bg-blue-500`).
3. It's **mobile-first**: `md:`, `lg:` prefixes apply at that breakpoint and up.
4. State variants (`hover:`, `focus:`, `dark:`) handle interactivity and theming.
5. Extract **components** to reuse patterns; reach for `@apply` only when necessary.

⬅ [Back to Index](../README.md)

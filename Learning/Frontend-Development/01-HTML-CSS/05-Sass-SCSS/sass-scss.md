# 💅 Sass / SCSS — CSS with Superpowers

> 💼 **Industry Perspective:** In professional frontend teams, **Sass / SCSS — CSS with Superpowers** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Sass** (Syntactically Awesome Style Sheets) is a CSS *preprocessor*. It adds variables, nesting, functions, mixins, and modules on top of CSS, then compiles down to plain CSS the browser understands. **SCSS** is its most popular syntax — a superset of CSS, so every valid CSS file is valid SCSS.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

You write more expressive, DRY stylesheets, and a build step compiles them to regular CSS.

```scss
// input.scss  →  compiles to  →  output.css
$primary: #3b82f6;
.btn { background: $primary; }
```

---

## ⚙️ Setup

```bash
npm install -D sass
npx sass input.scss output.css      # compile once
npx sass --watch src:dist           # watch mode
```

Most bundlers (Vite, webpack) support `.scss` imports directly.

---

## 🔢 Variables

```scss
$primary: #3b82f6;
$spacing: 8px;
$font-stack: system-ui, sans-serif;

body {
  font-family: $font-stack;
  padding: $spacing * 2;
  color: $primary;
}
```

---

## 🪆 Nesting

Mirror your HTML structure — but don't nest too deep (3 levels max).

```scss
.card {
  padding: 1rem;

  .title { font-weight: bold; }

  &:hover { box-shadow: 0 2px 8px rgba(0,0,0,.15); }  // & = parent selector

  &--featured { border: 2px solid gold; }             // BEM modifier
}
```

---

## ♻️ Mixins — Reusable Blocks

```scss
@mixin flex-center($direction: row) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: $direction;
}

.modal { @include flex-center(column); }
```

---

## 🧬 Functions & Operations

```scss
@function rem($px) { @return $px / 16 * 1rem; }

.title { font-size: rem(24); }        // 1.5rem

// Built-in color functions
.btn:hover { background: darken($primary, 10%); }
```

---

## 🧩 Partials & Modules

Split styles into files prefixed with `_`, then combine with `@use` (modern) instead of `@import`.

```scss
// _variables.scss
$primary: #3b82f6;

// main.scss
@use 'variables' as v;
.btn { color: v.$primary; }
```

---

## 🔁 Control Flow

```scss
@each $name, $color in (success: green, danger: red, warning: orange) {
  .alert-#{$name} { background: $color; }
}

@for $i from 1 through 4 {
  .m-#{$i} { margin: #{$i * 4}px; }
}
```

---

## 🎯 Key Takeaways

1. Sass/SCSS compiles to plain CSS via a build step.
2. **Variables**, **nesting**, and **mixins** keep styles DRY and organized.
3. Use `&` for parent references (great for `:hover` and BEM modifiers).
4. Split code into **partials** and combine with `@use` (prefer over `@import`).
5. **Loops** (`@each`, `@for`) generate repetitive utility classes programmatically.

⬅ [Back to Index](../README.md)

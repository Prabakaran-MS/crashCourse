# 🎨 CSS Core — Styling the Web

> 💼 **Industry Perspective:** In professional frontend teams, **CSS Core — Styling the Web** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **CSS (Cascading Style Sheets)** controls how HTML *looks*. HTML is the structure; CSS is the paint, spacing, colors, and typography.

⬅ [Back to Index](../README.md)

---

## 🧠 How CSS Works

A **rule** targets elements with a **selector** and applies **declarations** (property: value).

```css
selector {
  property: value;   /* one declaration */
  color: #333;
}
```

Three ways to include CSS:

```html
<!-- 1. External (best) -->
<link rel="stylesheet" href="styles.css" />
<!-- 2. Internal -->
<style> p { color: blue; } </style>
<!-- 3. Inline (avoid) -->
<p style="color: blue;">Hi</p>
```

---

## 🎯 Selectors

```css
* { }                 /* universal */
p { }                 /* type/element */
.btn { }              /* class */
#header { }           /* id */
[type="text"] { }     /* attribute */

/* Combinators */
.card p { }           /* descendant */
.card > p { }         /* direct child */
h2 + p { }            /* adjacent sibling */
h2 ~ p { }            /* general sibling */

/* Grouping */
h1, h2, h3 { }

/* Pseudo-classes */
a:hover, a:focus, a:active { }
li:first-child, li:last-child, li:nth-child(2n) { }
input:checked, input:disabled, input:valid { }
:not(.active) { }
:is(h1, h2, h3) { }
:where(section, article) { }

/* Pseudo-elements */
p::first-line { }
p::before { content: "→ "; }
p::after { content: ""; }
::selection { background: yellow; }
```

---

## ⚖️ Specificity & the Cascade

When multiple rules target the same element, the winner is decided by **specificity**, then **source order**.

| Selector type | Weight |
|---|---|
| Inline style (`style="…"`) | 1,0,0,0 |
| ID (`#id`) | 0,1,0,0 |
| Class, attribute, pseudo-class (`.c`, `[x]`, `:hover`) | 0,0,1,0 |
| Element, pseudo-element (`p`, `::before`) | 0,0,0,1 |

```css
#nav .link { color: red; }   /* 0,1,1,0  — wins */
.menu .link { color: blue; } /* 0,0,2,0 */
```

- **`!important`** overrides everything (use sparingly — it breaks the cascade).
- **Inheritance**: some properties (color, font) inherit from parent; layout properties do not.
- **`inherit`, `initial`, `unset`, `revert`** control inheritance explicitly.

---

## 📦 The Box Model

Every element is a box: **content → padding → border → margin**.

```css
.box {
  width: 300px;
  padding: 16px;
  border: 2px solid #333;
  margin: 24px;
  box-sizing: border-box; /* width now INCLUDES padding + border */
}
```

> ✅ A near-universal reset: `*, *::before, *::after { box-sizing: border-box; }`

```css
/* Shorthands */
margin: 10px;               /* all sides */
margin: 10px 20px;          /* vertical | horizontal */
margin: 10px 20px 30px 40px;/* top right bottom left */
padding: 0 auto;
border: 1px solid red;
```

---

## 📏 Units

| Unit | Meaning |
|---|---|
| `px` | Absolute pixels |
| `%` | Relative to parent |
| `em` | Relative to element's font-size |
| `rem` | Relative to root font-size (predictable — preferred) |
| `vw` / `vh` | 1% of viewport width/height |
| `vmin` / `vmax` | 1% of smaller/larger viewport dimension |
| `ch` | Width of the `0` character |
| `fr` | Fraction of free space (Grid) |

```css
html { font-size: 16px; }
h1 { font-size: 2rem; }   /* 32px */
.container { width: min(90%, 1200px); }
```

---

## 🎨 Colors & Backgrounds

```css
.el {
  color: #ff0000;
  color: rgb(255 0 0 / 50%);
  color: hsl(0 100% 50%);
  color: oklch(0.7 0.15 200);      /* modern, perceptually uniform */

  background: #f5f5f5;
  background: linear-gradient(45deg, #667eea, #764ba2);
  background: radial-gradient(circle, #fff, #000);
  background-image: url("bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

---

## ✍️ Typography

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.02em;
  text-align: left;
}
h1 { text-transform: uppercase; text-decoration: underline; }
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
  font-display: swap;
}
```

---

## 👁️ Display & Visibility

```css
.el { display: block; }        /* full width, new line */
.el { display: inline; }       /* flows in text, no width/height */
.el { display: inline-block; } /* inline but respects width/height */
.el { display: none; }         /* removed from layout */
.el { visibility: hidden; }    /* invisible but keeps space */
.el { opacity: 0; }            /* transparent but interactive */
```

---

## 📍 Positioning

```css
.static   { position: static; }   /* default */
.relative { position: relative; top: 10px; } /* offset from itself */
.absolute { position: absolute; top: 0; right: 0; } /* vs nearest positioned ancestor */
.fixed    { position: fixed; bottom: 20px; }  /* vs viewport */
.sticky   { position: sticky; top: 0; }       /* sticks when scrolling */

.layer { z-index: 10; } /* stacking order (needs a position) */
```

---

## 🔁 Transitions & Transforms

```css
.btn {
  transition: background 0.3s ease, transform 0.2s;
}
.btn:hover {
  background: #333;
  transform: scale(1.05) translateY(-2px) rotate(2deg);
}
```

---

## ✅ Key Takeaways

- CSS = **selectors + declarations**, resolved by the **cascade + specificity**.
- Always set `box-sizing: border-box`.
- Prefer `rem` for scalable, predictable sizing.
- Understand positioning contexts before debugging layout.

➡ **Next:** [CSS Layout — Flexbox & Grid](../39-CSS-Layout/css-layout.md)

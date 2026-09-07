# 📐 CSS Layout — Flexbox, Grid & Responsive Design

> 💼 **Industry Perspective:** In professional frontend teams, **CSS Layout — Flexbox, Grid & Responsive Design** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Modern layout is built on two systems: **Flexbox** (1-dimensional) and **Grid** (2-dimensional). Together they replace old float/table hacks.

⬅ [Back to Index](../README.md)

---

## 🔀 Flexbox — One Dimension (row OR column)

Great for **navbars, toolbars, centering, distributing space** along a single axis.

```css
.container {
  display: flex;
  flex-direction: row;          /* row | row-reverse | column | column-reverse */
  justify-content: space-between; /* main axis alignment */
  align-items: center;          /* cross axis alignment */
  gap: 16px;                    /* spacing between items */
  flex-wrap: wrap;              /* allow items to wrap */
}
```

### `justify-content` (main axis)
`flex-start` · `flex-end` · `center` · `space-between` · `space-around` · `space-evenly`

### `align-items` (cross axis)
`stretch` (default) · `flex-start` · `flex-end` · `center` · `baseline`

### Item properties

```css
.item {
  flex-grow: 1;    /* share of extra space */
  flex-shrink: 1;  /* how it shrinks */
  flex-basis: 200px; /* starting size */
  flex: 1 1 200px; /* shorthand: grow shrink basis */
  align-self: flex-end; /* override container's align-items */
  order: 2;        /* visual reorder */
}
```

### Perfect centering

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## 🔲 CSS Grid — Two Dimensions (rows AND columns)

Great for **page layouts, card grids, complex arrangements**.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}
```

### Flexible tracks

```css
.grid {
  /* Responsive without media queries! */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

- `fr` — fraction of available space.
- `minmax(min, max)` — track between limits.
- `auto-fit` / `auto-fill` — create as many columns as fit.
- `repeat(n, …)` — repeat a pattern.

### Named areas (very readable)

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
	"header header"
	"sidebar main"
	"footer footer";
  min-height: 100vh;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

### Placing items by lines

```css
.item {
  grid-column: 1 / 3;   /* from line 1 to line 3 (spans 2) */
  grid-row: 2 / 4;
  grid-column: span 2;  /* span syntax */
}
```

### Aligning in Grid

```css
.grid {
  justify-items: center; /* inline axis, each cell */
  align-items: center;   /* block axis, each cell */
  justify-content: center; /* whole grid within container */
  place-items: center;   /* shorthand */
}
```

---

## 📱 Responsive Design

### The viewport meta (required)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Media queries

```css
/* Mobile-first: base styles for small screens, enhance upward */
.container { padding: 1rem; }

@media (min-width: 768px) {
  .container { padding: 2rem; }
}
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin-inline: auto; }
}

/* Feature & preference queries */
@media (prefers-color-scheme: dark) { body { background: #111; color: #eee; } }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
@media print { nav { display: none; } }
```

### Common breakpoints

| Label | Width |
|---|---|
| Mobile | < 640px |
| Tablet | 640–1024px |
| Desktop | 1024–1440px |
| Large | > 1440px |

### Container queries (modern — respond to a parent, not the viewport)

```css
.card-wrap { container-type: inline-size; }

@container (min-width: 400px) {
  .card { display: grid; grid-template-columns: 120px 1fr; }
}
```

### Fluid sizing with `clamp()`

```css
h1 { font-size: clamp(1.5rem, 4vw + 1rem, 3rem); }
.section { width: clamp(320px, 90%, 1200px); }
```

---

## 🧰 Legacy & Utility Techniques

```css
.clearfix::after { content: ""; display: table; clear: both; } /* old float fix */
.aspect { aspect-ratio: 16 / 9; }        /* modern aspect ratios */
.scroll { overflow: auto; overscroll-behavior: contain; }
.sticky-header { position: sticky; top: 0; }
```

---

## 🧭 When to Use What

| Need | Use |
|---|---|
| A row of buttons / navbar | Flexbox |
| Center one thing | Flexbox (or `place-items` Grid) |
| Full page layout | Grid (areas) |
| Card gallery that reflows | Grid `auto-fit` + `minmax` |
| Align along one axis | Flexbox |
| Align on two axes | Grid |

---

## ✅ Key Takeaways

- **Flexbox = 1D**, **Grid = 2D** — they complement each other.
- `gap` works in both — stop using margins for spacing.
- Design **mobile-first** with `min-width` media queries.
- Reach for `clamp()`, `minmax()`, `auto-fit`, and container queries for fluid, modern layouts.

➡ **Next:** [Modern CSS & Styling Systems](../40-Modern-CSS/modern-css.md)

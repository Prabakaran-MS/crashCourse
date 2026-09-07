# 🅱️ Bootstrap — The Component Framework

> 💼 **Industry Perspective:** In professional frontend teams, **Bootstrap — The Component Framework** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Bootstrap** is a *component-first* CSS framework. Instead of composing tiny utilities, you drop in ready-made, styled components — buttons, cards, navbars, modals, grids — and customize as needed. It's the fastest way to a consistent, responsive UI.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Where Tailwind gives you *utilities* to build components, Bootstrap gives you the **components themselves**, pre-designed and responsive out of the box.

```html
<button class="btn btn-primary">Save</button>
<div class="alert alert-success">Saved!</div>
```

You get a polished, accessible UI immediately — trading fine-grained control for speed.

---

## ⚙️ Setup

**CDN (fastest):**

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

**npm (for build tools / customization):**

```bash
npm install bootstrap
```

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

## 📐 The Grid System

Bootstrap's 12-column responsive grid uses `container` → `row` → `col`.

```html
<div class="container">
  <div class="row">
	<div class="col-12 col-md-8">Main content</div>
	<div class="col-12 col-md-4">Sidebar</div>
  </div>
</div>
```

- **12 columns** per row; children split them (`col-6` = half width).
- Breakpoint infixes: `col-sm-`, `col-md-`, `col-lg-`, `col-xl-`, `col-xxl-`.
- `col` alone = equal-width auto columns.

---

## 🧩 Common Components

```html
<!-- Card -->
<div class="card" style="width: 18rem;">
  <div class="card-body">
	<h5 class="card-title">Title</h5>
	<p class="card-text">Some content.</p>
	<a href="#" class="btn btn-primary">Go</a>
  </div>
</div>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
	<a class="navbar-brand" href="#">Brand</a>
  </div>
</nav>

<!-- Alert, Badge, Spinner -->
<div class="alert alert-warning">Careful!</div>
<span class="badge bg-danger">New</span>
<div class="spinner-border" role="status"></div>
```

---

## 🛠️ Utility Classes

Bootstrap 5 also ships utilities (spacing, colors, flex) similar to Tailwind — handy for quick tweaks.

```html
<div class="d-flex justify-content-between align-items-center p-3 mt-2 bg-light rounded shadow-sm">
  <span class="text-primary fw-bold">Left</span>
  <span class="text-muted">Right</span>
</div>
```

| Class | Meaning |
|-------|---------|
| `d-flex` | display: flex |
| `p-3` / `m-2` | padding / margin (scale 0–5) |
| `text-primary` | themed text color |
| `rounded` / `shadow-sm` | border radius / shadow |

---

## ⚡ Interactive Components (JavaScript)

Modals, dropdowns, tooltips, and collapses need Bootstrap's JS bundle.

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demo">Open</button>

<div class="modal fade" id="demo" tabindex="-1">
  <div class="modal-dialog">
	<div class="modal-content">
	  <div class="modal-body">Hello from a modal!</div>
	</div>
  </div>
</div>
```

Trigger via `data-bs-*` attributes or programmatically: `new bootstrap.Modal(el).show()`.

---

## 🎨 Customizing with Sass

Override Bootstrap's Sass variables before importing to theme it.

```scss
// custom.scss
$primary: #6f42c1;
$border-radius: 1rem;
@import "bootstrap/scss/bootstrap";
```

---

## 🆚 Bootstrap vs Tailwind

| | Bootstrap | Tailwind |
|--|-----------|----------|
| Style | Component-first | Utility-first |
| Speed to prototype | ⚡ Very fast | Fast |
| Design uniqueness | Looks "Bootstrappy" | Fully custom |
| Bundle control | Ships components | Purges unused utilities |
| Best for | Dashboards, internal tools, MVPs | Custom-branded apps |

---

## 🎯 Key Takeaways

1. Bootstrap is **component-first** — drop in styled, responsive components fast.
2. Master the **12-column grid** (`container` → `row` → `col-*`).
3. Interactive components need the **JS bundle** + `data-bs-*` attributes.
4. Customize via **Sass variables** for a unique theme.
5. Choose Bootstrap for speed/consistency, Tailwind for full design control.

⬅ [Back to Index](../README.md)

# 🪜 Visual Hierarchy & Composition

> 💼 **Industry Perspective:** In professional frontend teams, **Visual Hierarchy & Composition** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Visual hierarchy guides the eye to what matters first. It's how a UI tells users "look here, then here."

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Users scan, they don't read. Control attention with **size, color, contrast, spacing, and position**.

---

## 🛠️ Tools of Hierarchy

| Tool | Effect |
|------|--------|
| **Size** | Bigger = more important |
| **Weight/Color** | Bold/high-contrast draws the eye |
| **Spacing** | Isolation creates emphasis |
| **Position** | Top-left gets seen first (LTR) |
| **Depth** | Shadows/elevation signal importance |

---

## 👁️ Scanning Patterns

- **F-pattern** — text-heavy pages (articles, results).
- **Z-pattern** — simple, visual pages (landing pages).

Place key actions along these paths.

---

## 🎯 Emphasis: One Primary Action

Each screen should have **one** obvious primary action. Everything else is secondary/tertiary.

```html
<button class="btn-primary">Save changes</button>
<button class="btn-ghost">Cancel</button>
```

---

## ⚖️ Balance & Alignment

- Align elements to a shared grid/edge — misalignment reads as "broken".
- Balance visual weight across the layout (symmetry or intentional asymmetry).

---

## 🎯 Key Takeaways

1. Users **scan** — design for it.
2. Control attention with size, color, spacing, position, depth.
3. Use **F/Z patterns** to place key content.
4. One **primary action** per screen.
5. **Alignment** creates order and trust.

⬅ [Back to Index](../README.md)

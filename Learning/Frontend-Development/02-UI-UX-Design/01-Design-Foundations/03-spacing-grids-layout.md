# 📐 Spacing, Grids & Layout

> 💼 **Industry Perspective:** In professional frontend teams, **Spacing, Grids & Layout** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Consistent spacing and alignment are what separate amateur UIs from professional ones. Space is a design element.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Use a **spacing scale** based on a base unit (usually 4px or 8px). Every margin, padding, and gap comes from the scale — never random values.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
```

---

## 🧲 The 8-Point Grid

Design in multiples of 8 (with 4 for fine tuning). It keeps rhythm consistent across components and screens.

---

## 🕸️ Layout Grids

- **Columns**: 12-column grids are the industry norm for responsive layouts.
- **Gutters**: consistent gaps between columns.
- **Margins**: breathing room at container edges.

```css
.container { max-width: 1200px; margin-inline: auto; padding-inline: var(--space-4); }
.grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-4); }
```

---

## 🌬️ White Space

**Negative space** improves comprehension and focus. Group related items with *less* space; separate unrelated ones with *more* (proximity principle).

---

## 🎯 Key Takeaways

1. Use a **spacing scale** (4/8px base) for all spacing.
2. Follow the **8-point grid** for visual rhythm.
3. Use **12-column grids** for responsive layouts.
4. **White space** is functional, not wasted.
5. Group with proximity; separate with space.

⬅ [Back to Index](../README.md)

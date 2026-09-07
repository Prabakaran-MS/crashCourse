# ♿ Accessibility-Driven Design (Inclusive Design)

> 💼 **Industry Perspective:** In professional frontend teams, **Accessibility-Driven Design (Inclusive Design)** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Designing for accessibility from the start produces better products for *everyone* — not just users with disabilities.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

**Inclusive design** considers the full range of human diversity (ability, language, device, context). Accessibility (a11y) is a measurable subset guided by **WCAG**.

---

## 📏 WCAG — The POUR Principles

| Principle | Meaning |
|-----------|---------|
| **Perceivable** | Content works for all senses (alt text, captions, contrast) |
| **Operable** | Usable by keyboard, not just mouse |
| **Understandable** | Clear language, predictable behavior |
| **Robust** | Works with assistive tech (semantic HTML, ARIA) |

Target **WCAG 2.2 AA** as the industry baseline.

---

## 🎯 Design-Time Decisions

- **Contrast**: 4.5:1 body text; don't rely on color alone.
- **Touch targets**: min 44×44px.
- **Focus states**: visible focus rings — never remove them.
- **Text**: resizable up to 200% without breaking layout.
- **Motion**: respect `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## 🧩 Semantics First

Use the right element (`<button>`, `<nav>`, `<label>`) before reaching for ARIA. "No ARIA is better than bad ARIA."

---

## 🎯 Key Takeaways

1. Design **inclusively** from the start, not as a retrofit.
2. Follow **WCAG POUR** — target 2.2 AA.
3. Ensure **contrast, focus states, and touch targets**.
4. Respect **reduced-motion** preferences.
5. **Semantic HTML** first, ARIA only when needed.

⬅ [Back to Index](../README.md)

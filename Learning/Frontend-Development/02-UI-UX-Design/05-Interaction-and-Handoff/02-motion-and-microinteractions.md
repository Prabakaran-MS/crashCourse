# 🎬 Motion & Micro-interactions

> 💼 **Industry Perspective:** In professional frontend teams, **Motion & Micro-interactions** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Motion, used purposefully, guides attention, communicates relationships, and adds delight. Used carelessly, it distracts and annoys.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Animation should have **purpose**: explain a change, provide feedback, or maintain context — never decoration for its own sake.

---

## 🎯 Purposes of Motion

- **Feedback** — button press, toggle switch.
- **Orientation** — where did this panel come from/go?
- **Continuity** — smooth transitions between states/pages.
- **Guidance** — draw the eye to what changed.

---

## ⏱️ Timing & Easing

| Duration | Use |
|----------|-----|
| 100–150ms | Small (hover, toggles) |
| 200–300ms | Medium (dropdowns, modals) |
| 300–500ms | Large (page/section transitions) |

Use natural **easing** (`ease-out` for entering, `ease-in` for exiting), not linear.

```css
.panel { transition: transform 250ms ease-out, opacity 250ms ease-out; }
```

---

## ✨ Micro-interactions

Tiny, functional animations: a heart that fills on like, a checkmark on success, input validation feedback. They make products feel responsive and human.

---

## ♿ Accessibility

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 🎯 Key Takeaways

1. Motion must have **purpose** (feedback, orientation, continuity, guidance).
2. Keep durations short; use **natural easing**.
3. **Micro-interactions** add responsiveness and delight.
4. Always respect **prefers-reduced-motion**.
5. Subtle > flashy.

⬅ [Back to Index](../README.md)

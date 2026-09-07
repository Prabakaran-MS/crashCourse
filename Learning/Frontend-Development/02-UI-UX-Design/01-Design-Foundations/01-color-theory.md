# 🎨 Color Theory for UI

> 💼 **Industry Perspective:** In professional frontend teams, **Color Theory for UI** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Color sets mood, guides attention, and communicates meaning. Good UI color is *systematic*, not decorative — built on a palette with clear roles.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Great UIs use a **small, structured palette** with defined roles, not a rainbow. Every color earns its place.

| Role | Purpose |
|------|---------|
| **Primary** | Brand + main actions |
| **Secondary** | Supporting accents |
| **Neutral** | Text, backgrounds, borders (the 90% of a UI) |
| **Semantic** | Success (green), Warning (amber), Danger (red), Info (blue) |

---

## 🌈 Color Models

- **HEX** — `#3b82f6` (compact, common).
- **RGB** — `rgb(59 130 246)` (screen-native).
- **HSL** — `hsl(217 91% 60%)` — **best for UI** because you tune Hue, Saturation, Lightness independently to build shade scales.

```css
:root {
  --blue-500: hsl(217 91% 60%);
  --blue-600: hsl(217 91% 50%); /* just drop lightness for a "darker" step */
}
```

---

## 🪜 Building a Shade Scale

Each color needs steps (50–900) for backgrounds, borders, text, and hover states.

```css
--blue-50:  hsl(214 100% 97%);
--blue-100: hsl(214 95% 93%);
--blue-500: hsl(217 91% 60%);  /* base */
--blue-700: hsl(217 91% 42%);
--blue-900: hsl(224 64% 33%);
```

---

## ♿ Contrast & Accessibility

Text must meet **WCAG contrast ratios**:

- **4.5:1** for normal text, **3:1** for large text (AA).
- Never rely on color alone to convey meaning (add icons/text).

```css
/* Good: dark text on light bg */
color: hsl(222 47% 11%);
background: hsl(0 0% 100%);
```

---

## 🎯 Key Takeaways

1. Use a **structured palette**: primary, secondary, neutral, semantic.
2. Prefer **HSL** to build consistent shade scales.
3. Neutrals do most of the work in real UIs.
4. Always verify **contrast** (4.5:1 for body text).
5. Never use color as the *only* signal.

⬅ [Back to Index](../README.md)

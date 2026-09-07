# 🔤 Typography for UI

> 💼 **Industry Perspective:** In professional frontend teams, **Typography for UI** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Typography is ~90% of web design. Readable, well-scaled type makes an interface feel professional instantly.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Establish a **type system**: a font family, a modular size scale, consistent line-heights, and weights — then reuse it everywhere.

---

## 🔠 Font Choices

- **Sans-serif** (Inter, Roboto, system-ui) — default for screens/UI.
- **Serif** (Georgia) — long-form reading, editorial.
- **Monospace** (JetBrains Mono) — code.

```css
:root {
  --font-sans: system-ui, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

---

## 📏 The Type Scale

Use a modular scale (e.g. 1.25 ratio) instead of arbitrary sizes.

```css
--text-xs:  0.75rem;
--text-sm:  0.875rem;
--text-base:1rem;
--text-lg:  1.125rem;
--text-xl:  1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
```

---

## 📐 Line Height, Length & Weight

- **Line height**: ~1.5 for body, ~1.2 for headings.
- **Line length**: 45–75 characters (`max-width: 65ch`).
- **Weights**: limit to 2–3 (e.g. 400, 600, 700).

```css
p { line-height: 1.6; max-width: 65ch; }
h1 { line-height: 1.2; font-weight: 700; }
```

---

## 🪜 Hierarchy

Differentiate levels with **size, weight, and color** — not just size.

```css
.title  { font-size: var(--text-2xl); font-weight: 700; color: hsl(222 47% 11%); }
.subtle { font-size: var(--text-sm);  color: hsl(215 16% 47%); }
```

---

## 🎯 Key Takeaways

1. Build a **type system**: family, scale, line-height, weights.
2. Use a **modular scale**, not random px values.
3. Keep body line length **45–75 chars**.
4. Create hierarchy with size **+ weight + color**.
5. Limit fonts and weights for consistency.

⬅ [Back to Index](../README.md)

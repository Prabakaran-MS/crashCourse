# 🎟️ Design Tokens

> 💼 **Industry Perspective:** In professional frontend teams, **Design Tokens** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Design tokens** are named, reusable variables for design decisions (colors, spacing, typography). They are the bridge between design tools and code.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Instead of hardcoding `#3b82f6`, you reference `color.primary`. Change the token once → the whole product updates. Tokens make theming and consistency trivial.

---

## 🪜 Token Tiers

| Tier | Example | Purpose |
|------|---------|---------|
| **Primitive / Global** | `blue-500: #3b82f6` | Raw values |
| **Semantic / Alias** | `color-action: {blue-500}` | Meaning/role |
| **Component** | `button-bg: {color-action}` | Component-specific |

Semantic tokens are the key — they decouple *meaning* from raw values.

---

## 💻 Tokens in Code

```css
:root {
  --blue-500: #3b82f6;         /* primitive */
  --color-action: var(--blue-500); /* semantic */
  --button-bg: var(--color-action);
}
.btn { background: var(--button-bg); }
```

Dark mode = swap the semantic layer:

```css
[data-theme="dark"] {
  --color-action: var(--blue-400);
  --color-bg: #0b1220;
}
```

---

## 🔧 Tooling

- **Style Dictionary** / **Tokens Studio** transform one token source into CSS, iOS, Android, etc.
- The **W3C Design Tokens** format (`.tokens.json`) is the emerging standard.

---

## 🎯 Key Takeaways

1. Tokens are **named design variables** shared by design + code.
2. Use tiers: **primitive → semantic → component**.
3. **Semantic tokens** enable theming (light/dark).
4. CSS custom properties implement tokens natively.
5. Tools like **Style Dictionary** export tokens to any platform.

⬅ [Back to Index](../README.md)

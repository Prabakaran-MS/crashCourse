# 🎛️ Designing Component APIs

> 💼 **Industry Perspective:** In professional frontend teams, **Designing Component APIs** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> A component's **API** (its props, events, and slots) is a contract. Good API design makes components easy to use correctly and hard to use wrong.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Design components like you design functions: a clear, minimal, predictable interface. Consumers shouldn't need to read the source.

---

## 🎚️ Props / Inputs

- **Minimal & focused** — expose what varies, hide the rest.
- **Sensible defaults** — works with zero config.
- **Constrained values** — use unions/enums, not free strings.

```ts
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';  // constrained
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
};
```

---

## 📡 Events / Outputs

Communicate up via events/callbacks — name them by intent (`onSave`, `change`), pass useful payloads.

```js
this.dispatchEvent(new CustomEvent('select', { detail: { id }, bubbles: true }));
```

---

## 🕳️ Slots / Children

Use slots/children for flexible content instead of dozens of props.

```jsx
// Flexible
<Modal><CustomBody /></Modal>
// Rigid — avoid
<Modal bodyText="..." bodyImage="..." bodyButton="..." />
```

---

## ✅ API Design Principles

- **Consistent** naming across the library.
- **Predictable** — similar props behave the same everywhere.
- **Composable** — small pieces combine.
- **Accessible** by default (roles, labels, focus).
- **Backwards-compatible** — avoid breaking changes.

---

## 🎯 Key Takeaways

1. A component API is a **contract** — design it deliberately.
2. Keep **props minimal**, constrained, with defaults.
3. Emit **well-named events** with useful payloads.
4. Use **slots/children** for flexible content.
5. Be **consistent, predictable, composable, accessible**.

⬅ [Back to Index](../README.md)

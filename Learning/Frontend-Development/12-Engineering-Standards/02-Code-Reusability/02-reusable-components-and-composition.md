# 🧩 Reusable Components & Composition

> 💼 **Industry Perspective:** In professional frontend teams, **Reusable Components & Composition** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Components are the primary unit of reuse in modern UIs. Well-designed components compose into complex interfaces without duplication.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Build **small, focused, configurable** components and **compose** them. Favor composition over duplication or deep inheritance.

---

## 🎛️ Configurable via Props

```jsx
function Button({ variant = 'primary', size = 'md', children, ...rest }) {
  return <button className={`btn btn-${variant} btn-${size}`} {...rest}>{children}</button>;
}
```

- Sensible **defaults**.
- Spread remaining props (`...rest`) for flexibility.

---

## 🧱 Composition Patterns

| Pattern | Idea |
|---------|------|
| **Children/slots** | Pass content in: `<Card>{...}</Card>` |
| **Compound components** | Related parts: `<Tabs><Tab/></Tabs>` |
| **Render props / hooks** | Share behavior |
| **Higher-order components** | Wrap to add behavior |

```jsx
// Composition over configuration
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

---

## 🎨 Presentational vs. Container

- **Presentational** — how it looks (props in, UI out).
- **Container** — how it works (data, state, effects).

Separating them boosts reuse and testability.

---

## 🎯 Key Takeaways

1. Build **small, focused, configurable** components.
2. Configure with **props + sensible defaults**.
3. Prefer **composition** (children, compound components).
4. Separate **presentational** vs **container** logic.
5. Composition beats duplication and inheritance.

⬅ [Back to Index](../README.md)

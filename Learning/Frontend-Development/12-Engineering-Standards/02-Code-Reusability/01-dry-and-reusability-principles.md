# ♻️ DRY & Reusability Principles

> 💼 **Industry Perspective:** In professional frontend teams, **DRY & Reusability Principles** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **DRY** (Don't Repeat Yourself) and related principles are the foundation of maintainable, reusable code.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Every piece of knowledge should have **one** authoritative representation. Duplication multiplies bugs and maintenance cost.

---

## 📚 Core Principles

| Principle | Meaning |
|-----------|---------|
| **DRY** | Don't Repeat Yourself — extract shared logic |
| **KISS** | Keep It Simple — avoid needless complexity |
| **YAGNI** | You Aren't Gonna Need It — don't over-engineer |
| **SoC** | Separation of Concerns — one responsibility per unit |
| **SRP** | Single Responsibility — a module does one thing |

---

## ⚖️ DRY vs. Premature Abstraction

Don't abstract too early. The **Rule of Three**: extract shared code after you see it **three** times. Wrong abstractions cost more than duplication.

```js
// Duplicated 3×? Extract it.
function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
```

---

## 🧩 Ways to Reuse

- **Functions/utilities** — shared logic.
- **Components** — shared UI.
- **Hooks/composables** — shared stateful logic.
- **Modules/packages** — shared across projects.

---

## 🎯 Key Takeaways

1. **DRY**: one source of truth per piece of knowledge.
2. Balance with **KISS** and **YAGNI**.
3. Follow the **Rule of Three** before abstracting.
4. Wrong abstractions are worse than duplication.
5. Reuse via functions, components, hooks, and packages.

⬅ [Back to Index](../README.md)

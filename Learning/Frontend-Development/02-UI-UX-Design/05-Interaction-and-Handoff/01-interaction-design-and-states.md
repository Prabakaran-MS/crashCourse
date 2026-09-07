# 🖱️ Interaction Design & States

> 💼 **Industry Perspective:** In professional frontend teams, **Interaction Design & States** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Interaction design defines how a UI responds to users. Every interactive element needs well-designed **states** and **feedback**.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Users need constant feedback: "Did that work? What can I click? What's happening?" Design **all states**, not just the default.

---

## 🎛️ Component States

Every interactive element should define:

| State | Meaning |
|-------|---------|
| **Default** | Resting |
| **Hover** | Pointer over it |
| **Focus** | Keyboard-selected (visible ring!) |
| **Active/Pressed** | Being clicked |
| **Disabled** | Not available |
| **Loading** | Working |
| **Error/Success** | Result feedback |

```css
.btn { background: var(--color-action); }
.btn:hover { background: var(--color-action-hover); }
.btn:focus-visible { outline: 2px solid var(--color-focus); }
.btn:disabled { opacity: .5; cursor: not-allowed; }
```

---

## 🔁 Feedback & Affordances

- **Affordance** — visual hints an element is interactive (buttons look pressable).
- **Feedback** — immediate response (ripple, spinner, toast).
- **Signifiers** — icons/labels that indicate function.

---

## 📭 Beyond the Happy Path

Design **empty**, **loading**, and **error** states — not just success:

- Empty state → guidance + call to action.
- Loading → skeletons/spinners (Doherty threshold <400ms).
- Error → clear recovery path.

---

## 🎯 Key Takeaways

1. Design **all states**: hover, focus, active, disabled, loading, error.
2. Always show **visible focus** for keyboard users.
3. Provide immediate **feedback** for every action.
4. Use **affordances/signifiers** to show interactivity.
5. Never skip **empty/loading/error** states.

⬅ [Back to Index](../README.md)

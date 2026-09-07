# 🧩 Gestalt Principles

> 💼 **Industry Perspective:** In professional frontend teams, **Gestalt Principles** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Gestalt psychology explains how the human brain groups visual elements. These principles are the foundation of intuitive layout.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

"The whole is greater than the sum of its parts." Users perceive **relationships** between elements automatically — good design uses this on purpose.

---

## 📚 The Core Principles

| Principle | Meaning | UI use |
|-----------|---------|--------|
| **Proximity** | Close items feel related | Group form fields |
| **Similarity** | Alike items feel related | Consistent button styles |
| **Common Region** | Shared container = group | Cards |
| **Continuity** | Eyes follow lines/paths | Aligned lists |
| **Closure** | Mind fills gaps | Icons, logos |
| **Figure/Ground** | Foreground vs background | Modals over dimmed page |

---

## 🎯 Applying Them

```html
<!-- Proximity + Common Region: label sits near its input, inside a group -->
<div class="field">
  <label>Email</label>
  <input type="email" />
</div>
```

- **Proximity** — reduce space between related items, increase between groups.
- **Similarity** — same role → same visual treatment.
- **Figure/Ground** — dim the background to focus attention on dialogs.

---

## 🎯 Key Takeaways

1. The brain auto-groups visuals — design with it.
2. **Proximity** and **similarity** are the most-used in UI.
3. **Common region** (cards) creates clear grouping.
4. **Figure/ground** powers modals and overlays.
5. Use these to reduce cognitive effort.

⬅ [Back to Index](../README.md)

# 🏷️ Naming Conventions & Project Structure

> 💼 **Industry Perspective:** In professional frontend teams, **Naming Conventions & Project Structure** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Names are the most-read part of code. Consistent naming and structure make code self-documenting and navigable.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Good names reveal **intent**. Consistent casing and structure let anyone predict where things are and what they do.

---

## 🔠 Casing Conventions

| Case | Used for |
|------|----------|
| `camelCase` | variables, functions |
| `PascalCase` | classes, components, types |
| `UPPER_SNAKE_CASE` | constants |
| `kebab-case` | file names, CSS classes, custom elements |

```js
const maxRetries = 3;          // camelCase
class UserProfile {}           // PascalCase
const API_BASE_URL = '/api';   // constant
```

---

## 🧭 Naming Guidelines

- Be **descriptive**: `getUserById`, not `get`.
- Booleans read as questions: `isLoading`, `hasError`, `canEdit`.
- Avoid abbreviations and single letters (except loop indices).
- Functions = **verbs**; variables = **nouns**.

---

## 📁 Project Structure

Two common approaches:

```text
By type:                 By feature (scales better):
src/                     src/
  components/              features/
  hooks/                    auth/
  utils/                      LoginForm.tsx
  services/                   useAuth.ts
							  auth.service.ts
```

**Feature-based / colocation** keeps related files together and scales for large apps.

---

## 🎯 Key Takeaways

1. Names should reveal **intent**.
2. Follow casing conventions (**camel/Pascal/UPPER/kebab**).
3. Booleans as questions; functions as verbs.
4. Prefer **feature-based** structure for scale.
5. **Colocate** related files.

⬅ [Back to Index](../README.md)

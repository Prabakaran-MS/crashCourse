# 🧹 Linting & Formatting — ESLint & Prettier

> 💼 **Industry Perspective:** In professional frontend teams, **Linting & Formatting — ESLint & Prettier** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Automated tools enforce standards so humans don't have to. **ESLint** catches problems; **Prettier** formats code consistently.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Two distinct jobs:
- **Prettier** = *formatting* (how code looks).
- **ESLint** = *code quality* (finding bugs, enforcing patterns).

Use both together.

---

## 🎨 Prettier — Opinionated Formatting

```bash
npm install -D prettier
```

```json
// .prettierrc
{ "semi": true, "singleQuote": true, "printWidth": 100, "tabWidth": 2 }
```

```bash
npx prettier --write .
```

No more arguments about spaces vs. line breaks — Prettier decides.

---

## 🔎 ESLint — Catching Problems

```bash
npm install -D eslint
npx eslint --init
```

```js
// eslint.config.js (flat config)
import js from '@eslint/js';
export default [
  js.configs.recommended,
  {
	rules: {
	  'no-unused-vars': 'warn',
	  'no-console': 'warn',
	  'prefer-const': 'error',
	},
  },
];
```

Add TypeScript (`typescript-eslint`) and framework plugins (`eslint-plugin-react`, `@angular-eslint`) as needed.

---

## 🤝 Using Them Together

Let ESLint handle quality and Prettier handle formatting (`eslint-config-prettier` turns off conflicting rules).

```jsonc
// package.json scripts
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

---

## 🎯 Key Takeaways

1. **Prettier** formats; **ESLint** finds bugs/enforces patterns.
2. Configure both via repo config files.
3. Add **TypeScript + framework** ESLint plugins.
4. Use **eslint-config-prettier** to avoid conflicts.
5. Expose `lint`/`format` **npm scripts**.

⬅ [Back to Index](../README.md)

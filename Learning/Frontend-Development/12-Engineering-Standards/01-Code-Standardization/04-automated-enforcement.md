# 🚦 Automated Enforcement — Git Hooks & CI

> 💼 **Industry Perspective:** In professional frontend teams, **Automated Enforcement — Git Hooks & CI** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Standards only work if they're enforced. Automate checks so bad code can't reach the main branch.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Shift enforcement **left**: catch issues on save, on commit, and in CI — long before code review or production.

---

## 🪝 Pre-commit Hooks

**Husky** + **lint-staged** run linters/formatters on staged files before each commit.

```bash
npm install -D husky lint-staged
npx husky init
```

```json
// package.json
"lint-staged": {
  "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,md,json}": ["prettier --write"]
}
```

Now commits are auto-formatted and linted.

---

## 📝 Commit Message Standards

**Conventional Commits** create readable history and enable automated versioning/changelogs.

```text
feat(auth): add password reset flow
fix(cart): correct total calculation
docs(readme): update setup steps
```

Enforce with **commitlint**.

---

## 🏭 Continuous Integration

Run the full suite on every push/PR:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  check:
	runs-on: ubuntu-latest
	steps:
	  - uses: actions/checkout@v4
	  - uses: actions/setup-node@v4
		with: { node-version: 20 }
	  - run: npm ci
	  - run: npm run lint
	  - run: npm test
	  - run: npm run build
```

Block merges when checks fail (branch protection).

---

## 🎯 Key Takeaways

1. **Automate** enforcement — don't rely on discipline.
2. **Husky + lint-staged** check code at commit time.
3. Use **Conventional Commits** for clean history.
4. **CI** runs lint/test/build on every PR.
5. **Branch protection** blocks failing merges.

⬅ [Back to Index](../README.md)

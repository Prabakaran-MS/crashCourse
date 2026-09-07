# 📦 Shared Libraries, Packages & Monorepos

> 💼 **Industry Perspective:** In professional frontend teams, **Shared Libraries, Packages & Monorepos** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> To reuse code *across projects*, package it. Shared libraries and monorepos scale reuse across teams and apps.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Once code is reused across repos, turn it into a **versioned package** with a clear public API — a component library, a utils package, or a shared config.

---

## 📚 What Gets Packaged

- **Component libraries** (design system in code).
- **Utility packages** (formatting, validation).
- **Shared config** (ESLint, TS, Tailwind presets).
- **API clients / SDKs**.

---

## 🏗️ Monorepos

Keep multiple packages/apps in one repo with tooling that handles builds and dependencies.

- **Tools**: Nx, Turborepo, pnpm/npm/yarn workspaces.
- **Benefits**: atomic changes across packages, shared tooling, easy local linking.

```jsonc
// package.json (workspaces)
{ "workspaces": ["packages/*", "apps/*"] }
```

---

## 🔢 Versioning & Publishing

- Follow **SemVer** (`major.minor.patch`).
- Automate releases/changelogs (Changesets, semantic-release).
- Publish to npm or a private registry.

---

## 🚪 Designing a Package's Public API

- Export a **minimal, stable** surface.
- Use an `index.ts` barrel as the entry point.
- Document usage and breaking changes.

---

## 🎯 Key Takeaways

1. Cross-project reuse → **versioned packages**.
2. Package components, utils, and **shared config**.
3. **Monorepos** (Nx/Turborepo/workspaces) scale reuse.
4. Follow **SemVer** and automate releases.
5. Expose a **minimal, stable public API**.

⬅ [Back to Index](../README.md)

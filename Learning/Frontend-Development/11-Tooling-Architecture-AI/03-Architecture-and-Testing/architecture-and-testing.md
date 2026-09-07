# 🏛️ Frontend Architecture & Testing

> 💼 **Industry Perspective:** In professional frontend teams, **Frontend Architecture & Testing** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> As apps grow, structure and testing become the difference between shipping confidently and fearing every change. This chapter covers organizing code and verifying it works.

⬅ [Back to Index](../README.md)

---

## 🧱 Component Architecture

### Composition over inheritance
Build UIs from small, focused, reusable components. Compose them rather than extending classes.

### Presentational vs Container
- **Presentational** ("dumb") — receives props, renders UI, no data fetching.
- **Container** ("smart") — fetches data, holds state, passes it down.

### Single Responsibility
Each component/module does **one thing**. Split when a file grows too large or mixes concerns (UI + data + business logic).

---

## 📁 Project Structure

```
src/
├─ components/     # shared, reusable UI
├─ features/       # feature-based folders (feature-sliced)
│  └─ auth/
│     ├─ components/
│     ├─ hooks/
│     ├─ api.ts
│     └─ types.ts
├─ hooks/          # shared hooks/composables
├─ lib/ or utils/  # helpers
├─ services/       # API clients
├─ store/          # global state
├─ routes/ or pages/
└─ assets/
```

- **Feature-based / feature-sliced** structure scales better than type-based (`components/`, `containers/`) for large apps.
- **Colocation** — keep related files (component + test + styles) together.

---

## 🧠 State Management Layers

| Layer | Examples |
|---|---|
| Local component state | `useState`, `ref` |
| Shared/global client state | Redux Toolkit, Zustand, Jotai, Pinia, Signals |
| Server/cache state | TanStack Query, SWR, RTK Query, Apollo |
| URL state | Router params, query strings |
| Form state | React Hook Form, Formik, VeeValidate |

> Don't put server data in a global store — use a server-state library. Reserve global stores for genuine UI/client state.

---

## 🎨 Design Patterns

- **Container/Presentational**, **Compound components**, **Render props**, **Hooks/Composables**, **Provider (Context)**, **HOC** (legacy).
- **Module boundaries** — clear public APIs (`index.ts`) per feature.
- **Micro-frontends** — independently deployable app slices (Module Federation, single-spa) for large orgs.
- **Monorepos** — Turborepo/Nx for shared packages, caching, affected builds.

---

## 🧪 The Testing Pyramid

```
		/\        E2E (few)        — slow, real browser, high confidence
	   /--\       Integration      — components + interactions
	  /----\      Unit (many)      — fast, isolated functions/components
```

Aim for many fast unit tests, some integration tests, few E2E tests.

---

## 🔬 Unit & Component Testing

### Vitest / Jest

```js
import { describe, it, expect } from "vitest";
import { sum } from "./math";

describe("sum", () => {
  it("adds numbers", () => {
	expect(sum(2, 3)).toBe(5);
  });
});
```

### React Testing Library (test behavior, not internals)

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments on click", async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole("button", { name: /increment/i }));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

> ✅ Query by **role/label/text** (what users see), not by class or test-id when possible. Frameworks: **@testing-library/react**, **/vue**, **/angular**.

### Mocking APIs — MSW (Mock Service Worker)

```js
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("/api/user", () => HttpResponse.json({ name: "Ada" }))
);
```

---

## 🌐 End-to-End (E2E) Testing

Drive a real browser to test full user flows.

```js
// Playwright
import { test, expect } from "@playwright/test";

test("user can log in", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Email").fill("ada@site.com");
  await page.getByLabel("Password").fill("secret");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL("/dashboard");
  await expect(page.getByText("Welcome")).toBeVisible();
});
```

Tools: **Playwright** (modern, multi-browser), **Cypress** (great DX), **Selenium** (legacy).

---

## 📸 Other Testing Types

- **Visual regression** — screenshot diffs (Percy, Chromatic, Playwright snapshots).
- **Component workshop** — Storybook (develop/document/test components in isolation).
- **Accessibility** — jest-axe, axe-core, Lighthouse CI.
- **Type checking** — `tsc --noEmit` as a test gate.
- **Performance budgets** — Lighthouse CI thresholds.

---

## 🔁 CI/CD for Frontend

```yaml
# Typical pipeline (GitHub Actions)
- run: npm ci
- run: npm run lint
- run: npm run type-check
- run: npm run test
- run: npm run build
- run: npx playwright test
# → deploy dist/ to CDN (Vercel, Netlify, Cloudflare Pages)
```

- Run lint + type-check + unit tests on every PR.
- Run E2E on a preview deployment.
- Automate releases and cache builds (Turborepo/Nx remote cache).

---

## ✅ Key Takeaways

- Prefer **composition, single responsibility, and feature-based structure**.
- Separate **local, global client, server, URL, and form** state — use the right tool per layer.
- Follow the **testing pyramid**: many unit, some integration, few E2E.
- Test **behavior** (RTL), mock APIs (MSW), and run **Playwright/Cypress** for flows.
- Wire everything into **CI/CD** with lint, type-check, test, build, and deploy.

➡ **Next:** Explore the [Cheat Sheets](../51-Cheat-Sheets/javascript-cheatsheet.md) or test yourself with the [Final Test](../52-Final-Test/interview-questions.md).

# 🧪 Testing

> 💼 **Industry Perspective:** In professional frontend teams, **Testing** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Test what the **user experiences**, not implementation details. The standard stack is **Jest/Vitest** (runner) + **React Testing Library** (render & query).

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

---

## 🧱 Rendering & querying

```tsx
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("shows the name", () => {
	render(<Greeting name="Ada" />);
	expect(screen.getByText("Hi Ada")).toBeInTheDocument();
});
```

Prefer accessible queries: `getByRole`, `getByLabelText`, `getByText`.

```tsx
screen.getByRole("button", { name: /submit/i });
screen.getByLabelText("Email");
```

---

## 🖱️ Simulating user interaction

```tsx
import userEvent from "@testing-library/user-event";

test("increments counter", async () => {
	const user = userEvent.setup();
	render(<Counter />);
	await user.click(screen.getByRole("button"));
	expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

---

## ⏳ Async & findBy

```tsx
test("loads users", async () => {
	render(<Users />);
	expect(await screen.findByText("Ada")).toBeInTheDocument(); // waits
});
```

Use `waitFor` for arbitrary async assertions:

```tsx
import { waitFor } from "@testing-library/react";
await waitFor(() => expect(mockFn).toHaveBeenCalled());
```

---

## 🎭 Mocking

```tsx
// Mock a module
vi.mock("./api", () => ({ getUsers: vi.fn(() => Promise.resolve([])) }));

// Mock fetch / network — use MSW (Mock Service Worker) for realistic tests
```

**MSW** intercepts network requests at the boundary, letting you test real fetch code without a server.

---

## 🧩 Testing hooks

```tsx
import { renderHook, act } from "@testing-library/react";
import { useToggle } from "./useToggle";

test("toggles", () => {
	const { result } = renderHook(() => useToggle());
	act(() => result.current[1]()); // call toggle
	expect(result.current[0]).toBe(true);
});
```

---

## 🌐 End-to-end (E2E)

For full-app flows in a real browser, use **Cypress** or **Playwright**.

```ts
// Playwright
test("login works", async ({ page }) => {
	await page.goto("/login");
	await page.fill("#email", "a@b.com");
	await page.click("text=Log in");
	await expect(page).toHaveURL("/dashboard");
});
```

---

## 🧠 Testing pyramid

| Level | Tool | Speed / Count |
|-------|------|---------------|
| Unit | Vitest/Jest | Fast, many |
| Component/Integration | React Testing Library | Medium |
| E2E | Cypress/Playwright | Slow, few |

---

⬅ [Back to Index](../README.md)

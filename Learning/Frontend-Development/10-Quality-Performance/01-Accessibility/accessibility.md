# ♿ Accessibility (a11y)

> 💼 **Industry Perspective:** In professional frontend teams, **Accessibility (a11y)** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Accessibility means building interfaces everyone can use — including people who rely on screen readers, keyboards, magnifiers, or voice control. It's also a legal requirement in many places (WCAG, ADA, EN 301 549).

⬅ [Back to Index](../README.md)

---

## 🧠 The Core Principle: POUR (WCAG)

| Principle | Meaning |
|---|---|
| **Perceivable** | Users can perceive the content (text alternatives, contrast, captions) |
| **Operable** | Users can operate it (keyboard, enough time, no seizures) |
| **Understandable** | Predictable, readable, helpful errors |
| **Robust** | Works with assistive tech and future tools |

Target **WCAG 2.2 Level AA** for most projects.

---

## ✅ Semantic HTML First

The biggest a11y win is using the right element — it comes with built-in roles, keyboard support, and focus.

```html
<!-- ❌ Fake button: not focusable, no keyboard, no role -->
<div class="btn" onclick="save()">Save</div>

<!-- ✅ Real button: focusable, Enter/Space work, announced as "button" -->
<button type="button" onclick="save()">Save</button>
```

Use `<nav>`, `<main>`, `<header>`, `<button>`, `<a href>`, `<label>`, `<h1>`–`<h6>` correctly.

---

## 🏷️ ARIA (Accessible Rich Internet Applications)

ARIA adds semantics **only when native HTML can't**. **Rule #1: don't use ARIA if a native element exists.**

```html
<!-- Roles -->
<div role="alert">Form saved!</div>

<!-- Labels & descriptions -->
<button aria-label="Close dialog">✕</button>
<input aria-describedby="pw-help" />
<p id="pw-help">Must be 8+ characters</p>

<!-- States -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<button aria-pressed="true">Bold</button>
<div aria-hidden="true">🎨</div>            <!-- hide decorative from AT -->
<input aria-invalid="true" aria-required="true" />

<!-- Live regions announce dynamic changes -->
<div aria-live="polite">3 results found</div>
<div aria-live="assertive" role="status"></div>
```

Common roles: `alert`, `dialog`, `tablist`/`tab`/`tabpanel`, `menu`, `navigation`, `search`, `status`, `progressbar`.

---

## ⌨️ Keyboard Accessibility

Everything usable with a mouse must work with a keyboard.

- **Tab / Shift+Tab** — move between interactive elements.
- **Enter / Space** — activate buttons/links.
- **Arrow keys** — within composite widgets (menus, tabs, radios).
- **Esc** — close dialogs/menus.

```html
<!-- tabindex -->
<div tabindex="0">Focusable custom control</div>   <!-- into tab order -->
<div tabindex="-1">Focus via JS only</div>          <!-- not in tab order -->
<!-- ❌ Never use positive tabindex (breaks natural order) -->
```

```css
/* Never remove focus outlines without a replacement */
:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}
```

### Focus management
- Move focus into a dialog when it opens; **trap** focus inside it; return focus to the trigger on close.
- Provide a **"Skip to main content"** link as the first focusable element.

```html
<a href="#main" class="skip-link">Skip to content</a>
<main id="main" tabindex="-1">…</main>
```

---

## 🎨 Visual Accessibility

- **Color contrast**: text ≥ **4.5:1** (normal), **3:1** (large/UI). Test with browser devtools.
- **Don't rely on color alone** — add icons/text for errors, states.
- **Respect** `prefers-reduced-motion` and `prefers-color-scheme`.
- Support **zoom to 200%** and text resizing without breaking layout.
- Use **relative units** (`rem`) so user font settings are honored.

---

## 📋 Accessible Forms

```html
<label for="email">Email <span aria-hidden="true">*</span></label>
<input id="email" name="email" type="email" required
	   aria-required="true" aria-describedby="email-err" />
<p id="email-err" role="alert">Please enter a valid email.</p>
```

- Every input has a real `<label>`.
- Group related fields with `<fieldset>` + `<legend>`.
- Announce errors via `role="alert"` / `aria-live` and link with `aria-describedby`.

---

## 🖼️ Images & Media

```html
<img src="chart.png" alt="Sales rose 20% in Q3" />  <!-- meaningful -->
<img src="divider.png" alt="" />                     <!-- decorative -->
<video><track kind="captions" src="c.vtt" srclang="en" /></video>
```

---

## 🧪 Testing Accessibility

- **Automated**: axe DevTools, Lighthouse, `eslint-plugin-jsx-a11y`, `jest-axe`, Pa11y. (Catches ~30–40%.)
- **Manual**: navigate the whole page with **keyboard only**; check focus order and visible focus.
- **Screen readers**: NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android).
- **Zoom** to 200% and check reflow.

```js
// jest-axe example
import { axe } from "jest-axe";
test("no a11y violations", async () => {
  const { container } = render(<App />);
  expect(await axe(container)).toHaveNoViolations();
});
```

---

## ✅ Key Takeaways

- **Semantic HTML** solves most accessibility for free.
- Use **ARIA sparingly** — only to fill gaps native HTML can't.
- Ensure **full keyboard operability** and visible focus.
- Meet **contrast** ratios and never convey meaning by color alone.
- Combine **automated + manual + screen-reader** testing.

➡ **Next:** [Web Performance](../43-Web-Performance/web-performance.md)

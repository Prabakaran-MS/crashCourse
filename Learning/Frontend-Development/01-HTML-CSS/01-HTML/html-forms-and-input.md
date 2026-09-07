# 📝 HTML Forms & Input — Collecting Data from Users

> 💼 **Industry Perspective:** In professional frontend teams, **HTML Forms & Input — Collecting Data from Users** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Forms** are how the web collects input. Every login box, search bar, checkout page, and comment field is an HTML form. Master forms and you master the primary way users *talk back* to your app.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

A form is a `<form>` element wrapping one or more **controls** (inputs, selects, textareas, buttons). When submitted, the browser gathers each control's `name` + `value` and sends them somewhere (a server, or JavaScript intercepts them).

```html
<form action="/subscribe" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />
  <button type="submit">Subscribe</button>
</form>
```

- **`action`** — where the data is sent.
- **`method`** — `get` (data in URL) or `post` (data in request body).
- **`name`** — the key each value is submitted under. **No `name` = not submitted.**

---

## 🏷️ Labels — Always Pair Them

Every input should have a `<label>`. It improves accessibility and lets users click the text to focus the field.

```html
<!-- Explicit: label's for = input's id -->
<label for="username">Username</label>
<input id="username" name="username" />

<!-- Implicit: wrap the input -->
<label>Username <input name="username" /></label>
```

---

## 🎛️ Input Types

The `type` attribute changes behavior, keyboard, and built-in validation.

| Type | Purpose |
|------|---------|
| `text` | Generic single-line text |
| `email` | Email + validation + email keyboard |
| `password` | Masked input |
| `number` | Numeric with `min`, `max`, `step` |
| `tel` | Phone number (numeric keypad on mobile) |
| `url` | URL + validation |
| `search` | Search box (with clear button) |
| `date` / `time` / `datetime-local` | Native date/time pickers |
| `color` | Color picker |
| `range` | Slider |
| `file` | File upload (`accept`, `multiple`) |
| `checkbox` | Multiple on/off choices |
| `radio` | One choice from a group (same `name`) |
| `hidden` | Sent but not shown |

```html
<input type="number" name="qty" min="1" max="10" step="1" />
<input type="range" name="volume" min="0" max="100" />
<input type="file" name="avatar" accept="image/*" multiple />
```

---

## ☑️ Checkboxes & Radios

```html
<!-- Checkboxes: independent -->
<label><input type="checkbox" name="terms" /> I accept the terms</label>

<!-- Radios: same name = one selection -->
<fieldset>
  <legend>Plan</legend>
  <label><input type="radio" name="plan" value="free" checked /> Free</label>
  <label><input type="radio" name="plan" value="pro" /> Pro</label>
</fieldset>
```

Use `<fieldset>` + `<legend>` to group related controls semantically.

---

## 📋 Select & Textarea

```html
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">— choose —</option>
  <optgroup label="Asia">
	<option value="in">India</option>
	<option value="jp">Japan</option>
  </optgroup>
</select>

<label for="bio">Bio</label>
<textarea id="bio" name="bio" rows="4" maxlength="200"></textarea>
```

---

## ✅ Built-in Validation

The browser validates before submit — no JavaScript required.

```html
<input
  type="text"
  name="username"
  required
  minlength="3"
  maxlength="20"
  pattern="[a-zA-Z0-9_]+"
  title="Letters, numbers, and underscores only"
/>
```

| Attribute | Meaning |
|-----------|---------|
| `required` | Cannot be empty |
| `minlength` / `maxlength` | Text length bounds |
| `min` / `max` | Numeric/date bounds |
| `pattern` | Regex the value must match |
| `step` | Allowed numeric increments |

Style validity with CSS pseudo-classes:

```css
input:invalid { border-color: red; }
input:valid   { border-color: green; }
input:required { /* ... */ }
```

---

## 🚀 Better UX Attributes

```html
<input name="email" type="email"
	   placeholder="you@example.com"
	   autocomplete="email"
	   autofocus />
```

- **`placeholder`** — hint text (not a replacement for a label!).
- **`autocomplete`** — lets browsers/password managers help (`name`, `email`, `current-password`, `one-time-code`, …).
- **`autofocus`** — focuses on page load (use sparingly).
- **`readonly`** — visible, submitted, not editable.
- **`disabled`** — greyed out and **not** submitted.

---

## 🔗 Forms + JavaScript

Intercept submission to validate or send via `fetch` without a page reload.

```html
<form id="signup">
  <input name="email" type="email" required />
  <button>Go</button>
</form>

<script>
  const form = document.querySelector('#signup');
  form.addEventListener('submit', async (e) => {
	e.preventDefault();               // stop the default navigation
	const data = new FormData(form);  // gather all named controls
	const payload = Object.fromEntries(data.entries());

	await fetch('/api/signup', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify(payload),
	});
  });
</script>
```

- **`FormData`** — collects all controls automatically.
- **`e.preventDefault()`** — stops the browser's default submit/navigation.
- **`form.checkValidity()`** / `input.setCustomValidity(msg)` — programmatic validation.

---

## ♿ Accessibility Checklist

- Every control has an associated `<label>`.
- Group related controls with `<fieldset>` + `<legend>`.
- Show errors in text, not by color alone.
- Use correct `type` and `autocomplete` for assistive tech and mobile keyboards.
- Keep a logical tab order; avoid removing focus outlines.

---

## 🎯 Key Takeaways

1. `<form>` + named controls = data submitted by key/value.
2. Always pair inputs with `<label>`s.
3. Pick the right `type` — it gives you keyboards, pickers, and validation for free.
4. Use built-in validation attributes before reaching for JavaScript.
5. Use `FormData` + `fetch` + `preventDefault()` for modern async submissions.

⬅ [Back to Index](../README.md)

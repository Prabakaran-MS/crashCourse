# 🌑 Shadow DOM, Templates & Slots

> 💼 **Industry Perspective:** In professional frontend teams, **Shadow DOM, Templates & Slots** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> The Shadow DOM encapsulates a custom element's markup and styles so they can't leak in or out. Templates and slots make the internal structure reusable and flexible.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

Shadow DOM gives components **true encapsulation** — internal styles and DOM are isolated from the rest of the page.

---

## 🌑 Attaching a Shadow Root

```js
class UserBadge extends HTMLElement {
  constructor() {
	super();
	const shadow = this.attachShadow({ mode: 'open' });
	shadow.innerHTML = `
	  <style> p { color: rebeccapurple; font-weight: 600; } </style>
	  <p><slot>Anonymous</slot></p>
	`;
  }
}
customElements.define('user-badge', UserBadge);
```

The `<style>` here affects **only** this component.

---

## 📄 `<template>` — Inert, Reusable Markup

```html
<template id="card-tpl">
  <div class="card"><slot></slot></div>
</template>
```

```js
const tpl = document.getElementById('card-tpl');
shadow.appendChild(tpl.content.cloneNode(true));
```

Templates aren't rendered until cloned — perfect for reuse.

---

## 🕳️ Slots — Content Projection

Slots let consumers inject their own content.

```html
<user-badge>Priya</user-badge>  <!-- replaces the default "Anonymous" -->
```

```html
<!-- Named slots -->
<slot name="header"></slot>
<slot name="footer"></slot>
```
```html
<my-card>
  <h2 slot="header">Title</h2>
  <p slot="footer">Footer</p>
</my-card>
```

---

## 🎯 Key Takeaways

1. **Shadow DOM** encapsulates markup + styles.
2. Internal styles **don't leak** in or out.
3. **`<template>`** holds inert, reusable markup.
4. **Slots** project consumer content (default + named).
5. Together they build robust, reusable components.

⬅ [Back to Index](../README.md)

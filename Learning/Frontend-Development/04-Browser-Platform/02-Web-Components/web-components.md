# 🧩 Web Components

> 💼 **Industry Perspective:** In professional frontend teams, **Web Components** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Web Components** are a set of native browser standards for building reusable, encapsulated, framework-agnostic custom HTML elements — no library required.

⬅ [Back to Index](../README.md)

---

## 🧠 The Three Pillars

1. **Custom Elements** — define your own HTML tags with JS behavior.
2. **Shadow DOM** — encapsulated markup + scoped styles that won't leak.
3. **HTML Templates** — reusable inert markup (`<template>`, `<slot>`).

---

## 🏷️ Custom Elements

```js
class MyCounter extends HTMLElement {
  constructor() {
	super();
	this._count = 0;
  }

  // Lifecycle callbacks
  connectedCallback() {         // added to DOM
	this.render();
	this.addEventListener("click", () => { this._count++; this.render(); });
  }
  disconnectedCallback() {}      // removed from DOM
  adoptedCallback() {}           // moved to a new document

  // Observed attributes
  static get observedAttributes() { return ["label"]; }
  attributeChangedCallback(name, oldVal, newVal) { this.render(); }

  render() {
	this.textContent = `${this.getAttribute("label") || "Count"}: ${this._count}`;
  }
}

customElements.define("my-counter", MyCounter); // name MUST contain a hyphen
```

```html
<my-counter label="Clicks"></my-counter>
```

> Custom element names **must include a dash** (`my-counter`) to avoid clashing with future HTML.

---

## 🌑 Shadow DOM — Encapsulation

Styles and markup inside a shadow root are **isolated** from the rest of the page.

```js
class UserCard extends HTMLElement {
  constructor() {
	super();
	const shadow = this.attachShadow({ mode: "open" }); // or "closed"
	shadow.innerHTML = `
	  <style>
		/* Scoped — won't affect or be affected by outside CSS */
		.card { padding: 16px; border: 1px solid #ddd; border-radius: 8px; }
		:host { display: block; }              /* the element itself */
		:host([featured]) { border-color: gold; }
		::slotted(h2) { margin: 0; }           /* style projected content */
	  </style>
	  <div class="card">
		<slot name="title"><h2>Default</h2></slot>
		<slot></slot>                          <!-- default slot -->
	  </div>
	`;
  }
}
customElements.define("user-card", UserCard);
```

```html
<user-card featured>
  <h2 slot="title">Ada Lovelace</h2>
  <p>First programmer.</p>
</user-card>
```

- `:host` — targets the custom element itself.
- `::slotted()` — styles content projected via `<slot>`.
- `mode: "open"` exposes `element.shadowRoot`; `"closed"` hides it.

---

## 📋 HTML Templates & Slots

```html
<template id="row-tpl">
  <tr><td class="name"></td><td class="email"></td></tr>
</template>
```

```js
const tpl = document.getElementById("row-tpl");
const clone = tpl.content.cloneNode(true); // inert until cloned
clone.querySelector(".name").textContent = user.name;
table.append(clone);
```

- `<template>` content is **parsed but not rendered** until cloned.
- `<slot>` projects light-DOM children into the shadow DOM (composition).

---

## 🔗 Attributes vs Properties

```js
class ToggleSwitch extends HTMLElement {
  static get observedAttributes() { return ["checked"]; }

  get checked() { return this.hasAttribute("checked"); }
  set checked(val) {
	if (val) this.setAttribute("checked", "");
	else this.removeAttribute("checked");
  }
}
```
- **Attributes** are strings in HTML; **properties** are JS values. Reflect between them for a good API.

---

## 📡 Communication

```js
// Emit custom events (up)
this.dispatchEvent(new CustomEvent("change", {
  detail: { value: this._count },
  bubbles: true,
  composed: true, // crosses shadow DOM boundary
}));
```
```html
<my-counter id="c"></my-counter>
<script>
  document.getElementById("c").addEventListener("change", (e) => console.log(e.detail.value));
</script>
```
- Pass data **in** via attributes/properties, communicate **out** via events.

---

## 🧰 Libraries That Build on Web Components

| Tool | Purpose |
|---|---|
| **Lit** | Tiny, reactive base class + templating for Web Components |
| **Stencil** | Compiler that outputs standards-based components |
| **Shoelace / Web Awesome** | Ready-made component library |
| **Fast (Microsoft)** | Component system + design system |

```js
// Lit example
import { LitElement, html, css } from "lit";
class MyBtn extends LitElement {
  static styles = css`button { padding: 8px 16px; }`;
  static properties = { label: {} };
  render() { return html`<button>${this.label}</button>`; }
}
customElements.define("my-btn", MyBtn);
```

---

## ⚖️ When to Use Web Components

- ✅ **Design systems** shared across React, Angular, Vue, and plain HTML.
- ✅ **Framework-agnostic** widgets and micro-frontends.
- ✅ Embeddable widgets on third-party sites.
- ⚠️ For full apps, frameworks still offer better DX, state, and routing.

All major frameworks can **consume** custom elements; React 19+ improved property/event support.

---

## ✅ Key Takeaways

- Web Components = **Custom Elements + Shadow DOM + Templates/Slots** — all native.
- Shadow DOM gives **true style/markup encapsulation** (`:host`, `::slotted`).
- Communicate **in via attributes/properties**, **out via custom events**.
- **Lit** and **Stencil** make authoring them ergonomic.
- Ideal for **cross-framework design systems**.

➡ **Next:** [Vue](../48-Vue/vue.md)

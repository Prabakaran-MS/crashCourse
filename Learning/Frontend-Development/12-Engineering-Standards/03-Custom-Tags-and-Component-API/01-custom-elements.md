# 🏷️ Custom Tags — Custom Elements

> 💼 **Industry Perspective:** In professional frontend teams, **Custom Tags — Custom Elements** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Custom elements** let you define your own HTML tags (`<my-widget>`) with encapsulated behavior. They're the standards-based way to build reusable, framework-agnostic components.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

The browser lets you **extend HTML** with your own tags. Custom elements are part of the Web Components standard and work in *any* framework (or none).

---

## 🔧 Defining a Custom Element

Tag names **must contain a hyphen** (to avoid clashing with future HTML).

```js
class GreetingCard extends HTMLElement {
  connectedCallback() {
	this.innerHTML = `<p>Hello, ${this.getAttribute('name') || 'world'}!</p>`;
  }
}
customElements.define('greeting-card', GreetingCard);
```

```html
<greeting-card name="Priya"></greeting-card>
```

---

## 🔄 Lifecycle Callbacks

| Callback | Fires when |
|----------|-----------|
| `constructor` | Element created |
| `connectedCallback` | Added to the DOM |
| `disconnectedCallback` | Removed from the DOM |
| `attributeChangedCallback` | An observed attribute changes |
| `adoptedCallback` | Moved to a new document |

```js
static get observedAttributes() { return ['name']; }
attributeChangedCallback(attr, oldV, newV) { this.render(); }
```

---

## 🎯 Why Use Them

- **Framework-agnostic** — reuse across React, Angular, Vue, plain HTML.
- **Encapsulation** — with Shadow DOM (next lesson).
- **Design systems** — ship one component library everyone can use.

---

## 🎯 Key Takeaways

1. Custom elements = **your own HTML tags**.
2. Tag names **must include a hyphen**.
3. Use **lifecycle callbacks** to manage behavior.
4. Observe attributes with `observedAttributes`.
5. They're **framework-agnostic** and standards-based.

⬅ [Back to Index](../README.md)

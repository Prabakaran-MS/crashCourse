# 🧱 Angular — Components & Templates

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Components & Templates** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** A component is a **TypeScript class + an HTML template + styles**. The `@Component` decorator ties them together.

---

## 🔧 Anatomy of a component

```ts
import { Component } from "@angular/core";

@Component({
	selector: "app-counter",       // used as <app-counter></app-counter>
	standalone: true,
	template: `
		<h2>{{ title }}</h2>
		<button (click)="increment()">Count: {{ count }}</button>
	`,
	styles: [`button { padding: 8px 12px; }`],
})
export class CounterComponent {
	title = "Counter";
	count = 0;
	increment() { this.count++; }
}
```

---

## 📄 Inline vs external templates/styles

```ts
@Component({
	selector: "app-user",
	standalone: true,
	templateUrl: "./user.component.html",  // external template
	styleUrls: ["./user.component.css"],   // external styles
})
export class UserComponent {}
```

---

## 🎨 Template syntax essentials

```html
<!-- Interpolation -->
<p>{{ user.name }}</p>

<!-- Property binding -->
<img [src]="avatarUrl" [alt]="user.name" />

<!-- Event binding -->
<button (click)="save()">Save</button>

<!-- Two-way binding (needs FormsModule) -->
<input [(ngModel)]="name" />
```

---

## 🔀 Control flow (Angular 17+ built-in)

```html
@if (user) {
	<p>Welcome {{ user.name }}</p>
} @else {
	<p>Please log in</p>
}

@for (item of items; track item.id) {
	<li>{{ item.text }}</li>
} @empty {
	<li>No items</li>
}

@switch (status) {
	@case ("active") { <span>Active</span> }
	@default { <span>Unknown</span> }
}
```

> Older code uses structural directives `*ngIf`, `*ngFor`, `*ngSwitch` (see the Directives chapter).

---

## 🎯 View encapsulation (scoped styles)

Component styles are **scoped to that component** by default (Emulated encapsulation), so they don't leak globally.

```ts
@Component({
	selector: "app-card",
	standalone: true,
	encapsulation: ViewEncapsulation.Emulated, // default
	template: `<div class="card"><ng-content></ng-content></div>`,
	styles: [`.card { border: 1px solid #ddd; }`],
})
export class CardComponent {}
```

`<ng-content>` projects child content (like React's `children`).

---

⬅ [Back to Index](../README.md)

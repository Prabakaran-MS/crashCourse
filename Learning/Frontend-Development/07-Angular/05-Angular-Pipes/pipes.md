# 🔧 Angular — Pipes

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Pipes** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Pipes **transform data in templates** for display — formatting dates, numbers, currency, text — without changing the underlying value.

---

## 🧪 Using built-in pipes

```html
<p>{{ today | date:'medium' }}</p>
<p>{{ price | currency:'USD' }}</p>
<p>{{ ratio | percent:'1.0-2' }}</p>
<p>{{ name | uppercase }}</p>
<p>{{ title | lowercase }}</p>
<p>{{ text | titlecase }}</p>
<p>{{ big | number:'1.0-2' }}</p>
<p>{{ obj | json }}</p>
<p>{{ text | slice:0:10 }}</p>
```

| Pipe | Purpose |
|------|---------|
| `date` | Format dates |
| `currency` | Money formatting |
| `number` / `percent` | Numeric formatting |
| `uppercase` / `lowercase` / `titlecase` | Text case |
| `json` | Debug objects |
| `slice` | Sub-array/string |
| `async` | Unwrap Promises/Observables |

---

## ⛓️ Chaining & parameters

```html
<p>{{ today | date:'fullDate' | uppercase }}</p>
<p>{{ amount | currency:'EUR':'symbol':'1.2-2' }}</p>
```

---

## ⏳ The async pipe (very important)

Subscribes to an Observable/Promise and auto-unsubscribes — no manual cleanup.

```html
<p>{{ user$ | async | json }}</p>

<ul>
	<li *ngFor="let item of items$ | async">{{ item.name }}</li>
</ul>
```

```ts
user$ = this.http.get<User>("/api/user"); // Observable
```

---

## 🛠️ Custom pipe

```ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "truncate", standalone: true })
export class TruncatePipe implements PipeTransform {
	transform(value: string, limit = 20, trail = "…"): string {
		return value.length > limit ? value.slice(0, limit) + trail : value;
	}
}
```

```html
<p>{{ longText | truncate:50 }}</p>
```

---

## ⚡ Pure vs impure pipes

```ts
@Pipe({ name: "filterActive", pure: false }) // re-runs on every change detection
```

- **Pure (default):** recomputes only when the input reference changes — fast.
- **Impure:** recomputes on every change detection cycle — use sparingly (e.g., filtering mutable arrays).

---

⬅ [Back to Index](../README.md)

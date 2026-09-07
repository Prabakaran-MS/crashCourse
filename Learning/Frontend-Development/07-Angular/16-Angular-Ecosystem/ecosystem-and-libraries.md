# 🌍 Angular — Ecosystem & Libraries

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Ecosystem & Libraries** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Angular ships with most essentials, and its official + community libraries cover UI, state, SSR, PWA, i18n, and more.

---

## 🏛️ Official Angular packages

| Package | Purpose |
|---------|---------|
| `@angular/router` | Routing & navigation |
| `@angular/forms` | Template-driven & reactive forms |
| `@angular/common/http` | HttpClient |
| `@angular/animations` | Animation API |
| `@angular/material` | Material Design components |
| `@angular/cdk` | Component Dev Kit (low-level primitives) |
| `@angular/ssr` | Server-Side Rendering (formerly Universal) |
| `@angular/pwa` | Progressive Web App support |
| `@angular/service-worker` | Offline caching |

---

## 🎨 Angular Material & CDK

```bash
ng add @angular/material
```

```ts
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
	standalone: true,
	imports: [MatButtonModule, MatToolbarModule],
	template: `
		<mat-toolbar color="primary">My App</mat-toolbar>
		<button mat-raised-button color="accent">Click</button>`,
})
export class ShellComponent {}
```

The **CDK** provides unstyled building blocks: drag-drop, overlays, virtual scrolling, a11y helpers.

```ts
import { ScrollingModule } from "@angular/cdk/scrolling";
// <cdk-virtual-scroll-viewport> for huge lists
```

---

## 🎞️ Animations

```ts
import { trigger, transition, style, animate } from "@angular/animations";

animations: [
	trigger("fade", [
		transition(":enter", [style({ opacity: 0 }), animate("300ms", style({ opacity: 1 }))]),
	]),
];
```

```html
<div @fade>Fades in</div>
```

---

## 🖥️ Server-Side Rendering (SSR) & hydration

```bash
ng add @angular/ssr
```

- Renders HTML on the server for faster first paint and SEO.
- **Hydration** reuses server-rendered DOM on the client (no full re-render).

---

## 📱 PWA & Service Workers

```bash
ng add @angular/pwa
```

Adds a manifest and service worker for offline support and installability.

---

## 🌐 Internationalization (i18n)

- Built-in `@angular/localize` for compile-time translation.
- **ngx-translate** for runtime translation.

```html
<h1 i18n="@@welcome">Welcome</h1>
```

---

## 🧰 Popular community libraries

| Library | Purpose |
|---------|---------|
| **NgRx** | Redux-style state management |
| **NGXS** / **Akita** | Alternative state libraries |
| **PrimeNG**, **Ng-Zorro**, **Nebular** | UI component suites |
| **ngx-translate** | i18n |
| **Transloco** | i18n |
| **ng-bootstrap** | Bootstrap components |
| **Nx** | Monorepo tooling for Angular |

---

## 🛠️ Tooling

- **Angular CLI** — scaffold, build, test, serve, deploy.
- **Angular DevTools** — inspect component tree, profiling.
- **schematics** — code generators (`ng add`, `ng generate`).
- **ESLint** (`angular-eslint`) — linting.

---

⬅ [Back to Index](../README.md)

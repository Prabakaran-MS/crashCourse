# 📦 Angular — Modules (NgModules & Standalone)

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Modules (NgModules & Standalone)** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Angular apps are organized either with **NgModules** (classic) or **standalone components** (modern, Angular 14+ and default in 17+). Both group and wire up the pieces of your app.

---

## 🆕 Standalone components (modern, recommended)

No NgModule needed — components declare their own dependencies via `imports`.

```ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./user-card.component";

@Component({
	selector: "app-users",
	standalone: true,
	imports: [CommonModule, UserCardComponent], // bring in what the template uses
	template: `<app-user-card *ngFor="let u of users" [user]="u" />`,
})
export class UsersComponent {
	users: User[] = [];
}
```

### Bootstrapping & providers (standalone)

```ts
// main.ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
	providers: [provideRouter(routes), provideHttpClient()],
});
```

---

## 🏛️ NgModules (classic style)

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user.component";

@NgModule({
	declarations: [AppComponent, UserComponent], // components/directives/pipes
	imports: [BrowserModule],                    // other modules
	providers: [],                               // services
	bootstrap: [AppComponent],                   // root component
})
export class AppModule {}
```

| NgModule field | Contains |
|----------------|----------|
| `declarations` | Components, directives, pipes owned by this module |
| `imports` | Other modules whose exports you need |
| `exports` | What this module shares with importers |
| `providers` | Services |
| `bootstrap` | Root component (app module only) |

---

## 🧩 Feature & shared modules (classic)

```ts
@NgModule({
	declarations: [ButtonComponent, CardComponent],
	exports: [ButtonComponent, CardComponent], // reusable across the app
})
export class SharedModule {}
```

---

## 🔀 Migrating to standalone

- New apps: start standalone.
- Existing apps: adopt gradually — standalone components can be imported into NgModules and vice versa.

> **Rule of thumb (2024+):** Prefer standalone components and `provide*()` functions. NgModules remain valid and common in older codebases.

---

⬅ [Back to Index](../README.md)

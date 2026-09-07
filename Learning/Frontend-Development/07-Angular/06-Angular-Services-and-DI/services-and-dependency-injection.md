# 🧰 Angular — Services & Dependency Injection

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Services & Dependency Injection** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** A **service** is a reusable class for logic/data shared across components. **Dependency Injection (DI)** is how Angular *provides* those services to whoever needs them.

---

## 🏭 Creating a service

```ts
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" }) // a single app-wide (singleton) instance
export class LoggerService {
	log(message: string) {
		console.log(`[LOG] ${message}`);
	}
}
```

`providedIn: "root"` registers it globally and enables tree-shaking (removed if unused).

---

## 💉 Injecting a service

```ts
import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({ selector: "app-home", standalone: true, template: `` })
export class HomeComponent {
	constructor(private logger: LoggerService) {
		this.logger.log("Home loaded");
	}
}
```

### The `inject()` function (modern alternative)

```ts
import { inject } from "@angular/core";

export class HomeComponent {
	private logger = inject(LoggerService);
}
```

---

## 🌐 A data service with HttpClient

```ts
@Injectable({ providedIn: "root" })
export class UserService {
	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get<User[]>("/api/users");
	}
}
```

---

## 🧭 Injection scopes

| Provided at | Scope |
|-------------|-------|
| `providedIn: "root"` | App-wide singleton |
| Component `providers: []` | New instance per component (and its children) |
| Route/lazy module | Scoped to that feature |

```ts
@Component({
	selector: "app-widget",
	providers: [WidgetService], // fresh instance for this component tree
})
export class WidgetComponent {}
```

---

## 🏷️ Injection tokens (for non-class values)

```ts
import { InjectionToken } from "@angular/core";

export const API_URL = new InjectionToken<string>("API_URL");

// Provide it
bootstrapApplication(App, {
	providers: [{ provide: API_URL, useValue: "https://api.example.com" }],
});

// Inject it
const url = inject(API_URL);
```

---

## 🔧 Provider recipes

```ts
{ provide: Logger, useClass: BetterLogger }      // swap implementation
{ provide: Logger, useExisting: ConsoleLogger }  // alias
{ provide: Config, useValue: { debug: true } }   // constant
{ provide: Api, useFactory: () => new Api(env) }  // factory
```

---

⬅ [Back to Index](../README.md)

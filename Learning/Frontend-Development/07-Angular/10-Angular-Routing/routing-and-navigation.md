# 🧭 Angular — Routing & Navigation

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Routing & Navigation** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** The Angular Router maps **URLs to components**, supports nested layouts, lazy loading, route params, and guards.

---

## 🛣️ Defining routes

```ts
// app.routes.ts
import { Routes } from "@angular/router";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "users/:id", component: UserComponent }, // route param
	{ path: "**", component: NotFoundComponent },     // wildcard 404
];
```

```ts
// main.ts (standalone)
bootstrapApplication(AppComponent, {
	providers: [provideRouter(routes)],
});
```

---

## 📤 Router outlet & links

```html
<nav>
	<a routerLink="/">Home</a>
	<a routerLink="/about" routerLinkActive="active">About</a>
</nav>

<router-outlet></router-outlet> <!-- routed component renders here -->
```

---

## 🔢 Reading route params & query params

```ts
import { ActivatedRoute } from "@angular/router";

export class UserComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		// snapshot (one-time)
		const id = this.route.snapshot.paramMap.get("id");

		// observable (reacts to changes)
		this.route.paramMap.subscribe((params) => {
			const id = params.get("id");
		});

		this.route.queryParamMap.subscribe((q) => q.get("sort"));
	}
}
```

---

## 🧭 Programmatic navigation

```ts
import { Router } from "@angular/router";

constructor(private router: Router) {}

goToUser(id: number) {
	this.router.navigate(["/users", id], { queryParams: { tab: "profile" } });
}
```

---

## 🧩 Nested (child) routes

```ts
{
	path: "dashboard",
	component: DashboardComponent,
	children: [
		{ path: "", component: OverviewComponent },
		{ path: "settings", component: SettingsComponent },
	],
}
```

---

## ⏳ Lazy loading

```ts
{
	path: "admin",
	loadComponent: () => import("./admin/admin.component").then((m) => m.AdminComponent),
}

// Lazy-load a group of routes
{
	path: "shop",
	loadChildren: () => import("./shop/shop.routes").then((m) => m.SHOP_ROUTES),
}
```

---

## 🛡️ Route guards

```ts
import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = () => {
	const auth = inject(AuthService);
	const router = inject(Router);
	return auth.isLoggedIn() ? true : router.parseUrl("/login");
};

// Apply it
{ path: "profile", component: ProfileComponent, canActivate: [authGuard] }
```

Other guards: `CanDeactivateFn` (unsaved-changes prompt), `ResolveFn` (prefetch data before navigation).

---

⬅ [Back to Index](../README.md)

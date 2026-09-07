# 🌐 Angular — HttpClient & RxJS

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — HttpClient & RxJS** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Angular talks to servers with **HttpClient**, which returns **Observables** (from RxJS). Understanding RxJS is essential to Angular.

---

## 🔌 Setup

```ts
// main.ts
import { provideHttpClient } from "@angular/common/http";
bootstrapApplication(AppComponent, { providers: [provideHttpClient()] });
```

---

## 📡 Making requests

```ts
@Injectable({ providedIn: "root" })
export class UserService {
	constructor(private http: HttpClient) {}

	getAll() { return this.http.get<User[]>("/api/users"); }
	getOne(id: number) { return this.http.get<User>(`/api/users/${id}`); }
	create(u: NewUser) { return this.http.post<User>("/api/users", u); }
	update(id: number, u: Partial<User>) { return this.http.put<User>(`/api/users/${id}`, u); }
	remove(id: number) { return this.http.delete(`/api/users/${id}`); }
}
```

---

## 📥 Consuming Observables

```ts
// Option A: subscribe manually (remember to unsubscribe)
this.userService.getAll().subscribe((users) => (this.users = users));

// Option B: async pipe (auto subscribe/unsubscribe) — preferred
users$ = this.userService.getAll();
```

```html
<li *ngFor="let u of users$ | async">{{ u.name }}</li>
```

---

## 🧠 RxJS core concepts

| Concept | Meaning |
|---------|---------|
| **Observable** | A stream of values over time |
| **Observer** | `subscribe()` to receive values |
| **Subscription** | The active connection; `unsubscribe()` to stop |
| **Operators** | Functions that transform streams (`map`, `filter`, …) |
| **Subject** | An Observable you can also push into |

---

## 🔧 Common operators (pipe)

```ts
import { map, filter, switchMap, debounceTime, catchError, tap, take } from "rxjs";

this.search$.pipe(
	debounceTime(300),                 // wait for typing to pause
	distinctUntilChanged(),
	switchMap((q) => this.api.search(q)), // cancel previous request
	catchError(() => of([])),          // handle errors gracefully
).subscribe((results) => (this.results = results));
```

| Operator | Use |
|----------|-----|
| `map` | Transform each value |
| `filter` | Keep matching values |
| `switchMap` | Switch to a new inner Observable (cancel old) |
| `mergeMap` / `concatMap` | Flatten inner Observables |
| `debounceTime` | Delay/limit rapid emissions |
| `catchError` | Handle errors |
| `tap` | Side effects (logging) |
| `takeUntil` | Complete when another stream emits |

---

## 🧯 Error handling & retries

```ts
this.http.get("/api/data").pipe(
	retry(2),
	catchError((err) => {
		console.error(err);
		return throwError(() => err);
	})
).subscribe();
```

---

## 🧩 Subjects for state

```ts
const counter$ = new BehaviorSubject(0); // holds a current value
counter$.next(1);
counter$.subscribe((v) => console.log(v));
```

---

## 🔐 Interceptors (auth, logging)

```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const cloned = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
	return next(cloned);
};

// Register: provideHttpClient(withInterceptors([authInterceptor]))
```

---

⬅ [Back to Index](../README.md)

# 📄 Angular Cheat Sheet

> 💼 **Industry Perspective:** In professional frontend teams, **Angular Cheat Sheet** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> A quick reference for everyday Angular. Skim it; bookmark it.

---

## CLI

```bash
ng new my-app        ng serve         ng build
ng g component user  ng g service data  ng g directive hl  ng g pipe fmt
ng test              ng add @angular/material
```

## Component

```ts
@Component({
	selector: "app-x", standalone: true,
	imports: [CommonModule],
	template: `{{ title }}`,
	styles: [`h1 { color: red; }`],
})
export class XComponent {}
```

## Binding

```html
{{ value }}                     <!-- interpolation -->
[src]="url" [disabled]="busy"   <!-- property -->
(click)="go()" (input)="on($event)"  <!-- event -->
[(ngModel)]="name"              <!-- two-way -->
[class.active]="isOn" [style.color]="c"
```

## Control flow (v17+)

```html
@if (x) { … } @else { … }
@for (i of items; track i.id) { … } @empty { … }
@switch (s) { @case ('a') { … } @default { … } }
```

## Directives (classic)

```html
*ngIf="cond"   *ngFor="let i of items"   [ngSwitch]="v"
[ngClass]="{ active: on }"   [ngStyle]="{ color: c }"
```

## Inputs / Outputs

```ts
@Input() user!: User;
@Output() saved = new EventEmitter<void>();
// signal style: input.required<number>(), output<void>()
```

## Service & DI

```ts
@Injectable({ providedIn: "root" })
export class Api { constructor(private http: HttpClient) {} }
// inject: private api = inject(Api);
```

## HttpClient

```ts
this.http.get<User[]>("/api/users");
this.http.post("/api", body);
// template: *ngFor="let u of users$ | async"
```

## RxJS operators

```ts
pipe(map, filter, switchMap, debounceTime, catchError, takeUntil, tap)
```

## Signals

```ts
const c = signal(0); c(); c.set(1); c.update(v => v+1);
const d = computed(() => c() * 2);
effect(() => console.log(c()));
```

## Reactive forms

```ts
form = this.fb.group({
	email: ["", [Validators.required, Validators.email]],
});
// <input formControlName="email"> inside <form [formGroup]="form">
```

## Router

```ts
{ path: "users/:id", component: UserComponent, canActivate: [authGuard] }
routerLink="/about"   <router-outlet></router-outlet>
this.router.navigate(["/users", id]);
this.route.snapshot.paramMap.get("id");
```

## Lifecycle

```ts
ngOnChanges  ngOnInit  ngAfterViewInit  ngOnDestroy
```

## Pipes

```html
{{ d | date:'medium' }} {{ n | currency:'USD' }} {{ obs$ | async }}
```

---

⬅ [Back to Index](../README.md)

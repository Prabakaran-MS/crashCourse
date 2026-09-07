# 🔄 Angular — Component Communication

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Component Communication** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Components pass data **down** with `@Input`, send events **up** with `@Output`, and access children directly with `@ViewChild`/`@ContentChild`. Shared services handle unrelated components.

---

## ⬇️ Parent → Child with `@Input`

```ts
// child.component.ts
@Component({ selector: "app-child", standalone: true, template: `<p>{{ user.name }}</p>` })
export class ChildComponent {
	@Input() user!: User;
	@Input({ required: true }) id!: number; // required input (Angular 16+)
}
```

```html
<!-- parent template -->
<app-child [user]="currentUser" [id]="1"></app-child>
```

---

## ⬆️ Child → Parent with `@Output`

```ts
import { EventEmitter, Output } from "@angular/core";

@Component({ selector: "app-child", standalone: true, template: `<button (click)="save()">Save</button>` })
export class ChildComponent {
	@Output() saved = new EventEmitter<string>();
	save() { this.saved.emit("done"); }
}
```

```html
<app-child (saved)="onSaved($event)"></app-child>
```

```ts
onSaved(payload: string) { console.log(payload); }
```

---

## 🎯 Accessing a child with `@ViewChild`

```ts
import { AfterViewInit, ViewChild } from "@angular/core";

@Component({ /* ... */ })
export class ParentComponent implements AfterViewInit {
	@ViewChild(ChildComponent) child!: ChildComponent;
	@ViewChild("myInput") input!: ElementRef<HTMLInputElement>;

	ngAfterViewInit() {
		this.child.doSomething();
		this.input.nativeElement.focus();
	}
}
```

`@ViewChildren` returns a `QueryList` of multiple matches.

---

## 📥 Projected content with `@ContentChild`

```ts
@ContentChild(TabComponent) tab!: TabComponent;   // single
@ContentChildren(TabComponent) tabs!: QueryList<TabComponent>; // many
```

Use these when a component receives content via `<ng-content>`.

---

## 🔗 Content projection (`<ng-content>`)

```ts
@Component({
	selector: "app-card",
	standalone: true,
	template: `
		<div class="card">
			<header><ng-content select="[header]"></ng-content></header>
			<ng-content></ng-content>  <!-- default slot -->
		</div>`,
})
export class CardComponent {}
```

```html
<app-card>
	<h2 header>Title</h2>
	<p>Body content</p>
</app-card>
```

---

## 🌐 Unrelated components → shared service

```ts
@Injectable({ providedIn: "root" })
export class MessageService {
	private subject = new BehaviorSubject<string>("");
	message$ = this.subject.asObservable();
	send(msg: string) { this.subject.next(msg); }
}
```

Both components inject `MessageService`; one calls `send()`, the other subscribes to `message$`.

---

⬅ [Back to Index](../README.md)

# 🧩 Angular — Directives

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Directives** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Directives add behavior to elements. There are three kinds: **components** (directives with a template), **structural** (change the DOM layout), and **attribute** (change appearance/behavior).

---

## 🏗️ Structural directives (change DOM structure)

The `*` prefix marks a structural directive.

```html
<!-- *ngIf -->
<p *ngIf="isLoggedIn; else guest">Welcome!</p>
<ng-template #guest><p>Please log in</p></ng-template>

<!-- *ngFor -->
<li *ngFor="let item of items; let i = index; trackBy: trackById">
	{{ i }}: {{ item.name }}
</li>

<!-- *ngSwitch -->
<div [ngSwitch]="status">
	<span *ngSwitchCase="'active'">Active</span>
	<span *ngSwitchDefault>Unknown</span>
</div>
```

> Angular 17+ prefers built-in control flow `@if` / `@for` / `@switch`, but `*ngIf`/`*ngFor` are still widely used.

```ts
trackById(index: number, item: Item) { return item.id; }
```

---

## 🎨 Attribute directives (change appearance/behavior)

```html
<div [ngClass]="{ active: isActive }"></div>
<div [ngStyle]="{ color: color }"></div>
```

---

## 🛠️ Custom attribute directive

```ts
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[appHighlight]",
	standalone: true,
})
export class HighlightDirective {
	@Input() appHighlight = "yellow";

	constructor(private el: ElementRef) {}

	@HostListener("mouseenter") onEnter() {
		this.el.nativeElement.style.background = this.appHighlight;
	}
	@HostListener("mouseleave") onLeave() {
		this.el.nativeElement.style.background = "";
	}
}
```

```html
<p [appHighlight]="'lightblue'">Hover me</p>
```

---

## 🧱 Custom structural directive

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({ selector: "[appUnless]", standalone: true })
export class UnlessDirective {
	constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

	@Input() set appUnless(condition: boolean) {
		if (!condition) this.vcr.createEmbeddedView(this.tpl);
		else this.vcr.clear();
	}
}
```

```html
<p *appUnless="isHidden">Now you see me</p>
```

---

## 🧰 Host binding

```ts
@Directive({ selector: "[appActive]", standalone: true })
export class ActiveDirective {
	@HostBinding("class.active") isActive = true;
	@HostBinding("style.cursor") cursor = "pointer";
}
```

---

⬅ [Back to Index](../README.md)

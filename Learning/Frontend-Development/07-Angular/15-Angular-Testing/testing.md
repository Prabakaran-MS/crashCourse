# 🧪 Angular — Testing

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Testing** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Angular ships with testing built in — **Jasmine** (assertions) + **Karma** (runner), plus the **TestBed** utility for configuring components in tests. Modern setups may use **Jest** or **Web Test Runner**.

---

## 🏃 Running tests

```bash
ng test          # runs unit tests in watch mode
ng e2e           # end-to-end (Cypress/Playwright via schematics)
```

---

## 🧱 Testing a service

```ts
import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
	let service: CalculatorService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CalculatorService);
	});

	it("adds numbers", () => {
		expect(service.add(2, 3)).toBe(5);
	});
});
```

---

## 🧩 Testing a component

```ts
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";

describe("CounterComponent", () => {
	let fixture: ComponentFixture<CounterComponent>;
	let component: CounterComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CounterComponent], // standalone component
		}).compileComponents();

		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("increments on click", () => {
		const button = fixture.nativeElement.querySelector("button");
		button.click();
		fixture.detectChanges();
		expect(component.count).toBe(1);
	});
});
```

---

## 🌐 Testing HTTP with HttpTestingController

```ts
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

TestBed.configureTestingModule({
	providers: [provideHttpClient(), provideHttpClientTesting()],
});

it("fetches users", () => {
	const http = TestBed.inject(HttpTestingController);
	service.getUsers().subscribe((users) => expect(users.length).toBe(1));

	const req = http.expectOne("/api/users");
	expect(req.request.method).toBe("GET");
	req.flush([{ id: 1, name: "Ada" }]); // mock response
	http.verify();
});
```

---

## ⏳ Async testing helpers

```ts
import { fakeAsync, tick, waitForAsync } from "@angular/core/testing";

it("handles a timer", fakeAsync(() => {
	component.start();
	tick(1000);        // advance virtual time
	expect(component.value).toBe(1);
}));
```

---

## 🕵️ Spies & mocks

```ts
const apiSpy = jasmine.createSpyObj("Api", ["getUsers"]);
apiSpy.getUsers.and.returnValue(of([{ id: 1, name: "Ada" }]));

TestBed.configureTestingModule({
	providers: [{ provide: Api, useValue: apiSpy }],
});
```

---

## 🧠 Best practices

- Test **behavior**, not implementation details.
- Prefer querying by role/text over CSS internals.
- Mock external dependencies (HTTP, services).
- Use E2E (Cypress/Playwright) for full user journeys.

---

⬅ [Back to Index](../README.md)

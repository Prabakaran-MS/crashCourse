# 📝 Angular — Forms

> 💼 **Industry Perspective:** In professional frontend teams, **Angular — Forms** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Angular has **two** form systems: **Template-driven** (simple, HTML-first) and **Reactive** (scalable, code-first with typed form models).

---

## 🅰️ Template-driven forms

Import `FormsModule`. State lives in the template via `ngModel`.

```ts
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [FormsModule],
	template: `
		<form #f="ngForm" (ngSubmit)="submit(f)">
			<input name="email" ngModel required email />
			<input name="password" ngModel required minlength="6" />
			<button [disabled]="f.invalid">Log in</button>
		</form>`,
})
export class LoginComponent {
	submit(form: NgForm) {
		console.log(form.value);   // { email, password }
		console.log(form.valid);
	}
}
```

Good for simple forms; validation via HTML attributes.

---

## ⚛️ Reactive forms (recommended for complex forms)

Import `ReactiveFormsModule`. The form model is defined in the class.

```ts
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
	selector: "app-signup",
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
		<form [formGroup]="form" (ngSubmit)="submit()">
			<input formControlName="email" />
			<input formControlName="password" type="password" />
			<button [disabled]="form.invalid">Sign up</button>
		</form>`,
})
export class SignupComponent {
	private fb = inject(FormBuilder);

	form = this.fb.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(8)]],
	});

	submit() {
		if (this.form.valid) console.log(this.form.value);
	}
}
```

---

## 🧱 FormControl, FormGroup, FormArray

```ts
import { FormControl, FormGroup, FormArray } from "@angular/forms";

const form = new FormGroup({
	name: new FormControl(""),
	address: new FormGroup({
		city: new FormControl(""),
	}),
	hobbies: new FormArray([new FormControl("")]),
});

// Dynamically add to a FormArray
(form.get("hobbies") as FormArray).push(new FormControl(""));
```

---

## ✅ Validation & showing errors

```html
<input formControlName="email" />
@if (form.get('email')?.touched && form.get('email')?.errors?.['required']) {
	<small>Email is required</small>
}
```

### Custom validator

```ts
function noSpaces(control: AbstractControl): ValidationErrors | null {
	return control.value?.includes(" ") ? { spaces: true } : null;
}
// usage: ["", [noSpaces]]
```

### Async validator

```ts
function uniqueEmail(api: Api): AsyncValidatorFn {
	return (control) => api.check(control.value).pipe(
		map((taken) => (taken ? { taken: true } : null))
	);
}
```

---

## 🆚 Which to use?

| | Template-driven | Reactive |
|--|-----------------|----------|
| Setup | Minimal | More code |
| Scales to complex forms | ❌ | ✅ |
| Type safety | Weaker | Strong (typed forms) |
| Testability | Harder | Easier |

---

⬅ [Back to Index](../README.md)

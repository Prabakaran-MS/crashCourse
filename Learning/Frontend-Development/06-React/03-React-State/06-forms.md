# 📝 Forms

> 💼 **Industry Perspective:** In professional frontend teams, **Forms** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** In React, form inputs are usually **controlled** — their value lives in state, and React is the "single source of truth."

---

## 🎛️ Controlled inputs

```tsx
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		console.log({ email, password });
	}

	return (
		<form onSubmit={handleSubmit}>
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button type="submit">Log in</button>
		</form>
	);
}
```

---

## 🧾 One handler for many fields

```tsx
const [form, setForm] = useState({ name: "", email: "" });

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
	const { name, value } = e.target;
	setForm((prev) => ({ ...prev, [name]: value }));
}

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
```

---

## ☑️ Checkboxes, radios & selects

```tsx
<input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />

<select value={color} onChange={(e) => setColor(e.target.value)}>
	<option value="red">Red</option>
	<option value="blue">Blue</option>
</select>

<textarea value={bio} onChange={(e) => setBio(e.target.value)} />
```

---

## 🎯 Uncontrolled inputs (with refs)

Let the DOM hold the value; read it only when needed.

```tsx
function Search() {
	const inputRef = useRef<HTMLInputElement>(null);
	function submit() {
		console.log(inputRef.current?.value);
	}
	return (
		<>
			<input ref={inputRef} defaultValue="" />
			<button onClick={submit}>Search</button>
		</>
	);
}
```

| | Controlled | Uncontrolled |
|--|-----------|--------------|
| Value stored in | React state | The DOM |
| Read value | Anytime from state | Via a ref |
| Best for | Most forms, validation | Simple/one-off inputs |

---

## ✅ Validation & libraries

Basic validation happens in your handler. For complex forms use libraries:

- **React Hook Form** — performant, minimal re-renders.
- **Formik** — popular, feature-rich.
- **Zod / Yup** — schema validation, pairs with the above.

```tsx
// React Hook Form (sketch)
const { register, handleSubmit } = useForm();
<input {...register("email", { required: true })} />
```

---

⬅ [Back to Index](../README.md)

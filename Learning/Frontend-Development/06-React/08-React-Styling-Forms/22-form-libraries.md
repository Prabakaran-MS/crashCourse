# 📋 Form Libraries (React Hook Form, Formik, Zod)

> 💼 **Industry Perspective:** In professional frontend teams, **Form Libraries (React Hook Form, Formik, Zod)** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Native controlled forms work, but at scale you want less re-rendering, easier validation, and typed schemas. **React Hook Form** + **Zod** is the modern default; **Formik** is the established alternative.

---

## ⚡ React Hook Form (RHF)

```bash
npm install react-hook-form
```

```tsx
import { useForm } from "react-hook-form";

type FormValues = { email: string; password: string };

function LoginForm() {
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

	const onSubmit = handleSubmit(async (data) => {
		await api.login(data);
	});

	return (
		<form onSubmit={onSubmit}>
			<input {...register("email", { required: "Email required" })} />
			{errors.email && <span>{errors.email.message}</span>}
			<input type="password" {...register("password", { minLength: 8 })} />
			<button disabled={isSubmitting}>Log in</button>
		</form>
	);
}
```

> RHF uses **uncontrolled inputs** by default → fewer re-renders. Use `Controller` to integrate controlled UI libraries.

---

## 🛡️ Schema validation with Zod

```bash
npm install zod @hookform/resolvers
```

```tsx
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	email: z.string().email(),
	age: z.number().min(18),
});
type FormValues = z.infer<typeof schema>;

const { register, handleSubmit } = useForm<FormValues>({ resolver: zodResolver(schema) });
```

> `z.infer` gives you a **TypeScript type from the schema** — one source of truth.

---

## 📐 Formik (alternative)

```bash
npm install formik yup
```

```tsx
import { Formik, Form, Field, ErrorMessage } from "formik";

<Formik initialValues={{ email: "" }} onSubmit={(v) => api.save(v)}>
	<Form>
		<Field name="email" />
		<ErrorMessage name="email" />
		<button type="submit">Save</button>
	</Form>
</Formik>;
```

---

## ⚖️ Choosing

| Need | Prefer |
| --- | --- |
| Performance, minimal re-renders | React Hook Form |
| Typed schema validation | Zod (+ RHF resolver) |
| Familiar render-prop API | Formik + Yup |
| Small/simple form | Plain controlled state |

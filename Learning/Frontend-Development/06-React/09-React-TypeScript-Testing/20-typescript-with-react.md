# 🔷 TypeScript with React

> 💼 **Industry Perspective:** In professional frontend teams, **TypeScript with React** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** TypeScript makes React components safer by typing **props, state, events, refs, and hooks**. Prefer explicit prop types and let inference handle the rest.

---

## 🧾 Typing props

```tsx
type ButtonProps = {
	label: string;
	variant?: "primary" | "secondary";
	onClick?: () => void;
	children?: React.ReactNode;
};

function Button({ label, variant = "primary", onClick, children }: ButtonProps) {
	return <button className={variant} onClick={onClick}>{label}{children}</button>;
}
```

> Use `React.ReactNode` for anything renderable, `React.ReactElement` for a single element.

---

## 🎣 Typing hooks

```tsx
const [count, setCount] = useState(0);            // inferred number
const [user, setUser] = useState<User | null>(null); // explicit union

const ref = useRef<HTMLInputElement>(null);

const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 🖱️ Typing events

```tsx
function onChange(e: React.ChangeEvent<HTMLInputElement>) {}
function onSubmit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); }
function onClick(e: React.MouseEvent<HTMLButtonElement>) {}
```

---

## 🧬 Generic components

```tsx
type ListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
};

function List<T>({ items, render }: ListProps<T>) {
	return <ul>{items.map((it, i) => <li key={i}>{render(it)}</li>)}</ul>;
}
```

---

## 🧩 Extending native element props

```tsx
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
};

function Field({ label, ...rest }: InputProps) {
	return <label>{label}<input {...rest} /></label>;
}
```

---

## 🔧 Useful utility types

| Type | Purpose |
| --- | --- |
| `React.ReactNode` | Any renderable content |
| `React.FC<Props>` | Function component (implicit `children`; many teams avoid it) |
| `React.ComponentProps<typeof X>` | Reuse another component's props |
| `React.PropsWithChildren<P>` | Add `children` to `P` |
| `React.CSSProperties` | Inline `style` object |

---

## ⚠️ Common pitfalls

- Avoid `any` for event handlers — use the specific `React.*Event` type.
- Don't over-use `React.FC`; typing props directly gives better generics support.
- For `children`-optional components, mark `children?: React.ReactNode`.

# 📌 Refs & the DOM

> 💼 **Industry Perspective:** In professional frontend teams, **Refs & the DOM** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Refs give you a way to **reference a DOM node or store a mutable value** that persists across renders **without** triggering a re-render.

---

## 🎯 Accessing a DOM node

```tsx
import { useRef } from "react";

function TextInput() {
	const inputRef = useRef<HTMLInputElement>(null);

	function focusInput() {
		inputRef.current?.focus();
	}

	return (
		<>
			<input ref={inputRef} />
			<button onClick={focusInput}>Focus</button>
		</>
	);
}
```

---

## 🗃️ Refs as mutable "instance variables"

Unlike state, updating `ref.current` does **not** cause a re-render.

```tsx
function Timer() {
	const countRef = useRef(0);
	const intervalRef = useRef<number>();

	function start() {
		intervalRef.current = window.setInterval(() => {
			countRef.current += 1; // no re-render
			console.log(countRef.current);
		}, 1000);
	}

	function stop() {
		clearInterval(intervalRef.current);
	}
	return <><button onClick={start}>Start</button><button onClick={stop}>Stop</button></>;
}
```

| | State (`useState`) | Ref (`useRef`) |
|--|--------------------|----------------|
| Triggers re-render | ✅ Yes | ❌ No |
| Persists across renders | ✅ | ✅ |
| Use for | UI values | DOM nodes, timers, previous values |

---

## 📤 forwardRef — passing a ref to a child

```tsx
import { forwardRef } from "react";

const FancyInput = forwardRef<HTMLInputElement, { placeholder?: string }>(
	(props, ref) => <input ref={ref} {...props} />
);

// Parent can now focus the inner <input>
function Form() {
	const ref = useRef<HTMLInputElement>(null);
	return <FancyInput ref={ref} placeholder="Name" />;
}
```

---

## 🎛️ useImperativeHandle — expose a custom API

```tsx
const VideoPlayer = forwardRef((props, ref) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	useImperativeHandle(ref, () => ({
		play: () => videoRef.current?.play(),
		pause: () => videoRef.current?.pause(),
	}));
	return <video ref={videoRef} src={props.src} />;
});
```

---

## 🚫 When NOT to use refs

- Don't use refs to store data that should be rendered — use **state**.
- Avoid reading/writing the DOM manually when React can do it declaratively.
- Refs are an **escape hatch** — reach for them only when needed (focus, scroll, measurements, media, third-party DOM libs).

---

⬅ [Back to Index](../README.md)

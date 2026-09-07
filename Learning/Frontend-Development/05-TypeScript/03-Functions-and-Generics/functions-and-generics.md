# 🧩 Functions & Generics

> 💼 **Industry Perspective:** In professional frontend teams, **Functions & Generics** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Type your function inputs and outputs so callers can't misuse them. **Generics** let one function or type work with *many* types while staying fully type-safe.

---

## ✍️ Typing functions

```ts
function add(a: number, b: number): number {
	return a + b;
}

// Optional and default parameters
function greet(name: string, greeting: string = "Hi"): string {
	return `${greeting} ${name}`;
}

// Rest parameters
function sum(...nums: number[]): number {
	return nums.reduce((a, n) => a + n, 0);
}
```

## 🏹 Arrow functions & function types

```ts
const multiply: (a: number, b: number) => number = (a, b) => a * b;

type Transformer = (input: string) => string;
const upper: Transformer = (s) => s.toUpperCase();
```

---

## 🧬 Generics — reusable, type-safe code

Without generics you'd lose the type or repeat yourself:

```ts
// ❌ Loses type info
function firstAny(arr: any[]): any { return arr[0]; }

// ✅ Generic keeps the exact type
function first<T>(arr: T[]): T {
	return arr[0];
}

const n = first([1, 2, 3]);      // n is number
const s = first(["a", "b"]);      // s is string
```

`T` is a **type placeholder** filled in when the function is called.

---

## 🔒 Generic constraints

Restrict what types are allowed with `extends`.

```ts
function longest<T extends { length: number }>(a: T, b: T): T {
	return a.length >= b.length ? a : b;
}

longest("hello", "hi");     // ✅ strings have length
longest([1, 2, 3], [1]);    // ✅ arrays have length
longest(1, 2);              // ❌ number has no 'length'
```

---

## 🧰 Generic interfaces & classes

```ts
interface ApiResponse<T> {
	data: T;
	status: number;
}

const res: ApiResponse<User[]> = {
	data: [{ name: "Ada", age: 36, id: 1 }],
	status: 200,
};

class Box<T> {
	constructor(private value: T) {}
	get(): T { return this.value; }
}

const numberBox = new Box<number>(42);
```

---

## 🎛️ Multiple type parameters

```ts
function pair<K, V>(key: K, value: V): [K, V] {
	return [key, value];
}

const kv = pair("age", 36); // [string, number]
```

---

⬅ [Back to Index](../README.md)

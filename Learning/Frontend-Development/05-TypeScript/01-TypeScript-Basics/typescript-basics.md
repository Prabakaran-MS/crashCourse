# 🔷 TypeScript Basics

> 💼 **Industry Perspective:** In professional frontend teams, **TypeScript Basics** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** TypeScript is **JavaScript + types**. You write almost the same code, but you *label* what kind of value each variable holds — and the compiler catches mistakes **before** you run anything.

---

## 🚦 Why types?

```js
// Plain JavaScript — crashes only at runtime
function double(x) { return x * 2; }
double("hello"); // NaN 😱  (nobody warned you)
```

```ts
// TypeScript — error caught while typing
function double(x: number): number { return x * 2; }
double("hello"); // ❌ Argument of type 'string' is not assignable to 'number'
```

> All valid JavaScript is valid TypeScript. You can rename a `.js` file to `.ts` and add types gradually.

---

## 🏷️ Type annotations

```ts
let title: string = "Hello";
let count: number = 42;
let isDone: boolean = false;
let nothing: null = null;
let notSet: undefined = undefined;
let big: bigint = 100n;
let id: symbol = Symbol("id");
```

## 🧠 Type inference (let TS figure it out)

You usually **don't** need annotations — TypeScript infers the type from the value.

```ts
let title = "Hello"; // inferred as string
title = 42;          // ❌ Type 'number' is not assignable to 'string'
```

> **Rule of thumb:** Annotate function parameters and public APIs; let inference handle local variables.

---

## 📚 Arrays and tuples

```ts
let nums: number[] = [1, 2, 3];
let names: Array<string> = ["Ada", "Bob"]; // same thing, generic form

// Tuple — fixed length, fixed types per position
let pair: [string, number] = ["age", 36];
```

---

## 🎯 Special types

| Type | Meaning | Use when |
|------|---------|----------|
| `any` | Turns off type checking | Avoid — escape hatch only |
| `unknown` | Like `any` but must be checked before use | Safer `any` |
| `void` | Function returns nothing | `function log(): void` |
| `never` | Function never returns | Throws or infinite loop |

```ts
function log(msg: string): void {
	console.log(msg); // returns nothing
}

function fail(msg: string): never {
	throw new Error(msg); // never returns normally
}

let value: unknown = fetchData();
if (typeof value === "string") {
	value.toUpperCase(); // ✅ safe after the check
}
```

---

## ⚙️ Compiling to JavaScript

TypeScript doesn't run in the browser directly — it **compiles** down to plain JavaScript.

```bash
npm install -g typescript
tsc app.ts        # produces app.js
tsc --watch       # recompile on every save
```

---

⬅ [Back to Index](../README.md)

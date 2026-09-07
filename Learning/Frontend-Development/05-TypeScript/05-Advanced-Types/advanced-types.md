# 🧠 Advanced Types

> 💼 **Industry Perspective:** In professional frontend teams, **Advanced Types** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** TypeScript's real power is **combining** types — unions, intersections, literals, and built-in "utility" types — to model exactly what your data can be.

---

## 🔀 Union types (`A | B`)

A value that can be one of several types.

```ts
type Status = "active" | "paused" | "closed"; // literal union
let s: Status = "active";
s = "deleted"; // ❌ not one of the allowed values

function format(id: string | number): string {
	return `ID-${id}`;
}
```

## ➕ Intersection types (`A & B`)

Combine multiple types into one that has **all** properties.

```ts
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // must have name AND age

const p: Person = { name: "Ada", age: 36 };
```

---

## 🔎 Narrowing (type guards)

TypeScript figures out the exact type from your checks.

```ts
function print(value: string | number) {
	if (typeof value === "string") {
		value.toUpperCase(); // ✅ value is string here
	} else {
		value.toFixed(2);    // ✅ value is number here
	}
}
```

Custom type guard:

```ts
function isString(x: unknown): x is string {
	return typeof x === "string";
}
```

---

## 🏷️ Literal & enum types

```ts
// String/number literals
type Direction = "up" | "down" | "left" | "right";

// Enum — named set of constants
enum Role {
	Admin,      // 0
	Editor,     // 1
	Viewer,     // 2
}
const r: Role = Role.Admin;

// String enum
enum Color {
	Red = "RED",
	Green = "GREEN",
}
```

---

## 🧰 Utility types (built-in helpers)

```ts
interface User {
	id: number;
	name: string;
	email: string;
}

Partial<User>;             // all properties optional
Required<User>;            // all properties required
Readonly<User>;            // all properties read-only
Pick<User, "id" | "name">; // only id and name
Omit<User, "email">;       // everything except email
Record<string, number>;    // { [key: string]: number }
```

Example:

```ts
function updateUser(id: number, changes: Partial<User>) { /* … */ }
updateUser(1, { name: "New Name" }); // ✅ only some fields
```

---

## ❓ Optional chaining & nullish coalescing (typed)

```ts
type Config = { server?: { port?: number } };

function getPort(cfg: Config): number {
	return cfg.server?.port ?? 8080; // safe access + default
}
```

---

## 🔧 keyof & typeof

```ts
interface Settings { theme: string; volume: number; }

type SettingKey = keyof Settings; // "theme" | "volume"

const defaults = { theme: "dark", volume: 10 };
type Defaults = typeof defaults;  // { theme: string; volume: number }
```

---

⬅ [Back to Index](../README.md)

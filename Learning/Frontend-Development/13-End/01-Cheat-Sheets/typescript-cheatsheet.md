# 📄 TypeScript Cheat Sheet

> 💼 **Industry Perspective:** In professional frontend teams, **TypeScript Cheat Sheet** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> A quick reference for everyday TypeScript. Skim it; bookmark it.

---

## Basic types

```ts
let s: string = "hi";
let n: number = 42;
let b: boolean = true;
let arr: number[] = [1, 2, 3];
let tuple: [string, number] = ["age", 36];
let any1: any;        // avoid
let safe: unknown;    // must be checked before use
```

## Objects, interfaces & aliases

```ts
interface User {
	id: number;
	name: string;
	email?: string;     // optional
	readonly role: string;
}

type ID = string | number;
type Point = { x: number; y: number };
```

## Functions

```ts
function add(a: number, b: number): number { return a + b; }
const mul = (a: number, b: number): number => a * b;
type Fn = (x: string) => string;
function log(msg: string): void {}
```

## Generics

```ts
function first<T>(arr: T[]): T { return arr[0]; }
interface Box<T> { value: T; }
function pair<K, V>(k: K, v: V): [K, V] { return [k, v]; }
<T extends { length: number }>(x: T) => x.length; // constraint
```

## Union / intersection / literals

```ts
type Status = "on" | "off";
type A = X | Y;   // union
type C = X & Y;   // intersection
```

## Narrowing

```ts
if (typeof v === "string") { /* v is string */ }
if (Array.isArray(v)) { /* v is array */ }
function isUser(x: unknown): x is User { /* … */ return true; }
```

## Enums

```ts
enum Role { Admin, Editor, Viewer }
enum Color { Red = "RED", Green = "GREEN" }
```

## Utility types

```ts
Partial<T>;   Required<T>;   Readonly<T>;
Pick<T, K>;   Omit<T, K>;    Record<K, V>;
ReturnType<typeof fn>;       Parameters<typeof fn>;
```

## Classes

```ts
class Account {
	constructor(public owner: string, private balance = 0) {}
	deposit(n: number): void { this.balance += n; }
}
class Dog extends Animal implements Pet {}
abstract class Shape { abstract area(): number; }
```

## Modules

```ts
export function add() {}
export default class {}
import Thing, { add } from "./file";
import type { User } from "./models";
```

## Handy operators & helpers

```ts
a ?? b;       // nullish coalescing
a?.b?.c;      // optional chaining
value as User;      // type assertion
value!;             // non-null assertion
keyof User;         // "id" | "name" | ...
typeof someValue;   // extract a type from a value
```

## tsconfig quick keys

```json
{ "compilerOptions": {
	"strict": true, "target": "ES2020",
	"module": "ESNext", "outDir": "dist", "rootDir": "src"
}}
```

---

⬅ [Back to Index](../README.md)

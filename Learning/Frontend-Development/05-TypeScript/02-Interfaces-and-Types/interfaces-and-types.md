# 🧾 Interfaces & Type Aliases

> 💼 **Industry Perspective:** In professional frontend teams, **Interfaces & Type Aliases** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Interfaces and type aliases let you **describe the shape of an object** — what properties it has and their types — so the compiler enforces it everywhere.

---

## 🧱 Interface — the shape of an object

```ts
interface User {
	name: string;
	age: number;
	email?: string;      // optional (may be missing)
	readonly id: number; // can't be changed after creation
}

const ada: User = { name: "Ada", age: 36, id: 1 };
ada.id = 2; // ❌ Cannot assign to 'id' because it is read-only
```

---

## 🏷️ Type alias — name any type

```ts
type ID = string | number;      // union type
type Point = { x: number; y: number };

const p: Point = { x: 1, y: 2 };
let key: ID = "abc";
key = 123; // ✅ both allowed
```

---

## ⚔️ Interface vs Type — which one?

| | `interface` | `type` |
|--|-------------|--------|
| Objects/classes | ✅ Ideal | ✅ Works |
| Unions (`A \| B`) | ❌ No | ✅ Yes |
| Extending | `extends` | `&` (intersection) |
| Declaration merging | ✅ Yes | ❌ No |

> **Rule of thumb:** Use `interface` for object shapes you may extend; use `type` for unions, tuples, and function types.

---

## 🔗 Extending & combining

```ts
interface Animal { name: string; }
interface Dog extends Animal { breed: string; }

const rex: Dog = { name: "Rex", breed: "Lab" };

// Same idea with type aliases via intersection (&)
type Timestamps = { createdAt: Date };
type Post = { title: string } & Timestamps;
```

---

## 🧩 Function & index signatures

```ts
// Function type
type Greet = (name: string) => string;
const hello: Greet = (name) => `Hi ${name}`;

// Index signature — objects with dynamic keys
interface Scores {
	[player: string]: number;
}
const scores: Scores = { ada: 10, bob: 7 };
```

---

## 📦 Nested & array shapes

```ts
interface Team {
	name: string;
	members: User[];        // array of User
	lead: { name: string }; // inline object type
}
```

---

⬅ [Back to Index](../README.md)

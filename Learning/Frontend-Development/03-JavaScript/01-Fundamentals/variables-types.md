# 🔤 Variables & Types

> 💼 **Industry Perspective:** In professional frontend teams, **Variables & Types** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** A variable is a **labeled box** you put a value in. JavaScript has a small set of value *types* — knowing them prevents most beginner bugs.

---

## 📦 Declaring variables

```js
let count = 0;        // can be reassigned
const name = "Ada";   // cannot be reassigned
var old = true;       // old style — avoid, has confusing scope rules
```

| Keyword | Reassignable? | Scope | Use it when… |
|---------|---------------|-------|--------------|
| `const` | ❌ No | Block | Default choice — value won't change. |
| `let`   | ✅ Yes | Block | The value needs to change. |
| `var`   | ✅ Yes | Function | Legacy code only — avoid in new code. |

> **Rule of thumb:** Reach for `const` first. Switch to `let` only when you must reassign.

---

## 🧱 The primitive types

```js
const s = "hello";        // string
const n = 42;             // number (integers and decimals)
const big = 9007199254740993n; // bigint
const yes = true;         // boolean
const nothing = null;     // intentional "no value"
let notSet;               // undefined (declared, no value yet)
const id = Symbol("id");  // symbol (unique key)
```

Everything that is **not** a primitive is an **object** (including arrays and functions).

```js
const list = [1, 2, 3];            // array (an object)
const user = { name: "Ada" };      // object
const greet = () => "hi";          // function (an object)
```

---

## 🔍 Checking types

```js
typeof "hi";      // "string"
typeof 42;        // "number"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object"  ← famous historical quirk
typeof [1, 2];    // "object"
Array.isArray([1, 2]); // true  ← use this for arrays
```

---

## ⚖️ Equality: `===` vs `==`

```js
1 === "1"; // false — strict, compares type AND value ✅ prefer this
1 == "1";  // true  — loose, converts types first ⚠️ surprising
```

> **Always use `===` and `!==`.** They do exactly what you expect.

---

## 🔁 Type coercion (the gotcha)

```js
"5" + 1;   // "51"  (number becomes string)
"5" - 1;   // 4     (string becomes number)
Boolean(0);       // false
Boolean("");      // false
Boolean("hello"); // true
```

**Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy.

---

⬅ [Back to Index](../README.md)

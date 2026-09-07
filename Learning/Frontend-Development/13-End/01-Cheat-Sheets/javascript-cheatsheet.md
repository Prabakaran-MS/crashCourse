# 📄 JavaScript Cheat Sheet

> 💼 **Industry Perspective:** In professional frontend teams, **JavaScript Cheat Sheet** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> A quick, everyday reference. Skim it; bookmark it.

---

## Variables

```js
const a = 1;   // constant
let b = 2;     // reassignable
```

## Strings

```js
const name = "Ada";
`Hello ${name}`;          // template literal
name.toUpperCase();       // "ADA"
name.includes("d");       // true
name.slice(0, 2);         // "Ad"
```

## Numbers & Math

```js
Number("42");     // 42
parseInt("42px"); // 42
(3.14159).toFixed(2); // "3.14"
Math.max(1, 9, 3);    // 9
Math.round(2.5);      // 3
```

## Arrays

```js
const xs = [1, 2, 3];
xs.map((x) => x * 2);       // [2, 4, 6]
xs.filter((x) => x > 1);    // [2, 3]
xs.reduce((a, x) => a + x); // 6
xs.find((x) => x === 2);    // 2
xs.includes(2);             // true
[...xs, 4];                 // [1, 2, 3, 4]
```

## Objects

```js
const user = { name: "Ada", age: 36 };
const { name, age } = user;     // destructuring
const copy = { ...user, age: 37 }; // spread + override
Object.keys(user);              // ["name", "age"]
Object.entries(user);           // [["name","Ada"],["age",36]]
```

## Control flow

```js
if (x > 0) { /* … */ } else { /* … */ }
for (const x of xs) { /* … */ }
xs.forEach((x) => { /* … */ });
const label = x > 0 ? "pos" : "neg"; // ternary
```

## Functions

```js
const add = (a, b) => a + b;
function greet(name = "friend") { return `Hi ${name}`; }
```

## Async

```js
const data = await fetch(url).then((r) => r.json());
const [a, b] = await Promise.all([p1, p2]);
```

## Handy operators

```js
a ?? b;      // b only if a is null/undefined
a?.b?.c;     // safe access, no crash if a/b missing
a ||= b;     // assign b if a is falsy
```

---

⬅ [Back to Index](../README.md)

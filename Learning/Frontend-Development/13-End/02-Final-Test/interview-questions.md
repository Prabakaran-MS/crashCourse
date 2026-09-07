# 📝 Final Test — Interview Questions

> 💼 **Industry Perspective:** In professional frontend teams, **Final Test — Interview Questions** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> Try to answer before expanding each solution. If you can explain these clearly, you've got the fundamentals.

---

### 1. What is the difference between `let`, `const`, and `var`?

<details><summary>Answer</summary>

`const` is block-scoped and cannot be reassigned. `let` is block-scoped and can be reassigned. `var` is function-scoped, hoisted, and should be avoided in modern code. Prefer `const` by default.
</details>

### 2. What does `===` do that `==` doesn't?

<details><summary>Answer</summary>

`===` (strict equality) compares **both type and value** with no coercion. `==` converts types first, causing surprises like `1 == "1"` being `true`. Always use `===`.
</details>

### 3. List the falsy values in JavaScript.

<details><summary>Answer</summary>

`false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy.
</details>

### 4. What is a closure?

<details><summary>Answer</summary>

A function that "remembers" variables from the scope where it was created, even after that outer function has returned. Used for private state and callbacks.
</details>

### 5. Explain the event loop in one sentence.

<details><summary>Answer</summary>

JavaScript runs one task at a time on the call stack; slow tasks (timers, network) run elsewhere and their callbacks are queued, then the event loop pushes them back onto the stack when it's empty.
</details>

### 6. What is the difference between a promise and `async/await`?

<details><summary>Answer</summary>

`async/await` is syntactic sugar over promises. An `async` function returns a promise, and `await` pauses inside it until a promise settles — making async code read top-to-bottom.
</details>

### 7. How does TypeScript relate to JavaScript?

<details><summary>Answer</summary>

TypeScript is a **superset** of JavaScript: all valid JS is valid TS, plus static type-checking. It compiles down to plain JavaScript before running.
</details>

### 8. Is React a framework or a library, and how does it relate to JavaScript?

<details><summary>Answer</summary>

React is a **library** focused on building UIs. It is written in and used with JavaScript (commonly TypeScript). Like Angular and Vue, it runs *on top of* JavaScript.
</details>

### 9. What does `Promise.all` do?

<details><summary>Answer</summary>

Runs multiple promises concurrently and resolves when **all** succeed (or rejects if any fails). Faster than awaiting them sequentially when tasks are independent.
</details>

### 10. What do `?.` and `??` do?

<details><summary>Answer</summary>

`?.` (optional chaining) safely accesses nested properties without crashing if something is `null`/`undefined`. `??` (nullish coalescing) returns the right side only when the left is `null` or `undefined`.
</details>

---

⬅ [Back to Index](../README.md)

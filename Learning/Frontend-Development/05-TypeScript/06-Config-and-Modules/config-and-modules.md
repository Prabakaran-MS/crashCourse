# ⚙️ Config & Modules

> 💼 **Industry Perspective:** In professional frontend teams, **Config & Modules** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** `tsconfig.json` tells the compiler *how* to check and build your code, and **modules** (`import`/`export`) let you split code into reusable files.

---

## 🛠️ Setting up a project

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init        # creates tsconfig.json
npx tsc               # compiles the project
```

---

## 📄 tsconfig.json essentials

```json
{
  "compilerOptions": {
	"target": "ES2020",          // JS version to output
	"module": "ESNext",          // module system
	"outDir": "./dist",          // where compiled JS goes
	"rootDir": "./src",          // where source .ts lives
	"strict": true,              // enable all strict checks
	"esModuleInterop": true,     // smoother default imports
	"sourceMap": true,           // debug .ts in the browser
	"skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

| Option | Why it matters |
|--------|----------------|
| `strict` | Turns on `noImplicitAny`, `strictNullChecks`, etc. Recommended. |
| `target` | Which JavaScript version the output uses. |
| `outDir` / `rootDir` | Keep source and compiled output separate. |
| `sourceMap` | Lets you debug TypeScript directly. |

> **Tip:** Keep `"strict": true`. It catches the bugs TypeScript exists to prevent.

---

## 📦 Modules — export & import

```ts
// math.ts — named exports
export function add(a: number, b: number): number { return a + b; }
export const PI = 3.14159;

// default export
export default class Calculator { /* … */ }
```

```ts
// app.ts — importing
import Calculator, { add, PI } from "./math";

add(2, 3);
console.log(PI);
```

Re-export and rename:

```ts
export { add as sum } from "./math";
import { add as plus } from "./math";
```

---

## 🏷️ Type-only imports

Import types without pulling in runtime code (smaller bundles):

```ts
import type { User } from "./models";

function save(user: User) { /* … */ }
```

---

## 🌍 Declaration files (`.d.ts`)

Describe the shape of JavaScript libraries that don't ship types.

```ts
// globals.d.ts
declare const API_URL: string;

declare module "legacy-lib" {
	export function doThing(x: number): void;
}
```

Many libraries publish types via `@types/*`:

```bash
npm install --save-dev @types/node
```

---

## 🧪 Running TypeScript directly

```bash
npx ts-node src/app.ts   # run without a separate compile step
tsc --watch              # recompile automatically on save
```

---

⬅ [Back to Index](../README.md)

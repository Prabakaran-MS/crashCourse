# 🛠️ Tooling & Build

> 💼 **Industry Perspective:** In professional frontend teams, **Tooling & Build** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Modern frontend development relies on a toolchain: package managers, bundlers, transpilers, linters, and formatters. This chapter maps the whole ecosystem.

⬅ [Back to Index](../README.md)

---

## 📦 Package Managers

Install and manage dependencies from the **npm registry**.

```bash
npm install react          # add dependency
npm install -D vite        # dev dependency
npm install -g serve       # global tool
npm run build              # run a script
npm update / npm audit fix
npx create-vite my-app     # run a package without installing
```

| Tool | Notes |
|---|---|
| **npm** | Default, ships with Node |
| **pnpm** | Fast, disk-efficient (symlinked store) — great for monorepos |
| **Yarn** | Berry (v2+) with PnP, workspaces |
| **Bun** | All-in-one runtime + package manager + bundler |

### `package.json`

```json
{
  "name": "my-app",
  "type": "module",
  "scripts": {
	"dev": "vite",
	"build": "vite build",
	"preview": "vite preview",
	"lint": "eslint .",
	"test": "vitest"
  },
  "dependencies": { "react": "^18.3.0" },
  "devDependencies": { "vite": "^5.0.0" }
}
```

- **`^1.2.3`** — allow minor/patch updates; **`~1.2.3`** — patch only.
- **Lockfile** (`package-lock.json` / `pnpm-lock.yaml`) pins exact versions — commit it.

---

## ⚡ Bundlers & Dev Servers

Bundlers combine modules, assets, and dependencies into optimized files for the browser.

### Vite (recommended default)
- Instant dev server using **native ES modules** + **esbuild**.
- Production build via **Rollup** (tree-shaking, code-splitting).

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, proxy: { "/api": "http://localhost:8080" } },
  build: { sourcemap: true, outDir: "dist" },
});
```

### Others
| Tool | Strength |
|---|---|
| **Vite** | Fast DX, modern default |
| **Webpack** | Mature, huge plugin/loader ecosystem, configurable |
| **Rollup** | Library bundling, clean ESM output |
| **esbuild** | Extremely fast (Go), used under the hood |
| **Turbopack** | Next.js's Rust bundler |
| **Parcel** | Zero-config |

### Webpack essentials

```js
// webpack.config.js
module.exports = {
  entry: "./src/index.js",
  output: { filename: "[name].[contenthash].js", path: __dirname + "/dist" },
  module: {
	rules: [
	  { test: /\.jsx?$/, use: "babel-loader", exclude: /node_modules/ },
	  { test: /\.css$/, use: ["style-loader", "css-loader"] },
	  { test: /\.(png|svg)$/, type: "asset/resource" },
	],
  },
  plugins: [/* HtmlWebpackPlugin, etc. */],
};
```
Key concepts: **entry, output, loaders, plugins, code splitting, HMR**.

---

## 🔄 Transpilers

Convert modern/other syntax into browser-compatible JavaScript.

- **Babel** — JS/JSX → older JS via presets/plugins.
- **TypeScript compiler (tsc)** — types + transpile.
- **SWC** (Rust) / **esbuild** (Go) — much faster, used by Vite/Next.

```js
// babel.config.js
module.exports = {
  presets: [
	["@babel/preset-env", { targets: "> 0.5%, not dead" }],
	"@babel/preset-react",
	"@babel/preset-typescript",
  ],
};
```

**Browserslist** (in `package.json`) tells tools which browsers to support:
```json
"browserslist": ["> 0.5%", "last 2 versions", "not dead"]
```

---

## 🧹 Linting & Formatting

### ESLint — catches bugs & enforces rules

```js
// eslint.config.js (flat config)
import js from "@eslint/js";
export default [
  js.configs.recommended,
  {
	rules: {
	  "no-unused-vars": "warn",
	  "no-console": "warn",
	  eqeqeq: "error",
	},
  },
];
```

### Prettier — formats code consistently

```json
// .prettierrc
{ "semi": true, "singleQuote": true, "printWidth": 100, "tabWidth": 2 }
```

> ✅ Let **ESLint handle code quality** and **Prettier handle formatting**. Combine with `eslint-config-prettier` to avoid conflicts.

### Git hooks
**Husky** + **lint-staged** run lint/format/tests on commit:

```json
"lint-staged": { "*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"] }
```

---

## 🧬 TypeScript in the Toolchain

```json
// tsconfig.json
{
  "compilerOptions": {
	"target": "ES2022",
	"module": "ESNext",
	"moduleResolution": "bundler",
	"strict": true,
	"jsx": "react-jsx",
	"skipLibCheck": true,
	"noEmit": true
  },
  "include": ["src"]
}
```

---

## 🏢 Monorepos

Manage multiple packages/apps in one repo.

- **Workspaces**: npm/pnpm/Yarn workspaces.
- **Task runners**: **Turborepo**, **Nx** — caching, affected-only builds, task graphs.

```json
// package.json (pnpm workspace root)
"workspaces": ["apps/*", "packages/*"]
```

---

## 🔧 A Typical Toolchain

```
Source (TS/JSX/SCSS)
  → ESLint + Prettier (quality)
  → Babel/SWC/tsc (transpile)
  → Vite/Webpack (bundle, split, minify)
  → dist/ (hashed, compressed assets)
  → CI/CD (test + deploy to CDN)
```

---

## ✅ Key Takeaways

- **Vite** is the modern default; **Webpack** still powers highly-custom setups.
- Bundlers do **module resolution, tree-shaking, code-splitting, minification**.
- **Babel/SWC/esbuild** transpile modern syntax; **Browserslist** sets targets.
- **ESLint + Prettier + Husky** keep code clean automatically.
- **Turborepo/Nx** scale large monorepos.

➡ **Next:** [PWA & Offline](../46-PWA-and-Offline/pwa-and-offline.md)

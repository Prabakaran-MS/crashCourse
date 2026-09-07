# 🗄️ State Management Libraries

> 💼 **Industry Perspective:** In professional frontend teams, **State Management Libraries** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** For state shared across many components, dedicated libraries offer structure, performance, and devtools beyond `useState`/Context.

---

## 🧭 Choosing an approach

| Need | Reach for |
|------|-----------|
| Local component state | `useState` / `useReducer` |
| A few shared values, low churn | Context API |
| Large app, complex logic, devtools | **Redux Toolkit** |
| Simple global store, minimal boilerplate | **Zustand** |
| Atom-based, fine-grained | **Recoil** / **Jotai** |
| Server data / caching | **TanStack Query** (see Data Fetching) |

---

## 🟣 Redux Toolkit (RTK) — the modern Redux

```bash
npm install @reduxjs/toolkit react-redux
```

```tsx
// store.ts
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
	name: "counter",
	initialState: { value: 0 },
	reducers: {
		increment: (s) => { s.value += 1; },      // Immer lets you "mutate"
		addBy: (s, action) => { s.value += action.payload; },
	},
});

export const { increment, addBy } = counter.actions;
export const store = configureStore({ reducer: { counter: counter.reducer } });
```

```tsx
// Provide the store
import { Provider } from "react-redux";
<Provider store={store}><App /></Provider>

// Use it in components
import { useSelector, useDispatch } from "react-redux";
const value = useSelector((s: RootState) => s.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```

RTK also includes **createAsyncThunk** for async logic and **RTK Query** for data fetching.

---

## 🐻 Zustand — minimal global store

```bash
npm install zustand
```

```tsx
import { create } from "zustand";

type Store = { count: number; inc: () => void };
const useStore = create<Store>((set) => ({
	count: 0,
	inc: () => set((s) => ({ count: s.count + 1 })),
}));

// In any component — no Provider needed
function Counter() {
	const { count, inc } = useStore();
	return <button onClick={inc}>{count}</button>;
}
```

---

## ⚛️ Recoil & Jotai — atom-based state

```tsx
// Jotai
import { atom, useAtom } from "jotai";
const countAtom = atom(0);

function Counter() {
	const [count, setCount] = useAtom(countAtom);
	return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

Atoms are tiny units of state; components subscribe only to the atoms they use, minimizing re-renders.

---

## 🧠 Rules of thumb

- Keep **server state** (API data) separate from **UI state** (modals, toggles).
- Don't reach for Redux on day one — start with `useState`/Context and scale up.
- Prefer RTK over hand-written Redux; it removes most boilerplate.

---

⬅ [Back to Index](../README.md)

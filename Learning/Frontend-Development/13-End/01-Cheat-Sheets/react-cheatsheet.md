# 📄 React Cheat Sheet

> 💼 **Industry Perspective:** In professional frontend teams, **React Cheat Sheet** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> A quick reference for everyday React. Skim it; bookmark it.

---

## Component & props

```tsx
type Props = { name: string; age?: number; children?: React.ReactNode };
function Hello({ name, children }: Props) {
	return <div>Hi {name}{children}</div>;
}
export default Hello;
```

## State & events

```tsx
const [count, setCount] = useState(0);
setCount((c) => c + 1);
<button onClick={() => setCount(0)}>Reset</button>
<input value={v} onChange={(e) => setV(e.target.value)} />
```

## Conditional & lists

```tsx
{loading ? <Spinner /> : <Data />}
{error && <p>{error}</p>}
{items.map((i) => <li key={i.id}>{i.text}</li>)}
```

## Effects

```tsx
useEffect(() => {
	const id = setInterval(tick, 1000);
	return () => clearInterval(id);
}, [dep]);
```

## Hooks quick list

```tsx
useState, useReducer          // state
useEffect, useLayoutEffect    // side effects
useContext                    // context
useRef, useImperativeHandle   // refs
useMemo, useCallback          // performance
useId, useTransition, useDeferredValue, useSyncExternalStore // React 18
```

## Context

```tsx
const Ctx = createContext(defaultValue);
<Ctx.Provider value={v}>{children}</Ctx.Provider>
const value = useContext(Ctx);
```

## Refs

```tsx
const ref = useRef<HTMLInputElement>(null);
<input ref={ref} />;
ref.current?.focus();
const Fancy = forwardRef((props, ref) => <input ref={ref} />);
```

## Performance

```tsx
const Memoized = React.memo(Component);
const value = useMemo(() => compute(a), [a]);
const fn = useCallback(() => do(a), [a]);
const Lazy = lazy(() => import("./X"));
<Suspense fallback={<Spinner />}><Lazy /></Suspense>
```

## Router

```tsx
<BrowserRouter><Routes>
	<Route path="/" element={<Home />} />
	<Route path="/u/:id" element={<User />} />
</Routes></BrowserRouter>
const { id } = useParams();
const navigate = useNavigate(); navigate("/home");
<Link to="/about">About</Link>
```

## Data fetching (TanStack Query)

```tsx
const { data, isLoading, error } = useQuery({
	queryKey: ["users"], queryFn: () => fetch("/api").then(r => r.json())
});
```

## State libraries

```tsx
// Zustand
const useStore = create((set) => ({ n: 0, inc: () => set(s => ({ n: s.n + 1 })) }));
// Redux Toolkit
const slice = createSlice({ name, initialState, reducers });
useSelector(s => s.x); useDispatch();
```

## Rules of hooks

- Call hooks only at the top level.
- Call hooks only from components or custom hooks.

---

⬅ [Back to Index](../README.md)

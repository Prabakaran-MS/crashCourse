# 🌐 Data Fetching Libraries

> 💼 **Industry Perspective:** In professional frontend teams, **Data Fetching Libraries** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Fetching in `useEffect` works, but **server state** needs caching, refetching, loading/error states, and deduping. Dedicated libraries handle all of that.

---

## 🪝 Baseline: fetch in useEffect

```tsx
function Users() {
	const [data, setData] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/users")
			.then((r) => r.json())
			.then(setData)
			.catch((e) => setError(String(e)))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p>Loading…</p>;
	if (error) return <p>Error: {error}</p>;
	return <ul>{data.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

This gets repetitive and lacks caching. Libraries fix that.

---

## 🔷 TanStack Query (React Query) — the standard

```bash
npm install @tanstack/react-query
```

```tsx
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const client = new QueryClient();
<QueryClientProvider client={client}><App /></QueryClientProvider>

function Users() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["users"],
		queryFn: () => fetch("/api/users").then((r) => r.json()),
	});

	if (isLoading) return <p>Loading…</p>;
	if (error) return <p>Error</p>;
	return <ul>{data.map((u: User) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

**You get for free:** caching, background refetching, deduping, retries, pagination, and `staleTime` control.

### Mutations

```tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const qc = useQueryClient();
const addUser = useMutation({
	mutationFn: (u: NewUser) => fetch("/api/users", { method: "POST", body: JSON.stringify(u) }),
	onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
});

addUser.mutate({ name: "Ada" });
```

---

## 🌀 SWR — lightweight alternative (by Vercel)

```bash
npm install swr
```

```tsx
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function Profile() {
	const { data, error, isLoading } = useSWR("/api/user", fetcher);
	if (isLoading) return <p>Loading…</p>;
	if (error) return <p>Error</p>;
	return <h1>{data.name}</h1>;
}
```

`SWR` = "stale-while-revalidate": show cached data instantly, refetch in the background.

---

## 🧰 Other options

- **RTK Query** — built into Redux Toolkit; great if you already use Redux.
- **Apollo Client / urql** — for **GraphQL** APIs.
- **axios** — a popular fetch replacement (pairs with any of the above).

---

## 🧠 Key idea: separate server state from UI state

Server state is **cached, async, and shared**. Treat it differently from local UI toggles — that's exactly what these libraries do.

---

⬅ [Back to Index](../README.md)

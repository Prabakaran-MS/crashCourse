# 🔌 Data & APIs

> 💼 **Industry Perspective:** In professional frontend teams, **Data & APIs** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> Frontend apps are only useful with data. This chapter covers how to talk to servers: REST, GraphQL, real-time protocols, and the client libraries that manage caching, loading, and errors.

⬅ [Back to Index](../README.md)

---

## 🌐 REST APIs

REST models data as **resources** accessed via HTTP verbs.

| Verb | Purpose | Idempotent |
|---|---|---|
| `GET` | Read | ✅ |
| `POST` | Create | ❌ |
| `PUT` | Replace | ✅ |
| `PATCH` | Partial update | ❌ |
| `DELETE` | Remove | ✅ |

```js
// CRUD with fetch
const users = await (await fetch("/api/users")).json();          // GET
await fetch("/api/users", {                                       // POST
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada" }),
});
await fetch(`/api/users/${id}`, { method: "DELETE" });            // DELETE
```

### Status codes
`200` OK · `201` Created · `204` No Content · `301/302` Redirect · `400` Bad Request · `401` Unauthorized · `403` Forbidden · `404` Not Found · `429` Too Many Requests · `500` Server Error.

### Axios (popular HTTP client)

```js
import axios from "axios";
const api = axios.create({ baseURL: "/api", timeout: 5000 });
api.interceptors.request.use((cfg) => {
  cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});
const { data } = await api.get("/users");
```
Axios adds interceptors, automatic JSON, timeouts, and better errors vs raw `fetch`.

---

## 🕸️ GraphQL

A query language where the **client requests exactly the data it needs** from a single endpoint.

```graphql
# Query
query GetUser($id: ID!) {
  user(id: $id) {
	name
	email
	posts(first: 5) { title }
  }
}

# Mutation
mutation AddPost($input: PostInput!) {
  createPost(input: $input) { id title }
}

# Subscription (real-time)
subscription { postAdded { id title } }
```

### REST vs GraphQL

| | REST | GraphQL |
|---|---|---|
| Endpoints | Many | One |
| Over/under-fetching | Common | Avoided |
| Versioning | URL/versions | Schema evolution |
| Caching | HTTP caching easy | Needs client cache |

### Apollo Client (React)

```jsx
import { useQuery, gql } from "@apollo/client";
const GET_USER = gql`query($id: ID!){ user(id:$id){ name } }`;

function User({ id }) {
  const { data, loading, error } = useQuery(GET_USER, { variables: { id } });
  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error</p>;
  return <p>{data.user.name}</p>;
}
```
Other clients: **urql**, **Relay**, **graphql-request** (lightweight).

---

## ⚡ Server State Libraries (the modern default)

Don't hand-roll fetch + `useState` + `useEffect`. Libraries handle **caching, deduping, background refetch, retries, pagination, and loading/error states**.

### TanStack Query (React Query)

```jsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function Todos() {
  const { data, isLoading, error } = useQuery({
	queryKey: ["todos"],
	queryFn: () => fetch("/api/todos").then((r) => r.json()),
	staleTime: 60_000,
  });

  const qc = useQueryClient();
  const add = useMutation({
	mutationFn: (todo) => fetch("/api/todos", { method: "POST", body: JSON.stringify(todo) }),
	onSuccess: () => qc.invalidateQueries({ queryKey: ["todos"] }),
  });

  if (isLoading) return <p>Loading…</p>;
  return <button onClick={() => add.mutate({ text: "New" })}>Add</button>;
}
```

Alternatives: **SWR** (Vercel), **RTK Query** (Redux Toolkit), **Pinia Colada** (Vue).

> 🧠 **Rule of thumb:** use a server-state library for API data; use a state manager (Redux/Zustand/Pinia) only for genuine **client** state.

---

## 🔴 Real-Time Data

### WebSockets (bidirectional)

```js
const ws = new WebSocket("wss://example.com/chat");
ws.onopen = () => ws.send(JSON.stringify({ type: "join" }));
ws.onmessage = (e) => console.log(JSON.parse(e.data));
ws.onclose = () => console.log("disconnected");
```
Libraries: **Socket.IO** (rooms, reconnection, fallbacks).

### Server-Sent Events (one-way, server → client)

```js
const es = new EventSource("/api/stream");
es.onmessage = (e) => console.log(e.data);
es.addEventListener("price", (e) => update(e.data));
```

| Need | Use |
|---|---|
| Chat, games, collaboration | WebSockets |
| Live feeds, notifications (one-way) | SSE |
| Occasional updates | Polling / refetch |

---

## 📄 Handling Data Well

- **Loading / error / empty** states for every request.
- **Pagination**: offset (`?page=2`) or cursor (`?after=abc`) — cursor scales better.
- **Optimistic updates** for snappy UX (update UI before server confirms).
- **Debounce** search inputs; **cancel** stale requests with `AbortController`.
- **Retry with backoff** for transient failures.
- **Validate** API responses (e.g., **Zod**) at the boundary.

```js
import { z } from "zod";
const User = z.object({ id: z.number(), name: z.string() });
const data = User.parse(await res.json()); // throws if shape is wrong
```

---

## ✅ Key Takeaways

- **REST** (resources + verbs) and **GraphQL** (precise queries) are the two main API styles.
- Use **TanStack Query / SWR / RTK Query / Apollo** — don't hand-roll caching.
- **WebSockets** for two-way real-time, **SSE** for one-way streams.
- Always handle loading/error/empty, paginate, and validate responses.

➡ **Next:** [Architecture & Testing](../50-Architecture-and-Testing/architecture-and-testing.md)

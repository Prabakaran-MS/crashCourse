# 🧭 Routing (React Router)

> 💼 **Industry Perspective:** In professional frontend teams, **Routing (React Router)** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** React itself has no routing. **React Router** is the standard library for mapping URLs to components in single-page apps.

```bash
npm install react-router-dom
```

---

## 🛣️ Basic setup

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} /> {/* catch-all 404 */}
			</Routes>
		</BrowserRouter>
	);
}
```

---

## 🔗 Navigation: Link & NavLink

```tsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>

<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
	About
</NavLink>
```

---

## 🧩 Nested routes & layouts

```tsx
<Routes>
	<Route path="/dashboard" element={<DashboardLayout />}>
		<Route index element={<Overview />} />
		<Route path="settings" element={<Settings />} />
	</Route>
</Routes>

// In DashboardLayout — where children render:
import { Outlet } from "react-router-dom";
function DashboardLayout() {
	return <div><Sidebar /><Outlet /></div>;
}
```

---

## 🔢 URL params

```tsx
<Route path="/users/:id" element={<User />} />

import { useParams } from "react-router-dom";
function User() {
	const { id } = useParams();       // string
	return <p>User {id}</p>;
}
```

---

## 🧭 Programmatic navigation & query strings

```tsx
import { useNavigate, useSearchParams } from "react-router-dom";

const navigate = useNavigate();
navigate("/login");                 // go
navigate(-1);                       // back

const [params, setParams] = useSearchParams();
const q = params.get("q");          // ?q=react
setParams({ q: "hooks" });
```

---

## 📦 Data router (v6.4+) — loaders & actions

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/users/:id",
		element: <User />,
		loader: async ({ params }) => fetch(`/api/users/${params.id}`),
	},
]);

<RouterProvider router={router} />;

// In the component:
import { useLoaderData } from "react-router-dom";
const user = useLoaderData();
```

---

## 🔒 Protected routes

```tsx
function RequireAuth({ children }: { children: JSX.Element }) {
	const isAuthed = useAuth();
	return isAuthed ? children : <Navigate to="/login" replace />;
}
```

---

⬅ [Back to Index](../README.md)

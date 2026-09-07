# 📲 PWA & Offline

> 💼 **Industry Perspective:** In professional frontend teams, **PWA & Offline** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Progressive Web Apps (PWAs)** are websites that behave like native apps — installable, offline-capable, and able to receive push notifications — powered by Service Workers and a Web App Manifest.

⬅ [Back to Index](../README.md)

---

## 🧠 What Makes a PWA

1. **HTTPS** (required for service workers).
2. **Web App Manifest** — makes it installable.
3. **Service Worker** — enables offline & caching.
4. Responsive, accessible, fast (see previous chapters).

---

## 📄 Web App Manifest

A JSON file describing how the app appears when installed.

```json
// manifest.webmanifest
{
  "name": "My Learning Hub",
  "short_name": "LearnHub",
  "description": "Learn frontend development",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#4f46e5",
  "orientation": "portrait",
  "icons": [
	{ "src": "/icons/192.png", "sizes": "192x192", "type": "image/png" },
	{ "src": "/icons/512.png", "sizes": "512x512", "type": "image/png" },
	{ "src": "/icons/maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

```html
<link rel="manifest" href="/manifest.webmanifest" />
<meta name="theme-color" content="#4f46e5" />
```

`display` options: `standalone`, `fullscreen`, `minimal-ui`, `browser`.

---

## ⚙️ Service Workers

A script that runs **in the background**, separate from the page, acting as a **programmable network proxy**.

```js
// Register (in your app)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
	navigator.serviceWorker.register("/sw.js");
  });
}
```

### Lifecycle

```js
// sw.js
const CACHE = "app-v1";
const ASSETS = ["/", "/index.html", "/app.js", "/styles.css", "/offline.html"];

// 1. Install — precache the app shell
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

// 2. Activate — clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
	caches.keys().then((keys) =>
	  Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
	)
  );
  self.clients.claim();
});

// 3. Fetch — intercept requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
	caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
```

> ⚠️ Service workers can only be registered over **HTTPS** (localhost is exempt).

---

## 🗂️ Caching Strategies

| Strategy | Behavior | Best for |
|---|---|---|
| **Cache First** | Serve cache, fall back to network | Static assets (CSS, JS, fonts) |
| **Network First** | Try network, fall back to cache | Frequently-updated API data |
| **Stale While Revalidate** | Serve cache, update in background | Balance freshness & speed |
| **Network Only** | Always network | Non-cacheable (POST) |
| **Cache Only** | Always cache | Precached app shell |

```js
// Stale-while-revalidate
self.addEventListener("fetch", (event) => {
  event.respondWith(
	caches.open(CACHE).then(async (cache) => {
	  const cached = await cache.match(event.request);
	  const network = fetch(event.request).then((res) => {
		cache.put(event.request, res.clone());
		return res;
	  });
	  return cached || network;
	})
  );
});
```

---

## 💾 Offline Data — IndexedDB

For structured/offline data, use **IndexedDB** (via a wrapper like **idb** or **Dexie**).

```js
import { openDB } from "idb";
const db = await openDB("app", 1, {
  upgrade(db) { db.createObjectStore("todos", { keyPath: "id" }); },
});
await db.put("todos", { id: 1, text: "Learn PWA" });
const all = await db.getAll("todos");
```

**Background Sync** retries failed requests when connectivity returns:
```js
await registration.sync.register("sync-todos");
```

---

## 🔔 Push Notifications

```js
// Ask permission and subscribe
const perm = await Notification.requestPermission();
if (perm === "granted") {
  const sub = await registration.pushManager.subscribe({
	userVisibleOnly: true,
	applicationServerKey: vapidPublicKey,
  });
  await fetch("/api/subscribe", { method: "POST", body: JSON.stringify(sub) });
}
```

```js
// In sw.js — receive a push
self.addEventListener("push", (event) => {
  const data = event.data.json();
  event.waitUntil(
	self.registration.showNotification(data.title, { body: data.body, icon: "/icon.png" })
  );
});
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
```

---

## 📲 Install Experience

```js
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});
installBtn.addEventListener("click", async () => {
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
});
```

---

## 🧰 Tooling

- **Workbox** — Google's library that generates service workers and caching strategies (no boilerplate).
- **`vite-plugin-pwa`** / **Next PWA** — framework integrations.
- Audit with **Lighthouse → PWA** category.

```js
// vite-plugin-pwa
import { VitePWA } from "vite-plugin-pwa";
export default { plugins: [VitePWA({ registerType: "autoUpdate" })] };
```

---

## ✅ Key Takeaways

- A PWA = **HTTPS + manifest + service worker**.
- Service workers are a **network proxy** with install/activate/fetch lifecycle.
- Pick a **caching strategy** per resource type.
- Use **IndexedDB + Background Sync** for offline data.
- **Workbox** removes most of the boilerplate.

➡ **Next:** [Web Components](../47-Web-Components/web-components.md)

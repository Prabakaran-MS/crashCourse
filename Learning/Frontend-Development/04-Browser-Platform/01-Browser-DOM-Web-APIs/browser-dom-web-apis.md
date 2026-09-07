# 🌍 Browser, DOM & Web APIs

> 💼 **Industry Perspective:** In professional frontend teams, **Browser, DOM & Web APIs** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> The browser is the runtime for frontend code. Beyond JavaScript the language, the browser exposes hundreds of **Web APIs** — the DOM, events, storage, networking, observers, and more.

⬅ [Back to Index](../README.md)

---

## 🌳 The DOM (Document Object Model)

The browser parses HTML into a live tree of **nodes** you can read and change from JavaScript.

```js
// Selecting elements
document.getElementById("app");
document.querySelector(".card");        // first match
document.querySelectorAll("li");        // NodeList (all)

// Reading / writing
const el = document.querySelector("h1");
el.textContent = "New title";           // safe text
el.innerHTML = "<em>rich</em>";         // parses HTML (⚠ XSS risk)
el.setAttribute("data-id", "42");
el.dataset.id;                          // "42"
el.classList.add("active");
el.classList.toggle("open");
el.style.color = "red";
```

### Creating & moving nodes

```js
const li = document.createElement("li");
li.textContent = "Item";
list.append(li);          // add to end
list.prepend(li);         // add to start
li.remove();              // delete
el.replaceWith(newEl);
const clone = el.cloneNode(true);

// Fast bulk insert
const frag = document.createDocumentFragment();
items.forEach((t) => { const n = document.createElement("li"); n.textContent = t; frag.append(n); });
list.append(frag);
```

### Traversal
`parentElement`, `children`, `firstElementChild`, `nextElementSibling`, `closest(".card")`, `matches(".active")`.

---

## 🖱️ Events

```js
btn.addEventListener("click", (e) => {
  console.log(e.target);      // element clicked
  e.preventDefault();         // stop default (e.g., form submit)
  e.stopPropagation();        // stop bubbling
});

// Options
el.addEventListener("scroll", handler, { passive: true });
el.addEventListener("click", once, { once: true });

// Remove
el.removeEventListener("click", handler);
```

### Event delegation (one listener for many children)

```js
list.addEventListener("click", (e) => {
  const item = e.target.closest("li");
  if (item) console.log("Clicked", item.dataset.id);
});
```

- **Bubbling**: events travel child → ancestors (default).
- **Capturing**: pass `{ capture: true }` to catch on the way down.
- Custom events: `el.dispatchEvent(new CustomEvent("done", { detail: {...} }))`.

Common events: `click`, `input`, `change`, `submit`, `keydown`, `focus`/`blur`, `pointermove`, `scroll`, `resize`, `load`, `DOMContentLoaded`.

---

## 🌐 Networking — Fetch API

```js
// GET
const res = await fetch("/api/users");
if (!res.ok) throw new Error(res.status);
const users = await res.json();

// POST
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada" }),
});

// Abort / timeout
const ctrl = new AbortController();
setTimeout(() => ctrl.abort(), 5000);
await fetch(url, { signal: ctrl.signal });
```

Also: **`XMLHttpRequest`** (legacy), **`navigator.sendBeacon()`** (analytics on unload), **`EventSource`** (server-sent events), **`WebSocket`** (bidirectional).

---

## 💾 Client Storage

| API | Persists | Size | Use |
|---|---|---|---|
| `localStorage` | Forever (until cleared) | ~5MB | User prefs, tokens |
| `sessionStorage` | Per tab session | ~5MB | Temp state |
| Cookies | Configurable | ~4KB | Sent to server, auth |
| IndexedDB | Forever | Large | Structured/offline data |
| Cache API | Forever | Large | Offline assets (PWA) |

```js
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
localStorage.removeItem("theme");
JSON.parse(localStorage.getItem("cart") || "[]");

document.cookie = "id=42; max-age=3600; path=/; secure; samesite=strict";
```

---

## 👀 Observer APIs

```js
// IntersectionObserver — lazy loading, infinite scroll, reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ResizeObserver — react to element size changes
new ResizeObserver((entries) => { /* … */ }).observe(box);

// MutationObserver — watch DOM changes
new MutationObserver((muts) => { /* … */ }).observe(node, { childList: true, subtree: true });
```

---

## 🧵 Background Work — Web Workers

Run heavy JS off the main thread (keeps UI responsive).

```js
// main.js
const worker = new Worker("worker.js");
worker.postMessage({ numbers: [1, 2, 3] });
worker.onmessage = (e) => console.log("Result:", e.data);

// worker.js
onmessage = (e) => {
  const sum = e.data.numbers.reduce((a, b) => a + b, 0);
  postMessage(sum);
};
```

Related: **Service Workers** (offline/caching — see PWA chapter), **SharedWorker**, **`requestIdleCallback`**.

---

## 🧭 Other Useful Web APIs

```js
// Location & History (SPA routing)
location.pathname; location.search;
history.pushState({}, "", "/new-path");
window.addEventListener("popstate", handler);

// URL parsing
const url = new URL("https://x.com/p?q=1");
url.searchParams.get("q");

// Timers & animation
setTimeout(fn, 1000); setInterval(fn, 1000);
requestAnimationFrame(draw); // smooth 60fps loops

// Clipboard, geolocation, notifications
await navigator.clipboard.writeText("copied");
navigator.geolocation.getCurrentPosition((pos) => {});
await Notification.requestPermission();

// Media & files
navigator.mediaDevices.getUserMedia({ video: true });
new FileReader().readAsDataURL(file);
```

---

## ⚙️ How the Browser Runs Your Code

- **Rendering pipeline**: Parse HTML → DOM, Parse CSS → CSSOM → Render tree → Layout → Paint → Composite.
- **Event loop**: call stack → microtasks (Promises) → macrotasks (timers, events).
- **Reflow vs repaint**: changing layout (size/position) = reflow (expensive); changing color = repaint.

---

## ✅ Key Takeaways

- The DOM is a live tree — select, create, and update nodes efficiently (delegation, fragments).
- `fetch` + `AbortController` handle modern networking.
- Choose the right storage for the job.
- Observer APIs and Web Workers unlock performance patterns.

➡ **Next:** [Accessibility (a11y)](../42-Accessibility/accessibility.md)

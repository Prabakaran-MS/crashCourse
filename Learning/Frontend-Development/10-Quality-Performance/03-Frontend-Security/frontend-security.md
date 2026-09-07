# 🔒 Frontend Security

> 💼 **Industry Perspective:** In professional frontend teams, **Frontend Security** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> The browser runs untrusted code and handles sensitive data. Frontend security is about protecting users from attacks like XSS and CSRF, and handling auth and data safely.

⬅ [Back to Index](../README.md)

---

## 💉 XSS (Cross-Site Scripting)

**The #1 frontend threat.** An attacker injects malicious JavaScript that runs in your users' browsers.

```js
// ❌ VULNERABLE — injects raw user input as HTML
element.innerHTML = userInput; // <img src=x onerror="steal()">

// ✅ SAFE — treated as plain text
element.textContent = userInput;
```

### Types
- **Stored** — malicious script saved in DB, served to all users.
- **Reflected** — script comes from the URL/request and is echoed back.
- **DOM-based** — client JS writes untrusted data into the DOM.

### Defenses
- Use `textContent` / framework binding (React/Vue/Angular escape by default).
- **Never** use `innerHTML`, `dangerouslySetInnerHTML`, `v-html`, or `[innerHTML]` with untrusted data.
- **Sanitize** any HTML you must render with **DOMPurify**.
- Set a **Content Security Policy** (see below).
- Avoid `eval`, `new Function`, `setTimeout("string")`.

```js
import DOMPurify from "dompurify";
element.innerHTML = DOMPurify.sanitize(richUserHtml);
```

---

## 🛡️ Content Security Policy (CSP)

A response header that restricts what resources can load/run — a strong XSS backstop.

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.trusted.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';
```

- Blocks inline scripts and unknown origins by default.
- Prefer **nonces** or **hashes** over `'unsafe-inline'`.

---

## 🎭 CSRF (Cross-Site Request Forgery)

A malicious site tricks a logged-in user's browser into making an unwanted authenticated request (cookies are sent automatically).

### Defenses
- **SameSite cookies**: `Set-Cookie: session=…; SameSite=Strict; Secure; HttpOnly`.
- **CSRF tokens**: server issues a per-session token; client sends it back in a header/field.
- Prefer **`Authorization: Bearer` tokens** (not auto-sent) over cookie-only auth.
- Check **Origin/Referer** on state-changing requests.

```js
fetch("/api/transfer", {
  method: "POST",
  headers: { "X-CSRF-Token": csrfToken, "Content-Type": "application/json" },
  body: JSON.stringify({ amount }),
});
```

---

## 🌐 CORS (Cross-Origin Resource Sharing)

Browsers block cross-origin requests **unless** the server opts in via headers. CORS is enforced by the browser, configured by the server.

```
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

- **Preflight**: browser sends an `OPTIONS` request first for non-simple requests.
- Never use `Access-Control-Allow-Origin: *` with credentials.

---

## 🔑 Authentication & Token Storage

| Storage | XSS risk | CSRF risk | Notes |
|---|---|---|---|
| `localStorage` | ❌ High (JS-readable) | ✅ Safe | Convenient but exposed to XSS |
| Cookie (`HttpOnly`) | ✅ Safe (not JS-readable) | ❌ Needs SameSite/CSRF token | Best for session tokens |
| In-memory | ✅ Safe | ✅ Safe | Lost on refresh; pair with refresh token |

**Best practice:** access tokens **in memory**, refresh tokens in **HttpOnly + SameSite cookies**. Never store secrets in `localStorage` if you can avoid it.

- Use **OAuth 2.0 / OpenID Connect** with **PKCE** for SPAs.
- Validate JWTs on the server; treat client-side checks as UX only.

---

## 🧰 Other Protections

- **HTTPS everywhere** + **HSTS** header.
- **Security headers**: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` (or CSP `frame-ancestors`), `Referrer-Policy`.
- **Subresource Integrity (SRI)** for third-party scripts:
  ```html
  <script src="https://cdn/lib.js" integrity="sha384-…" crossorigin="anonymous"></script>
  ```
- **Dependency hygiene**: `npm audit`, Dependabot/Renovate, lockfiles, avoid abandoned packages.
- **Never** commit secrets/API keys to frontend code — anything shipped to the browser is public.
- Validate and sanitize on the **server** too — client validation is UX, not security.
- Beware **clickjacking** (frame-ancestors), **open redirects**, and **prototype pollution**.

---

## 🧪 Security Testing

- **Static**: ESLint security plugins, `npm audit`, Snyk.
- **Dynamic**: OWASP ZAP, Burp Suite.
- Follow the **OWASP Top 10** as a checklist.

---

## ✅ Key Takeaways

- **XSS** is the top risk — escape/sanitize output, use framework binding, add CSP.
- **CSRF** — SameSite cookies + tokens; prefer bearer tokens.
- **CORS** is a browser rule configured by the server.
- Store tokens carefully; **HttpOnly cookies** or memory beat `localStorage`.
- Anything shipped to the browser is **public** — never trust the client.

➡ **Next:** [Tooling & Build](../45-Tooling-and-Build/tooling-and-build.md)

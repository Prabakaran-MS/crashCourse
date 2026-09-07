# 🌐 HTML — The Structure of the Web

> 💼 **Industry Perspective:** In professional frontend teams, **HTML — The Structure of the Web** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **HTML (HyperText Markup Language)** describes the *structure and meaning* of a page. If a web page were a house, HTML is the framing and rooms — CSS is the paint and furniture, and JavaScript is the electricity that makes things work.

⬅ [Back to Index](../README.md)

---

## 🧠 The One Big Idea

HTML is **not a programming language** — it is a *markup* language. You wrap content in **elements** (tags) that give it meaning. The browser reads these tags and builds the **DOM** (Document Object Model).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>My First Page</title>
  </head>
  <body>
	<h1>Hello, world!</h1>
	<p>This is a paragraph.</p>
  </body>
</html>
```

---

## 🏷️ Anatomy of an Element

```html
<a href="https://example.com" target="_blank">Visit</a>
<!-- ^tag  ^attribute="value"                  ^content  ^closing tag -->
```

- **Tag** — the element name (`a`, `p`, `div`).
- **Attributes** — extra info (`href`, `id`, `class`, `src`, `alt`).
- **Void elements** — self-closing, no content: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`.

---

## 📑 Semantic HTML

Use elements that describe *meaning*, not just appearance. This improves accessibility, SEO, and maintainability.

```html
<header>Site header / nav</header>
<nav>Navigation links</nav>
<main>
  <article>
	<section>
	  <h2>Section title</h2>
	  <p>Content…</p>
	</section>
  </article>
  <aside>Related links / sidebar</aside>
</main>
<footer>Copyright, contact</footer>
```

| Element | Meaning |
|---|---|
| `<header>` | Introductory content for a page/section |
| `<nav>` | Major navigation block |
| `<main>` | The primary unique content (only one per page) |
| `<article>` | Self-contained, reusable content (blog post, card) |
| `<section>` | A thematic grouping with a heading |
| `<aside>` | Tangential content (sidebar, callout) |
| `<footer>` | Footer for a page/section |
| `<figure>` / `<figcaption>` | Media with a caption |
| `<time>` | Machine-readable dates/times |
| `<mark>` | Highlighted text |

> ❌ Avoid "div soup" (`<div>` for everything). ✅ Reach for a semantic element first.

---

## 📝 Text Content

```html
<h1>–<h6>  <!-- headings, one h1 per page, don't skip levels -->
<p>Paragraph</p>
<strong>important</strong> <em>emphasis</em>
<ul><li>Unordered item</li></ul>
<ol><li>Ordered item</li></ol>
<dl><dt>Term</dt><dd>Definition</dd></dl>
<blockquote cite="…">Quotation</blockquote>
<pre><code>Preformatted code</code></pre>
<abbr title="HyperText Markup Language">HTML</abbr>
```

---

## 🔗 Links & Images

```html
<a href="/about">Internal link</a>
<a href="https://x.com" rel="noopener noreferrer" target="_blank">External</a>
<a href="mailto:hi@site.com">Email</a>
<a href="tel:+123456789">Call</a>
<a href="#section-id">Jump to anchor</a>

<img src="cat.jpg" alt="A sleeping tabby cat" width="400" height="300" loading="lazy" />
<picture>
  <source srcset="hero.avif" type="image/avif" />
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="Hero" />
</picture>
```

> **`alt` is required** for meaningful images (screen readers). Use `alt=""` for purely decorative images.

---

## 🎬 Media

```html
<video controls width="640" poster="thumb.jpg">
  <source src="movie.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  Your browser doesn't support video.
</video>

<audio controls src="song.mp3"></audio>
```

---

## 📋 Forms — The Interactive Part

```html
<form action="/submit" method="post">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required minlength="2" />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" placeholder="you@site.com" />

  <label for="pw">Password</label>
  <input id="pw" name="password" type="password" autocomplete="current-password" />

  <fieldset>
	<legend>Plan</legend>
	<label><input type="radio" name="plan" value="free" checked /> Free</label>
	<label><input type="radio" name="plan" value="pro" /> Pro</label>
  </fieldset>

  <label><input type="checkbox" name="agree" required /> I agree</label>

  <label for="msg">Message</label>
  <textarea id="msg" name="message" rows="4"></textarea>

  <label for="country">Country</label>
  <select id="country" name="country">
	<option value="">Choose…</option>
	<option value="in">India</option>
	<option value="us">USA</option>
  </select>

  <input type="date" name="dob" />
  <input type="range" name="volume" min="0" max="100" />
  <input type="file" name="doc" accept=".pdf,image/*" />

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

### Input types worth knowing
`text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time`, `datetime-local`, `month`, `week`, `color`, `range`, `file`, `hidden`, `checkbox`, `radio`.

### Built-in validation attributes
`required`, `min`, `max`, `minlength`, `maxlength`, `pattern`, `step`, `type`. Pair with the `:valid` / `:invalid` CSS pseudo-classes.

> ✅ Always connect a `<label>` to its control via `for`/`id` (or wrap it) — critical for accessibility.

---

## 🧱 Tables (for tabular data only)

```html
<table>
  <caption>Sales</caption>
  <thead>
	<tr><th scope="col">Month</th><th scope="col">Total</th></tr>
  </thead>
  <tbody>
	<tr><td>Jan</td><td>$100</td></tr>
  </tbody>
  <tfoot>
	<tr><td>Total</td><td>$100</td></tr>
  </tfoot>
</table>
```

---

## 🧭 Document Metadata (`<head>`)

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Page summary for search engines" />
  <title>Page Title</title>
  <link rel="icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/styles.css" />

  <!-- Open Graph (social share previews) -->
  <meta property="og:title" content="My Page" />
  <meta property="og:image" content="/preview.png" />

  <script src="/app.js" defer></script>
</head>
```

- **`defer`** — download script in parallel, run after HTML is parsed (preferred).
- **`async`** — download in parallel, run as soon as ready (order not guaranteed).

---

## ♿ Accessibility & Best Practices

- Use one `<h1>` and a logical heading order.
- Prefer native elements (`<button>`, `<a>`) over clickable `<div>`s.
- Provide `alt` text, `<label>`s, and `lang` on `<html>`.
- Use `aria-*` attributes **only** when native semantics aren't enough (covered fully in the Accessibility chapter).

---

## ✅ Key Takeaways

- HTML gives content **structure and meaning**, not styling.
- Reach for **semantic elements** before generic `<div>`/`<span>`.
- Forms + validation attributes provide powerful native behavior.
- The `<head>` controls metadata, SEO, social previews, and resource loading.

➡ **Next:** [CSS Core](../38-CSS-Core/css-core.md)

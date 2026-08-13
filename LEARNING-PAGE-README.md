# ☁️ Cloud Computing — Learning Page

A tiny **HTML + CSS + JavaScript** app that reads the Markdown lesson files in
`Cloud-Computing-Learning/` and renders them neatly in the browser — including
tables, code highlighting, and the **Mermaid diagrams**.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure (top bar, sidebar, content area) |
| `style.css`  | Styling and responsive layout |
| `app.js`     | Lesson catalog, Markdown rendering, Mermaid + search |

## ▶️ How to run

The page loads `.md` files with `fetch()`, so it must be served over **HTTP**
(opening `index.html` directly with `file://` will be blocked by the browser).

Pick any one of these from the repo root:

```powershell
# Option 1: Python (if installed)
python -m http.server 8080

# Option 2: Node.js
npx serve .

# Option 3: VS / VS Code "Live Server" extension — right-click index.html → Open with Live Server
```

Then open: <http://localhost:8080/>

## ✨ Features
- Sidebar grouped by section (00 → 14), click a section title to collapse it.
- Live **filter box** to find a lesson by name.
- Renders GitHub-flavored Markdown: headings, tables, blockquotes, code.
- **Mermaid** diagrams render as real visuals.
- Deep-linkable — each lesson has its own `#hash` URL.
- Responsive: hamburger menu on small screens.

## 📦 Dependencies
All loaded from a CDN (no install needed):
- [marked](https://marked.js.org/) — Markdown parsing
- [highlight.js](https://highlightjs.org/) — code syntax highlighting
- [Mermaid](https://mermaid.js.org/) — diagrams

/* ============================================================
   Learning Page — dynamic, multi-concept learning viewer.

   Concepts are described by JSON data:
	 ../Learning/concepts.json           -> list of subjects
	 ../Learning/<concept>/manifest.json -> that subject's sections/lessons

   To add a new concept later:
	 1. Create ../Learning/<NewConcept>/ with your .md files.
	 2. Add a manifest.json describing its sections/lessons.
	 3. Add an entry to concepts.json.
   No code changes required.
   ============================================================ */

const ROOT = "../Learning/";
const CONCEPTS_URL = ROOT + "concepts.json";

const lessonEl = document.getElementById("lesson");
const sidebarEl = document.getElementById("sidebar");
const searchEl = document.getElementById("search");
const menuToggle = document.getElementById("menuToggle");
const conceptSelect = document.getElementById("conceptSelect");
const titleEl = document.getElementById("pageTitle");
const themeToggle = document.getElementById("themeToggle");

let concepts = [];
let currentConcept = null;
let currentPath = null;
let mermaidCounter = 0;

mermaid.initialize({ startOnLoad: false, theme: "default", securityLevel: "loose" });

const renderer = new marked.Renderer();
renderer.code = function (code, lang) {
	if (lang === "mermaid") {
		return `<div class="mermaid">${code}</div>`;
	}
	const valid = window.hljs && hljs.getLanguage(lang);
	const highlighted = valid
		? hljs.highlight(code, { language: lang }).value
		: (window.hljs ? hljs.highlightAuto(code).value : escapeHtml(code));
	return `<pre><code class="hljs ${lang || ""}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer, gfm: true, breaks: false });

function escapeHtml(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Strip decorative icons/emoji (any non-ASCII glyphs) from sidebar text.
function stripIcons(text) {
	return (text || "").replace(/[^\x00-\x7F]/g, "").replace(/\s+/g, " ").trim();
}

async function fetchJson(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
	return res.json();
}

async function loadConcepts() {
	const data = await fetchJson(CONCEPTS_URL);
	concepts = Array.isArray(data) ? data : data.concepts || [];
}

async function loadConcept(id) {
	const meta = concepts.find((c) => c.id === id) || concepts[0];
	if (!meta) throw new Error("No concepts defined in concepts.json");

	const manifestUrl = ROOT + (meta.manifest || `${meta.id}/manifest.json`);
	const manifest = await fetchJson(manifestUrl);

	currentConcept = {
		id: meta.id,
		title: manifest.title || meta.title || meta.id,
		icon: manifest.icon || meta.icon || "ðŸ“š",
		base: ROOT + meta.id + "/",
		sections: manifest.sections || [],
	};

	titleEl.textContent = `${currentConcept.icon} ${currentConcept.title} — Learning Page`;
	document.title = `${currentConcept.title} — Learning Page`;
	if (conceptSelect.value !== currentConcept.id) conceptSelect.value = currentConcept.id;

	buildSidebar();
}

function buildConceptSwitcher() {
	conceptSelect.innerHTML = "";
	concepts.forEach((c) => {
		const opt = document.createElement("option");
		opt.value = c.id;
		opt.textContent = `${c.icon || "ðŸ“š"} ${c.title || c.id}`;
		conceptSelect.appendChild(opt);
	});
	conceptSelect.style.display = concepts.length > 1 ? "" : "none";
}

function buildSidebar() {
	sidebarEl.innerHTML = "";
	const frag = document.createDocumentFragment();

	currentConcept.sections.forEach((section) => {
		const wrap = document.createElement("div");
		wrap.className = "nav-section";

		const title = document.createElement("button");
		title.className = "section-title";
		title.textContent = stripIcons(section.title);

		const ul = document.createElement("ul");
		ul.className = "nav-links";

		(section.lessons || []).forEach((lesson) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = "#" + makeHash(currentConcept.id, lesson.path);
			a.textContent = stripIcons(lesson.label);
			a.dataset.path = lesson.path;
			a.dataset.search = (lesson.label + " " + section.title).toLowerCase();
			li.appendChild(a);
			ul.appendChild(li);
		});

		title.addEventListener("click", () => ul.classList.toggle("nav-hidden"));

		wrap.appendChild(title);
		wrap.appendChild(ul);
		frag.appendChild(wrap);
	});

	sidebarEl.appendChild(frag);
}

sidebarEl.addEventListener("click", (e) => {
	const a = e.target.closest("a[data-path]");
	if (!a) return;
	e.preventDefault();
	location.hash = makeHash(currentConcept.id, a.dataset.path);
	if (window.innerWidth <= 800) sidebarEl.classList.remove("open");
});

// Intercept links inside rendered lessons so relative *.md links route
// through the app instead of navigating the browser to a raw file.
lessonEl.addEventListener("click", (e) => {
	const a = e.target.closest("a[href]");
	if (!a) return;

	const href = a.getAttribute("href");
	if (!href) return;

	// Leave external links, anchors and mailto/tel to the browser.
	if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;

	const [rawPath] = href.split("#");
	// Pure in-page anchor (e.g. "#section") — let the browser handle it.
	if (!rawPath) return;
	// Only intercept markdown lesson links.
	if (!/\.md$/i.test(rawPath)) return;

	e.preventDefault();
	const resolved = resolvePath(currentPath, rawPath);
	location.hash = makeHash(currentConcept.id, resolved);
	if (window.innerWidth <= 800) sidebarEl.classList.remove("open");
});

// Resolve a relative link (from a lesson) against the current lesson path.
function resolvePath(fromFile, relative) {
	const baseParts = (fromFile || "").split("/");
	baseParts.pop(); // drop the current file name, keep its directory
	relative.split("/").forEach((part) => {
		if (part === "" || part === ".") return;
		if (part === "..") baseParts.pop();
		else baseParts.push(part);
	});
	return baseParts.join("/");
}

async function loadLesson(path) {
	setActive(path);
	currentPath = path;
	lessonEl.innerHTML = `<p class="status">Loading…</p>`;

	try {
		const res = await fetch(currentConcept.base + path);
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const md = await res.text();

		lessonEl.innerHTML = marked.parse(md);

		const diagrams = lessonEl.querySelectorAll(".mermaid");
		for (const el of diagrams) {
			const id = "mmd-" + mermaidCounter++;
			const source = el.textContent;
			try {
				const { svg } = await mermaid.render(id, source);
				el.innerHTML = svg;
			} catch (err) {
				el.innerHTML = `<pre><code>${escapeHtml(source)}</code></pre>`;
			}
		}

		lessonEl.parentElement.scrollTop = 0;
		window.scrollTo(0, 0);
	} catch (err) {
		lessonEl.innerHTML =
			`<p class="status error">Could not load lesson (${err.message}).<br>` +
			`Make sure you are running this through a local web server (not opening the file directly).</p>`;
	}
}

function setActive(path) {
	sidebarEl.querySelectorAll("a[data-path]").forEach((a) => {
		a.classList.toggle("active", a.dataset.path === path);
	});
}

function filterLessons(term) {
	const q = term.trim().toLowerCase();
	sidebarEl.querySelectorAll(".nav-section").forEach((section) => {
		let visibleCount = 0;
		section.querySelectorAll("a[data-path]").forEach((a) => {
			const match = a.dataset.search.includes(q);
			a.parentElement.style.display = match ? "" : "none";
			if (match) visibleCount++;
		});
		section.style.display = visibleCount === 0 && q ? "none" : "";
	});
}

function makeHash(conceptId, path) {
	return `${conceptId}/${path}`;
}

function parseHash() {
	const raw = decodeURIComponent(location.hash.replace(/^#/, ""));
	if (!raw) return { conceptId: null, path: null };
	const slash = raw.indexOf("/");
	if (slash === -1) return { conceptId: raw, path: null };
	return { conceptId: raw.slice(0, slash), path: raw.slice(slash + 1) };
}

async function handleRoute() {
	const { conceptId, path } = parseHash();
	const targetId = conceptId || (concepts[0] && concepts[0].id);

	if (!currentConcept || currentConcept.id !== targetId) {
		await loadConcept(targetId);
	}

	if (path) {
		loadLesson(path);
	} else {
		const first = currentConcept.sections[0] && currentConcept.sections[0].lessons[0];
		if (first) location.hash = makeHash(currentConcept.id, first.path);
	}
}

function applyTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
	if (themeToggle) {
		themeToggle.textContent = theme === "dark" ? "\u2600\ufe0f" : "\ud83c\udf19";
	}
	try { localStorage.setItem("theme", theme); } catch (e) { /* ignore */ }
}

function initTheme() {
	let saved = null;
	try { saved = localStorage.getItem("theme"); } catch (e) { /* ignore */ }
	const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
	applyTheme(saved || "light");
}

async function init() {
	try {
		initTheme();
		await loadConcepts();
		buildConceptSwitcher();

		conceptSelect.addEventListener("change", () => {
			location.hash = conceptSelect.value + "/";
		});
		searchEl.addEventListener("input", (e) => filterLessons(e.target.value));
		menuToggle.addEventListener("click", () => sidebarEl.classList.toggle("open"));
		if (themeToggle) {
			themeToggle.addEventListener("click", () => {
				const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
				applyTheme(current === "dark" ? "light" : "dark");
			});
		}
		window.addEventListener("hashchange", handleRoute);

		await handleRoute();
	} catch (err) {
		lessonEl.innerHTML =
			`<p class="status error">Could not start the learning page (${err.message}).<br>` +
			`Make sure you are running this through a local web server.</p>`;
	}
}

init();

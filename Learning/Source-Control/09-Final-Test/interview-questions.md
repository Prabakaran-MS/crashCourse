⬅ [Back to Index](../README.md)

# 🎓 Final Test — Source Control & Version Management Interview Questions

Test your knowledge across the whole track. Try to answer each before reading the explanation.

---

### 1. What is the difference between Git and GitHub?
**Git** is a distributed version control tool that runs locally and tracks changes. **GitHub** is a cloud platform that hosts Git repositories and adds collaboration features (PRs, issues, Actions). Git works offline; GitHub needs the internet.

### 2. What are the three areas in Git's model?
The **working directory** (files you edit), the **staging area/index** (changes selected for the next commit), and the **repository** (committed history). `git add` moves changes to staging; `git commit` records them.

### 3. What actually is a commit?
An immutable snapshot of the whole project tree, identified by a hash, storing author, message, timestamp, and pointers to parent commit(s). Commits form the history graph.

### 4. Merge vs rebase — what's the difference?
**Merge** combines branches and preserves divergence (often with a merge commit). **Rebase** replays your commits onto a new base for a linear history. The golden rule: never rebase shared/public history.

### 5. What causes a merge conflict and how do you resolve it?
A conflict happens when two branches change the same region of a file. Git marks the sections; a human edits the file to the correct result, then `git add` and commit to complete the merge.

### 6. Lightweight vs annotated tags?
A **lightweight** tag is just a pointer to a commit. An **annotated** tag is a full object with tagger, date, message, and optional GPG signature — recommended for releases.

### 7. Explain Semantic Versioning.
`MAJOR.MINOR.PATCH`: **MAJOR** = breaking changes, **MINOR** = backward-compatible features, **PATCH** = backward-compatible bug fixes. The number communicates upgrade risk.

### 8. What is a pull request and why is it useful?
A PR proposes merging one branch into another, opening the change to review, discussion, and CI checks. It's the unit of collaboration and quality control, and a permanent record of what changed and why.

### 9. What does branch protection do?
It enforces conditions before changes reach a protected branch — required reviews, passing status checks, no force-push. It turns "don't break main" into enforced policy.

### 10. GitHub Flow vs Git Flow vs Trunk-Based?
**GitHub Flow**: one deployable `main` + short feature branches (continuous delivery). **Git Flow**: long-lived `main`/`develop` + release/hotfix branches (versioned releases). **Trunk-Based**: tiny frequent merges to one trunk with feature flags (high velocity).

### 11. What are Git hooks?
Scripts Git runs at lifecycle events (`pre-commit`, `commit-msg`, `pre-push`, `pre-receive`). They automate linting, tests, and policy. Client hooks aren't cloned and can be bypassed, so critical rules also need server-side enforcement.

### 12. What are submodules for, and their main gotcha?
A submodule embeds another repo at a pinned commit, keeping separate history. The classic gotcha: cloning without `--recurse-submodules` leaves empty folders — you must init/update submodules.

### 13. What problem does Git LFS solve?
Git stores every version of every file forever, so large binaries bloat history and slow clones. **LFS** stores a small pointer in history and keeps the real bytes on a separate server, fetched on demand.

### 14. How do you keep secrets out of a repo — and what if one leaks?
Use `.gitignore`, secret scanning, and never commit credentials. If a secret leaks, **rotate it immediately** (assume it's compromised), then purge it from history — but rotation is the real fix.

### 15. What makes a good commit message?
An imperative subject under ~50 chars (`fix: handle empty cart`), a body explaining *why* (not just what), and footers linking issues (`Closes #212`) or noting breaking changes.

### 16. What is the reflog and when does it save you?
`git reflog` records where HEAD has been, so after a bad reset, rebase, or "lost" commit, you can find the previous hash and recover — even when the commit is no longer on any branch.

### 17. Monorepo vs multirepo — key trade-off?
A **monorepo** enables atomic cross-project changes and easy sharing but needs heavy, scalable tooling. A **multirepo** gives team independence and per-repo access but requires versioned packages for shared code.

### 18. How do Conventional Commits enable automation?
Structured messages (`feat:`, `fix:`, `BREAKING CHANGE:`) let tools compute the next SemVer version and generate changelogs automatically — turning commit discipline into automated releases.

---

## 🧗 What You Gain: 50+ Years of Experience, Condensed

Pass this test and you prove you carry judgment that normally takes a career to earn. The tiers below map the mastery you accumulate across the whole track — clearing the top rung means you answer like someone with 50+ years in the field:

| Stage | What the questions reveal | What you can do |
|-------|---------------------------|-----------------|
| 🌱 **Beginner** | You know the core vocabulary. | Explain commits, branches, and Git vs GitHub. |
| 🧭 **Learner** | You connect the concepts. | Reason about merges, rebases, and tags. |
| 🛠️ **Practitioner** | You apply ideas under real constraints. | Run PRs, reviews, and protected workflows. |
| 🚀 **Advanced** | You trace behavior end to end. | Recover history and secure the supply chain. |
| 🏛️ **Veteran** | You design for scale and failure. | Architect workflows and policy across teams. |

---

## 🧠 Experience-Tiered Interview Questions

Interviewers calibrate depth to your level. Here's how the *same topics* get harder as you grow — try to answer each tier before reading on.

### 🌱 Beginner
- What is version control, and why use it?
- What's the difference between `git add` and `git commit`?
- What is a branch, and how do you create one?
- What is the difference between Git and GitHub?

### 🧭 Learner
- Explain the working directory, staging area, and repository.
- When would you merge versus rebase?
- What causes a merge conflict, and how do you resolve one?
- What does Semantic Versioning communicate?

### 🛠️ Practitioner
- How do you keep pull requests reviewable?
- What branch protection rules would you set on `main`, and why?
- How do you write a commit message that aids automation?
- How do feature flags relate to trunk-based development?

### 🚀 Advanced
- Walk through recovering a commit lost after a bad rebase.
- How would you remove a leaked secret from history, and what else must you do?
- When do submodules beat a package registry, and vice versa?
- How do you design a CI/CD release pipeline triggered by tags?

### 🏛️ Veteran / Architect
- Choose a branching strategy for a 300-engineer org and justify it.
- How would you structure code as monorepo vs multirepo, and why?
- Design a secure supply chain: signing, scanning, least-privilege, and audit.
- How do you roll out workflow and protection standards across many repos?

> 💡 If a tier feels hard, that's your next study target — climb one rung at a time.

---

## ✅ You Finished the Track!

Revisit the [Git Cheat Sheet](../08-Cheat-Sheets/git-cheatsheet.md) and [GitHub Cheat Sheet](../08-Cheat-Sheets/github-cheatsheet.md) anytime, and keep practicing in a real repository.

---

**Navigation:** ⬅ [Back to Index](../README.md)

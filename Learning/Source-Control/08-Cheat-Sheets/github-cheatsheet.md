⬅ [Back to Index](../README.md)

# 🐙 GitHub Cheat Sheet

A quick-reference for the GitHub platform and the `gh` CLI.

---

## 🔗 Connect Local to GitHub

```bash
git remote add origin https://github.com/user/repo.git
git branch -M main
git push -u origin main
```

---

## 🙋 Pull Requests (gh CLI)

```bash
gh pr create --base main --head feature/x --title "Add x" --body "..."
gh pr status                   # your PRs at a glance
gh pr checkout 123             # test a PR locally
gh pr review 123 --approve     # or --request-changes
gh pr merge 123 --squash       # squash and merge
```

---

## 🐛 Issues (gh CLI)

```bash
gh issue create --title "Bug" --body "..." --label bug
gh issue list --label bug
gh issue view 212
# Reference in a commit to auto-close on merge:
git commit -m "Fix bug (Closes #212)"
```

---

## 🚀 Releases (gh CLI)

```bash
gh release create v1.2.0 --generate-notes
gh release upload v1.2.0 ./dist/app.zip
gh release list
```

---

## 🛡️ Branch Protection Essentials

| Setting | Effect |
|---------|--------|
| Require pull request | No direct pushes to `main` |
| Require approvals | Unreviewed merges blocked |
| Require status checks | Broken builds can't merge |
| Include administrators | Rules apply to everyone |
| Require signed commits | Verified authorship |

---

## 🤖 Actions Quick Start

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
	runs-on: ubuntu-latest
	permissions:
	  contents: read
	steps:
	  - uses: actions/checkout@v4
	  - run: echo "build and test here"
```

---

## 🧗 What You Gain: 50+ Years of Experience, Condensed

Memorize this sheet and you carry reflexes that normally take a career to build. Each stage below is a level of GitHub mastery you unlock — by the end you drive the platform the way someone with 50+ years of collaboration experience would:

| Stage | How you use this sheet | What you can do |
|-------|------------------------|-----------------|
| 🌱 **Beginner** | Copy commands one at a time. | Push code and open a PR. |
| 🧭 **Learner** | See the PR and issue flow. | Review, label, and link issues. |
| 🛠️ **Practitioner** | Reach for the right `gh` command instantly. | Run releases and manage settings. |
| 🚀 **Advanced** | Automate with Actions and protections. | Gate merges on CI and reviews. |
| 🏛️ **Veteran** | See GitHub as an engineering system. | Govern access, security, and process. |

---

## ✅ Key Takeaways

- The **`gh` CLI** scripts PRs, issues, and releases from the terminal.
- Link issues with **`Closes #N`** to auto-close on merge.
- **Branch protection** enforces reviews and green CI on `main`.
- Keep **Actions** least-privilege with explicit `permissions`.

---

**Navigation:** [Next → Interview Questions](../09-Final-Test/interview-questions.md) | ⬅ [Back to Index](../README.md)

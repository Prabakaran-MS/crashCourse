⬅ [Back to Index](../README.md)

# 🌿 Git Cheat Sheet

A quick-reference for everyday Git. Keep it open while you work.

---

## 🧮 Setup & Config

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase true
```

---

## 🚀 Start a Repo

```bash
git init                       # new local repo
git clone <url>                # copy a remote repo
git clone --recurse-submodules <url>   # include submodules
```

---

## 💾 Everyday Loop

```bash
git status                     # what's changed
git add <file>                 # stage a file
git add -p                     # stage selectively (hunks)
git commit -m "message"        # snapshot
git push                       # share
git pull                       # get updates
```

---

## 🌱 Branching & Merging

```bash
git switch -c feature/x        # create + switch
git switch main                # change branch
git merge feature/x            # merge into current branch
git branch -d feature/x        # delete merged branch
```

---

## 🔁 Rebasing & History

```bash
git rebase main                # replay onto main
git rebase -i HEAD~5           # squash/reorder last 5
git log --oneline --graph      # visual history
git reflog                     # recover lost commits
```

---

## ⏪ Undo & Recover

```bash
git restore <file>             # discard working changes
git restore --staged <file>    # unstage
git reset --soft HEAD~1        # undo commit, keep changes staged
git revert <hash>              # safe undo (new commit)
```

---

## 🏷️ Tags & Remotes

```bash
git tag -a v1.0.0 -m "Release" # annotated tag
git push origin --tags         # push tags
git remote -v                  # list remotes
git push --force-with-lease    # safe force-push after rebase
```

---

## 🧗 What You Gain: 50+ Years of Experience, Condensed

Memorize this sheet and you carry reflexes that normally take a career to build. Each stage below is a level of Git mastery you unlock — by the end you reach for the right command the way someone with 50+ years at the terminal would:

| Stage | How you use this sheet | What you can do |
|-------|------------------------|-----------------|
| 🌱 **Beginner** | Copy commands one at a time. | Clone, commit, and push without fear. |
| 🧭 **Learner** | Recognize the everyday loop. | Branch, merge, and resolve simple conflicts. |
| 🛠️ **Practitioner** | Reach for the right command instantly. | Rebase, tag, and undo safely by habit. |
| 🚀 **Advanced** | Navigate history like a graph. | Recover lost work with reflog and reset. |
| 🏛️ **Veteran** | See Git as a toolkit of primitives. | Craft clean history others trust. |

---

## ✅ Key Takeaways

- The daily loop is **status → add → commit → push/pull**.
- **`switch`/`merge`/`rebase`** manage branches and history.
- **`restore`, `reset`, `revert`, `reflog`** undo and recover.
- Use **`--force-with-lease`**, never plain `--force`, after rebasing.

---

**Navigation:** [Next → GitHub Cheat Sheet](github-cheatsheet.md) | ⬅ [Back to Index](../README.md)

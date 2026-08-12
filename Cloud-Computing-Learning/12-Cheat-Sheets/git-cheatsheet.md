⬅ [Back to Index](../README.md)

# 🌿 Git & GitHub — Complete Cheat Sheet & Shortcuts

Version control is the backbone of DevOps. Master these.

---

## 🏁 Setup & Config

```bash
git config --global user.name "Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --global alias.co checkout    # create git aliases
git config --list
```

## 📦 Basics

| Command | Purpose |
|---------|---------|
| `git init` | New repo |
| `git clone url` | Clone repo |
| `git status` | Working tree status |
| `git status -s` | Short status |
| `git add .` | Stage all |
| `git add -p` | Stage interactively (hunks) |
| `git commit -m "msg"` | Commit |
| `git commit -am "msg"` | Add tracked + commit |
| `git commit --amend` | Edit last commit |
| `git log --oneline --graph --all` | Pretty history |
| `git diff` / `git diff --staged` | Unstaged / staged changes |

## 🌳 Branching

| Command | Purpose |
|---------|---------|
| `git branch` | List branches |
| `git branch name` | Create branch |
| `git checkout -b name` | Create + switch |
| `git switch name` | Switch (modern) |
| `git switch -c name` | Create + switch (modern) |
| `git branch -d name` | Delete (safe) |
| `git branch -D name` | Force delete |
| `git branch -m old new` | Rename |
| `git merge branch` | Merge into current |
| `git merge --no-ff branch` | Force merge commit |
| `git rebase main` | Reapply commits on main |
| `git rebase -i HEAD~3` | Interactive rebase (squash/edit) |

## 🔄 Remote & Sync

| Command | Purpose |
|---------|---------|
| `git remote -v` | List remotes |
| `git remote add origin url` | Add remote |
| `git push -u origin main` | Push + set upstream |
| `git push` | Push |
| `git push --force-with-lease` | Safer force push |
| `git pull` | Fetch + merge |
| `git pull --rebase` | Fetch + rebase (clean history) |
| `git fetch --all --prune` | Fetch + clean deleted branches |

## ⏪ Undo & Recovery (Lifesavers)

| Command | Purpose |
|---------|---------|
| `git restore file` | Discard working changes |
| `git restore --staged file` | Unstage |
| `git reset --soft HEAD~1` | Undo commit, keep changes staged |
| `git reset --mixed HEAD~1` | Undo commit, keep changes unstaged |
| `git reset --hard HEAD~1` | 🔥 Undo commit + discard changes |
| `git revert HEAD` | New commit that undoes last |
| `git checkout -- file` | Discard file changes (old syntax) |
| `git reflog` | 🛟 History of HEAD — recover lost commits |
| `git cherry-pick hash` | Apply a specific commit |
| `git stash` | Shelve changes |
| `git stash pop` | Restore stashed |
| `git stash list` | List stashes |
| `git clean -fd` | Delete untracked files/dirs |

## 🔖 Tags & Releases

```bash
git tag v1.0.0
git tag -a v1.0.0 -m "Release 1.0"
git push origin v1.0.0
git push origin --tags
git tag -d v1.0.0            # delete local
```

## 💡 Pro Shortcuts & Tricks

```bash
# See who changed each line
git blame file

# Find a bug by binary search through commits
git bisect start; git bisect bad; git bisect good v1.0

# Show a file from another branch without switching
git show branch:path/to/file

# Amend author of last commit
git commit --amend --author="Name <email>"

# Undo a pushed commit safely (creates inverse)
git revert <hash> && git push

# Squash last 3 commits into one
git rebase -i HEAD~3   # mark 2nd/3rd as 'squash'

# List branches merged into main (safe to delete)
git branch --merged main

# Recover a deleted branch
git reflog                       # find the hash
git checkout -b recovered <hash>
```

### Power Aliases
```bash
alias gs='git status -s'
alias ga='git add'
alias gc='git commit -m'
alias gco='git checkout'
alias gp='git push'
alias gl='git log --oneline --graph --all'
alias gpl='git pull --rebase'
```

## 🔀 Git Workflow Models

| Model | Description |
|-------|-------------|
| **GitHub Flow** | main + short feature branches + PR (simple) |
| **Git Flow** | main, develop, feature, release, hotfix (complex) |
| **Trunk-Based** | Everyone commits to main, feature flags (fast CI/CD) |

## ⚠️ Gotchas

- `reset --hard` and `clean -fd` are **destructive & unrecoverable**.
- Force-push (`--force`) can overwrite teammates' work → use `--force-with-lease`.
- `git pull` = fetch + merge; can create messy merge commits → prefer `--rebase`.
- Committed a secret? Rotating it is required — history keeps it (use `git filter-repo`).
- `.gitignore` doesn't untrack already-committed files → `git rm --cached`.

---

**Navigation:** [← Terraform Cheat Sheet](terraform-cheatsheet.md) | [Next → Linux & Bash Cheat Sheet](linux-bash-cheatsheet.md) | ⬅ [Back to Index](../README.md)

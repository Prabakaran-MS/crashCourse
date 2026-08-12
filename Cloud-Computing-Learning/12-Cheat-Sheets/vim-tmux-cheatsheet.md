⬅ [Back to Index](../README.md)

# ⌨️ Vim & tmux — Editor & Terminal Multiplexer Shortcuts

You'll edit config files on remote servers where only Vim exists. tmux keeps sessions alive. Both are must-knows.

---

## 📝 Vim — Modes

| Mode | Enter With | Purpose |
|------|-----------|---------|
| **Normal** | `Esc` | Navigate & commands |
| **Insert** | `i`, `a`, `o` | Type text |
| **Visual** | `v`, `V`, `Ctrl+v` | Select text |
| **Command** | `:` | Save/quit/search |

## 🧭 Vim — Movement (Normal mode)

| Key | Action |
|-----|--------|
| `h j k l` | Left, down, up, right |
| `w` / `b` | Next / previous word |
| `0` / `$` | Start / end of line |
| `gg` / `G` | Top / bottom of file |
| `:42` | Go to line 42 |
| `{` / `}` | Previous / next paragraph |
| `Ctrl+d` / `Ctrl+u` | Half page down / up |
| `%` | Jump to matching bracket |
| `*` | Search word under cursor |

## ✏️ Vim — Editing

| Key | Action |
|-----|--------|
| `i` / `a` | Insert before / after cursor |
| `I` / `A` | Insert at line start / end |
| `o` / `O` | New line below / above |
| `x` | Delete character |
| `dd` | Delete (cut) line |
| `dw` | Delete word |
| `d$` / `D` | Delete to end of line |
| `yy` | Yank (copy) line |
| `p` / `P` | Paste after / before |
| `u` | Undo |
| `Ctrl+r` | Redo |
| `r` | Replace one char |
| `cw` | Change word |
| `.` | Repeat last change |
| `>>` / `<<` | Indent / outdent |

## 🔍 Vim — Search & Replace

```
/text          search forward
?text          search backward
n / N          next / previous match
:%s/old/new/g          replace all in file
:%s/old/new/gc         replace with confirm
:s/old/new/g           replace all in current line
:noh                   clear search highlight
```

## 💾 Vim — Save & Quit

| Command | Action |
|---------|--------|
| `:w` | Save |
| `:q` | Quit |
| `:wq` or `ZZ` | Save & quit |
| `:q!` or `ZQ` | Quit without saving |
| `:wq!` | Force save & quit |
| `:x` | Save (if changed) & quit |
| `:w !sudo tee %` | Save as root (forgot sudo!) |

## 🎯 Vim — Power Moves

```
V          select line, then :s to operate on it
ggVG       select entire file
gg=G       auto-indent whole file
:set nu    show line numbers
:set paste turn off auto-indent when pasting
ci"        change text inside quotes
di(        delete inside parentheses
5dd        delete 5 lines
:g/pattern/d   delete all matching lines
```

---

## 🪟 tmux — Sessions That Survive Disconnects

**Prefix** = `Ctrl+b` (press, release, then the key).

### Session Management (from shell)
```bash
tmux                    # start session
tmux new -s work        # named session
tmux ls                 # list sessions
tmux attach -t work     # reattach
tmux kill-session -t work
```

### tmux Key Bindings (after prefix Ctrl+b)

| Key | Action |
|-----|--------|
| `d` | Detach (session keeps running!) |
| `c` | New window |
| `,` | Rename window |
| `n` / `p` | Next / previous window |
| `0-9` | Switch to window N |
| `w` | List windows |
| `%` | Split vertical |
| `"` | Split horizontal |
| `arrow` | Move between panes |
| `o` | Cycle panes |
| `x` | Close pane |
| `z` | Zoom/unzoom pane |
| `Space` | Cycle layouts |
| `[` | Scroll mode (q to exit) |
| `t` | Show clock |

### Why tmux Matters in Cloud
- **Survive SSH disconnects** — long jobs keep running.
- **Multiple panes** — logs + editor + shell at once.
- **Reattach from anywhere** — same session on any machine.

💡 **Alternative:** `screen` (older) or `nohup`/`&` for single background jobs.

---

## 🖥️ VS Code Cloud Shortcuts (Bonus)

| Shortcut | Action |
|----------|--------|
| `Ctrl+`` ` | Toggle terminal |
| `Ctrl+P` | Quick open file |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+Shift+F` | Search across files |
| `F1` | Command palette |
| `Ctrl+K Ctrl+O` | Open folder |

Extensions to install: **Docker**, **Kubernetes**, **HashiCorp Terraform**, **Remote-SSH**, **AWS Toolkit**.

---

**Navigation:** [← Linux & Bash](linux-bash-cheatsheet.md) | [Next → AWS CLI Cheat Sheet](aws-cli-cheatsheet.md) | ⬅ [Back to Index](../README.md)

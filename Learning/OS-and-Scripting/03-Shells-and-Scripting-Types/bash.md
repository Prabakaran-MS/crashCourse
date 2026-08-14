⬅ [Back to Index](../README.md)

# Bash

**Bash** (Bourne Again SHell) is the default shell on most Linux systems and a scripting workhorse across the industry. If you learn one shell for servers and automation, make it Bash.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| Bash | The standard Linux command shell | Bash is a Portable Operating System Interface (POSIX)-compatible command interpreter.<br>It is the default login shell on most Linux distributions.<br>It supports variables, functions, pipes, and job control.<br>It is the backbone of server automation and DevOps scripts.<br>*Example: startup scripts, cron jobs, and CI/CD pipeline steps.* |
| Shebang | The line that picks the interpreter | The shebang (`#!`) on line one tells the Operating System (OS) which interpreter to run.<br>It makes a script directly executable.<br>Using `/usr/bin/env` improves portability.<br>Without it, the wrong shell may run the file.<br>*Example: `#!/usr/bin/env bash`.* |
| Strict mode | Safety switches for scripts | `set -euo pipefail` makes Bash fail fast on errors.<br>`-e` exits on error, `-u` errors on unset variables, `pipefail` catches pipe failures.<br>It surfaces bugs early instead of silently continuing.<br>It is an industry best practice for production scripts.<br>*Example: adding it at the top of every deployment script.* |

---

## ▶️ Your First Script

```bash
#!/usr/bin/env bash
set -euo pipefail   # safer scripts: exit on error, unset vars, pipe failures

name="World"
echo "Hello, ${name}!"
```

### Run it

```bash
chmod +x hello.sh   # make it executable (once)
./hello.sh
```

```mermaid
flowchart LR
	U["You type ./hello.sh"] --> K["Kernel reads shebang #!/usr/bin/env bash"]
	K --> B["Bash interpreter runs the file line-by-line"]
	B --> O["Output: Hello, World!"]
```

**Explanation:** When you run the file, the OS reads the shebang to learn *which* interpreter to launch, hands the script to Bash, and Bash executes each line top-to-bottom — exactly like following a recipe.

---

## 🧰 Simple Analogy

Bash is like a **universal remote for a Linux server**: instead of clicking through menus, you press a few buttons (commands) and can even record a sequence (a script) to replay any time.

---

## 🧩 Real-World Examples

- ⚙️ **Server provisioning** — installing and configuring software at boot.
- 🔄 **CI/CD pipelines** — build and deploy steps in GitHub Actions/GitLab.
- 🗄️ **Backups** — nightly database dumps scheduled with cron.
- 📊 **Log parsing** — extracting errors with `grep`, `awk`, and `sed`.

> 💡 Always start real scripts with `set -euo pipefail` to catch bugs early — it's the single biggest quality upgrade for Bash.

---

## 🧗 What You Gain: 50+ Years of Experience, Condensed

Work through this lesson and you absorb judgment that normally takes a career to earn. Each stage below is not just a shift in viewpoint but a level of mastery you unlock. By the end you carry the instincts of someone with 50+ years in the field:

| Stage | How you see Bash | What you can do |
|-------|------------------|-----------------|
| 🌱 **Beginner** | "Where I type Linux commands." | Run commands, `cd`, `ls`, edit a file. |
| 🧭 **Learner** | A scripting language with variables and loops. | Write a script with a shebang and `chmod +x`. |
| 🛠️ **Practitioner** | An automation tool with functions and error handling. | Use `set -euo pipefail`, quoting, and exit codes correctly. |
| 🚀 **Advanced** | A system of subshells, traps, and process substitution. | Handle signals, temp-file cleanup, and robust pipelines. |
| 🏛️ **Veteran** | A tool with sharp edges best used deliberately. | Know when Bash ends and Python/Go begins. |

---

## 🔬 Deep Dive — Advanced & Expert Insights

- **Quoting is the #1 bug source:** always `"$var"`. Unquoted variables word-split and glob-expand — the cause of most "it worked until a filename had a space" disasters. Use `"${array[@]}"`.
- **`set -euo pipefail` is table stakes,** but know its gotchas: `-e` is skipped in `if`/`&&` contexts, and `pipefail` changes which exit code you see.
- **Traps for cleanup:** `trap 'rm -f "$tmp"' EXIT` guarantees temp files are removed even on error — the hallmark of a production-grade script.
- **Prefer `mktemp`, `[[ ]]`, and `$(...)`** over `/tmp/$$`, `[ ]`, and backticks. Use `printf` over `echo` for portable, predictable output.
- **Process substitution & here-strings:** `diff <(cmd1) <(cmd2)` and `grep x <<< "$var"` avoid temp files and subshell variable-loss traps.
- **Know the exit ramp:** once you need real data structures, JSON parsing, or unit tests, reach for Python. Veterans keep Bash for glue, not for programs.

> 🏛️ **Veteran habit:** run every script through `shellcheck` and `bash -n` before shipping — static analysis catches quoting and expansion bugs you can't see.

---

## ✅ Key Takeaways

- Bash is the default Linux shell and the standard for automation.
- Start scripts with a **shebang** and make them executable with `chmod +x`.
- Use **`set -euo pipefail`** for safer, production-grade scripts.
- It's everywhere: servers, containers, and CI/CD pipelines.

---

**Navigation:** [Next → PowerShell](powershell.md) | ⬅ [Back to Index](../README.md)

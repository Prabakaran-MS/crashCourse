⬅ [Back to Index](../README.md)

# 🎓 Final Test — OS & Scripting Interview Questions

Test your knowledge across the whole track. Try to answer each before reading the explanation.

---

### 1. What is the difference between a process and a thread?
A **process** has its own isolated memory; a **thread** runs inside a process and shares its memory. Threads are cheaper to create, but a bad thread can crash the whole process. Processes need Inter-Process Communication (IPC) to share data.

### 2. What is the kernel, and why the split with user space?
The **kernel** is the trusted core running in privileged **kernel space** with full hardware access. Apps run in restricted **user space** and request privileged actions via **system calls**. The split provides stability, security, and isolation.

### 3. Bash vs PowerShell — the key difference?
Bash pipes **text**; PowerShell pipes **objects** with named properties. That means PowerShell filters on real fields (`$_.CPU`) instead of fragile string parsing.

### 4. What does `set -euo pipefail` do?
Exit on error (`-e`), error on unset variables (`-u`), and catch failures inside pipelines (`pipefail`). It makes scripts fail fast and safe.

### 5. How do you schedule a recurring task on each OS?
`cron` on Linux/macOS (crontab with five time fields), and **Task Scheduler** (`Register-ScheduledTask`) on Windows.

### 6. Your Bash script fails on filenames with spaces. Why, and the fix?
Unquoted variables undergo **word-splitting**. Fix by quoting: `"$var"`.

### 7. How do you debug a Bash script?
`bash -x` (trace), `bash -n` (syntax check), `shellcheck` (lint), and `set -euo pipefail` (fail fast). Send debug prints to **stderr**.

### 8. Difference between hard and soft real-time?
**Hard** real-time: a missed deadline is total failure (airbag). **Soft** real-time: a miss just degrades quality (video stutter).

### 9. What is virtual memory?
An abstraction giving each process its **own address space**, mapped to physical RAM and disk (paging/swap) by the OS via the Memory Management Unit (MMU). It enables isolation and running programs larger than RAM.

### 10. grep vs sed vs awk?
`grep` searches lines by pattern, `sed` edits streams (find/replace), and `awk` processes columns with logic. They compose via pipes.

### 11. What is a shebang and why does it matter?
The `#!` line (e.g., `#!/usr/bin/env bash`) tells the OS which interpreter to run the script with. Without it, the wrong shell may execute the file.

### 12. Why prefer PowerShell over CMD on Windows?
PowerShell is object-oriented, cross-platform, and far more capable. CMD/Batch is text-based and legacy, kept mainly for compatibility.

### 13. What causes a `bad interpreter` error on Linux?
Windows **CRLF** line endings. Convert the file with `dos2unix` (or fix your editor's line-ending setting).

### 14. How do you handle errors gracefully in PowerShell?
Set `$ErrorActionPreference = "Stop"` and wrap risky code in `try/catch/finally`. Use `Set-StrictMode -Version Latest` to catch undefined variables.

### 15. What is the Unix philosophy, in one line?
Write small programs that do one thing well and combine them with pipes — "everything is a file."

---

## ✅ You Finished the Track!

Revisit the [Bash Cheat Sheet](../07-Cheat-Sheets/bash-cheatsheet.md) and [PowerShell Cheat Sheet](../07-Cheat-Sheets/powershell-cheatsheet.md) anytime, and keep practicing in a real terminal.

---

**Navigation:** ⬅ [Back to Index](../README.md)

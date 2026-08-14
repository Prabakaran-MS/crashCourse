⬅ [Back to Index](../README.md)

# Batch / CMD

**Batch** files (`.bat` / `.cmd`) are scripts for the classic Windows **Command Prompt (CMD)**. They're older and more limited than PowerShell, but still useful for simple automation and legacy systems.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| CMD | The classic Windows command prompt | Command Prompt (CMD) is the legacy Windows command-line interpreter (`cmd.exe`).<br>It descends from MS-DOS command syntax.<br>It is text-based and lacks object pipelines.<br>It remains for backward compatibility.<br>*Example: quick `ipconfig` or `dir` commands.* |
| Batch file | A saved list of CMD commands | A batch file is a plain-text script of CMD commands with a `.bat` or `.cmd` extension.<br>It runs top-to-bottom when executed.<br>It supports variables, labels, and basic control flow.<br>It is limited compared to PowerShell.<br>*Example: a `startup.bat` that maps drives and launches apps.* |
| Delayed expansion | Reading variables updated inside loops | Delayed expansion evaluates variables at execution time, not parse time.<br>It is required for variables changed inside loops or blocks.<br>Enabled with `setlocal EnableDelayedExpansion`.<br>Variables then use `!VAR!` instead of `%VAR%`.<br>*Example: accumulating a counter inside a `for` loop.* |

---

## ▶️ A Simple Batch File (`hello.bat`)

```bat
@echo off
set NAME=World
echo Hello, %NAME%!
pause
```

```mermaid
flowchart LR
	A["Double-click hello.bat"] --> B["cmd.exe reads commands"]
	B --> C["Runs each line top-to-bottom"]
	C --> D["Prints: Hello, World!"]
```

**Explanation:** A batch file is just a text list of the same commands you'd type into CMD. Windows feeds it to `cmd.exe`, which runs each line in order — handy for quick, repeatable tasks on any Windows machine without extra setup.

---

## 📝 Notes

- Variables use `%VAR%` (or `!VAR!` with delayed expansion inside loops).
- `@echo off` hides the commands themselves so only output shows.
- Limited string/logic handling compared to PowerShell.

---

## 🧰 Simple Analogy

Batch/CMD is like an **old flip phone**: it still makes calls (runs commands) reliably and needs no setup, but for anything modern — apps, automation, smart features — you'll want the **smartphone** that is PowerShell.

---

## 🧩 Real-World Examples

- 🔌 **Legacy startup scripts** on older Windows machines.
- 🗺️ **Drive mapping & app launching** at login.
- 🧪 **Quick one-off tasks** where installing anything is overkill.

> 💡 Use Batch only for quick tasks or legacy compatibility; reach for **[PowerShell](powershell.md)** for anything non-trivial.

---

## 🧗 What You Gain: 50+ Years of Experience, Condensed

Work through this lesson and you absorb judgment that normally takes a career to earn. Each stage below is not just a shift in viewpoint but a level of mastery you unlock. By the end you carry the instincts of someone with 50+ years in the field:

| Stage | How you see Batch/CMD | What you can do |
|-------|-----------------------|-----------------|
| 🌱 **Beginner** | "The old black Windows box." | Run a `.bat` file by double-clicking. |
| 🧭 **Learner** | A simple scripting language with `%VAR%`. | Write basic loops and `if` checks. |
| 🛠️ **Practitioner** | A legacy tool with real gotchas. | Handle delayed expansion, quoting, and error levels. |
| 🚀 **Advanced** | A last resort you keep working for compatibility. | Maintain existing batch; wrap it safely. |
| 🏛️ **Veteran** | Tech debt to migrate off, carefully. | Port batch to PowerShell without breaking callers. |

---

## 🔬 Deep Dive — Advanced & Expert Insights

- **Delayed expansion is the classic trap:** inside a loop, `%VAR%` is expanded *once* before the loop runs. Use `setlocal enabledelayedexpansion` and `!VAR!` to read updated values.
- **`errorlevel` is order-sensitive:** `if errorlevel 1` means "1 or greater." Check specific codes with `if %errorlevel% equ 2`, and check *immediately* after the command.
- **Quoting and spaces** in paths break batch constantly; wrap paths in quotes and use `%~dp0` for the script's own folder.
- **`for /f` parsing** is powerful but cryptic (`tokens`, `delims`) — it's the batch way to process command output, but PowerShell does it far more safely.
- **Migration strategy:** most new work should be PowerShell. Veterans keep batch only as a thin launcher (`powershell -File ...`) and freeze it, migrating logic incrementally.

> 🏛️ **Veteran habit:** don't extend batch — wrap it. Put new logic in PowerShell and call it from the old `.bat` so existing shortcuts keep working.

---

## ✅ Key Takeaways

- Batch files script the legacy Windows **CMD** interpreter.
- Variables use `%VAR%`; loops may need **delayed expansion** (`!VAR!`).
- It's simple and setup-free but far less capable than PowerShell.
- Prefer PowerShell for real automation; keep Batch for legacy/quick jobs.

---

**Navigation:** [Next → Python Scripting](python-scripting.md) | ⬅ [Back to Index](../README.md)

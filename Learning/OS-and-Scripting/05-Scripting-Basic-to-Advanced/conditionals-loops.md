⬅ [Back to Index](../README.md)

# Conditionals & Loops

**Conditionals** let a script make decisions; **loops** let it repeat work. Together they turn a flat list of commands into real logic.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| Conditionals | "If this, then that" decisions | Conditionals branch execution based on a boolean test.<br>Tests check files, strings, and numeric comparisons.<br>They enable error handling and validation.<br>Exit codes drive control flow.<br>*Example: `if [[ -f config ]]; then ... fi`.* |
| Loops | Repeat until done | Loops iterate over collections or repeat while a condition holds.<br>`for` iterates a known set; `while` repeats on a condition.<br>They automate bulk operations.<br>Guard conditions prevent infinite loops.<br>*Example: iterating over files with `for f in *.log`.* |
| Exit codes | Pass/fail signal from a command | An exit code (0 = success, non-zero = failure) reports a command's result.<br>Scripts branch on it to handle errors.<br>It is stored in `$?` (Bash) or `$LASTEXITCODE` (PowerShell).<br>It underpins reliable automation.<br>*Example: `if command; then echo ok; fi`.* |

---

## 🔀 Bash Conditionals

```bash
if [[ -f "config.txt" ]]; then
  echo "File exists"
elif [[ -d "config" ]]; then
  echo "It's a directory"
else
  echo "Not found"
fi
```

## 🔁 Bash Loops

```bash
for i in 1 2 3; do
  echo "Number $i"
done

while read -r line; do
  echo "Line: $line"
done < file.txt
```

## 🔀🔁 PowerShell

```powershell
if (Test-Path "config.txt") {
  "File exists"
} else {
  "Not found"
}

foreach ($i in 1..3) { "Number $i" }

Get-Content file.txt | ForEach-Object { "Line: $_" }
```

```mermaid
flowchart TD
	Start(["Start"]) --> Cond{"Condition true?"}
	Cond -->|Yes| A["Run 'then' block"]
	Cond -->|No| B["Run 'else' block"]
	A --> Loop{"More items?"}
	B --> Loop
	Loop -->|Yes| A
	Loop -->|No| End(["Done"])
```

**Explanation:** Conditionals pick a path based on a true/false test; loops send execution back to repeat until there's nothing left. Combining them is how scripts validate input and process many items automatically.

---

## 🧰 Simple Analogy

A conditional is a **fork in the road** (go left or right based on a sign). A loop is a **roundabout** — you keep circling until you decide to take the exit.

---

## 🧩 Real-World Examples

- ✅ Validate that a config file exists before continuing.
- 📦 Loop over every `.log` file and compress it.
- 🔁 Retry a network call until it succeeds or hits a max attempt count.

> 💡 Always base decisions on **exit codes**, not screen text — it's how commands truly report success or failure.

---

## ✅ Key Takeaways

- **Conditionals** (`if/elif/else`) branch on tests.
- **Loops** (`for`, `while`, `foreach`) repeat work.
- **Exit codes** (0 = success) drive reliable control flow.
- Combine them to add real logic and error handling.

---

**Navigation:** [Next → Functions & Arguments](functions-args.md) | ⬅ [Back to Index](../README.md)

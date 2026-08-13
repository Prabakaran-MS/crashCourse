⬅ [Back to Index](../README.md)

# PowerShell Debugging Tips

PowerShell has rich, built-in debugging — streams, strict mode, breakpoints, and structured error handling — that make finding problems far easier than in classic shells.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| Output streams | Separate channels for messages | PowerShell has distinct streams: output, error, warning, verbose, and debug.<br>Verbose and Debug streams add diagnostics without cluttering output.<br>They can be toggled per command.<br>This keeps results clean and logs rich.<br>*Example: `Write-Verbose "..." -Verbose`.* |
| Strict mode | Catch undefined variables early | `Set-StrictMode` raises errors for uninitialized variables and bad property access.<br>It surfaces typos immediately.<br>Combined with `$ErrorActionPreference = "Stop"` it fails fast.<br>It is best practice for robust scripts.<br>*Example: `Set-StrictMode -Version Latest`.* |
| Breakpoints & try/catch | Pause and handle errors | Breakpoints pause execution to inspect state interactively.<br>`try/catch/finally` provides structured exception handling.<br>Together they enable precise diagnosis and recovery.<br>They integrate with Visual Studio and VS Code.<br>*Example: `Set-PSBreakpoint` and a `try { } catch { }` block.* |

---

## 1️⃣ Verbose & Debug Streams

```powershell
Write-Verbose "Loading config..." -Verbose
Write-Debug   "Value is $x"
```

## 2️⃣ Strict Mode Catches Bugs

```powershell
Set-StrictMode -Version Latest   # errors on undefined variables/properties
$ErrorActionPreference = "Stop"  # stop on the first error
```

## 3️⃣ Breakpoints

```powershell
Set-PSBreakpoint -Script .\script.ps1 -Line 20
# In VS Code / Visual Studio: press F9 on a line, then F5 to debug
```

## 4️⃣ Try/Catch for Real Error Handling

```powershell
try {
	Get-Content "missing.txt" -ErrorAction Stop
} catch {
	Write-Error "Failed: $($_.Exception.Message)"
}
```

## 5️⃣ Step Through Interactively

```powershell
Set-PSDebug -Trace 1    # trace each line (Set-PSDebug -Off to stop)
```

```mermaid
flowchart TD
	Strict["Set-StrictMode + Stop"] --> Run["Run script"]
	Run --> Err{"Error thrown?"}
	Err -->|Yes| Catch["try/catch handles it"]
	Err -->|No| Verbose["Write-Verbose shows progress"]
	Catch --> Break["Set breakpoint, inspect state"]
	Break --> Fixed["Reliable script"]
```

**Explanation:** PowerShell lets you fail fast (strict mode + Stop), see progress (verbose stream), catch and report errors gracefully (try/catch), and pause to inspect variables (breakpoints) — a full debugging toolkit built into the shell.

---

## 🧰 Simple Analogy

Debugging PowerShell is like flying a plane with a **glass cockpit**: strict mode is the stall warning, verbose is the running commentary, try/catch is the autopilot recovery, and breakpoints let you freeze time to read every dial.

---

## 🧩 Real-World Examples

- 🧾 A missing file crashes a script → `try/catch` logs a clear message instead.
- 🐛 A typo'd variable returns `$null` → `Set-StrictMode` throws immediately.
- 🔎 Complex loop misbehaves → a breakpoint at line 20 reveals the bad value.

> 💡 Set `$ErrorActionPreference = "Stop"` so cmdlet errors become catchable exceptions.

---

## ✅ Key Takeaways

- Use **Verbose/Debug streams** for diagnostics without clutter.
- Enable **Strict Mode** + `Stop` to fail fast on real bugs.
- Wrap risky code in **try/catch/finally**.
- Use **breakpoints** (F9) to pause and inspect state.

---

**Navigation:** [Next → Common Pitfalls & Fixes](common-pitfalls.md) | ⬅ [Back to Index](../README.md)

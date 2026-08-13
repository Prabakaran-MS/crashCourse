⬅ [Back to Index](../README.md)

# ⚡ PowerShell Cheat Sheet

Quick-reference for everyday PowerShell. Remember: the pipeline passes **objects**, not text.

---

## 🧮 Variables & Types

```powershell
$name = "Alice"
[int]$n = 5
$arr = @(1,2,3); $arr[0]; $arr.Count
$hash = @{ key = "value" }; $hash["key"]
```

## 🧰 Common Cmdlets

```powershell
Get-ChildItem            # ls / dir
Get-Content file.txt     # cat
Set-Location C:\Temp     # cd
Copy-Item / Move-Item / Remove-Item
Get-Process / Stop-Process
Get-Service / Start-Service / Restart-Service
```

## 🔗 Pipeline & Filtering

```powershell
Get-Process | Where-Object CPU -gt 10 | Sort-Object CPU -Descending
Get-ChildItem | Select-Object Name, Length
1..5 | ForEach-Object { $_ * 2 }
```

## 🔀 Conditionals & Loops

```powershell
if ($x -gt 5) { } elseif ($x -eq 5) { } else { }
foreach ($i in 1..3) { "Item $i" }
while ($i -lt 5) { $i++ }
```

## 🛡️ Error Handling

```powershell
$ErrorActionPreference = "Stop"
try { Get-Content missing.txt } catch { Write-Error $_ } finally { "cleanup" }
```

```mermaid
flowchart LR
	G["Get-* (objects)"] --> W["Where-Object (filter)"]
	W --> S["Sort-Object / Select-Object"]
	S --> A["ForEach-Object (act)"]
```

**Explanation:** The PowerShell pattern is get → filter → shape → act, all passing rich objects. Because you reference real properties (`CPU`, `Name`), your commands are precise and readable.

---

## 🔑 Comparison Operators

| Operator | Meaning |
|----------|---------|
| `-eq` / `-ne` | equal / not equal |
| `-gt` / `-lt` | greater / less than |
| `-like` | wildcard match |
| `-match` | regex match |

---

## ✅ Key Takeaways

- Variables can be typed (`[int]`); collections use `@()` and `@{}`.
- Cmdlets follow **Verb-Noun**; pipe objects between them.
- Filter with `Where-Object`, shape with `Select-Object`.
- Use comparison operators (`-eq`, `-gt`, `-match`) and try/catch.

---

**Navigation:** [Next → Interview Questions](../08-Final-Test/interview-questions.md) | ⬅ [Back to Index](../README.md)

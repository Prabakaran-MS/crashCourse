⬅ [Back to Index](../README.md)

# PowerShell

**PowerShell** is Microsoft's modern shell and scripting language. Its superpower: unlike Bash, which passes plain **text**, PowerShell passes **objects** through the pipeline — so you filter on real properties instead of parsing strings. Since version 7 it's cross-platform (Windows, Linux, macOS).

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| PowerShell | Windows' modern automation shell | PowerShell is an object-oriented shell built on .NET.<br>Its pipeline passes structured objects, not raw text.<br>PowerShell 7+ is cross-platform and open source.<br>It is the standard for Windows and cloud administration.<br>*Example: managing Azure resources with the `Az` module.* |
| Cmdlet | A built-in command | A cmdlet is a lightweight command following a `Verb-Noun` naming convention.<br>It returns .NET objects usable by the next command.<br>Cmdlets are discoverable and self-documenting.<br>They compose cleanly in the pipeline.<br>*Example: `Get-Process`, `Set-Location`, `Get-Service`.* |
| Execution policy | The safety gate for scripts | Execution Policy controls whether scripts are allowed to run.<br>It reduces the risk of running untrusted code.<br>`RemoteSigned` allows local scripts but requires signed remote ones.<br>It is a safety feature, not a full security boundary.<br>*Example: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.* |

---

## ▶️ Your First Script

```powershell
$name = "World"
Write-Output "Hello, $name!"
```

### Objects, not just text

```powershell
# Filter processes by a real property — no string parsing needed
Get-Process | Where-Object { $_.CPU -gt 10 } | Select-Object Name, CPU
```

```mermaid
flowchart LR
	A["Get-Process (returns objects)"] --> B["Where-Object CPU > 10"]
	B --> C["Select-Object Name, CPU"]
	C --> D["Clean table output"]
```

**Explanation:** Each stage passes rich **objects** with named properties (like `CPU` and `Name`) to the next. In Bash you'd have to text-slice columns; in PowerShell you just reference the property directly — fewer bugs, clearer code.

---

## ▶️ Run Scripts

```powershell
# Allow local scripts once (safe default):
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
.\hello.ps1
```

---

## 🧰 Simple Analogy

Bash hands the next worker a **printed page** to re-read; PowerShell hands them a **labeled toolbox**. With the toolbox you just grab the "CPU" tool by name — no re-reading and guessing where the columns are.

---

## 🧩 Real-World Examples

- ☁️ **Azure & Microsoft 365** administration and automation.
- 🖥️ **Windows Server** management at scale (Active Directory, services).
- 🔄 **CI/CD on Windows** build agents.
- 📦 **Bulk operations** — renaming files, exporting reports, provisioning users.

> 💡 Cmdlets follow a predictable `Verb-Noun` pattern (`Get-Item`, `Set-Location`, `Remove-Item`), so once you learn a few verbs you can guess most commands.

---

## ✅ Key Takeaways

- PowerShell passes **objects**, not text — cleaner filtering and less parsing.
- Commands are **cmdlets** named `Verb-Noun`.
- Set an **execution policy** (e.g., `RemoteSigned`) to run scripts safely.
- It's the standard for Windows and cloud (Azure) automation, and now cross-platform.

---

**Navigation:** [Next → Zsh & Fish](zsh-fish.md) | ⬅ [Back to Index](../README.md)

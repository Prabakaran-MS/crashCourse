⬅ [Back to Index](../README.md)

# Windows Commands (CMD & PowerShell)

Windows offers two command surfaces: the modern **PowerShell** (object-based, recommended) and the legacy **CMD**. This lesson maps the everyday tasks you'll do most, with the PowerShell equivalents of familiar Linux commands.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| Cmdlets vs CMD | Modern vs legacy commands | PowerShell cmdlets return .NET objects; CMD commands return text.<br>Cmdlets follow a `Verb-Noun` naming convention.<br>Objects enable precise filtering without parsing.<br>CMD remains for legacy and quick tasks.<br>*Example: `Get-ChildItem` (PowerShell) vs `dir` (CMD).* |
| Services | Background Windows programs | Windows Services run in the background under the Service Control Manager (SCM).<br>They start automatically and run without a user logged in.<br>PowerShell manages them as objects.<br>They host databases, web servers, and agents.<br>*Example: `Get-Service` and `Restart-Service`.* |
| System diagnostics | Built-in health & network tools | Windows ships diagnostic utilities for network and system health.<br>They report configuration and repair corruption.<br>They are essential for troubleshooting.<br>Many work in both CMD and PowerShell.<br>*Example: `ipconfig /all`, `sfc /scannow`.* |

---

## 📂 Navigation & Files (PowerShell)

```powershell
Get-Location                 # pwd
Get-ChildItem                # ls / dir
Set-Location C:\Temp         # cd
Copy-Item a.txt b.txt        # cp
Move-Item a.txt .\dir\       # mv
Remove-Item -Recurse folder  # rm -r
New-Item -ItemType Directory a\b\c   # mkdir -p
```

## 🔍 Searching

```powershell
Select-String -Path app.log -Pattern "error"   # grep
Get-Content app.log -Wait                       # tail -f
Get-ChildItem -Recurse -Filter *.config         # find by pattern
```

## ⚙️ System & Processes

```powershell
Get-Process                                     # list processes
Stop-Process -Id 1234 -Force                    # kill
Get-Service | Where-Object Status -eq "Running" # running services
Get-Volume                                      # disk info
```

## 🧰 Handy CMD Equivalents

```bat
ipconfig /all       :: network configuration
tasklist            :: list processes
sfc /scannow        :: repair system files
```

```mermaid
flowchart LR
	A["Get-Service"] --> B["Where-Object Status = Running"]
	B --> C["Select-Object Name, Status"]
	C --> D["Clean object table"]
```

**Explanation:** In PowerShell, `Get-Service` emits service **objects**, so you can filter on the real `Status` property and select exactly the columns you want — no fragile text slicing like in older shells.

---

## 🧰 Simple Analogy

CMD is a **basic toolbox** (hammer, screwdriver). PowerShell is a **smart workbench** where every tool reports back detailed measurements — so you make precise cuts instead of eyeballing them.

---

## 🧩 Real-World Examples

- 🌐 **Network troubleshooting**: `ipconfig /all`, `Test-NetConnection host -Port 443`.
- 🔄 **Service management**: `Restart-Service Spooler`.
- 📁 **Bulk file ops**: rename or move hundreds of files with `Get-ChildItem | ForEach-Object`.

---

## ✅ Key Takeaways

- Prefer **PowerShell** (objects) over CMD (text) for real work.
- Cmdlets map cleanly to Linux commands (`Get-ChildItem` ≈ `ls`).
- Manage services with `Get-Service` / `Restart-Service`.
- Keep CMD tools (`ipconfig`, `sfc`) for quick diagnostics.

---

**Navigation:** [Next → macOS Commands](macos-commands.md) | ⬅ [Back to Index](../README.md)

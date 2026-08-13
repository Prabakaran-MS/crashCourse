⬅ [Back to Index](../README.md)

# Windows

Microsoft **Windows** is the world's dominant **desktop** operating system and a major force in enterprise servers (Windows Server). It is known for its graphical, user-friendly design and huge software/hardware compatibility.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| Windows OS | The familiar PC operating system | Microsoft Windows is a proprietary Operating System (OS) family for desktops and servers.<br>It uses the New Technology File System (NTFS) and a Graphical User Interface (GUI) first design.<br>Enterprises manage it with Active Directory (AD) and Group Policy.<br>Automation is done via PowerShell and, legacy, Command Prompt (CMD).<br>*Example: Windows 11 on laptops and Windows Server 2022 in data centers.* |
| WSL | Running Linux inside Windows | Windows Subsystem for Linux (WSL) runs a real Linux kernel and userland on Windows.<br>It lets developers use Linux tools without dual booting.<br>WSL 2 uses a lightweight virtual machine for full compatibility.<br>It bridges Windows and Linux workflows.<br>*Example: running Ubuntu and Bash on a Windows dev machine.* |
| Registry & services | Central settings + background programs | The Windows Registry is a hierarchical database of system and app configuration.<br>Windows Services are background processes managed by the Service Control Manager (SCM).<br>Together they control startup and system behavior.<br>Admins manage them via consoles and PowerShell.<br>*Example: `Get-Service` listing running background services.* |

---

## 🧱 Key Traits

- **GUI-first**, with the widest software and hardware compatibility.
- **NTFS** file system, drive letters (`C:\`, `D:\`).
- Scripting via **[PowerShell](../03-Shells-and-Scripting-Types/powershell.md)** (modern) and **[CMD/Batch](../03-Shells-and-Scripting-Types/batch-cmd.md)** (legacy).
- **WSL** runs real Linux tooling inside Windows.

```mermaid
flowchart TD
	Apps["Windows Apps (.exe)"] --> WinAPI["Win32 / .NET API"]
	WinAPI --> Kernel["Windows NT Kernel"]
	Kernel --> HAL["Hardware Abstraction Layer"]
	HAL --> HW["Hardware"]
	WSL["WSL 2 (Linux)"] --> Kernel
```

**Explanation:** Windows apps talk to the Win32/.NET APIs, which call into the NT kernel, which reaches hardware through a Hardware Abstraction Layer. WSL 2 runs a real Linux environment alongside, so developers get both worlds on one machine.

---

## 🗂️ Editions

| Edition | Use Case |
|---------|----------|
| Home | Everyday users |
| Pro | Developers, small business (BitLocker, Hyper-V) |
| Enterprise | Large organizations (advanced management/security) |
| Server | Hosting, Active Directory, Internet Information Services (IIS) |

---

## 🏢 Simple Analogy

Windows is like a **fully-furnished chain hotel**: familiar layout everywhere you go, everything works out of the box, and there's staff (drivers, updates) handling the messy details — you rarely need to look under the hood.

---

## 🧩 Real-World Examples

- 🏢 **Corporate desktops** managed by Active Directory and Group Policy.
- 🎮 **Gaming PCs** — the dominant platform for PC games.
- 🖥️ **Windows Server** hosting IIS websites and SQL Server databases.
- 👨‍💻 **Developer machines** using WSL for Linux tooling.

---

## ✅ Key Takeaways

- Windows dominates desktops and is strong in the enterprise.
- It uses NTFS, drive letters, and a GUI-first design.
- **PowerShell** is the go-to scripting tool; CMD/Batch is legacy.
- **WSL** lets you run Linux directly inside Windows.

---

**Navigation:** [Next → Linux Distros](linux-distros.md) | ⬅ [Back to Index](../README.md)

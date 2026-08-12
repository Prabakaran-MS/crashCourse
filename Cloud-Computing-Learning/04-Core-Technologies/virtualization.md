⬅ [Back to Index](../README.md)

# Virtualization

**Virtualization** is the foundational technology of cloud computing. It uses software (a **hypervisor**) to create multiple **virtual machines (VMs)** on a single physical server — each with its own OS.

---

## 🧩 How It Works

```
┌─────────────────────────────────────┐
│  VM1     VM2     VM3   (each has OS) │
├─────────────────────────────────────┤
│           Hypervisor                 │
├─────────────────────────────────────┤
│        Physical Hardware             │
└─────────────────────────────────────┘
```

The **hypervisor** sits between hardware and VMs, allocating CPU, memory, and storage to each VM.

---

## 🔧 Types of Hypervisors

| Type | Description | Examples |
|------|-------------|----------|
| **Type 1 (Bare-metal)** | Runs directly on hardware; fast & secure | VMware ESXi, Microsoft Hyper-V, KVM, Xen |
| **Type 2 (Hosted)** | Runs on top of a host OS | VirtualBox, VMware Workstation |

---

## 🎭 Types of Virtualization

- **Server virtualization** — multiple VMs per physical server.
- **Storage virtualization** — pool multiple storage devices.
- **Network virtualization** — virtual networks (VLANs, SDN).
- **Desktop virtualization (VDI)** — virtual desktops (e.g., Citrix, AWS WorkSpaces).

---

## 💡 Why It Matters for Cloud

- **Resource pooling** — one server serves many customers ([multi-tenancy](../01-Introduction/characteristics.md)).
- **Efficiency** — maximize hardware utilization.
- **Isolation** — VMs are separated for security.
- **Elasticity** — spin VMs up/down quickly.

---

## 🆚 Virtualization vs Containers

| Aspect | Virtual Machines | Containers |
|--------|------------------|------------|
| Isolation | Full OS per VM | Share host OS kernel |
| Size | GBs | MBs |
| Startup | Minutes | Seconds |
| Overhead | Higher | Lower |

➡️ Learn about the lightweight alternative: [Containers](containers.md)

---

**Navigation:** [Next → Containers](containers.md) | ⬅ [Back to Index](../README.md)

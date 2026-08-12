⬅ [Back to Index](../README.md)

# IaaS — Infrastructure as a Service

**IaaS** provides virtualized computing resources over the internet: **servers, storage, and networking**. You manage the OS and everything above it; the provider manages the physical hardware.

> 🧱 Think of IaaS as renting an **empty apartment** — you bring your own furniture (OS, apps, data).

> 🗣️ **In Plain English:** IaaS is when you rent a bare computer in the cloud. The landlord (AWS/Azure/Google) keeps the building running — power, walls, internet — but the *inside* is yours to set up however you like. You install the operating system, your programs, and your files. Maximum freedom, but you also do the cleaning. *New to this? See the [Plain-English Primer](../00-Start-Here/read-me-first.md).*

---

## 🎛️ What You Manage vs Provider

| Layer | IaaS: Who Manages? |
|-------|--------------------|
| Applications | **You** |
| Data | **You** |
| Runtime | **You** |
| Operating System | **You** |
| Virtualization | Provider |
| Servers | Provider |
| Storage | Provider |
| Networking | Provider |

---

## 🏭 Industry Examples / Tools

| Provider | IaaS Service |
|----------|--------------|
| AWS | **EC2** (compute), **EBS** (storage), **VPC** (network) |
| Azure | **Virtual Machines**, **Managed Disks** |
| GCP | **Compute Engine** |
| Others | DigitalOcean Droplets, Linode, Oracle Cloud Compute |

---

## 💡 Example Scenario

A company needs to host a custom Java web app:
1. Launch an **AWS EC2** instance (Ubuntu Linux).
2. Install Java, Tomcat, and the app themselves.
3. Configure firewall rules via **Security Groups**.
4. Attach **EBS** storage for the database.

They control everything from the OS up — full flexibility.

---

## 🖥️ Quick Example: Launch a VM via AWS CLI

```bash
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --instance-type t3.micro \
  --key-name my-key \
  --security-group-ids sg-0123456789
```

---

## ✅ When to Use IaaS

- You need **full control** over the OS and environment.
- Migrating existing on-prem apps ("lift and shift").
- Highly customized or legacy workloads.

## ⚖️ Pros & Cons

| Pros | Cons |
|------|------|
| Maximum flexibility & control | You manage OS, patching, scaling |
| Easy lift-and-shift migration | More operational overhead |
| Pay-as-you-go infrastructure | Requires sysadmin skills |

---

**Related:** [Virtualization](../04-Core-Technologies/virtualization.md) · [PaaS](paas.md) · [SaaS](saas.md)

**Navigation:** [Next → PaaS](paas.md) | ⬅ [Back to Index](../README.md)

⬅ [Back to Index](../README.md)

# Cloud Security Fundamentals

Cloud security protects data, applications, and infrastructure in the cloud from threats.

---

## 🤝 The Shared Responsibility Model

Security is **shared** between the provider and you.

```
┌──────────────────────────────────────────┐
│  YOU: Security IN the cloud               │
│  - Data, access, apps, OS config,         │
│    network config, encryption             │
├──────────────────────────────────────────┤
│  PROVIDER: Security OF the cloud          │
│  - Physical data centers, hardware,       │
│    networking, hypervisor                 │
└──────────────────────────────────────────┘
```

⚠️ The split shifts by service model:
- **IaaS** → you handle more (OS, apps, data).
- **SaaS** → provider handles most; you handle data & access.

---

## 🛡️ Core Security Areas

| Area | Description | Tools |
|------|-------------|-------|
| **Identity & Access** | Who can do what | [IAM](iam.md), MFA |
| **Data Protection** | Encryption at rest & in transit | KMS, TLS/SSL |
| **Network Security** | Firewalls, segmentation | Security Groups, WAF |
| **Threat Detection** | Detect anomalies | GuardDuty, Defender |
| **Compliance** | Meet regulations | [Governance](compliance.md) |
| **Secrets Management** | Store keys/passwords safely | HashiCorp Vault, AWS Secrets Manager |

---

## 🔐 Key Best Practices

1. **Least Privilege** — grant only necessary permissions.
2. **Enable MFA** — multi-factor authentication everywhere.
3. **Encrypt everything** — at rest and in transit.
4. **Never hardcode secrets** — use secret managers.
5. **Regular audits & logging** — track all access.
6. **Patch & update** — keep systems current.
7. **Backup & disaster recovery** — plan for failure.
8. **Network segmentation** — isolate sensitive resources.

---

## 🏭 Security Tools by Category

| Category | Tools |
|----------|-------|
| Secrets | **HashiCorp Vault**, AWS Secrets Manager, Azure Key Vault |
| Vulnerability scanning | **Trivy**, Snyk, Qualys |
| Runtime security | **Falco**, Aqua Security |
| SIEM | Splunk, Microsoft Sentinel |
| DDoS/WAF | AWS Shield/WAF, Cloudflare |
| Threat detection | AWS GuardDuty, Microsoft Defender |

---

## 💡 Common Threats

- **Misconfiguration** (e.g., public S3 buckets) — #1 cause of breaches.
- **Weak access controls** — stolen credentials.
- **Insecure APIs**.
- **Data breaches** — unencrypted data.

➡️ Deep dive: [IAM](iam.md) · [Compliance](compliance.md)

---

**Navigation:** [Next → IAM](iam.md) | ⬅ [Back to Index](../README.md)

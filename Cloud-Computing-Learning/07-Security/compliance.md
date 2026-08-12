⬅ [Back to Index](../README.md)

# Compliance & Governance

**Compliance** means meeting legal, regulatory, and industry standards. **Governance** is the framework of policies and controls that keep your cloud usage secure, compliant, and cost-effective.

---

## 📋 Major Compliance Standards

| Standard | Applies To | Focus |
|----------|-----------|-------|
| **GDPR** | EU data | Data privacy & protection |
| **HIPAA** | US healthcare | Patient health data |
| **PCI-DSS** | Payment cards | Credit card data security |
| **SOC 2** | Service providers | Security, availability, confidentiality |
| **ISO 27001** | General | Information security management |
| **FedRAMP** | US government | Federal cloud security |
| **CCPA** | California | Consumer data privacy |

---

## 🏛️ Cloud Governance Pillars

| Pillar | What It Covers | Tools |
|--------|----------------|-------|
| **Cost Management (FinOps)** | Control spending | AWS Budgets, Cost Explorer, CloudHealth |
| **Security & Compliance** | Meet standards | AWS Config, Azure Policy |
| **Resource Organization** | Tags, accounts, structure | AWS Organizations, Azure Management Groups |
| **Policy Enforcement** | Guardrails | Service Control Policies, OPA |
| **Auditing** | Track all activity | AWS CloudTrail, Azure Activity Log |

---

## 💰 FinOps — Cloud Cost Governance

Cloud costs can spiral. **FinOps** brings financial accountability:
- **Tag resources** to track cost by team/project.
- **Set budgets & alerts.**
- **Right-size** underutilized resources.
- Use **Reserved/Spot instances** for savings.
- **Delete unused** resources (orphaned disks, idle VMs).

---

## 🛡️ Governance Tools

| Provider | Governance Tools |
|----------|------------------|
| AWS | Organizations, Config, CloudTrail, Control Tower |
| Azure | Policy, Blueprints, Management Groups, Cost Management |
| GCP | Organization Policy, Cloud Asset Inventory |
| Multi-cloud | **Open Policy Agent (OPA)**, Terraform Sentinel |

---

## 💡 Example: Data Residency

A European company must keep EU citizens' data within the EU (GDPR):
- Deploy resources only in **EU regions** (e.g., eu-west-1).
- Use policies to **block** deployments in other regions.
- Encrypt data and log all access for audits.

---

## ✅ Governance Best Practices

1. Define clear policies **before** scaling.
2. Automate compliance checks (policy as code).
3. Tag everything for cost & ownership tracking.
4. Enable audit logging everywhere.
5. Regular compliance audits & reviews.

---

**Navigation:** [← IAM](iam.md) | [Next → Hands-on Projects](../08-Hands-on-Projects/projects.md) | ⬅ [Back to Index](../README.md)

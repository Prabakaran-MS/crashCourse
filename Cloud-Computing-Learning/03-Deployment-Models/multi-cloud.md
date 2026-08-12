⬅ [Back to Index](../README.md)

# Multi-Cloud

**Multi-cloud** means using **multiple public cloud providers** (e.g., AWS + Azure + GCP) together — to avoid vendor lock-in, optimize cost, and increase resilience.

> 🔀 Hybrid = public + private. Multi-cloud = multiple public providers.

---

## 💡 Why Multi-Cloud?

| Reason | Explanation |
|--------|-------------|
| **Avoid vendor lock-in** | Not dependent on a single provider |
| **Best-of-breed** | Use each provider's strengths (e.g., GCP for ML, AWS for breadth) |
| **Resilience** | If one provider has an outage, fail over |
| **Cost optimization** | Choose cheapest provider per workload |
| **Compliance** | Meet regional data laws |

---

## 🏭 Tools for Multi-Cloud

- **Terraform** — provision across AWS, Azure, GCP with one language ([IaC](../06-Tools-and-Practices/iac.md)).
- **Kubernetes** — run containers on any cloud ([details](../06-Tools-and-Practices/kubernetes.md)).
- **Google Anthos / Azure Arc** — unified management.
- **HashiCorp Consul** — service networking across clouds.

---

## 💡 Example Scenario

A company:
- Runs its main app on **AWS**.
- Uses **Google Cloud's BigQuery** for analytics.
- Uses **Azure Active Directory** for identity.
- Deploys via **Kubernetes** so workloads are portable.

---

## ⚠️ Challenges

- Increased complexity & management overhead.
- Skills across multiple platforms required.
- Networking and data transfer costs between clouds.
- Consistent security/governance is harder.

---

**Related:** [Hybrid Cloud](hybrid-cloud.md) · [Provider Comparison](../05-Cloud-Providers/comparison.md)

**Navigation:** [← Hybrid Cloud](hybrid-cloud.md) | [Next → Community Cloud](community-cloud.md) | ⬅ [Back to Index](../README.md)

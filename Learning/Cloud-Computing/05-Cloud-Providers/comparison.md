⬅ [Back to Index](../README.md)

# Cloud Provider Comparison (AWS vs Azure vs GCP)

A side-by-side comparison to help you understand each provider's strengths.

### 🎓 Professional (IT-Standard) Reference

| Dimension | Layman View | Professional (IT-Standard) View + Example |
|-----------|-------------|-------------------------------------------|
| Market position | Who's biggest | Amazon Web Services (AWS) leads overall market share.<br>Microsoft Azure is strong in enterprise and hybrid.<br>Google Cloud Platform (GCP) excels in data and machine learning.<br>Each has distinct strengths.<br>Choice often follows existing technology stacks.<br>*Example: choosing Azure for a Microsoft-centric organization.* |
| Service naming | Same thing, different names | Providers offer similar services with different names.<br>Virtual Machines are EC2, Azure VM, and Compute Engine.<br>Serverless is Lambda, Azure Functions, and Cloud Functions.<br>Mapping names helps in multi-cloud work.<br>Concepts remain consistent across clouds.<br>*Example: Amazon Elastic Compute Cloud (EC2) equals Azure Virtual Machines.* |
| Selection criteria | Which one to pick | Provider choice depends on several factors.<br>Consider existing stack, compliance, and region coverage.<br>Pricing and specific service strengths matter.<br>Team skills influence the decision.<br>A workload's needs guide the choice.<br>*Example: choosing Google Cloud Platform (GCP) for BigQuery analytics.* |
| Multi-cloud | Use more than one | Many organizations use multiple providers.<br>This avoids lock-in and improves resilience.<br>Abstraction tools keep deployments portable.<br>Terraform and Kubernetes are common choices.<br>It adds complexity that must be managed.<br>*Example: abstracting workloads with Terraform and Kubernetes across clouds.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart LR
    Need["🎯 Your Needs"] --> AWS["AWS<br/>widest services"]
    Need --> Azure["Azure<br/>enterprise + Microsoft"]
    Need --> GCP["GCP<br/>data + AI + K8s"]
```

**Explanation:** The big three clouds offer very similar building blocks under different names. This section compares them so you can pick based on your needs — AWS for breadth, Azure for Microsoft shops, and GCP for data and AI.

---

## 🏆 Market Position (approximate)

| Provider | Market Share | Launched | Strength |
|----------|-------------|----------|----------|
| **AWS** | ~31% | 2006 | Breadth of services, maturity, market leader |
| **Azure** | ~25% | 2010 | Enterprise & hybrid, Microsoft ecosystem |
| **GCP** | ~11% | 2008 | Data analytics, ML, Kubernetes |

---

## 🔄 Service Name Equivalents

| Service | AWS | Azure | GCP |
|---------|-----|-------|-----|
| Virtual Machines | EC2 | Virtual Machines | Compute Engine |
| Serverless | Lambda | Azure Functions | Cloud Functions |
| Kubernetes | EKS | AKS | GKE |
| Object Storage | S3 | Blob Storage | Cloud Storage |
| Block Storage | EBS | Managed Disks | Persistent Disk |
| Managed SQL | RDS | Azure SQL DB | Cloud SQL |
| NoSQL | DynamoDB | Cosmos DB | Firestore/Bigtable |
| Data Warehouse | Redshift | Synapse | BigQuery |
| PaaS | Elastic Beanstalk | App Service | App Engine |
| CDN | CloudFront | Azure CDN | Cloud CDN |
| DNS | Route 53 | Azure DNS | Cloud DNS |
| Identity | IAM | Entra ID (AD) | Cloud IAM |
| Virtual Network | VPC | VNet | VPC |

---

## 🎯 Which to Choose?

| If you need... | Choose |
|----------------|--------|
| Widest range of services & maturity | **AWS** |
| Strong enterprise/hybrid + Microsoft stack | **Azure** |
| Best data analytics, ML, Kubernetes | **GCP** |
| Avoid lock-in | **[Multi-cloud](../03-Deployment-Models/multi-cloud.md)** |

---

## 🖼️ The Big Three

![AWS](https://img.shields.io/badge/AWS_~31%25-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Azure](https://img.shields.io/badge/Azure_~25%25-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![GCP](https://img.shields.io/badge/GCP_~11%25-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

---

## 🏗️ How the Same App Maps Across Clouds

```mermaid
flowchart TB
    subgraph AWS
        a1["Route 53"] --> a2["CloudFront"] --> a3["ALB"] --> a4["EC2/EKS"] --> a5[("RDS")]
    end
    subgraph Azure
        b1["Azure DNS"] --> b2["Azure CDN"] --> b3["App Gateway"] --> b4["VM/AKS"] --> b5[("Azure SQL")]
    end
    subgraph GCP
        c1["Cloud DNS"] --> c2["Cloud CDN"] --> c3["Cloud LB"] --> c4["GCE/GKE"] --> c5[("Cloud SQL")]
    end
```

**Explanation:** The *architecture* is identical across all three clouds — only the service names change. Learn the pattern once and you can work on any provider.

---

## 🌐 Real-World Usage Example — Who Picks What & Why

- **Netflix → AWS:** needed the broadest, most mature service catalog at massive scale.
- **Walmart → Azure:** deep Microsoft/enterprise integration (and avoiding rival AWS).
- **Spotify → GCP:** best-in-class data analytics (BigQuery) and ML for recommendations.
- **Snapchat → AWS + GCP (multi-cloud):** resilience and pricing leverage across two providers.

*The lesson: the "best" cloud depends on your existing stack, workload type, team skills, and compliance — not raw feature counts.*

---

## 🔍 Deep Dive — Concepts Often Missed

- **Pricing is not apples-to-apples:** each meters compute/storage/egress differently — model *your* workload, don't trust list prices.
- **Service maturity varies:** AWS usually launches features first; GCP leads in data/ML; Azure leads in hybrid/enterprise.
- **Egress lock-in:** moving data *out* is costly everywhere — a real barrier to switching.
- **Skills transfer:** ~80% of concepts are identical; the exam/console differences are the other 20%.
- **Sovereign/gov clouds:** AWS GovCloud, Azure Government, Google Assured Workloads for regulated sectors.

---

## 💡 Reality Check

- All three are excellent and constantly catching up to each other.
- Choice often depends on: existing tech stack, team skills, pricing, specific service needs.
- Many large companies use **[multi-cloud](../03-Deployment-Models/multi-cloud.md)**.

---

**Navigation:** [← GCP](gcp.md) | [Next → DevOps & CI/CD](../06-Tools-and-Practices/devops-cicd.md) | ⬅ [Back to Index](../README.md)

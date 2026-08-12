⬅ [Back to Index](../README.md)

# Amazon Web Services (AWS)

**AWS** is the **market leader** in cloud computing (launched 2006), offering 200+ services across compute, storage, databases, AI/ML, and more.

---

## 🧱 Core Services by Category

| Category | Service | What It Does |
|----------|---------|--------------|
| **Compute** | EC2 | Virtual servers |
| | Lambda | Serverless functions |
| | ECS / EKS | Container orchestration |
| | Elastic Beanstalk | PaaS |
| **Storage** | S3 | Object storage |
| | EBS | Block storage |
| | EFS | File storage |
| | Glacier | Archival storage |
| **Database** | RDS | Managed relational DB (MySQL, Postgres) |
| | DynamoDB | NoSQL database |
| | Aurora | High-performance relational DB |
| | Redshift | Data warehouse |
| **Networking** | VPC | Virtual private cloud |
| | Route 53 | DNS |
| | CloudFront | CDN |
| | ELB | Load balancer |
| **Security** | IAM | Identity & access |
| | KMS | Key management |
| | Shield / WAF | DDoS & firewall |
| **AI/ML** | SageMaker | ML platform |
| | Rekognition | Image analysis |
| | Bedrock | Generative AI |

---

## 🌍 Global Infrastructure

- **Regions** — geographic areas (e.g., us-east-1, eu-west-1).
- **Availability Zones (AZs)** — isolated data centers within a region.
- **Edge Locations** — for CloudFront CDN.

💡 Deploy across multiple AZs for **high availability**.

---

## 💡 Example: Typical Web App on AWS

```
Route 53 (DNS) → CloudFront (CDN) → ALB (Load Balancer)
   → EC2 / ECS (App servers, multi-AZ)
   → RDS (Database, with read replicas)
   → S3 (Static assets & backups)
```

---

## 💰 Pricing Models

- **On-Demand** — pay per use, no commitment.
- **Reserved Instances** — 1–3 year commitment, big discount.
- **Spot Instances** — unused capacity, up to 90% off (interruptible).
- **Savings Plans** — flexible commitment-based discounts.

---

## 🎓 Certifications
- Cloud Practitioner (beginner)
- Solutions Architect Associate / Professional
- Developer / SysOps / DevOps

➡️ See [Certifications Guide](../09-Resources/certifications.md)

---

**Navigation:** [Next → Azure](azure.md) | ⬅ [Back to Index](../README.md)

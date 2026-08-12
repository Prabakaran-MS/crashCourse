⬅ [Back to Index](../README.md)

# 🎓 Final Test — Cloud Computing Interview Questions

Welcome to the **final lesson**! This is a big bank of **real, industry-asked interview questions** — from fundamentals to advanced architecture — with concise answers. Perfect for exam prep and job interviews.

> 📝 **How to use:** Cover the answers, try to answer aloud, then check yourself. Aim for clear, concise explanations.

---

## 📚 Question Sets (by topic)

| Set | Topic | Level |
|-----|-------|-------|
| 1 | [Fundamentals & Concepts](#set-1--fundamentals--concepts) | 🟢 Basic |
| 2 | [Service & Deployment Models](#set-2--service--deployment-models) | 🟢 Basic |
| 3 | [Compute, Storage & Networking](#set-3--compute-storage--networking) | 🟡 Intermediate |
| 4 | [Containers & Kubernetes](#set-4--containers--kubernetes) | 🟡 Intermediate |
| 5 | [DevOps, CI/CD & IaC](#set-5--devops-cicd--iac) | 🟡 Intermediate |
| 6 | [Security & IAM](#set-6--security--iam) | 🟡 Intermediate |
| 7 | [Databases & Data](#set-7--databases--data) | 🟡 Intermediate |
| 8 | [Architecture & Scenario Design](#set-8--architecture--scenario-design) | 🔴 Advanced |
| 9 | [Rapid-Fire One-Liners](#set-9--rapid-fire-one-liners) | 🟢 Mixed |

➡️ More scenario-based questions: [Scenario Challenges](scenario-questions.md)
➡️ Quick self-check quiz: [Quiz & Answers](quiz.md)

---

## Set 1 — Fundamentals & Concepts

**Q1. What is cloud computing?**
On-demand delivery of computing resources (servers, storage, databases, networking, software) over the internet with pay-as-you-go pricing, managed by a provider.

**Q2. What are the five essential characteristics of cloud (NIST)?**
On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.

**Q3. Difference between scalability and elasticity?**
- **Scalability** = ability to handle growth (add resources).
- **Elasticity** = automatically scaling up *and down* with demand in real time.

**Q4. Vertical vs Horizontal scaling?**
- **Vertical (scale up)** = bigger machine (more CPU/RAM).
- **Horizontal (scale out)** = more machines. Cloud favors horizontal.

**Q5. CapEx vs OpEx in cloud context?**
Cloud shifts **CapEx** (big upfront hardware purchase) to **OpEx** (ongoing pay-per-use), improving cash flow.

**Q6. What is multi-tenancy?**
Multiple customers share the same physical infrastructure while being logically isolated.

**Q7. What is high availability?**
Designing systems to remain operational with minimal downtime, using redundancy, multi-AZ, load balancing, and failover.

**Q8. What is fault tolerance?**
The ability to keep running even when a component fails (no downtime), typically via redundancy.

**Q9. What does "region" and "availability zone" mean?**
A **region** is a geographic area; an **AZ** is an isolated data center within a region. Deploy across AZs for HA.

**Q10. What is the difference between fault tolerance and disaster recovery?**
Fault tolerance keeps the system up during component failures; DR restores the system after a major disaster.

---

## Set 2 — Service & Deployment Models

**Q11. Explain IaaS, PaaS, and SaaS with examples.**
- **IaaS** = raw infra (AWS EC2). You manage OS & up.
- **PaaS** = platform to deploy code (Heroku, App Service). Provider manages OS/runtime.
- **SaaS** = ready software (Gmail, Salesforce). Provider manages everything.

**Q12. What is serverless / FaaS?**
Running code without managing servers; scales automatically and bills per execution (AWS Lambda). "Serverless" means *you* don't manage servers.

**Q13. What is a cold start?**
The initial latency when a serverless function starts from an idle state (spinning up the runtime).

**Q14. Public vs Private vs Hybrid cloud?**
- **Public** = shared, provider-owned (AWS).
- **Private** = dedicated to one org.
- **Hybrid** = combination, workloads move between them.

**Q15. What is multi-cloud and why use it?**
Using multiple providers (AWS + Azure + GCP) to avoid vendor lock-in, improve resilience, and use best-of-breed services.

**Q16. What is cloud bursting?**
Running normally on private cloud but "bursting" to public cloud during demand spikes.

**Q17. In the shared responsibility model, who secures what?**
Provider secures the cloud (hardware, hypervisor); customer secures **in** the cloud (data, access, OS config). The split shifts with service model.

**Q18. When would you choose PaaS over IaaS?**
When you want to focus on code, not infrastructure — faster development, no server management, at the cost of some control.

---

## Set 3 — Compute, Storage & Networking

**Q19. Difference between object, block, and file storage?**
- **Object** (S3) — flat, scalable, for media/backups.
- **Block** (EBS) — attached disks for VMs/databases.
- **File** (EFS) — shared network file system.

**Q20. What are storage tiers and why use them?**
Hot/Cool/Archive tiers priced by access frequency. Move cold data to Archive (Glacier) to cut costs dramatically.

**Q21. What is a VPC?**
A Virtual Private Cloud — your isolated private network in the cloud where you define subnets, routing, and security.

**Q22. Public vs private subnet?**
Public subnet has a route to the internet (web servers); private has none (databases), accessed via NAT for outbound.

**Q23. What is a load balancer? Types?**
Distributes traffic across servers. Types: **Application (Layer 7)**, **Network (Layer 4)**, and Classic. Improves availability & scale.

**Q24. Security Group vs Network ACL?**
- **Security Group** — stateful, instance-level firewall.
- **NACL** — stateless, subnet-level firewall.

**Q25. What is a CDN and how does it help?**
Caches content at edge locations near users to reduce latency and offload the origin (e.g., CloudFront).

**Q26. What is auto-scaling?**
Automatically adding/removing instances based on metrics (CPU, requests) to match demand and optimize cost.

**Q27. On-Demand vs Reserved vs Spot instances?**
- **On-Demand** — pay per use, no commitment.
- **Reserved/Savings Plans** — 1–3 yr commit, big discount.
- **Spot** — spare capacity, up to 90% off, can be interrupted.

**Q28. How do you reduce latency for global users?**
Multi-region deployment, CDN, edge computing, caching, and geo-DNS routing.

---

## Set 4 — Containers & Kubernetes

**Q29. Container vs Virtual Machine?**
Containers share the host OS kernel (lightweight, fast, MBs); VMs include a full OS (heavier, GBs, stronger isolation).

**Q30. What is Docker? Image vs container?**
Docker is a containerization platform. An **image** is a read-only template; a **container** is a running instance of it.

**Q31. What is Kubernetes and why use it?**
An orchestration platform that automates deployment, scaling, self-healing, and networking of containers at scale.

**Q32. Explain Pod, Deployment, and Service.**
- **Pod** — smallest unit, one+ containers.
- **Deployment** — manages replicas & rolling updates of pods.
- **Service** — stable network endpoint for pods.

**Q33. What is a ReplicaSet?**
Ensures a specified number of pod replicas are running; managed by Deployments.

**Q34. What are liveness and readiness probes?**
- **Liveness** — is the container alive? (restart if not).
- **Readiness** — is it ready to serve traffic? (remove from LB if not).

**Q35. How do rolling updates work in Kubernetes?**
Pods are replaced gradually with the new version, keeping the app available; can roll back if it fails.

**Q36. ConfigMap vs Secret?**
Both store config; **Secrets** are for sensitive data (base64-encoded, can be encrypted at rest).

**Q37. What is Helm?**
A package manager for Kubernetes using templated "charts" to deploy and version apps.

**Q38. Difference between Deployment and StatefulSet?**
Deployment is for stateless apps; StatefulSet gives stable identities and persistent storage for stateful apps (databases).

---

## Set 5 — DevOps, CI/CD & IaC

**Q39. What is CI/CD?**
- **CI** — frequently merge & auto-test code.
- **CD** — automatically deliver/deploy to environments.

**Q40. What is Infrastructure as Code?**
Managing infrastructure via code/config files (Terraform) for consistency, versioning, and automation.

**Q41. Declarative vs Imperative IaC?**
- **Declarative** — describe desired state (Terraform).
- **Imperative** — specify exact steps (scripts).

**Q42. What is Terraform state and why is it important?**
A file mapping config to real resources. It tracks what exists; store it remotely with locking for teams.

**Q43. Terraform vs Ansible?**
Terraform provisions infrastructure (stateful, declarative); Ansible configures servers (config management). Often used together.

**Q44. What is GitOps?**
Using Git as the single source of truth for deployments; tools like ArgoCD auto-sync the cluster to match Git.

**Q45. What is Blue-Green deployment?**
Run two environments (blue=current, green=new); switch traffic to green after validation. Instant rollback.

**Q46. What is Canary deployment?**
Gradually route a small % of traffic to the new version, monitor, then increase if healthy.

**Q47. What is idempotency in automation?**
Running an operation multiple times produces the same result (safe re-runs) — key to Ansible/Terraform.

---

## Set 6 — Security & IAM

**Q48. What is IAM?**
Identity and Access Management — controls who can access what and with which permissions.

**Q49. What is the principle of least privilege?**
Grant only the minimum permissions needed to perform a task — nothing more.

**Q50. Authentication vs Authorization?**
Authentication = who you are (login/MFA); Authorization = what you're allowed to do (permissions).

**Q51. What is MFA?**
Multi-Factor Authentication — requires two+ verification factors (password + phone code).

**Q52. IAM Role vs IAM User?**
A **user** is a permanent identity with credentials; a **role** is assumed temporarily and grants permissions without long-lived keys.

**Q53. How do you secure data in the cloud?**
Encrypt at rest and in transit, least-privilege IAM, MFA, network isolation, secrets managers, auditing/logging.

**Q54. Encryption at rest vs in transit?**
- **At rest** — data stored on disk is encrypted (KMS).
- **In transit** — data moving over the network is encrypted (TLS/SSL).

**Q55. What is a common cloud security misconfiguration?**
Publicly exposed storage buckets (e.g., open S3), overly permissive IAM, and open security groups (0.0.0.0/0).

**Q56. How do you manage secrets?**
Use dedicated tools (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) — never hardcode in code or images.

**Q57. What is a DDoS attack and how do you protect against it?**
Flooding a service to overwhelm it. Protect with WAF, AWS Shield/Cloudflare, rate limiting, and auto-scaling.

---

## Set 7 — Databases & Data

**Q58. SQL vs NoSQL — when to use each?**
SQL for structured, related data needing ACID (finance). NoSQL for flexible schema, massive scale, fast lookups.

**Q59. What is the CAP theorem?**
In a distributed system you can guarantee only 2 of 3: **Consistency, Availability, Partition tolerance**.

**Q60. What is a read replica?**
A read-only copy of a database to offload read traffic and improve performance/availability.

**Q61. What is sharding?**
Horizontally splitting data across multiple servers to scale.

**Q62. ACID vs BASE?**
ACID = strong consistency (SQL). BASE = eventual consistency, high availability (NoSQL).

**Q63. What is a data lake vs data warehouse?**
- **Data lake** — raw data of any format (S3).
- **Data warehouse** — structured, optimized for analytics (BigQuery, Redshift).

**Q64. What is caching and why use it?**
Storing frequently accessed data in fast memory (Redis) to reduce DB load and latency.

**Q65. ETL vs ELT?**
ETL transforms data before loading; ELT loads raw then transforms in the warehouse (common in modern cloud).

---

## Set 8 — Architecture & Scenario Design

**Q66. Design a highly available web application on AWS.**
Route 53 → CloudFront → ALB → Auto-scaling EC2/ECS across multiple AZs → Multi-AZ RDS with read replicas → S3 for assets → CloudWatch for monitoring.

**Q67. How would you handle a sudden 10x traffic spike?**
Auto-scaling groups, load balancing, caching (CDN + Redis), queue-based buffering (SQS), and stateless app design.

**Q68. How do you achieve zero-downtime deployments?**
Blue-green or canary deployments, rolling updates, health checks, and load balancer draining.

**Q69. Design a disaster recovery strategy.**
Define RTO/RPO, choose a strategy (backup/restore, pilot light, warm standby, active/active), multi-region replication, and regularly test recovery.

**Q70. How would you reduce a high cloud bill?**
Right-size instances, use Reserved/Spot, auto-scale, schedule dev shutdowns, tier storage, delete idle resources, tag for visibility.

**Q71. Design an event-driven order processing system.**
Order Service publishes events to Kafka/SNS; Payment, Inventory, and Notification services subscribe and process independently; use dead-letter queues for failures.

**Q72. How do you secure a multi-tier application?**
Public subnet for web tier, private subnets for app/DB, security groups per tier, least-privilege IAM, encryption, WAF, and secrets manager.

**Q73. What is the Well-Architected Framework?**
Best-practice pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.

**Q74. How would you migrate an on-prem app to the cloud?**
Assess (6 R's: Rehost, Replatform, Refactor, Repurchase, Retire, Retain), start with lift-and-shift, then modernize; use hybrid during transition.

**Q75. Monolith to microservices — how and why?**
Decompose by business capability, containerize, add API gateway + service mesh, decentralize data. Benefits: independent scaling/deploying, fault isolation.

---

## Set 9 — Rapid-Fire One-Liners

- **What is elasticity?** Auto scale up/down with demand.
- **What is a hypervisor?** Software that runs VMs (ESXi, KVM).
- **What is a container registry?** Stores container images (Docker Hub, ECR).
- **What is a service mesh?** Manages service-to-service traffic (Istio).
- **What is RTO?** Max acceptable downtime.
- **What is RPO?** Max acceptable data loss.
- **What is an SLA?** Guaranteed uptime/performance commitment.
- **What is a pod?** Smallest deployable unit in Kubernetes.
- **What is horizontal scaling?** Adding more machines.
- **What is a NAT gateway?** Lets private subnets reach the internet outbound.
- **What is a bastion host?** A secured jump server to access private resources.
- **What is throughput?** Data processed per unit time.
- **What is a webhook?** An HTTP callback triggered by an event.
- **What is Terraform `plan`?** Previews changes before applying.
- **What is a DaemonSet?** Runs one pod per node.

---

## ✅ Next Steps

- Test yourself with the [Quiz & Answers](quiz.md).
- Tackle open-ended [Scenario Challenges](scenario-questions.md).
- Revisit weak topics using the [Index](../README.md).

**Good luck in your interviews and exams! 🚀**

---

**Navigation:** [← Troubleshooting Playbook](../13-Nooks-and-Corners/troubleshooting-playbook.md) | [Next → Scenario Challenges](scenario-questions.md) | ⬅ [Back to Index](../README.md)

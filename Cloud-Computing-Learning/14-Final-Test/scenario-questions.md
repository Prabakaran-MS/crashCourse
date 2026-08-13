⬅ [Back to Index](../README.md)

# 🧩 Scenario-Based Interview Challenges

Senior/architect interviews focus on **open-ended design scenarios**. Practice explaining your reasoning out loud. Each scenario includes **what interviewers look for** and a **sample approach**.

### 🎓 Professional (IT-Standard) Reference

| Scenario Type | Layman View | Professional (IT-Standard) Focus + Example |
|---------------|-------------|--------------------------------------------|
| Scaling | Handle more users | Scaling scenarios test handling growing demand.<br>Horizontal scaling adds more instances.<br>Caching reduces backend load.<br>Queues smooth out traffic spikes.<br>Together they absorb high traffic.<br>*Example: scaling a viral application design.* |
| Reliability | Avoid downtime | Reliability scenarios test avoiding downtime.<br>Multi-region Disaster Recovery (DR) adds resilience.<br>The Recovery Time Objective (RTO) sets recovery speed.<br>The Recovery Point Objective (RPO) sets data-loss limits.<br>Designs meet these targets.<br>*Example: an active-active failover design.* |
| Cost | Spend wisely | Cost scenarios test spending money wisely.<br>They apply Financial Operations (FinOps) trade-offs.<br>Spot capacity cuts compute costs.<br>Rightsizing removes waste.<br>You justify cost decisions.<br>*Example: Spot instances plus rightsizing in a design answer.* |

---

## Scenario 1 — Design Instagram-like Photo Sharing

**Look for:** storage choices, CDN, scaling, database design.

**Sample approach:**
- Upload photos to **S3** (object storage); serve via **CloudFront** CDN.
- Trigger a **Lambda** to generate thumbnails on upload.
- Metadata in **DynamoDB** (NoSQL, fast reads); relational data in RDS if needed.
- API layer on **ECS/EKS** behind a load balancer, multi-AZ.
- **Redis** cache for feeds; **auto-scaling** for spikes.

---

## Scenario 2 — Black Friday Traffic (100x spike)

**Look for:** elasticity, decoupling, caching, graceful degradation.

**Sample approach:**
- **Auto-scaling** groups + load balancer.
- **CDN** + **Redis** caching to reduce backend load.
- **Queue** (SQS/Kafka) to buffer writes (orders) and process asynchronously.
- **Stateless** app servers.
- Pre-warm capacity; set **billing alerts**.
- Graceful degradation (disable non-critical features under load).

---

## Scenario 3 — Multi-Region Active-Active App

**Look for:** data replication, consistency, routing, failover.

**Sample approach:**
- Deploy full stack in 2+ regions.
- **Route 53** geo/latency routing + health-check failover.
- Global database (DynamoDB Global Tables / Aurora Global / Spanner).
- Handle data consistency (eventual vs strong) trade-offs.
- Replicate S3 cross-region.

---

## Scenario 4 — Migrate a Legacy Monolith to Cloud

**Look for:** migration strategy (6 R's), phased approach, risk management.

**Sample approach:**
1. **Assess** dependencies & pick strategy per component.
2. **Rehost** (lift-and-shift) to EC2 first for quick wins.
3. **Replatform** (managed DB via RDS).
4. **Refactor** into microservices gradually (strangler-fig pattern).
5. Run **hybrid** during transition; use IaC; test rollback.

---

## Scenario 5 — Cut Cloud Costs by 40%

**Look for:** FinOps knowledge, visibility, concrete levers.

**Sample approach:**
- **Analyze** with Cost Explorer + tagging for visibility.
- **Right-size** over-provisioned instances.
- **Reserved/Savings Plans** for steady workloads; **Spot** for batch.
- **Schedule** dev/test shutdown nights/weekends.
- **Tier** storage (Glacier for archives); delete orphaned resources.
- Adopt **serverless/auto-scaling** where suitable.

---

## Scenario 6 — Secure a Healthcare App (HIPAA)

**Look for:** compliance, encryption, access control, auditing.

**Sample approach:**
- **Encrypt** at rest (KMS) and in transit (TLS).
- **Least-privilege IAM** + MFA; private subnets for data.
- **Audit logging** (CloudTrail), monitoring, alerts.
- **Compliance controls** (AWS Config), data residency.
- Secrets in **Vault/Secrets Manager**; regular security reviews.

---

## Scenario 7 — Build a Real-Time Analytics Pipeline

**Look for:** streaming, processing, storage, visualization.

**Sample approach:**
- Ingest via **Kafka/Kinesis** (streaming).
- Process with **Spark Streaming / Flink**.
- Store raw in **data lake (S3)**, aggregated in **BigQuery/Redshift**.
- Visualize with **Grafana/Tableau**.
- Use **auto-scaling** consumers; handle late/duplicate data.

---

## Scenario 8 — Design a CI/CD Pipeline for Microservices

**Look for:** automation, testing, artifact management, deployment strategy.

**Sample approach:**
- Per-service pipelines (GitHub Actions/Jenkins).
- Build → test → **containerize** → push to registry.
- Deploy to **Kubernetes** via **ArgoCD (GitOps)**.
- **Canary/blue-green** rollouts, automated rollback.
- Security scans + monitoring integration.

---

## Scenario 9 — Achieve 99.99% Uptime

**Look for:** redundancy, health checks, DR, testing.

**Sample approach:**
- Multi-AZ (and ideally multi-region) deployment.
- Load balancing + health checks + auto-scaling.
- Database replication with automatic failover.
- Automated backups + tested DR plan.
- Observability + alerting; chaos testing.

---

## Scenario 10 — Choose a Provider for an AI Startup

**Look for:** matching requirements to provider strengths.

**Sample approach:**
- **GCP** for strong ML/data (Vertex AI, BigQuery, TPUs).
- Or **AWS** for breadth (SageMaker, Bedrock) & ecosystem.
- Consider GPU availability/pricing, team skills, existing stack.
- Keep workloads portable (containers) to avoid lock-in.

---

## 🎤 Tips for Design Interviews

1. **Clarify requirements first** (scale, budget, latency, compliance).
2. **Think out loud** — explain trade-offs.
3. **Start high-level**, then drill down.
4. **Mention non-functional needs**: security, cost, availability, monitoring.
5. **Justify choices** — why this database, why this service.
6. There's rarely one "right" answer — reasoning matters most.

---

**Navigation:** [← Interview Questions](interview-questions.md) | [Next → Quiz & Answers](quiz.md) | ⬅ [Back to Index](../README.md)

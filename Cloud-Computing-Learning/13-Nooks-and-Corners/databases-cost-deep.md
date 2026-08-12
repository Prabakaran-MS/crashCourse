⬅ [Back to Index](../README.md)

# 🔬 Databases & Cost — Nooks, Corners & Gotchas

Database performance traps and the hidden cloud costs that shock teams.

---

# Part 1 — Database Deep Corners

## 🗄️ Relational (RDS/Aurora) Gotchas

- **Multi-AZ ≠ read scaling.** Multi-AZ is for **failover/HA** (standby is NOT readable). Use **read replicas** for scaling reads.
- **Read replicas** are **asynchronous** → replication lag → stale reads.
- **Failover** promotes standby; DNS endpoint updates (brief connection drop). App must **retry**.
- **Storage autoscaling** grows but **never shrinks** automatically.
- **Connection limits** scale with instance size — too many connections = errors. Use a **connection pooler** (RDS Proxy, PgBouncer).
- **Backups & snapshots** — automated backups deleted when you delete the instance (take a final snapshot!).
- **Maintenance windows** can cause brief downtime — schedule off-peak.
- **Parameter groups** control DB config (can't change some without reboot).

## ⚡ Performance Corners
- Missing **indexes** = full table scans = slow queries (the #1 real-world DB problem).
- **N+1 query problem** — app makes 1 query per row instead of a join.
- **Connection storms** — apps opening/closing connections rapidly; pool them.
- **Lock contention** — long transactions block others.
- Use **EXPLAIN** to analyze query plans.

## 📊 NoSQL (DynamoDB) Corners
- **Partition key design is everything** — bad keys cause **hot partitions** (throttling).
- **Capacity modes:** Provisioned (predictable) vs On-Demand (spiky, pricier per request).
- **Eventually consistent reads** by default (cheaper); strongly consistent costs 2x.
- **Item size limit: 400 KB.**
- **Scans are expensive** — they read the whole table; prefer **Query** with keys.
- **GSI (Global Secondary Index)** — query on non-key attributes, but costs extra capacity.
- **Hot key** = one partition gets hammered → throttled even with spare total capacity.

## 🧠 Distributed DB Theory Corners
- **CAP theorem:** Consistency, Availability, Partition tolerance — pick 2 (P is mandatory in distributed).
- **PACELC** extends CAP: else (when no partition) trade **Latency** vs **Consistency**.
- **Eventual consistency** — reads may return stale data briefly.
- **Quorum** — R + W > N ensures consistency (N=replicas, R=read, W=write).

## 💡 Caching Corners
- **Cache invalidation** is one of the hardest problems ("there are only two hard things...").
- **Strategies:** cache-aside (lazy), write-through, write-behind.
- **TTL** balances freshness vs load.
- **Thundering herd** — cache expires → all requests hit DB at once. Fix: staggered TTL, locks.
- **Redis** is single-threaded — one slow command blocks all (avoid `KEYS *` in prod).

---

# Part 2 — Cost Traps & FinOps Corners

## 💸 The Sneaky Cost Traps (Learn From Others' Bills!)

| Trap | Why It Hurts | Fix |
|------|--------------|-----|
| **Data egress** | Outbound internet/inter-region charged per GB | VPC endpoints, CDN, keep traffic in-region |
| **NAT Gateway** | Per-GB processing + hourly | VPC endpoints for S3/ECR; NAT instance for low traffic |
| **Idle resources** | Stopped VMs still bill EBS; idle LBs/EIPs charge | Cleanup automation, budgets |
| **Unused EIPs** | Charged when NOT attached | Release them |
| **Orphaned volumes/snapshots** | Persist after instance terminated | Lifecycle + cleanup |
| **Over-provisioning** | Paying for unused CPU/RAM | Right-sizing |
| **Cross-AZ traffic** | Chatty microservices across AZs | Co-locate or accept HA tradeoff |
| **Logging/monitoring** | CloudWatch/Datadog ingest & retention | Sampling, retention policies |
| **S3 requests & versioning** | Millions of requests + version bloat | Lifecycle rules, batch ops |
| **Forgotten dev/test** | Running 24/7 | Auto-shutdown schedules |
| **Premium support tiers** | % of spend | Match to actual needs |

## 🎯 Cost Optimization Levers (Ranked by Impact)
1. **Right-size** — most workloads are over-provisioned 2-3x.
2. **Commit** — Reserved Instances / Savings Plans (up to 72%).
3. **Spot** — for fault-tolerant/batch (up to 90%).
4. **Auto-scale** — don't pay for peak 24/7.
5. **Schedule** — turn off non-prod nights/weekends (~65%).
6. **Storage tiering** — Glacier for archives.
7. **Delete waste** — orphaned resources.
8. **Serverless** — pay-per-use for spiky workloads.

## 🏷️ Cost Visibility Corners
- **Tagging is mandatory** for cost allocation — untagged = "who owns this?"
- **Cost anomaly detection** catches runaway spend early.
- **Budgets + alerts** — get notified before the bill shocks you.
- **Cost Explorer / Kubecost / Infracost** — analyze and forecast.
- **Reserved Instance utilization** — buying RIs you don't use = waste.

## ⚠️ Pricing Model Gotchas
- **Spot interruptions** — 2-min warning; design for it (checkpointing).
- **Reserved Instances** — commitment even if you stop using them.
- **Savings Plans** are more flexible than RIs (apply across instance families).
- **Free tier** expires after 12 months (AWS) — surprise bills follow.
- **Per-second vs per-hour billing** — some services round up to the hour.
- **Minimum durations** — Glacier/IA charge minimum storage time even if deleted early.

---

## 💡 Golden Rules
- **Measure before optimizing** — use cost tools, don't guess.
- **Tag everything** from day one.
- **Set budgets & alerts** immediately.
- **Automate cleanup** of idle/orphaned resources.
- **Review monthly** — FinOps is continuous, not one-time.

---

**Navigation:** [← Kubernetes Internals](kubernetes-deep.md) | [Next → Troubleshooting Playbook](troubleshooting-playbook.md) | ⬅ [Back to Index](../README.md)

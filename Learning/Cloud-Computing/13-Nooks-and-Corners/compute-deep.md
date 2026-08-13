⬅ [Back to Index](../README.md)

# 🔬 Compute — Nooks, Corners & Gotchas

Deep edge-case reference for cloud compute. The things that trip people up in production and interviews.

### 🎓 Professional (IT-Standard) Reference

| Gotcha | Layman View | Professional (IT-Standard) View + Example |
|--------|-------------|-------------------------------------------|
| Instance types | Sizes matter | Instance types define the resource profile of a server.<br>They balance Central Processing Unit (CPU), memory, and network.<br>Families are tuned for different workloads.<br>Choosing wrong wastes money or performance.<br>Match the family to the workload.<br>*Example: a compute-optimized C-family instance for CPU-bound apps.* |
| Spot interruptions | Cheap but risky | Spot instances are cheap but can be reclaimed.<br>The provider gives a two-minute termination notice.<br>Workloads must save progress gracefully.<br>They suit fault-tolerant jobs.<br>Handling interruptions avoids data loss.<br>*Example: checkpointing Spot batch jobs before termination.* |
| Autoscaling lag | Scaling isn't instant | Autoscaling reacts with some delay.<br>New instances need warm-up time.<br>Cooldown periods prevent thrashing.<br>Sudden spikes may briefly overload.<br>Tuning reduces the lag impact.<br>*Example: pre-warming an Auto Scaling Group (ASG) before a launch.* |

---

## 🖥️ EC2 / VM Instance Deep Dive

### Instance Family Naming (AWS) — Decode It!
```
   m5.2xlarge
   │ │  └── size (nano→micro→small→...→2xlarge→...)
   │ └──── generation (5th gen)
   └────── family: m=general, c=compute, r=memory,
					t=burstable, g/p=GPU, i=storage, x=huge RAM
```

| Family | Optimized For | Use Case |
|--------|---------------|----------|
| **T** (t3, t4g) | Burstable | Dev, low-traffic web |
| **M** (m5, m6) | Balanced | General purpose |
| **C** (c5, c6) | Compute | Batch, gaming, HPC |
| **R** (r5, r6) | Memory | Databases, caches |
| **X** (x1, x2) | Huge memory | In-memory DBs (SAP HANA) |
| **I** (i3, i4) | Storage/IOPS | NoSQL, data warehouses |
| **G/P** | GPU | ML, rendering |

### ⚠️ T-Instance CPU Credits (Classic Gotcha!)
- T-series are **burstable** — they earn CPU credits when idle, spend them when busy.
- **Run out of credits → CPU throttled to baseline** (as low as 5-40%).
- **Unlimited mode** lets them burst beyond credits (extra charge).
- 💡 *Interview:* "Why is my t3.micro suddenly slow?" → **CPU credit exhaustion.**

### 🔌 Instance Lifecycle & Storage Traps
| State | Billing | Data on Instance Store | Data on EBS |
|-------|---------|------------------------|-------------|
| Running | 💲 | Persists | Persists |
| Stopped | Only EBS storage | **LOST** ❌ | Persists |
| Terminated | None | LOST | Lost unless "delete on termination" off |

- **Instance store (ephemeral)** = physically attached, **wiped on stop/terminate**.
- **EBS** = network-attached, persists. But default root volume often has **"Delete on Termination = true"**.
- **Stopping** an instance can change its **public IP** (unless using Elastic IP).

### 💡 Compute Shortcuts & Pro Tips
- **Elastic IP** — static public IP (free while attached to running instance, **charged when idle**).
- **Placement Groups** — cluster (low latency), spread (HA), partition (big data).
- **Spot Instances** — up to 90% off but can be reclaimed with **2-min warning**.
- **Reserved / Savings Plans** — commit for up to 72% off.
- **Dedicated Hosts** — for licensing (BYOL) & compliance.
- **User Data** — bootstrap script that runs at first boot.
- **Instance Metadata** — `curl http://169.254.169.254/latest/meta-data/` (use **IMDSv2** for security).

---

## ⚙️ Auto-Scaling Deep Dive

### Scaling Policy Types
| Type | Description |
|------|-------------|
| **Target Tracking** | Keep a metric at target (e.g., CPU 50%) — easiest |
| **Step Scaling** | Add N instances per threshold band |
| **Simple Scaling** | One adjustment, then cooldown |
| **Scheduled** | Scale at known times (business hours) |
| **Predictive** | ML forecasts load |

### ⚠️ Auto-Scaling Gotchas
- **Cooldown period** prevents rapid flapping — but can delay needed scaling.
- **Health check grace period** — new instances need time before health checks.
- Scaling on **CPU alone** misses memory/queue-based bottlenecks.
- **Warm-up time** — apps that take minutes to start cause lag during spikes.
- Scale-**in** can kill the wrong instance → use **instance protection** / termination policies.
- **Desired vs Min vs Max** — desired is the target; ASG keeps it between min/max.

---

## ⚡ Serverless Compute Corners

### Lambda Hard Limits (Know These!)
| Limit | Value |
|-------|-------|
| Max execution time | **15 minutes** |
| Memory | 128 MB – 10,240 MB |
| /tmp storage | 512 MB – 10 GB |
| Deployment package (zipped) | 50 MB (250 MB unzipped) |
| Concurrent executions (default) | 1,000 per region (soft) |
| Payload (sync) | 6 MB |
| Environment variables | 4 KB total |

### Cold Starts — The Big Gotcha
- First invocation (or after idle) spins up a new environment → **latency spike**.
- Worse with: large packages, VPC attachment, heavy init code.
- **Mitigations:** Provisioned Concurrency, smaller packages, keep-warm pings, lighter runtimes.
- CPU scales **with memory** — more RAM = more CPU = faster (sometimes cheaper).

### 💡 Serverless Pro Tips
- Put shared code in **Lambda Layers**.
- Init DB connections **outside** the handler (reused across warm invocations).
- Use **Step Functions** to chain functions (avoid the 15-min limit).
- Watch for **recursive triggers** (S3 → Lambda → S3 = infinite loop = huge bill!).

---

## 🐳 Container Compute (Fargate/ECS)

- **Fargate** = serverless containers (no node management), pricier per unit but no idle cost.
- **ECS on EC2** = you manage nodes, cheaper at scale.
- **Task vs Service:** Task = one run; Service = keeps N tasks running.
- Gotcha: Fargate has **no host access** (no SSH, no DaemonSets).

---

**Navigation:** [Next → Storage Deep Dive](storage-deep.md) | ⬅ [Back to Index](../README.md)

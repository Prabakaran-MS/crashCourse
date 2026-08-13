⬅ [Back to Index](../README.md)

# 🔬 Storage — Nooks, Corners & Gotchas

Every hidden detail of cloud storage that causes surprises (and bills).

### 🎓 Professional (IT-Standard) Reference

| Gotcha | Layman View | Professional (IT-Standard) View + Example |
|--------|-------------|-------------------------------------------|
| Egress fees | Downloading costs money | Egress fees charge for data leaving the cloud.<br>Downloads and cross-region transfers cost money.<br>They cause surprise bills.<br>Architecture affects transfer volume.<br>Plan data flows to reduce them.<br>*Example: high cross-region egress charges.* |
| Consistency | When data appears | Consistency defines when written data becomes visible.<br>Strong consistency shows writes immediately.<br>Eventual consistency may lag briefly.<br>The model affects application logic.<br>Choose based on correctness needs.<br>*Example: Simple Storage Service (S3) strong read-after-write consistency.* |
| Lifecycle | Old data lingers | Lifecycle policies manage aging data automatically.<br>They move data to cheaper tiers over time.<br>They can expire and delete old objects.<br>They cut storage costs.<br>They reduce manual cleanup.<br>*Example: moving data to Glacier after 90 days.* |

---

## 🪣 Object Storage (S3) Deep Dive

### S3 Storage Classes — Full Breakdown
| Class | Use Case | Retrieval | Min Duration | Relative Cost |
|-------|----------|-----------|--------------|---------------|
| **Standard** | Frequent access | Instant | None | 💲💲💲 |
| **Intelligent-Tiering** | Unknown/changing | Instant | None | Auto-optimizes |
| **Standard-IA** | Infrequent | Instant | 30 days | 💲💲 |
| **One Zone-IA** | Infrequent, non-critical | Instant | 30 days | 💲 |
| **Glacier Instant** | Archive, instant access | Instant (ms) | 90 days | 💲 |
| **Glacier Flexible** | Archive | Minutes–hours | 90 days | 💲 |
| **Glacier Deep Archive** | Long-term (7-10 yr) | Hours (up to 12) | 180 days | 💲 (cheapest) |

### ⚠️ S3 Gotchas That Cost Money/Time
- **Minimum storage duration** — deleting Standard-IA before 30 days still bills 30 days!
- **Retrieval fees** — Glacier charges to *read* data (and per-request).
- **Request costs** — millions of GET/PUT add up (LIST is pricey).
- **Data transfer OUT** to internet is charged (**egress**); IN is free.
- **Eventual consistency** — historically; now **strong read-after-write** consistency (post-2020).
- **Versioning** keeps every version → storage grows silently → use **lifecycle rules**.
- **Cross-region replication** doubles storage cost + transfer.
- **Public buckets** = #1 cause of data breaches — block public access by default!

### 💡 S3 Pro Tips & Shortcuts
```bash
# Lifecycle: auto-move to Glacier after 90 days, delete after 365
# (configure via console or JSON lifecycle policy)

# Enable Transfer Acceleration for faster global uploads
# Multipart upload for files >100MB (parallel, resumable)
aws s3 cp big.zip s3://bucket/ --storage-class GLACIER

# S3 Select — query CSV/JSON WITHOUT downloading (saves transfer)
# Presigned URLs — grant temporary access without making public
aws s3 presign s3://bucket/file --expires-in 3600
```
- **S3 Event Notifications** → trigger Lambda/SQS/SNS on upload.
- **Requester Pays** — shift download costs to the requester.
- **Object Lock** — WORM compliance (can't delete for retention period).

---

## 💽 Block Storage (EBS) Deep Dive

### EBS Volume Types
| Type | Description | Use Case |
|------|-------------|----------|
| **gp3** | General SSD (baseline 3000 IOPS) | Most workloads (default) |
| **gp2** | Older general SSD (IOPS scales w/ size) | Legacy |
| **io2/io1** | Provisioned IOPS SSD | Databases needing high IOPS |
| **st1** | Throughput HDD | Big data, logs (sequential) |
| **sc1** | Cold HDD | Infrequent, cheapest |

### ⚠️ EBS Gotchas
- EBS is **AZ-locked** — can't attach a volume to an instance in another AZ (must snapshot & copy).
- **gp2 IOPS = 3 × GB** — a small gp2 volume is slow; gp3 decouples this.
- **Snapshots are incremental** but billed for full changed blocks; deleting an old snapshot doesn't always free expected space.
- **Root volume "Delete on Termination"** default = true → data lost.
- Resizing a volume needs an **OS-level filesystem grow** (`resize2fs`/`xfs_growfs`).
- **Burst balance** on gp2 — small volumes throttle when burst credits run out.

### 💡 EBS Tips
- **Snapshots** → store in S3 (cheap), copy across regions for DR.
- **Encrypt** at creation (can't un-encrypt later; must snapshot→copy encrypted).
- **Multi-Attach** (io1/io2) — attach one volume to multiple instances (clustered apps).

---

## 📁 File Storage (EFS/Azure Files) Corners

- **EFS** scales automatically, mounts via NFS, multi-AZ — but **higher latency** than EBS.
- **Throughput modes:** Bursting vs Provisioned vs Elastic.
- **Lifecycle management** moves cold files to EFS-IA (cheaper).
- Gotcha: EFS can get **expensive** vs EBS if you don't need shared access.
- **Windows** workloads → use **FSx** (Windows File Server) or Azure Files (SMB).

---

## 🧊 Data Transfer & Egress — The Silent Bill

| Transfer | Cost |
|----------|------|
| Internet → Cloud (ingress) | **Free** usually |
| Cloud → Internet (egress) | **Charged** 💲 |
| Between AZs (same region) | Small charge |
| Between regions | Charged |
| Within same AZ (private IP) | Often free |

💡 **Pro tip:** Use **VPC endpoints / PrivateLink** to reach S3/services without egress through NAT (saves NAT + transfer costs).

⚠️ **NAT Gateway** processes data at a per-GB charge — a huge hidden cost for chatty private-subnet workloads.

---

## 🔐 Storage Security Corners
- Encrypt **at rest** (SSE-S3, SSE-KMS, SSE-C) and **in transit** (TLS).
- **SSE-KMS** gives audit trail but has **API rate limits** (can throttle high-throughput apps).
- **Bucket policies** vs **IAM policies** vs **ACLs** — evaluated together; explicit **Deny** always wins.
- **Block Public Access** overrides bucket policies (4 independent settings).

---

**Navigation:** [← Compute Deep Dive](compute-deep.md) | [Next → Networking Deep Dive](networking-deep.md) | ⬅ [Back to Index](../README.md)

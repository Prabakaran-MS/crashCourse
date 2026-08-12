⬅ [Back to Index](../README.md)

# Cloud Storage

Cloud storage lets you store and retrieve data over the internet. There are **three main types**, each for different use cases.

---

## 🗂️ Three Types of Storage

### 1️⃣ Object Storage
- Stores data as **objects** (file + metadata + unique ID) in a flat structure ("buckets").
- Best for: images, videos, backups, static websites, big data.
- **Highly scalable & cheap.**

| Provider | Service |
|----------|---------|
| AWS | **S3** |
| Azure | **Blob Storage** |
| GCP | **Cloud Storage** |

### 2️⃣ Block Storage
- Stores data in fixed-size **blocks**, like a virtual hard drive attached to a VM.
- Best for: databases, OS disks, high-performance apps.

| Provider | Service |
|----------|---------|
| AWS | **EBS** (Elastic Block Store) |
| Azure | **Managed Disks** |
| GCP | **Persistent Disk** |

### 3️⃣ File Storage
- Shared file system accessed over a network (NFS/SMB).
- Best for: shared files, legacy apps, content management.

| Provider | Service |
|----------|---------|
| AWS | **EFS** (Elastic File System) |
| Azure | **Azure Files** |
| GCP | **Filestore** |

---

## 📊 Comparison

| Feature | Object | Block | File |
|---------|--------|-------|------|
| Structure | Flat (buckets) | Blocks | Hierarchy (folders) |
| Access | HTTP API | Attached to VM | Network mount |
| Scalability | Virtually unlimited | Limited | Moderate |
| Use case | Media, backups | Databases, VMs | Shared drives |

---

## 🧊 Storage Tiers (Cost Optimization)

Cloud providers offer tiers based on access frequency:
- **Hot** — frequent access (higher cost). e.g., S3 Standard.
- **Cool / Infrequent** — occasional access. e.g., S3 Standard-IA.
- **Archive / Cold** — rare access, cheapest. e.g., **AWS S3 Glacier**, Azure Archive.

💡 **Example:** Store active user photos in Hot tier, move 5-year-old backups to Glacier to save 80%+ on cost.

---

## 💡 Example: Upload to AWS S3

```bash
aws s3 cp myfile.jpg s3://my-bucket/photos/
aws s3 ls s3://my-bucket/photos/
```

---

**Navigation:** [← Cloud Networking](networking.md) | [Next → AWS](../05-Cloud-Providers/aws.md) | ⬅ [Back to Index](../README.md)

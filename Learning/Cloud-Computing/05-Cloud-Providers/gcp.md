⬅ [Back to Index](../README.md)

# Google Cloud Platform (GCP)

**GCP** is Google's cloud (launched 2008), known for **data analytics, machine learning, Kubernetes**, and networking (built on Google's global backbone).

### 🎓 Professional (IT-Standard) Reference

| Service Area | Layman View | Professional (IT-Standard) View + Example |
|--------------|-------------|-------------------------------------------|
| Compute | Rent servers | Google Cloud Platform (GCP) offers several compute models.<br>Compute Engine provides Virtual Machines (VMs).<br>Cloud Run runs containers serverlessly.<br>Google Kubernetes Engine (GKE) manages Kubernetes.<br>Autopilot mode manages nodes for you.<br>*Example: a GKE Autopilot managed Kubernetes cluster.* |
| Data & analytics | Crunch big data | GCP is known for large-scale data analytics.<br>BigQuery is a serverless data warehouse.<br>Dataflow processes streaming and batch data.<br>These handle petabyte-scale workloads.<br>They integrate with machine learning tools.<br>*Example: running petabyte-scale queries in BigQuery.* |
| ML/AI | Smart models | GCP provides strong Machine Learning (ML) and Artificial Intelligence (AI) services.<br>Vertex AI covers training and serving models.<br>TensorFlow tooling is deeply supported.<br>Managed infrastructure simplifies ML workflows.<br>Graphics Processing Units (GPUs) accelerate training.<br>*Example: training and serving models on Vertex AI.* |
| Networking | Fast global network | GCP runs on Google's global fiber backbone.<br>A global Virtual Private Cloud (VPC) spans regions.<br>Cloud Load Balancing distributes traffic worldwide.<br>Anycast routing sends users to the nearest edge.<br>This delivers low latency globally.<br>*Example: an anycast global Hypertext Transfer Protocol Secure (HTTPS) load balancer.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart TB
    GCP["☁️ Google Cloud Platform"]
    GCP --> Compute["Compute: Compute Engine, Cloud Run"]
    GCP --> Storage["Storage: Cloud Storage"]
    GCP --> Data["Data and AI: BigQuery, Vertex AI"]
    GCP --> K8s["Kubernetes: GKE"]
```

**Explanation:** Google Cloud Platform (GCP) is known for strengths in data analytics, machine learning, and Kubernetes (which Google created). It offers the usual compute and storage families plus standout tools like BigQuery for analytics.

---

## 🧱 Core Services by Category

| Category | Service | What It Does |
|----------|---------|--------------|
| **Compute** | Compute Engine | Virtual machines |
| | Cloud Functions | Serverless |
| | GKE | Managed Kubernetes (industry-leading) |
| | Cloud Run | Serverless containers |
| | App Engine | PaaS |
| **Storage** | Cloud Storage | Object storage |
| | Persistent Disk | Block storage |
| | Filestore | File storage |
| **Database** | Cloud SQL | Managed SQL |
| | Firestore | NoSQL document DB |
| | Bigtable | Wide-column NoSQL |
| | **BigQuery** | Serverless data warehouse (flagship) |
| | Spanner | Global relational DB |
| **Networking** | VPC | Virtual network |
| | Cloud DNS / Cloud CDN | DNS & CDN |
| **AI/ML** | Vertex AI | Unified ML platform |
| | Vision / Speech / Translation AI | Pre-trained APIs |
| | TensorFlow (open-source) | ML framework |

---

## 🌟 GCP's Strengths

- **Data & Analytics** — **BigQuery** is world-class for big data.
- **Machine Learning / AI** — Vertex AI, TensorFlow, TPUs.
- **Kubernetes** — Google created Kubernetes; **GKE** is best-in-class.
- **Networking** — runs on Google's private global fiber network.

---

## 💡 Example: Data Analytics Pipeline

```
Data sources → Pub/Sub (streaming) → Dataflow (processing)
   → BigQuery (analysis) → Looker / Data Studio (visualization)
```

Companies with heavy data/ML needs often choose GCP.

---

## 🖼️ Popular GCP Services

![Compute Engine](https://img.shields.io/badge/Compute_Engine-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![BigQuery](https://img.shields.io/badge/BigQuery-669DF6?style=for-the-badge&logo=googlebigquery&logoColor=white)
![GKE](https://img.shields.io/badge/GKE-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Cloud Run](https://img.shields.io/badge/Cloud_Run-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

---

## 🏗️ Architecture: A Data & ML Pipeline on GCP

```mermaid
flowchart LR
    Src["📥 Events/Logs"] --> PS["📨 Pub/Sub (stream)"]
    PS --> DF["⚙️ Dataflow (ETL)"]
    DF --> BQ["📊 BigQuery (warehouse)"]
    BQ --> Look["📈 Looker (dashboards)"]
    BQ --> VAI["🧠 Vertex AI (train/serve models)"]
    VAI --> App["🌐 Cloud Run (serve predictions)"]
```

**Explanation:** GCP's flagship pattern: stream events through Pub/Sub, transform with Dataflow, land in BigQuery for serverless analytics, then feed Vertex AI for ML — all managed, scaling to petabytes without provisioning servers.

---

## 🖥️ What It Looks Like — BigQuery Query (Mockup)

```text
┌──────────────────────────────────────────────┐
│  BigQuery › Query editor                            │
├────────────────────────────────────────────┤
│  SELECT country, COUNT(*) AS users                  │
│  FROM `analytics.events` WHERE date > '2025-01-01'  │
│  GROUP BY country ORDER BY users DESC;              │
│  ───────────────────────────────────────────  │
│  ✅ 4.2 TB processed in 3.1 s  ·  1,204 rows          │
└─────────────────────────────────────────────┘
```

---

## 🌐 Real-World Usage Example

**Spotify** migrated its entire data platform to **Google Cloud**, running BigQuery on petabytes of listening data to power personalized playlists like Discover Weekly, and using Pub/Sub + Dataflow to process billions of daily events. GCP's data/ML strengths directly power the recommendations 600M+ users rely on.

**Other real examples:** PayPal, Twitter/X (analytics), Snapchat, and Home Depot all run major workloads on GCP; Google's own products (Search, YouTube) run on the same backbone.

---

## 🔍 Deep Dive — Concepts Often Missed

- **Global VPC:** unlike AWS/Azure, a GCP VPC spans all regions natively.
- **BigQuery is serverless:** you pay per query (bytes scanned) — use partitioning/clustering to cut cost.
- **Sustained-use & committed-use discounts** apply automatically/with commitment.
- **GKE Autopilot** removes node management entirely — Google runs the control *and* data plane.
- **Projects** are GCP's core isolation/billing unit (like AWS accounts).

---

## 🎓 Certifications
- Cloud Digital Leader (beginner)
- Associate Cloud Engineer
- Professional Cloud Architect
- Professional Data Engineer / ML Engineer

➡️ See [Certifications Guide](../09-Resources/certifications.md)

---

**Navigation:** [← Azure](azure.md) | [Next → Provider Comparison](comparison.md) | ⬅ [Back to Index](../README.md)

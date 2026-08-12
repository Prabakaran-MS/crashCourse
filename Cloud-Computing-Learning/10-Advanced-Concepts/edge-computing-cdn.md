⬅ [Back to Index](../README.md)

# Edge Computing & CDN

**Edge computing** processes data closer to where it's generated (near users/devices) instead of a distant central data center — reducing latency.

---

## 🌍 The Core Idea

```
Traditional:  User ────────────▶ Distant Data Center (high latency)
Edge:         User ──▶ Nearby Edge Node (low latency) ──▶ Cloud (if needed)
```

---

## 🧩 Key Concepts

| Concept | Description |
|---------|-------------|
| **Edge Location** | Small data center near users |
| **CDN** | Caches static content at the edge |
| **Edge Functions** | Run code at the edge (e.g., Cloudflare Workers) |
| **IoT Edge** | Process sensor data locally |
| **Latency** | Delay — edge minimizes it |

---

## 📦 CDN (Content Delivery Network)

CDNs cache content (images, videos, JS/CSS) at edge locations worldwide.

```
Origin Server (1 location)
	  │  content cached to ↓
Edge nodes: New York · London · Tokyo · Sydney · São Paulo ...
	  │
Users get content from the NEAREST node → fast!
```

### CDN Providers/Tools
| Provider | Service |
|----------|---------|
| AWS | **CloudFront** |
| Azure | **Azure CDN / Front Door** |
| GCP | **Cloud CDN** |
| Independent | **Cloudflare**, Akamai, Fastly |

---

## ⚡ Edge Compute Tools

| Tool | What It Does |
|------|--------------|
| **Cloudflare Workers** | Run JS at 300+ edge locations |
| **AWS Lambda@Edge** | Run Lambda at CloudFront edge |
| **AWS Greengrass** | IoT edge computing |
| **Azure IoT Edge** | Edge for IoT devices |
| **Akamai EdgeWorkers** | Edge functions |

---

## 💡 Real-World Examples

- **Netflix/YouTube** — video cached at edge for smooth streaming.
- **Gaming** — edge servers reduce lag.
- **Self-driving cars** — process sensor data locally (can't wait for cloud).
- **Smart factories** — analyze machine data on-site in real time.
- **E-commerce** — personalize pages at the edge for speed.

---

## ✅ Benefits

- **Ultra-low latency** — critical for real-time apps.
- **Reduced bandwidth** — less data sent to central cloud.
- **Better reliability** — works even with intermittent connectivity.
- **Improved UX** — faster page loads.

---

**Navigation:** [← Cost Optimization](cost-optimization-finops.md) | [Next → AI/ML & Big Data in Cloud](ai-ml-bigdata.md) | ⬅ [Back to Index](../README.md)

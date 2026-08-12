⬅ [Back to Index](../README.md)

# Cloud Networking

Cloud networking connects your resources securely, controls traffic, and connects your cloud to the internet and on-premises networks.

---

## 🧩 Core Concepts

| Concept | Description | AWS | Azure | GCP |
|---------|-------------|-----|-------|-----|
| **Virtual Network** | Isolated private network | VPC | VNet | VPC |
| **Subnet** | Segment of a network | Subnet | Subnet | Subnet |
| **Load Balancer** | Distributes traffic | ELB/ALB/NLB | Load Balancer | Cloud LB |
| **DNS** | Domain name resolution | Route 53 | Azure DNS | Cloud DNS |
| **CDN** | Content delivery at edge | CloudFront | Azure CDN | Cloud CDN |
| **Firewall** | Traffic filtering | Security Groups / NACL | NSG | Firewall Rules |
| **VPN / Direct Link** | Connect on-prem | Direct Connect | ExpressRoute | Interconnect |

---

## 🌐 Key Components Explained

### VPC (Virtual Private Cloud)
Your own isolated section of the cloud where you define IP ranges, subnets, and routing.

### Subnets
- **Public subnet** — has internet access (e.g., web servers).
- **Private subnet** — no direct internet (e.g., databases).

### Load Balancing
Spreads incoming traffic across multiple servers for reliability and performance.
```
		┌──▶ Server 1
Traffic ─┼──▶ Server 2   (Load Balancer distributes)
		└──▶ Server 3
```

### CDN (Content Delivery Network)
Caches content at **edge locations** near users to reduce latency.
- Example: **Netflix** uses CDNs to stream video from the nearest server.

---

## 🔒 Security in Networking

- **Security Groups** — virtual firewalls for instances.
- **Network ACLs** — subnet-level rules.
- **Private endpoints** — access services without public internet.

➡️ More on security: [Cloud Security](../07-Security/cloud-security.md)

---

## 💡 Example Architecture

```
Internet → CDN → Load Balancer → [Public Subnet: Web Servers]
									   │
								 [Private Subnet: Database]
```

---

**Navigation:** [← Containers](containers.md) | [Next → Cloud Storage](storage.md) | ⬅ [Back to Index](../README.md)

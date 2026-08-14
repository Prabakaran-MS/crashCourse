⬅ [Back to Index](../README.md)

# Cloud Networking

Cloud networking connects your resources securely, controls traffic, and connects your cloud to the internet and on-premises networks.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| VPC / VNet | Your private network in the cloud | A Virtual Private Cloud (VPC), called a Virtual Network (VNet) in Azure, is an isolated cloud network.<br>It is software-defined and fully configurable.<br>It uses private address ranges defined by Request for Comments (RFC) 1918.<br>It contains your compute and storage resources.<br>It controls how traffic flows.<br>*Example: an AWS VPC using the range 10.0.0.0/16.* |
| Subnets | Sections of your network | Subnets divide a network into smaller segments.<br>Public subnets allow internet access; private ones do not.<br>They are often mapped to Availability Zones (AZs).<br>Tiered apps place tiers in separate subnets.<br>This improves security and organization.<br>*Example: a web tier in a public subnet and a database tier in a private subnet.* |
| Security groups / NACLs | Firewalls for resources | Traffic is filtered by Security Groups (SGs) and Network Access Control Lists (NACLs).<br>Security Groups are stateful and attach to instances.<br>Network Access Control Lists are stateless and attach to subnets.<br>Rules allow or deny specific ports and sources.<br>They form layered network defense.<br>*Example: allowing only port 443 inbound to web servers.* |
| Load balancing | Spread traffic evenly | Load balancers distribute traffic across many targets.<br>Layer 4 balances at the transport level; Layer 7 at the application level.<br>They improve availability and scalability.<br>Health checks route around failures.<br>They enable zero-downtime scaling.<br>*Example: an AWS Application Load Balancer (ALB) routing Hypertext Transfer Protocol (HTTP) traffic across targets.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart TB
    Internet["🌐 Internet"] --> IGW["Internet Gateway"]
    IGW --> VPC["VPC (your private network)"]
    subgraph VPC
        Pub["Public Subnet<br/>(web servers)"]
        Priv["Private Subnet<br/>(databases)"]
    end
    Pub --> Priv
```

**Explanation:** Cloud networking gives you a private, walled-off network (a Virtual Private Cloud, or VPC) inside the provider. Public subnets face the internet for web servers, while private subnets hide sensitive resources like databases behind them.

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

## 🖼️ Cloud Networking Services

![AWS VPC](https://img.shields.io/badge/AWS_VPC-8C4FFF?style=for-the-badge&logo=amazonvpc&logoColor=white)
![CloudFront](https://img.shields.io/badge/CloudFront_CDN-A166FF?style=for-the-badge&logo=amazonaws&logoColor=white)
![Route 53](https://img.shields.io/badge/Route_53_DNS-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx_LB-009639?style=for-the-badge&logo=nginx&logoColor=white)

---

## 🏗️ Architecture: A Production 3-Tier Network

```mermaid
flowchart TB
    User["👥 Users"] --> DNS["🌐 Route 53 (DNS)"]
    DNS --> CDN["⚡ CloudFront (CDN edge cache)"]
    CDN --> ALB["⚖️ Application Load Balancer"]
    subgraph VPC["🔒 VPC 10.0.0.0/16"]
        subgraph PubSub["Public Subnet 10.0.1.0/24"]
            ALB
            NAT["🔀 NAT Gateway"]
        end
        subgraph PrivApp["Private Subnet 10.0.2.0/24"]
            Web1["🖥️ Web/App"] & Web2["🖥️ Web/App"]
        end
        subgraph PrivDB["Private Subnet 10.0.3.0/24"]
            DB[("🗄️ Database")]
        end
    end
    ALB --> Web1 & Web2
    Web1 --> DB
    Web1 --> NAT
```

**Explanation:** Users hit DNS → CDN → load balancer → web tier (private subnet) → database (deepest private subnet). Only the load balancer is exposed; app and DB tiers stay private, reaching the internet only via a NAT gateway for updates.

---

## 🖥️ What It Looks Like — Security Group Rules (Mockup)

```text
┌───────────────────────────────────────────────┐
│  Security Group: sg-web    (stateful firewall)     │
├───────────────────────────────────────────────┤
│  INBOUND                                          │
│   Type   Port   Source          Action           │
│   HTTPS  443    0.0.0.0/0        ✅ ALLOW         │
│   HTTP    80    0.0.0.0/0        ✅ ALLOW         │
│   SSH     22    10.0.0.0/16      ✅ ALLOW (VPC)   │
│   SSH     22    0.0.0.0/0        ❌ (never!)      │
└──────────────────────────────────────────────┘
```

---

## 🌐 Real-World Usage Example

**Netflix** runs one of the world's largest cloud networks: Route 53-style DNS routes each viewer to the nearest AWS region, its Open Connect CDN caches shows at ISPs worldwide, and load balancers spread billions of requests across auto-scaling groups. This networking design is why a 4K stream starts in under 2 seconds almost anywhere.

**Other real examples:** Cloudflare fronts ~20% of the web with CDN + DDoS protection; banks use Direct Connect/ExpressRoute for private low-latency links to the cloud.

---

## 🔍 Deep Dive — Concepts Often Missed

- **CIDR blocks & IP planning:** `/16` = 65k IPs, `/24` = 256 — plan ranges so VPCs can peer without overlap.
- **NAT Gateway costs:** private subnets reach the internet via NAT, which charges hourly + per-GB (a common surprise bill).
- **Security Group (stateful) vs NACL (stateless):** SG remembers return traffic; NACL needs explicit inbound *and* outbound rules.
- **Private endpoints / PrivateLink:** reach S3/DBs without traversing the public internet.
- **VPC peering vs Transit Gateway:** peering is 1:1; Transit Gateway is a hub for many VPCs.
- **L4 vs L7 load balancing:** L4 (NLB) is fast/TCP; L7 (ALB) understands HTTP paths/hosts for smart routing.

---

**Navigation:** [← Containers](containers.md) | [Next → Cloud Storage](storage.md) | ⬅ [Back to Index](../README.md)

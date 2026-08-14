⬅ [Back to Index](../README.md)

# 🔬 Networking — Nooks, Corners & Gotchas

The deepest, trickiest area of cloud. Master these and you're ahead of most engineers.

### 🎓 Professional (IT-Standard) Reference

| Gotcha | Layman View | Professional (IT-Standard) View + Example |
|--------|-------------|-------------------------------------------|
| CIDR overlap | Address clashes | Overlapping address ranges break network peering.<br>Classless Inter-Domain Routing (CIDR) blocks must not overlap.<br>Private ranges follow Request for Comments (RFC) 1918.<br>Overlaps cause routing conflicts.<br>Plan ranges carefully upfront.<br>*Example: 10.0.0.0/16 versus 10.1.0.0/16.* |
| SG vs NACL | Two firewall types | Security Groups (SGs) and Network Access Control Lists (NACLs) are two firewall layers.<br>Security Groups are stateful.<br>Network Access Control Lists are stateless.<br>They evaluate rules differently.<br>Both must permit the traffic.<br>*Example: a NACL needing explicit return-traffic rules.* |
| DNS/TTL | Slow to update | Domain Name System (DNS) changes propagate slowly.<br>The Time To Live (TTL) controls cache duration.<br>Long TTLs delay updates.<br>This can slow failover.<br>Lower TTLs speed changes.<br>*Example: a long TTL delaying failover.* |

---

## 🏗️ VPC Deep Dive

### VPC Components & Order of Operations
```
VPC (10.0.0.0/16)
 ├── Subnets (public / private, per-AZ)
 ├── Internet Gateway (IGW) — attach to VPC for internet
 ├── Route Tables — control traffic flow
 ├── NAT Gateway — private subnets outbound internet
 ├── Security Groups — instance firewall (stateful)
 ├── Network ACLs — subnet firewall (stateless)
 └── VPC Endpoints — private access to AWS services
```

### 🔑 Public vs Private Subnet — What Actually Makes It "Public"?
A subnet is **public** ONLY if its **route table has a route to an Internet Gateway** (`0.0.0.0/0 → igw`). That's it. The name doesn't matter.

- Instance also needs a **public IP** to be reachable.
- Private subnet reaches internet **outbound** via a **NAT Gateway** (in a public subnet).

---

## 🔥 Security Groups vs Network ACLs (Classic Interview Question!)

| Feature | Security Group | Network ACL |
|---------|----------------|-------------|
| Level | Instance | Subnet |
| State | **Stateful** (return traffic auto-allowed) | **Stateless** (must allow both directions) |
| Rules | Allow only | Allow AND Deny |
| Evaluation | All rules | Rules in **number order** (first match wins) |
| Default | Deny all inbound, allow all outbound | Allow all (default ACL) |

### ⚠️ Stateful vs Stateless — The Gotcha
- **Security Group:** allow inbound 443 → response goes out automatically. ✅
- **NACL:** allow inbound 443 → you MUST also allow **outbound ephemeral ports (1024-65535)** for the response, or it breaks! This trips up everyone.

---

## 🌐 NAT Gateway vs NAT Instance vs IGW

| Component | Purpose |
|-----------|---------|
| **Internet Gateway (IGW)** | Two-way internet for public subnets |
| **NAT Gateway** | Outbound-only internet for private subnets (managed, HA) |
| **NAT Instance** | DIY NAT on an EC2 (cheaper, but you manage it) |
| **Egress-only IGW** | IPv6 outbound-only |

⚠️ **NAT Gateway costs:** hourly charge + **per-GB data processing**. Chatty private workloads (pulling Docker images, OS updates) rack up huge bills. **Fix:** VPC endpoints for S3/ECR.

---

## 🔗 VPC Connectivity Options

| Method | Use Case |
|--------|----------|
| **VPC Peering** | Connect 2 VPCs (no transitive routing!) |
| **Transit Gateway** | Hub-and-spoke for many VPCs |
| **VPN** | Encrypted tunnel over internet to on-prem |
| **Direct Connect** | Dedicated private line to on-prem |
| **PrivateLink / Endpoints** | Private access to services w/o internet |

### ⚠️ VPC Peering Gotchas
- **Not transitive** — A↔B and B↔C does NOT give A↔C.
- **No overlapping CIDRs** — 10.0.0.0/16 can't peer with another 10.0.0.0/16.
- Must update **route tables on both sides**.

---

## ⚖️ Load Balancer Deep Dive

| Type | Layer | Use Case |
|------|-------|----------|
| **ALB (Application)** | 7 (HTTP) | Path/host routing, microservices, WebSockets |
| **NLB (Network)** | 4 (TCP/UDP) | Ultra-low latency, millions of req, static IP |
| **GWLB (Gateway)** | 3 | Deploy firewalls/appliances |
| **CLB (Classic)** | 4/7 | Legacy (avoid) |

### Load Balancer Corners
- **ALB** routes by path (`/api` → service A, `/web` → service B), host header, and headers.
- **Health checks** — unhealthy targets are removed; misconfigured checks = all-down outage.
- **Connection draining / deregistration delay** — finish in-flight requests before removing a target.
- **Sticky sessions** (session affinity) via cookies — but breaks even load distribution.
- **Cross-zone load balancing** — evenly spread across AZs (ALB: on by default; NLB: off, may cost).
- **NLB preserves source IP**; ALB does not (adds `X-Forwarded-For`).
- **Idle timeout** (default 60s) — long-poll/large-upload connections may drop.

---

## 🌍 DNS (Route 53) Deep Dive

### Record Types
| Type | Purpose |
|------|---------|
| **A** | Domain → IPv4 |
| **AAAA** | Domain → IPv6 |
| **CNAME** | Alias to another domain (NOT at zone apex!) |
| **Alias** | AWS-specific: apex → ELB/S3/CloudFront (free) |
| **MX** | Mail servers |
| **TXT** | Verification, SPF, DKIM |
| **NS** | Name servers |
| **PTR** | Reverse DNS |

### Routing Policies
| Policy | Use Case |
|--------|----------|
| **Simple** | One resource |
| **Weighted** | Split traffic % (A/B testing) |
| **Latency** | Route to lowest-latency region |
| **Failover** | Active-passive DR |
| **Geolocation** | Route by user location |
| **Geoproximity** | Route by geographic distance + bias |
| **Multivalue** | Return multiple healthy IPs |

### ⚠️ DNS Gotchas
- **CNAME can't be at the zone apex** (example.com) — use **Alias** records.
- **TTL** — high TTL means changes propagate slowly (lower it before migrations).
- **DNS propagation** isn't instant — caching at every resolver.
- **Negative caching** — NXDOMAIN responses are cached too.

---

## 🔐 TLS/SSL Corners
- **TLS termination** at the load balancer offloads crypto from servers.
- **SNI** allows multiple certs on one IP (older clients don't support it).
- **Certificate expiry** = instant outage → use **ACM auto-renewal**.
- **mTLS** (mutual TLS) — both client and server present certs (zero-trust).
- Full chain matters — missing **intermediate certs** break some clients.

---

## 💡 Networking Pro Tips
- Reserve a **/16 or larger** VPC CIDR — you can't easily resize later (can add secondary CIDRs).
- Plan subnets across **at least 2-3 AZs** for HA.
- Use **VPC Flow Logs** to debug connectivity ("why can't A reach B?").
- **Security Group referencing** — allow SG-A to talk to SG-B without hardcoding IPs.
- Keep databases in **private subnets**, never public.

---

## 🌐 Real-World War Story

A team peered two VPCs that both used `10.0.0.0/16` — the peering "succeeded" but traffic silently black-holed because of **CIDR overlap**. The fix required re-IPing an entire environment. Lesson: **plan non-overlapping CIDR ranges org-wide before you build anything.** Another classic: a service worked with a Security Group but broke behind a NACL because the NACL (stateless) blocked the ephemeral **return ports (1024–65535)**.

---

**Navigation:** [← Storage Deep Dive](storage-deep.md) | [Next → Security & IAM Deep Dive](security-iam-deep.md) | ⬅ [Back to Index](../README.md)

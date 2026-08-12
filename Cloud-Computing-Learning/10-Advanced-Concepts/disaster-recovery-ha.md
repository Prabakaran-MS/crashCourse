⬅ [Back to Index](../README.md)

# Disaster Recovery & High Availability

**High Availability (HA)** keeps systems running with minimal downtime. **Disaster Recovery (DR)** restores systems after a major failure (region outage, data loss).

---

## 📏 Key Metrics

| Metric | Meaning |
|--------|---------|
| **RTO (Recovery Time Objective)** | How long to recover (max acceptable downtime) |
| **RPO (Recovery Point Objective)** | How much data loss is acceptable (time between backups) |
| **SLA** | Guaranteed uptime (e.g., 99.99% = ~52 min/year downtime) |
| **MTTR** | Mean Time To Recovery |

### Uptime Cheat Sheet
| SLA | Downtime/Year |
|-----|---------------|
| 99% | ~3.65 days |
| 99.9% ("three nines") | ~8.76 hours |
| 99.99% ("four nines") | ~52 minutes |
| 99.999% ("five nines") | ~5 minutes |

---

## 🏗️ High Availability Techniques

| Technique | Description |
|-----------|-------------|
| **Redundancy** | Multiple copies of everything |
| **Multi-AZ** | Deploy across Availability Zones |
| **Load Balancing** | Distribute + health checks |
| **Auto-scaling** | Replace failed instances |
| **Database replication** | Standby replicas with failover |
| **Health checks** | Detect & remove unhealthy nodes |

---

## 🔥 Disaster Recovery Strategies (cheapest → priciest)

| Strategy | RTO/RPO | Description | Cost |
|----------|---------|-------------|------|
| **Backup & Restore** | Hours | Restore from backups | 💲 |
| **Pilot Light** | 10s of min | Minimal core always running | 💲💲 |
| **Warm Standby** | Minutes | Scaled-down copy always running | 💲💲💲 |
| **Multi-Site Active/Active** | ~0 | Full duplicate running live | 💲💲💲💲 |

```
Backup/Restore ──▶ Pilot Light ──▶ Warm Standby ──▶ Active/Active
   cheaper, slower recovery   ◀────────────▶   pricier, instant
```

---

## 💡 Example: Multi-Region HA Architecture

```
		Route 53 (DNS failover / geo-routing)
		┌──────────────┴──────────────┐
   Region A (Primary)            Region B (Standby)
   Load Balancer                 Load Balancer
   Auto-scaling group (multi-AZ) Auto-scaling group
   Primary Database ──replication──▶ Replica Database
```

If Region A fails, Route 53 redirects traffic to Region B.

---

## ✅ Best Practices

1. **Automate backups** and test restores regularly.
2. **Deploy across multiple AZs** at minimum.
3. **Test your DR plan** — untested DR = no DR.
4. **Use IaC** to rebuild infrastructure fast ([Terraform](../06-Tools-and-Practices/iac.md)).
5. **Monitor & alert** ([observability](../06-Tools-and-Practices/monitoring.md)).
6. Define **RTO/RPO** based on business needs.

---

**Navigation:** [← Messaging](messaging-event-driven.md) | [Next → Cost Optimization (FinOps)](cost-optimization-finops.md) | ⬅ [Back to Index](../README.md)

⬅ [Back to Index](../README.md)

# Monitoring & Observability

You can't manage what you can't measure. **Monitoring** tracks system health; **observability** helps you understand *why* something is happening.

---

## 🔭 The Three Pillars of Observability

| Pillar | What It Tracks | Example |
|--------|----------------|---------|
| **Metrics** | Numeric measurements over time | CPU %, request rate, latency |
| **Logs** | Timestamped event records | Error messages, access logs |
| **Traces** | Request flow across services | A request through microservices |

---

## 🏭 Industry Tools

| Category | Tools |
|----------|-------|
| **Metrics** | **Prometheus**, CloudWatch, Datadog |
| **Visualization** | **Grafana**, Kibana |
| **Logging** | **ELK Stack** (Elasticsearch, Logstash, Kibana), Loki, Splunk |
| **Tracing** | Jaeger, Zipkin, AWS X-Ray |
| **All-in-one (SaaS)** | **Datadog**, New Relic, Dynatrace |
| **Cloud-native** | AWS CloudWatch, Azure Monitor, Google Cloud Operations |
| **Alerting** | PagerDuty, Opsgenie, Alertmanager |

---

## 📊 Prometheus + Grafana (Popular Combo)

- **Prometheus** — collects & stores metrics (pull-based, time-series DB).
- **Grafana** — beautiful dashboards to visualize those metrics.

```
App exposes /metrics → Prometheus scrapes → Grafana dashboards → Alerts
```

### Example Prometheus Query (PromQL)
```promql
# Average CPU usage over 5 minutes
rate(container_cpu_usage_seconds_total[5m])
```

---

## 🚨 Key Metrics to Monitor (The "Four Golden Signals")

1. **Latency** — how long requests take.
2. **Traffic** — how much demand (requests/sec).
3. **Errors** — rate of failed requests.
4. **Saturation** — how "full" your system is (CPU, memory, disk).

---

## 💡 Why It Matters

- **Detect issues** before users do.
- **Debug faster** with logs & traces.
- **Optimize costs** by spotting waste.
- **Meet SLAs** (uptime guarantees).

➡️ Related: [Kubernetes](kubernetes.md) · [DevOps & CI/CD](devops-cicd.md)

---

**Navigation:** [← Kubernetes](kubernetes.md) | [Next → Cloud Security](../07-Security/cloud-security.md) | ⬅ [Back to Index](../README.md)

⬅ [Back to Index](../README.md)

# Prometheus & Grafana — In-Depth Tool Guide

The industry-standard open-source **monitoring stack**. Prometheus collects metrics; Grafana visualizes them. Concepts: [Monitoring & Observability](../06-Tools-and-Practices/monitoring.md).

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Scraping | Pull the numbers | Scraping collects metrics from targets.<br>It uses a pull model over Hypertext Transfer Protocol (HTTP).<br>Targets expose a metrics endpoint.<br>The collector gathers data on a schedule.<br>It builds time-series data.<br>*Example: Prometheus scraping `/metrics`.* |
| PromQL | Ask the data questions | The Prometheus Query Language (PromQL) queries metrics.<br>It works on time-series data.<br>It supports rates, aggregations, and filters.<br>It powers dashboards and alerts.<br>It answers performance questions.<br>*Example: `rate(http_requests_total[5m])`.* |
| Dashboards | Visual charts | Dashboards visualize metrics as charts.<br>Grafana panels read from data sources.<br>They show trends and health at a glance.<br>They combine many metrics together.<br>They aid troubleshooting.<br>*Example: a latency dashboard.* |
| Alerting | Get notified | Alerting notifies teams when things go wrong.<br>Alertmanager routes and groups alerts.<br>It reduces noise via deduplication.<br>It pages the right people.<br>It enables fast response.<br>*Example: paging on a high error rate.* |

---

## 📊 How Prometheus Works

```
Your App (exposes /metrics) ◀── Prometheus scrapes every 15s
									 │ stores in time-series DB
									 ▼
							Grafana queries & visualizes
									 │
							Alertmanager sends alerts
```

**Pull model:** Prometheus *scrapes* targets, rather than apps pushing data.

---

## ⚙️ Prometheus Configuration

`prometheus.yml`:
```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'my-app'
	static_configs:
	  - targets: ['localhost:3000']

  - job_name: 'node-exporter'
	static_configs:
	  - targets: ['localhost:9100']
```

---

## 📈 Exposing Metrics (App Side)

Example (Node.js with `prom-client`):
```javascript
const client = require('prom-client');
const counter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'status']
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
```

---

## 🔍 PromQL (Query Language)

| Query | Meaning |
|-------|---------|
| `http_requests_total` | Raw counter |
| `rate(http_requests_total[5m])` | Per-second rate over 5 min |
| `sum(rate(http_requests_total[5m])) by (status)` | Grouped by status |
| `histogram_quantile(0.95, ...)` | 95th percentile latency |
| `up` | Is the target reachable? (1/0) |
| `100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)` | CPU usage % |

---

## 🚨 Alerting Rules

```yaml
groups:
  - name: example
	rules:
	  - alert: HighErrorRate
		expr: rate(http_requests_total{status="500"}[5m]) > 0.05
		for: 5m
		labels: { severity: critical }
		annotations:
		  summary: "High error rate detected"
```
Alertmanager routes these to Slack, PagerDuty, email.

---

## 📊 Grafana

- Connect Grafana to Prometheus as a **data source**.
- Build **dashboards** with panels (graphs, gauges, tables).
- Import **community dashboards** (thousands available by ID).
- Set up **alerts** and notification channels.

### Common Exporters
| Exporter | Metrics From |
|----------|--------------|
| **node_exporter** | Server (CPU, RAM, disk) |
| **cAdvisor** | Containers |
| **blackbox_exporter** | Endpoints (uptime, latency) |
| **kube-state-metrics** | Kubernetes objects |

---

## 🏭 Alternatives / Complements

| Tool | Note |
|------|------|
| **Datadog** | All-in-one SaaS (metrics, logs, traces) |
| **ELK/EFK Stack** | Logs (Elasticsearch + Kibana) |
| **Loki** | Log aggregation (Grafana's) |
| **Jaeger** | Distributed tracing |
| **CloudWatch / Azure Monitor** | Cloud-native |

---

## ✅ Best Practices

1. Monitor the **Four Golden Signals**: latency, traffic, errors, saturation.
2. Use **labels** wisely (avoid high cardinality).
3. Set **actionable alerts** (avoid alert fatigue).
4. Combine **metrics + logs + traces** for full observability.
5. Use **recording rules** for expensive queries.

---

**Navigation:** [← CI/CD](cicd-deep-dive.md) | [Next → Cloud CLI & SDK Deep Dive](cloud-cli-deep-dive.md) | ⬅ [Back to Index](../README.md)

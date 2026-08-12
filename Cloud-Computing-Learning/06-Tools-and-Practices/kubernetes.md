⬅ [Back to Index](../README.md)

# Kubernetes & Container Orchestration

**Kubernetes (K8s)** is the industry-standard open-source system for **automating deployment, scaling, and management** of containerized applications. Created by Google, now maintained by the CNCF.

> 🚢 If [Docker](../04-Core-Technologies/containers.md) builds the ships (containers), Kubernetes is the harbor master orchestrating the whole fleet.

---

## 🤔 Why Orchestration?

Running one container is easy. Running **hundreds across many servers** — with scaling, self-healing, load balancing, and rolling updates — needs orchestration.

Kubernetes automatically:
- **Schedules** containers onto servers.
- **Scales** up/down based on load.
- **Self-heals** — restarts failed containers.
- **Load balances** traffic.
- **Rolls out** updates with zero downtime.

---

## 🧩 Core Concepts

| Concept | Description |
|---------|-------------|
| **Cluster** | Set of machines (nodes) running K8s |
| **Node** | A worker machine (VM or physical) |
| **Pod** | Smallest unit — one or more containers |
| **Deployment** | Manages replicas & updates of pods |
| **Service** | Stable network endpoint for pods |
| **Ingress** | Manages external HTTP access |
| **ConfigMap / Secret** | Configuration & sensitive data |
| **Namespace** | Virtual cluster for isolation |

### Architecture
```
┌───────────── Control Plane ─────────────┐
│  API Server │ Scheduler │ etcd │ Controller │
└──────────────────┬──────────────────────┘
		┌──────────┼──────────┐
	 Node 1     Node 2     Node 3
	[Pods]     [Pods]     [Pods]
```

---

## 💡 Example: Deployment YAML

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
	matchLabels:
	  app: web
  template:
	metadata:
	  labels:
		app: web
	spec:
	  containers:
	  - name: web
		image: my-app:1.0
		ports:
		- containerPort: 80
```

Common commands:
```bash
kubectl apply -f deployment.yaml   # deploy
kubectl get pods                   # list pods
kubectl scale deployment web-app --replicas=5
kubectl logs <pod-name>            # view logs
```

---

## 🏭 Managed Kubernetes Services

| Provider | Service |
|----------|---------|
| AWS | **EKS** |
| Azure | **AKS** |
| GCP | **GKE** (best-in-class) |
| Red Hat | **OpenShift** |

---

## 🧰 Kubernetes Ecosystem

| Purpose | Tools |
|---------|-------|
| Package management | **Helm** (charts) |
| Service mesh | **Istio**, Linkerd |
| GitOps | **ArgoCD**, Flux |
| Monitoring | **Prometheus**, **Grafana** ([details](monitoring.md)) |
| Ingress | NGINX Ingress, Traefik |

---

**Navigation:** [← Infrastructure as Code](iac.md) | [Next → Monitoring](monitoring.md) | ⬅ [Back to Index](../README.md)

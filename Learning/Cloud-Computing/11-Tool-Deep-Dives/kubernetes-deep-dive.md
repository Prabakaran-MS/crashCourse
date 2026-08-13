⬅ [Back to Index](../README.md)

# Kubernetes — In-Depth Tool Guide

Deep, practical guide to operating **Kubernetes**. For concepts, see [Kubernetes & Orchestration](../06-Tools-and-Practices/kubernetes.md).

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Control plane | The brain | The control plane manages the whole cluster.<br>It includes the Application Programming Interface (API) server and scheduler.<br>It stores state in etcd.<br>Controllers keep actual state matching desired state.<br>It makes all cluster decisions.<br>*Example: `kube-apiserver` handling requests.* |
| Workloads | Running apps | Workloads are the applications running in the cluster.<br>Deployments run stateless apps.<br>StatefulSets run stateful apps.<br>DaemonSets run one Pod per node.<br>They define how apps run and scale.<br>*Example: a StatefulSet for a database.* |
| Config & secrets | Settings storage | Config and secrets externalize app settings.<br>ConfigMaps hold non-sensitive configuration.<br>Secrets hold sensitive values.<br>They are injected into Pods.<br>They keep config out of images.<br>*Example: environment variables from a ConfigMap.* |
| Ingress | Front door | Ingress is the front door into the cluster.<br>It routes external Hypertext Transfer Protocol (HTTP) traffic.<br>It works at Layer 7 (application layer).<br>It can terminate Transport Layer Security (TLS).<br>It maps hosts and paths to services.<br>*Example: NGINX Ingress with TLS termination.* |

---

## 🧰 kubectl — Your Main Tool

```bash
kubectl get pods                    # list pods
kubectl get all                     # everything in namespace
kubectl describe pod <name>         # detailed info / events
kubectl logs -f <pod>               # stream logs
kubectl exec -it <pod> -- sh        # shell into a pod
kubectl apply -f file.yaml          # create/update from YAML
kubectl delete -f file.yaml         # delete
kubectl get pods -n <namespace>     # specific namespace
kubectl config use-context <ctx>    # switch clusters
```

---

## 📦 Core Objects with Examples

### Pod (rarely created directly)
Smallest unit — one or more containers.

### Deployment (manages Pods)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
  selector:
	matchLabels: { app: web }
  template:
	metadata:
	  labels: { app: web }
	spec:
	  containers:
	  - name: web
		image: my-app:1.0
		ports:
		- containerPort: 80
		resources:
		  requests: { cpu: "100m", memory: "128Mi" }
		  limits:   { cpu: "500m", memory: "512Mi" }
```

### Service (stable networking)
```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-svc
spec:
  selector: { app: web }
  ports:
	- port: 80
	  targetPort: 80
  type: ClusterIP   # ClusterIP | NodePort | LoadBalancer
```

### Ingress (external HTTP routing)
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
spec:
  rules:
  - host: myapp.com
	http:
	  paths:
	  - path: /
		pathType: Prefix
		backend:
		  service:
			name: web-svc
			port: { number: 80 }
```

### ConfigMap & Secret
```bash
kubectl create configmap app-config --from-literal=ENV=prod
kubectl create secret generic db-secret --from-literal=password=s3cr3t
```

---

## 🔄 Common Operations

```bash
# Scale
kubectl scale deployment web --replicas=5

# Rolling update (change image)
kubectl set image deployment/web web=my-app:2.0

# Check rollout & rollback
kubectl rollout status deployment/web
kubectl rollout undo deployment/web

# Auto-scale by CPU
kubectl autoscale deployment web --min=2 --max=10 --cpu-percent=70
```

---

## ⛵ Helm — Kubernetes Package Manager

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-db bitnami/postgresql
helm list
helm upgrade my-db bitnami/postgresql --set auth.password=newpass
helm uninstall my-db
```
Helm **charts** template your YAML for reuse across environments.

---

## 🔍 Key Concepts to Master

| Concept | Why It Matters |
|---------|----------------|
| **Requests & Limits** | Resource guarantees & caps |
| **Liveness/Readiness Probes** | Health checks for self-healing |
| **Namespaces** | Isolate environments/teams |
| **StatefulSets** | For databases (stable identity) |
| **DaemonSets** | One pod per node (agents) |
| **PersistentVolumes** | Durable storage |
| **RBAC** | Access control in the cluster |
| **HPA** | Horizontal Pod Autoscaler |

### Health Probes Example
```yaml
livenessProbe:
  httpGet: { path: /health, port: 80 }
  initialDelaySeconds: 10
readinessProbe:
  httpGet: { path: /ready, port: 80 }
```

---

## ✅ Best Practices

1. Always set **resource requests/limits**.
2. Use **liveness/readiness probes**.
3. Store config in **ConfigMaps/Secrets**, not images.
4. Use **namespaces** to separate environments.
5. Apply **RBAC** (least privilege).
6. Use **Helm** or Kustomize for templating.
7. Monitor with **Prometheus/Grafana**.
8. Don't run as root; use security contexts.

---

**Navigation:** [← Docker](docker-deep-dive.md) | [Next → Ansible Deep Dive](ansible-deep-dive.md) | ⬅ [Back to Index](../README.md)

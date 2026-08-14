⬅ [Back to Index](../README.md)

# 🔬 Kubernetes Internals — Nooks, Corners & Gotchas

Deep K8s mechanics that separate operators from experts. Heavy interview material.

### 🎓 Professional (IT-Standard) Reference

| Gotcha | Layman View | Professional (IT-Standard) View + Example |
|--------|-------------|-------------------------------------------|
| Requests/limits | Resource budgeting | Requests and limits budget resources per Pod.<br>Requests reserve guaranteed capacity.<br>Limits cap maximum usage.<br>They set the Quality of Service (QoS) class.<br>Exceeding memory triggers termination.<br>*Example: an Out Of Memory Kill (OOMKill) when the memory limit is exceeded.* |
| Probes | Health checks | Probes let Kubernetes check container health.<br>Liveness probes restart stuck containers.<br>Readiness probes gate incoming traffic.<br>Startup probes handle slow starts.<br>They keep apps reliable.<br>*Example: a readiness gate before routing traffic.* |
| Scheduling | Where Pods land | Scheduling decides which node runs a Pod.<br>Taints and tolerations repel or allow Pods.<br>Affinity rules attract Pods to nodes.<br>They isolate specialized workloads.<br>They optimize placement.<br>*Example: a Graphics Processing Unit (GPU) node taint for machine-learning Pods.* |

---

## 🏛️ Control Plane Components (Know Each One)

| Component | Role |
|-----------|------|
| **kube-apiserver** | Front door; all requests go through it |
| **etcd** | Key-value store; cluster's source of truth |
| **kube-scheduler** | Assigns pods to nodes |
| **kube-controller-manager** | Runs controllers (replication, node, etc.) |
| **cloud-controller-manager** | Cloud provider integration |

### Node Components
| Component | Role |
|-----------|------|
| **kubelet** | Agent on each node; runs pods |
| **kube-proxy** | Network rules for Services |
| **container runtime** | containerd/CRI-O runs containers |

### ⚠️ etcd Gotchas
- **etcd is the crown jewel** — lose it = lose the cluster state. Back it up!
- Only stores metadata (not container data).
- Sensitive to disk latency; needs fast SSDs.
- Secrets stored **base64-encoded, NOT encrypted** by default → enable **encryption at rest**.

---

## 🎯 Pod Scheduling Deep Dive

### How Pods Get Placed
```
Scheduler filters (can it fit?) → scores (best node?) → binds
```

### Scheduling Controls
| Mechanism | Purpose |
|-----------|---------|
| **nodeSelector** | Simple: schedule on labeled nodes |
| **Node Affinity** | Advanced rules (required/preferred) |
| **Pod Affinity/Anti-Affinity** | Co-locate or spread pods |
| **Taints & Tolerations** | Nodes repel pods unless tolerated |
| **Topology Spread** | Even distribution across zones |
| **Resource Requests** | Scheduler uses these to fit pods |

### ⚠️ Taints vs Affinity (Confusing!)
- **Taint** = node says "keep pods AWAY unless they tolerate me" (repel).
- **Node Affinity** = pod says "I WANT to be on these nodes" (attract).
- They work together: taint reserves nodes, affinity/toleration targets them.

```yaml
# Taint a node (e.g., GPU nodes)
kubectl taint nodes gpu-node dedicated=gpu:NoSchedule

# Pod tolerates it
tolerations:
- key: "dedicated"
  operator: "Equal"
  value: "gpu"
  effect: "NoSchedule"
```

---

## 📊 Resources: Requests vs Limits (Huge Gotcha Area)

| | Request | Limit |
|---|---------|-------|
| Meaning | Guaranteed minimum | Hard maximum |
| Used by | Scheduler (placement) | Runtime (enforcement) |
| CPU over limit | **Throttled** | (can't exceed) |
| Memory over limit | **OOMKilled** ☠️ | Pod killed |

### QoS Classes (Determines Eviction Order)
| Class | Condition | Evicted |
|-------|-----------|---------|
| **Guaranteed** | requests == limits | Last |
| **Burstable** | requests < limits | Middle |
| **BestEffort** | no requests/limits | First |

### ⚠️ The Deadly Gotchas
- **No memory limit** → a leaky pod can consume the whole node → cascading failures.
- **Memory limit too low** → **OOMKilled** (exit code 137) → CrashLoopBackOff.
- **CPU limits** cause throttling even when the node is idle (controversial — some teams omit CPU limits).
- **Requests too high** → wasted capacity, pods won't schedule ("Insufficient cpu").

---

## 🔁 Common Pod States & What They Mean

| State | Meaning / Cause |
|-------|-----------------|
| `Pending` | Can't schedule (no resources, taints, PVC unbound) |
| `ContainerCreating` | Pulling image, mounting volumes |
| `Running` | Healthy |
| `CrashLoopBackOff` | Container keeps crashing (bad cmd, missing config, OOM) |
| `ImagePullBackOff` | Can't pull image (wrong name, auth, rate limit) |
| `Error` | Container exited non-zero |
| `OOMKilled` | Exceeded memory limit |
| `Evicted` | Node pressure (disk/memory) |
| `Terminating` (stuck) | Finalizers or grace period issues |

### 🐞 Debug Recipe
```bash
kubectl describe pod X          # events at the bottom = gold
kubectl logs X --previous       # crashed container's logs
kubectl get events --sort-by=.lastTimestamp
```

---

## 🌐 Kubernetes Networking Corners

### Service Types
| Type | Exposure |
|------|----------|
| **ClusterIP** | Internal only (default) |
| **NodePort** | Opens a port on every node (30000-32767) |
| **LoadBalancer** | Provisions a cloud LB |
| **ExternalName** | DNS CNAME alias |

### ⚠️ Networking Gotchas
- **Pod IPs are ephemeral** — never rely on them; use Services.
- **Service → Pod** matching is by **labels** — a typo silently breaks routing (endpoints empty).
- `kubectl get endpoints svc` → empty = selector mismatch or no ready pods.
- **DNS:** `service.namespace.svc.cluster.local` — cross-namespace needs full name.
- **NetworkPolicies** are **deny-nothing by default** — you must add them; and they need a CNI that supports them (Calico, Cilium).
- **kube-proxy** modes: iptables (default) vs IPVS (faster at scale).

---

## 💾 Storage in Kubernetes

| Object | Purpose |
|--------|---------|
| **PersistentVolume (PV)** | Actual storage |
| **PersistentVolumeClaim (PVC)** | Request for storage |
| **StorageClass** | Dynamic provisioning template |
| **StatefulSet** | Stable identity + storage for stateful apps |

### ⚠️ Storage Gotchas
- **ReadWriteOnce (RWO)** — most block storage attaches to ONE node only.
- **ReadWriteMany (RWX)** needs shared FS (EFS/NFS), not EBS.
- PVCs stuck **Pending** = no matching PV or StorageClass.
- Deleting a PVC may or may not delete data (depends on **reclaimPolicy**: Retain/Delete).
- **StatefulSet** pods get stable names (`web-0`, `web-1`) and keep their PVC on reschedule.

---

## 🔧 Health Probes Deep Dive

| Probe | Failure Result |
|-------|----------------|
| **liveness** | Container **restarted** |
| **readiness** | Removed from Service endpoints (no traffic) |
| **startup** | Protects slow-starting apps from liveness kills |

### ⚠️ Probe Gotchas
- **Liveness too aggressive** → healthy-but-slow apps get killed in a restart loop.
- **No readiness probe** → traffic sent to pods that aren't ready yet (errors during rollout).
- **Startup probe** solves the "app takes 2 min to boot but liveness kills it at 30s" problem.

---

## 🚀 Rollout & Update Corners
- **RollingUpdate** (default): `maxSurge` + `maxUnavailable` control pace.
- **Recreate** strategy: kills all old pods first (downtime, but no version overlap).
- Bad rollout? `kubectl rollout undo deployment/x`.
- **PodDisruptionBudget (PDB)** — ensures min pods during voluntary disruptions (node drains).
- Changing a Deployment's **immutable selector** requires recreation.

---

## 💡 Kubernetes Pro Tips
```bash
# Why won't this pod schedule?
kubectl describe pod X | grep -A10 Events

# Resource usage right now
kubectl top pods --sort-by=memory

# Everything about a namespace
kubectl get all,cm,secret,pvc -n myns

# Temporarily run a debug pod
kubectl run tmp --rm -it --image=nicolaka/netshoot -- bash

# Watch rollout live
kubectl rollout status deploy/web -w
```

---

## 🌐 Real-World War Story

An app intermittently returned 502s — the root cause was a **missing readiness probe**, so K8s routed traffic to pods before they finished starting. Another outage came from a pod stuck `Pending` because **resource requests** exceeded any node's capacity (unschedulable). And a `CrashLoopBackOff` masked a config typo in a ConfigMap. Lesson: probes, requests/limits, and `kubectl describe`/`events` are your first three debugging stops.

---

**Navigation:** [← Containers Deep Dive](containers-deep.md) | [Next → Databases & Cost Deep Dive](databases-cost-deep.md) | ⬅ [Back to Index](../README.md)

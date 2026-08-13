⬅ [Back to Index](../README.md)

# ☸️ kubectl — Complete Cheat Sheet & Shortcuts

The definitive kubectl quick reference with pro shortcuts.

### 🎓 Professional (IT-Standard) Context

| Task | Layman View | Professional (IT-Standard) Use + Example |
|------|-------------|------------------------------------------|
| Inspect | See what's running | Inspecting shows the current state of the cluster.<br>It lists Pods, services, and nodes.<br>It provides cluster observability.<br>It helps verify deployments.<br>It is the starting point for debugging.<br>*Example: `kubectl get pods -A`.* |
| Apply | Push desired state | Applying pushes the desired state to the cluster.<br>It uses declarative manifest files.<br>It supports GitOps workflows.<br>Kubernetes reconciles toward that state.<br>It makes deployments repeatable.<br>*Example: `kubectl apply -f manifests/`.* |
| Debug | Fix problems | Debugging investigates and fixes running issues.<br>It reads logs and event details.<br>It inspects Pod status live.<br>It pinpoints failures quickly.<br>It supports incident response.<br>*Example: `kubectl logs` and `kubectl describe pod`.* |

---

## ⚡ Setup Shortcuts (Do These First!)

```bash
# Alias k=kubectl + enable completion (add to ~/.bashrc)
alias k=kubectl
source <(kubectl completion bash)
complete -o default -F __start_kubectl k

# Set a default namespace (stop typing -n every time)
kubectl config set-context --current --namespace=myns

# Super-useful env var for dry-run output
export do="--dry-run=client -o yaml"    # k run nginx --image=nginx $do
```

---

## 🔍 Viewing Resources

| Command | Purpose |
|---------|---------|
| `k get pods` | List pods |
| `k get pods -o wide` | With node & IP |
| `k get pods -A` | All namespaces |
| `k get pods -w` | Watch (live updates) |
| `k get all` | All common resources |
| `k get pods --show-labels` | Show labels |
| `k get pods -l app=web` | Filter by label |
| `k get pods --field-selector status.phase=Running` | Field filter |
| `k get pods -o yaml` | Full YAML |
| `k get pods -o jsonpath='{.items[*].metadata.name}'` | Extract fields |
| `k get pods --sort-by=.metadata.creationTimestamp` | Sort |
| `k describe pod name` | Detailed info + events |
| `k get events --sort-by=.lastTimestamp` | Cluster events |
| `k api-resources` | List all resource types |
| `k explain pod.spec.containers` | Docs for a field |

## 🛠️ Creating & Editing

| Command | Purpose |
|---------|---------|
| `k apply -f file.yaml` | Create/update |
| `k apply -f ./dir/` | Apply a folder |
| `k apply -f https://url` | Apply from URL |
| `k create deployment web --image=nginx` | Imperative create |
| `k run nginx --image=nginx` | Run a pod |
| `k edit deployment web` | Edit live |
| `k delete -f file.yaml` | Delete from file |
| `k delete pod name --grace-period=0 --force` | Force delete stuck pod |
| `k replace --force -f file.yaml` | Recreate resource |

## 🚀 Generate YAML Fast (Interview Gold!)

```bash
# Generate a Deployment YAML without applying
k create deployment web --image=nginx --dry-run=client -o yaml > deploy.yaml

# Generate a Pod
k run nginx --image=nginx $do > pod.yaml

# Generate a Service
k expose deployment web --port=80 --target-port=8080 $do

# Generate a Job / CronJob
k create job myjob --image=busybox $do -- echo hi
k create cronjob mycron --image=busybox --schedule="*/5 * * * *" $do

# Generate ConfigMap / Secret
k create configmap cfg --from-literal=key=val $do
k create secret generic sec --from-literal=pw=1234 $do
```

## 📈 Scaling & Rollouts

| Command | Purpose |
|---------|---------|
| `k scale deployment web --replicas=5` | Scale |
| `k autoscale deployment web --min=2 --max=10 --cpu-percent=70` | HPA |
| `k set image deployment/web web=nginx:1.25` | Update image |
| `k rollout status deployment/web` | Watch rollout |
| `k rollout history deployment/web` | Revision history |
| `k rollout undo deployment/web` | Rollback |
| `k rollout undo deployment/web --to-revision=2` | Rollback to specific |
| `k rollout restart deployment/web` | Restart pods |
| `k rollout pause/resume deployment/web` | Pause/resume |

## 🐞 Debugging

| Command | Purpose |
|---------|---------|
| `k logs pod` | Logs |
| `k logs -f pod` | Follow |
| `k logs pod -c container` | Specific container |
| `k logs pod --previous` | Crashed container's logs |
| `k logs -l app=web --tail=50` | Logs by label |
| `k exec -it pod -- sh` | Shell in |
| `k exec pod -- env` | One-off command |
| `k port-forward pod 8080:80` | Forward local port |
| `k port-forward svc/web 8080:80` | Forward to service |
| `k cp pod:/path ./local` | Copy files |
| `k debug pod -it --image=busybox` | Ephemeral debug container |
| `k top pod` / `k top node` | Resource usage |
| `k get pod pod -o yaml | grep -i reason` | Find failure reason |

## 🏷️ Labels, Annotations, Taints

```bash
k label pod web env=prod              # add label
k label pod web env-                  # remove label
k annotate pod web note="hello"       # annotate
k taint node n1 key=val:NoSchedule    # taint node
k cordon node n1                      # mark unschedulable
k drain node n1 --ignore-daemonsets   # evict pods for maintenance
k uncordon node n1                    # re-enable
```

## 🌐 Context & Namespace Switching

| Command | Purpose |
|---------|---------|
| `k config get-contexts` | List clusters |
| `k config use-context ctx` | Switch cluster |
| `k config current-context` | Show current |
| `k get ns` | List namespaces |
| `k config set-context --current --namespace=x` | Default namespace |

💡 Install **`kubectx`** + **`kubens`** for instant switching: `kubectx prod`, `kubens web`.

## ⚠️ Gotchas

- `k delete pod` on a Deployment-managed pod → it respawns (delete the Deployment).
- `apply` vs `create`: `apply` is idempotent; `create` fails if it exists.
- Default namespace is `default` — resources hide if you forget `-n`.
- `--force --grace-period=0` can leave orphaned resources.
- Labels drive Service→Pod selection; a typo silently breaks routing.

---

**Navigation:** [← Docker Cheat Sheet](docker-cheatsheet.md) | [Next → Terraform Cheat Sheet](terraform-cheatsheet.md) | ⬅ [Back to Index](../README.md)

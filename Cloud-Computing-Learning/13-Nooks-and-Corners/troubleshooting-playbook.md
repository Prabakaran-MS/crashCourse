⬅ [Back to Index](../README.md)

# 🚑 Troubleshooting Playbook — Common Errors & Fixes

A field guide to the errors you'll actually hit, with fast diagnosis steps. Great for on-call and interviews ("How would you debug X?").

### 🎓 Professional (IT-Standard) Reference

| Symptom | Layman View | Professional (IT-Standard) Approach + Example |
|---------|-------------|-----------------------------------------------|
| 5xx errors | App is failing | Server-side (5xx) errors mean the application is failing.<br>They signal backend or dependency issues.<br>Check logs, metrics, and traces top-down.<br>Correlate signals to find the cause.<br>Fix the failing component.<br>*Example: correlating Application Load Balancer (ALB) 5xx errors with Pod restarts.* |
| Access denied | Permission problem | Access-denied errors indicate a permission problem.<br>They come from restrictive policies.<br>Trace Identity and Access Management (IAM) policy evaluation.<br>Audit logs reveal the blocked action.<br>Adjust permissions minimally.<br>*Example: decoding an `AccessDenied` error via CloudTrail.* |
| High latency | It's slow | High latency means responses are slow.<br>The cause may be network, app, or database.<br>Isolate each layer systematically.<br>Distributed traces pinpoint the slow part.<br>Fix the identified bottleneck.<br>*Example: tracing spans to find the slow service.* |

---

## ☸️ Kubernetes Troubleshooting

### Pod won't start
| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `ImagePullBackOff` | Wrong image name/tag, no auth, rate limit | Check image, add imagePullSecrets |
| `CrashLoopBackOff` | App crashes on start | `kubectl logs X --previous` |
| `Pending` | No resources / taints / unbound PVC | `kubectl describe pod X` (events) |
| `OOMKilled` (137) | Exceeded memory limit | Raise limit or fix leak |
| `CreateContainerConfigError` | Missing ConfigMap/Secret | Create the referenced object |
| `Init:0/1` | Init container failing | Check init container logs |

```bash
# Universal first steps
kubectl describe pod X          # events at bottom
kubectl logs X --previous       # crash logs
kubectl get events --sort-by=.lastTimestamp
```

### Service has no traffic
1. `kubectl get endpoints svc` → empty? **Selector doesn't match pod labels.**
2. Pods not `Ready`? → readiness probe failing.
3. Wrong `targetPort`?
4. NetworkPolicy blocking?

---

## 🐳 Docker Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| "port already allocated" | Port in use | Change port or stop conflicting container |
| "no space left on device" | Disk full of images/volumes | `docker system prune -af --volumes` |
| Container exits immediately | No foreground process / bad CMD | Check `docker logs`, use exec form |
| "permission denied" on volume | UID mismatch | Fix ownership / user in Dockerfile |
| Can't reach other container | Default bridge, no DNS | Use a custom network |
| Build super slow | Cache busted early | Reorder Dockerfile (deps before code) |
| "cannot connect to Docker daemon" | Daemon not running / no perms | Start Docker, add user to docker group |

---

## ☁️ Cloud/AWS Troubleshooting

| Symptom | Likely Cause |
|---------|--------------|
| Can't SSH to EC2 | SG blocks 22, no public IP, wrong key, private subnet |
| 403 on S3 | Bucket policy / IAM / Block Public Access |
| Instance unreachable after stop/start | Public IP changed (use Elastic IP) |
| High latency | Wrong region, no CDN, undersized instance |
| "Access Denied" API call | Missing IAM permission (check policy + explicit deny) |
| Lambda timeout | Exceeds 15 min or downstream slow |
| RDS "too many connections" | No connection pooling |
| Sudden throttling | Service quota / API rate limit |
| Website down after deploy | Health check failing → LB removed targets |

### SSH Debug Checklist
```
1. Security Group allows port 22 from your IP?
2. Instance has a public IP (or use bastion/SSM)?
3. Correct key pair + permissions (chmod 400 key.pem)?
4. Correct username? (ubuntu, ec2-user, admin...)
5. In a public subnet with IGW route?
6. NACL allows 22 inbound + ephemeral outbound?
```

---

## 🌐 Networking Troubleshooting

```bash
# Is the host reachable?
ping host
# Is the port open?
nc -zv host 443
telnet host 443
# DNS resolving correctly?
dig domain
nslookup domain
# Trace the path
traceroute host
# What's listening locally?
ss -tulpn
lsof -i :8080
# Test HTTP
curl -v https://host
```

### "Connection refused" vs "Connection timeout"
- **Refused** = reached the host, but nothing listening on that port (app down).
- **Timeout** = never reached (firewall/SG/NACL/routing blocking).

---

## 🏗️ Terraform Troubleshooting

| Error | Fix |
|-------|-----|
| State lock stuck | `terraform force-unlock LOCK_ID` |
| "resource already exists" | `terraform import` it into state |
| Drift (manual changes) | `terraform refresh` / `plan` then reconcile |
| Provider version conflict | Pin versions, `terraform init -upgrade` |
| Cycle error | Break circular `depends_on` |
| Destroyed wrong thing | Restore from state backup / recreate |

---

## 🔐 Permission Debugging (Universal Approach)
1. **What identity** is making the call? (`aws sts get-caller-identity`)
2. **What action + resource** is denied? (read the error message).
3. Check **identity policy**, **resource policy**, **SCP**, **permission boundary**.
4. Look for an **explicit Deny** (always wins).
5. Use **IAM Policy Simulator** / Access Analyzer.

---

## 🧠 General Debugging Method (The Framework)
```
1. Reproduce — can you trigger it reliably?
2. Isolate — which layer? (network / app / config / permissions)
3. Read the logs — actual error > guessing
4. Check recent changes — what changed before it broke?
5. Bisect — narrow down (git bisect, disable components)
6. Fix root cause — not just the symptom
7. Add monitoring/alerting — catch it next time
```

💡 **Interview gold:** Always mention **"check the logs and recent changes first"** — it shows real experience.

---

**Navigation:** [← Databases & Cost Deep Dive](databases-cost-deep.md) | [Next → Final Test: Interview Questions](../14-Final-Test/interview-questions.md) | ⬅ [Back to Index](../README.md)

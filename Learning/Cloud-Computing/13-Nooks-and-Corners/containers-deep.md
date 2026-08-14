⬅ [Back to Index](../README.md)

# 🔬 Containers — Nooks, Corners & Gotchas

Deep Docker/container internals and the traps that catch people in production.

### 🎓 Professional (IT-Standard) Reference

| Gotcha | Layman View | Professional (IT-Standard) View + Example |
|--------|-------------|-------------------------------------------|
| Image bloat | Boxes too big | Image bloat makes containers slow to pull and deploy.<br>Large images waste storage and bandwidth.<br>Multi-stage builds drop build-time files.<br>Slim base images shrink the footprint.<br>Smaller images start faster.<br>*Example: a distroless or alpine base image.* |
| Root by default | Unsafe permissions | Containers run as root unless told otherwise.<br>Root access widens the attack surface.<br>Running as a non-root user is safer.<br>It limits damage from a breach.<br>It follows security best practice.<br>*Example: a `USER app` line in the Dockerfile.* |
| Ephemeral storage | Data disappears | Container storage is ephemeral by default.<br>Data is lost when the container stops.<br>Volumes persist data outside the container.<br>They survive restarts and removal.<br>They enable stateful workloads.<br>*Example: a named volume for database data.* |

---

## 🧱 Image Layers & Caching (The #1 Thing to Understand)

### How Layers Work
- Each Dockerfile instruction (`FROM`, `RUN`, `COPY`) creates a **read-only layer**.
- Layers are **cached** and **shared** between images.
- A running container adds a thin **writable layer** on top.

### ⚡ Layer Caching Rules
- Docker caches a layer if the instruction AND its inputs are unchanged.
- **Once a layer changes, ALL following layers rebuild.**
- 💡 **Order matters:** put rarely-changing steps first, frequently-changing last.

```dockerfile
# ✅ GOOD — dependencies cached separately from code
COPY package.json .
RUN npm install       # only re-runs if package.json changes
COPY . .              # code changes don't bust npm install

# ❌ BAD — any code change re-runs npm install
COPY . .
RUN npm install
```

---

## 📦 Image Size Optimization Corners

| Technique | Savings |
|-----------|---------|
| **Alpine base** | `node:18-alpine` (~50MB) vs `node:18` (~900MB) |
| **Multi-stage builds** | Ship only artifacts, not build tools |
| **Distroless** | No shell, no package manager (secure + tiny) |
| **`.dockerignore`** | Exclude node_modules, .git, tests |
| **Combine RUN** | `RUN a && b && c` = one layer |
| **Clean in same layer** | `apt-get install ... && rm -rf /var/lib/apt/lists/*` |

### ⚠️ Alpine Gotchas
- Uses **musl libc** not glibc — some binaries break (especially Python wheels, Node native modules).
- No `bash` by default (only `sh`).
- Fix DNS/timezone quirks with extra packages.

---

## 🔒 Container Security Corners

| Issue | Fix |
|-------|-----|
| Running as **root** | `USER node` — run as non-root |
| Secrets in image | Use runtime injection, BuildKit secrets |
| Vulnerable base | Scan with **Trivy**, Snyk, Grype |
| Writable filesystem | `--read-only` flag |
| Privileged containers | Never use `--privileged` unless required |
| Latent CVEs | Rebuild regularly on patched bases |

```bash
# Scan an image for vulnerabilities
trivy image myapp:1.0

# Run read-only + drop capabilities
docker run --read-only --cap-drop ALL myapp
```

### ⚠️ The `--privileged` Trap
`--privileged` gives the container near-full host access → container escape risk. Almost never needed. Use specific `--cap-add` instead.

---

## 💾 Volumes & Data Persistence Corners

| Mount Type | Description |
|------------|-------------|
| **Named volume** | Docker-managed, persists (`docker volume create`) |
| **Bind mount** | Maps host path (dev, live-reload) |
| **tmpfs** | In-memory, ephemeral (secrets) |

### ⚠️ Volume Gotchas
- `docker rm` does NOT delete named volumes → they leak disk (`docker volume prune`).
- Bind-mounting over a directory **hides** the image's files there.
- Volume permissions/UID mismatches cause "permission denied" (host UID ≠ container UID).
- **Anonymous volumes** accumulate silently from `VOLUME` instructions.

---

## 🌐 Container Networking Corners

| Network Mode | Behavior |
|--------------|----------|
| **bridge** (default) | Private network, port mapping needed |
| **host** | Shares host network (no isolation, no `-p`) |
| **none** | No network |
| **custom bridge** | Containers resolve each other by name (DNS) |

### ⚠️ Networking Gotchas
- Default bridge does NOT give name resolution — use a **custom network** for DNS between containers.
- `localhost` inside a container = the container itself, NOT the host (use `host.docker.internal` on Docker Desktop).
- Publishing a port (`-p`) exposes it on ALL host interfaces (0.0.0.0) by default — bind to `127.0.0.1:8080:80` to limit.

---

## 🎛️ Runtime Signals & Lifecycle

- Containers should handle **SIGTERM** for graceful shutdown (Docker sends it, then SIGKILL after 10s).
- **PID 1 problem:** your app runs as PID 1 and may not reap zombies or forward signals → use `--init` or `tini`.
- `CMD` vs `ENTRYPOINT`:
  - `ENTRYPOINT` = the executable (fixed).
  - `CMD` = default arguments (overridable).
  - Use exec form `["cmd"]` (not shell form) so signals reach the process.

```dockerfile
ENTRYPOINT ["node"]
CMD ["server.js"]   # docker run img app.js → runs "node app.js"
```

---

## 🏭 Registry Corners
- **`latest` is a lie** — it's just a default tag, not "newest". Pin real versions.
- **Image digests** (`@sha256:...`) are immutable — tags can move.
- Private registries (ECR/ACR/GCR) need **auth** (`docker login`).
- **Rate limits** — Docker Hub throttles anonymous pulls (100/6h) → use a mirror/cache.
- **Multi-arch images** — `linux/amd64` vs `linux/arm64` (M1 Macs, Graviton) — build with `buildx`.

---

## 💡 Container Pro Tips
```bash
# Multi-arch build & push
docker buildx build --platform linux/amd64,linux/arm64 -t app --push .

# Inspect image layers & sizes
docker history --no-trunc myapp

# Use BuildKit for faster, secret-safe builds
DOCKER_BUILDKIT=1 docker build .

# Copy files out of an image without running it
docker create --name tmp myapp && docker cp tmp:/app/out . && docker rm tmp
```

---

## 🌐 Real-World War Story

A production container kept getting **OOMKilled** (exit code 137) at 3 AM — the memory *limit* was set too low for a traffic spike, so Kubernetes killed and restarted it in a crash loop. Separately, a 1.2GB image (full OS + build tools) slowed every deploy until a multi-stage build cut it to 80MB. Lesson: set realistic memory limits, watch exit codes (137=OOM, 143=SIGTERM), and keep images tiny.

---

**Navigation:** [← Security & IAM Deep Dive](security-iam-deep.md) | [Next → Kubernetes Internals Deep Dive](kubernetes-deep.md) | ⬅ [Back to Index](../README.md)

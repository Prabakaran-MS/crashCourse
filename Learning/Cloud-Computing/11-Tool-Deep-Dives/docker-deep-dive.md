⬅ [Back to Index](../README.md)

# Docker — In-Depth Tool Guide

**Docker** packages apps into portable **containers**. This guide goes deep on daily usage.

➡️ Concept intro: [Containers & Docker](../04-Core-Technologies/containers.md)

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Dockerfile | Build recipe | A Dockerfile is the recipe to build an image.<br>It lists declarative build instructions.<br>Each instruction adds to the image.<br>It makes builds repeatable.<br>It is version-controlled with code.<br>*Example: `FROM node:20` plus `COPY` plus `CMD`.* |
| Layers & cache | Reuse build steps | Layers and cache speed up image builds.<br>Each instruction creates an immutable layer.<br>Unchanged layers are reused from cache.<br>Good ordering maximizes cache hits.<br>It shortens rebuild times.<br>*Example: ordering `COPY package.json` first.* |
| Volumes | Persistent storage | Volumes persist data beyond a container's life.<br>They store data outside the container layer.<br>They survive container restarts and removal.<br>They enable stateful workloads.<br>They separate data from code.<br>*Example: `-v data:/var/lib/db`.* |
| Compose | Multi-container apps | Docker Compose runs multi-container applications.<br>It defines services in one declarative file.<br>It starts a full local stack at once.<br>It wires networking between services.<br>It simplifies local development.<br>*Example: `docker compose up` for an app plus database.* |

---

## 🏗️ Docker Architecture

```
Docker CLI ──▶ Docker Daemon ──▶ Containers
					│
			  Images ← Registry (Docker Hub / ECR)
```

- **Image** — read-only template (layers).
- **Container** — running instance of an image.
- **Registry** — stores images.
- **Volume** — persistent storage.
- **Network** — connects containers.

---

## 📝 Writing a Dockerfile (Best Practices)

```dockerfile
# 1. Use a small, specific base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files FIRST (layer caching)
COPY package*.json ./
RUN npm ci --only=production

# 4. Copy the rest of the code
COPY . .

# 5. Run as non-root user (security)
USER node

# 6. Document the port
EXPOSE 3000

# 7. Define the start command
CMD ["node", "server.js"]
```

💡 **Layer caching:** copy dependency files before source code so `npm install` only re-runs when dependencies change.

---

## 🏋️ Multi-Stage Builds (Smaller Images)

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Production stage — only ship the built output
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```
Result: a tiny final image without build tools.

---

## 🛠️ Essential Commands

| Command | Purpose |
|---------|---------|
| `docker build -t app:1.0 .` | Build an image |
| `docker run -d -p 3000:3000 app:1.0` | Run detached, map port |
| `docker ps` / `docker ps -a` | List running / all containers |
| `docker logs -f <id>` | Follow logs |
| `docker exec -it <id> sh` | Shell into a container |
| `docker stop/start/rm <id>` | Manage lifecycle |
| `docker images` | List images |
| `docker rmi <image>` | Remove image |
| `docker system prune` | Clean up unused resources |

---

## 🔗 Docker Compose (Multi-Container Apps)

Define a whole stack in `docker-compose.yml`:
```yaml
services:
  web:
	build: .
	ports:
	  - "3000:3000"
	depends_on:
	  - db
  db:
	image: postgres:16
	environment:
	  POSTGRES_PASSWORD: secret
	volumes:
	  - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```
```bash
docker compose up -d    # start everything
docker compose down     # stop & remove
```

---

## 💾 Volumes & Networks

```bash
# Persist data beyond container life
docker volume create mydata
docker run -v mydata:/data app

# Custom network so containers talk by name
docker network create appnet
docker run --network appnet --name db postgres
```

---

## ✅ Best Practices

1. Use **small base images** (alpine, distroless).
2. **Multi-stage builds** to shrink images.
3. **Don't run as root**.
4. Use **`.dockerignore`** (exclude node_modules, .git).
5. **One process per container**.
6. **Scan images** for vulnerabilities (Trivy).
7. Never bake **secrets** into images.
8. Tag with versions, not just `latest`.

---

**Navigation:** [← Terraform](terraform-deep-dive.md) | [Next → Kubernetes Deep Dive](kubernetes-deep-dive.md) | ⬅ [Back to Index](../README.md)

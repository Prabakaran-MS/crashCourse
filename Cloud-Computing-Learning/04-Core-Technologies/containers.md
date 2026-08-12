⬅ [Back to Index](../README.md)

# Containers & Docker

A **container** packages an application with all its dependencies (libraries, config) into a single, portable unit that runs consistently across any environment.

> 📦 "It works on my machine" → with containers, it works *everywhere*.

---

## 🆚 Containers vs VMs

```
   Virtual Machines            Containers
 ┌──────┬──────┬──────┐    ┌──────┬──────┬──────┐
 │ App  │ App  │ App  │    │ App  │ App  │ App  │
 │ Bins │ Bins │ Bins │    │ Bins │ Bins │ Bins │
 │ OS   │ OS   │ OS   │    ├──────┴──────┴──────┤
 ├──────┴──────┴──────┤    │ Container Engine   │
 │    Hypervisor      │    │   Host OS          │
 │    Host OS         │    ├────────────────────┤
 │    Hardware        │    │   Hardware         │
 └────────────────────┘    └────────────────────┘
```

Containers **share the host OS kernel** → lightweight, fast, efficient.

---

## 🐳 Docker — The Standard Tool

**Docker** is the most popular containerization platform.

### Key Concepts
- **Image** — a blueprint/template for a container.
- **Container** — a running instance of an image.
- **Dockerfile** — instructions to build an image.
- **Registry** — stores images (Docker Hub, AWS ECR, GCR).

### Example Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

### Common Commands
```bash
docker build -t my-app .        # build image
docker run -p 3000:3000 my-app  # run container
docker ps                       # list running containers
docker push my-app              # push to registry
```

---

## 🏭 Industry Tools

| Purpose | Tools |
|---------|-------|
| Container runtime | **Docker**, Podman, containerd |
| Image registry | Docker Hub, **AWS ECR**, **GCR**, **Azure ACR** |
| Orchestration | **Kubernetes**, Docker Swarm, ECS |
| Security scanning | Trivy, Clair, Snyk |

---

## 💡 Why Containers Matter

- **Portability** — run anywhere (laptop, cloud, on-prem).
- **Consistency** — same environment in dev/test/prod.
- **Efficiency** — lightweight, fast startup.
- **Microservices** — perfect for breaking apps into small services.

➡️ Managing many containers at scale? See [Kubernetes](../06-Tools-and-Practices/kubernetes.md).

---

**Navigation:** [← Virtualization](virtualization.md) | [Next → Cloud Networking](networking.md) | ⬅ [Back to Index](../README.md)

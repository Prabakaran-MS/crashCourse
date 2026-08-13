⬅ [Back to Index](../README.md)

# Containers & Docker

A **container** packages an application with all its dependencies (libraries, config) into a single, portable unit that runs consistently across any environment.

> 📦 "It works on my machine" → with containers, it works *everywhere*.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Container | A portable app box | A container packages an app with its dependencies into one unit.<br>It uses Operating System (OS)-level virtualization sharing the host kernel.<br>Isolation uses Linux namespaces and control groups (cgroups).<br>Containers are lighter and faster than Virtual Machines (VMs).<br>They run consistently across environments.<br>*Example: a Docker container running the Nginx web server.* |
| Image | The app's blueprint | An image is an immutable, layered template for containers.<br>It is built from a set of instructions in a Dockerfile.<br>Each layer is cached to speed up rebuilds.<br>Images are versioned with tags.<br>Containers are running instances of images.<br>*Example: building an image with `docker build -t app:1.0 .`.* |
| Registry | Store for app boxes | A registry stores and distributes container images.<br>It follows the Open Container Initiative (OCI) standard.<br>Images are pushed and pulled by version.<br>Registries can be public or private.<br>They integrate with Continuous Integration/Continuous Delivery (CI/CD).<br>*Example: Docker Hub or Amazon Elastic Container Registry (ECR).* |
| Isolation | Apps don't interfere | Containers isolate processes and resources from each other.<br>Isolation is lighter than a full Virtual Machine (VM).<br>Each container has its own filesystem and network view.<br>Resource limits prevent interference.<br>Many containers run per host efficiently.<br>*Example: many containers on one host with separate namespaces.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart TB
    subgraph Host["One Server / OS"]
        Engine["Container Engine (Docker)"]
        Engine --> C1["App A + libs"]
        Engine --> C2["App B + libs"]
        Engine --> C3["App C + libs"]
    end
```

**Explanation:** A container packages an app together with everything it needs to run, then shares the host operating system with other containers. This makes containers tiny and fast to start compared to full virtual machines — like lunchboxes stacked on one shared table.

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

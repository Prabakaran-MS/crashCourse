⬅ [Back to Index](../README.md)

# 🐳 Docker — Complete Cheat Sheet & Shortcuts

Every command, flag, and shortcut you'll use daily. Bookmark this.

---

## 🔑 Image Commands

| Command | Purpose |
|---------|---------|
| `docker build -t name:tag .` | Build image from Dockerfile |
| `docker build --no-cache -t name .` | Build ignoring cache |
| `docker build --target stage .` | Build a specific multi-stage target |
| `docker images` / `docker image ls` | List images |
| `docker rmi image` | Remove image |
| `docker image prune -a` | Remove all unused images |
| `docker tag src:tag dest:tag` | Retag image |
| `docker pull image:tag` | Download image |
| `docker push repo/image:tag` | Upload image |
| `docker history image` | Show image layers |
| `docker inspect image` | Full JSON metadata |
| `docker save -o img.tar image` | Export image to tar |
| `docker load -i img.tar` | Import image from tar |

## 🏃 Container Lifecycle

| Command | Purpose |
|---------|---------|
| `docker run image` | Run container |
| `docker run -d image` | Detached (background) |
| `docker run -it image sh` | Interactive + TTY |
| `docker run --rm image` | Auto-remove on exit |
| `docker run -p 8080:80 image` | Map host:container port |
| `docker run -e KEY=val image` | Set env var |
| `docker run --env-file .env image` | Load env file |
| `docker run -v vol:/path image` | Mount volume |
| `docker run --name myapp image` | Name the container |
| `docker run --network net image` | Attach network |
| `docker run --restart unless-stopped image` | Restart policy |
| `docker run --memory 512m --cpus 1.5 image` | Resource limits |
| `docker ps` / `docker ps -a` | List running / all |
| `docker stop/start/restart id` | Lifecycle |
| `docker kill id` | Force stop (SIGKILL) |
| `docker rm id` / `docker rm -f id` | Remove / force remove |
| `docker rm $(docker ps -aq)` | Remove ALL containers |

## 🔍 Inspect & Debug

| Command | Purpose |
|---------|---------|
| `docker logs id` | View logs |
| `docker logs -f --tail 100 id` | Follow last 100 lines |
| `docker exec -it id sh` | Shell into running container |
| `docker exec id env` | Run one-off command |
| `docker inspect id` | Full metadata |
| `docker inspect -f '{{.State.Status}}' id` | Format-filtered output |
| `docker stats` | Live resource usage |
| `docker top id` | Processes in container |
| `docker port id` | Port mappings |
| `docker diff id` | Filesystem changes |
| `docker cp id:/path ./local` | Copy files out |
| `docker cp ./local id:/path` | Copy files in |

## 🧹 Cleanup Shortcuts (Reclaim Disk!)

| Command | Purpose |
|---------|---------|
| `docker system df` | Show disk usage |
| `docker system prune` | Remove stopped containers, unused nets/images |
| `docker system prune -a --volumes` | 🔥 Nuke everything unused |
| `docker container prune` | Remove stopped containers |
| `docker volume prune` | Remove unused volumes |
| `docker builder prune` | Clear build cache |

## 🔗 Docker Compose

| Command | Purpose |
|---------|---------|
| `docker compose up -d` | Start stack detached |
| `docker compose down` | Stop & remove |
| `docker compose down -v` | Also remove volumes |
| `docker compose ps` | List services |
| `docker compose logs -f svc` | Follow a service's logs |
| `docker compose exec svc sh` | Shell into a service |
| `docker compose build` | Build images |
| `docker compose up -d --scale web=3` | Scale a service |
| `docker compose restart svc` | Restart one service |
| `docker compose config` | Validate & view merged config |

## 💡 Pro Shortcuts & Tricks

```bash
# Stop & remove ALL containers in one line
docker rm -f $(docker ps -aq)

# Remove dangling (untagged) images
docker image prune

# Get container IP
docker inspect -f '{{.NetworkSettings.IPAddress}}' id

# Follow logs of last-created container
docker logs -f $(docker ps -lq)

# Run and clean up immediately (throwaway)
docker run --rm -it alpine sh

# Build with build args
docker build --build-arg VERSION=1.2 -t app .

# Prune everything older than 24h
docker system prune -a --filter "until=24h"
```

### Handy Bash Aliases (add to ~/.bashrc)
```bash
alias d='docker'
alias dc='docker compose'
alias dps='docker ps'
alias dpsa='docker ps -a'
alias dimg='docker images'
alias dexec='docker exec -it'
alias dlogs='docker logs -f'
alias dprune='docker system prune -af --volumes'
alias dstopall='docker stop $(docker ps -q)'
alias drmall='docker rm -f $(docker ps -aq)'
```

## ⚠️ Gotchas

- `latest` tag is NOT automatic "newest" — it's just a default tag.
- Deleting a container does NOT delete its named volumes.
- `docker run` creates a NEW container each time; use `start` to reuse.
- `-p 80:80` = host:container (easy to swap by mistake).
- `COPY` invalidates cache for all following layers when files change.
- Containers are ephemeral — data is lost unless in a volume.

---

**Navigation:** [Next → kubectl Cheat Sheet](kubectl-cheatsheet.md) | ⬅ [Back to Index](../README.md)

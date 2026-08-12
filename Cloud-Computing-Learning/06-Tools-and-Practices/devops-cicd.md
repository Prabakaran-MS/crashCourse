⬅ [Back to Index](../README.md)

# DevOps & CI/CD

**DevOps** is a culture and set of practices that unite **development (Dev)** and **operations (Ops)** to deliver software faster and more reliably. **CI/CD** automates building, testing, and deploying code.

---

## 🔄 CI/CD Explained

| Term | Meaning |
|------|---------|
| **CI — Continuous Integration** | Developers merge code frequently; automated builds & tests run on each commit |
| **CD — Continuous Delivery** | Code is always in a deployable state; deployment is one click |
| **CD — Continuous Deployment** | Every passing change auto-deploys to production |

### Pipeline Flow
```
Code Commit → Build → Test → Package → Deploy to Staging → Deploy to Production
	(git)     (compile) (unit/  (Docker)   (auto)             (auto/manual)
						integration)
```

---

## 🏭 Industry CI/CD Tools

| Tool | Notes |
|------|-------|
| **Jenkins** | Open-source, highly extensible (plugins) |
| **GitHub Actions** | Native to GitHub, YAML workflows |
| **GitLab CI/CD** | Built into GitLab |
| **CircleCI** | Cloud-based, fast |
| **Azure DevOps** | Microsoft's full ALM suite |
| **AWS CodePipeline** | AWS-native CI/CD |
| **ArgoCD** | GitOps for Kubernetes |
| **Travis CI** | Simple, popular for open source |

---

## 💡 Example: GitHub Actions Workflow

```yaml
name: CI/CD Pipeline
on:
  push:
	branches: [ main ]
jobs:
  build-and-deploy:
	runs-on: ubuntu-latest
	steps:
	  - uses: actions/checkout@v4
	  - name: Install dependencies
		run: npm install
	  - name: Run tests
		run: npm test
	  - name: Build Docker image
		run: docker build -t my-app .
	  - name: Deploy
		run: ./deploy.sh
```

---

## 🧩 The DevOps Toolchain

| Stage | Tools |
|-------|-------|
| Plan | Jira, Trello |
| Code | Git, GitHub, GitLab |
| Build | Maven, Gradle, npm, Docker |
| Test | JUnit, Selenium, Jest |
| Release | Jenkins, GitHub Actions, ArgoCD |
| Deploy | [Kubernetes](kubernetes.md), [Terraform](iac.md) |
| Operate | [Prometheus, Grafana](monitoring.md) |
| Monitor | Datadog, ELK, CloudWatch |

---

## 🌟 DevOps Principles

- **Automate everything** — builds, tests, deployments, infrastructure.
- **Continuous feedback** — monitoring & alerts.
- **Infrastructure as Code** — see [IaC](iac.md).
- **Collaboration** — break down Dev/Ops silos.

---

**Navigation:** [Next → Infrastructure as Code](iac.md) | ⬅ [Back to Index](../README.md)

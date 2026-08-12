⬅ [Back to Index](../README.md)

# CI/CD Pipelines — In-Depth Tool Guide

Practical guide to building pipelines with **GitHub Actions**, **Jenkins**, and **GitLab CI**. For concepts see [DevOps & CI/CD](../06-Tools-and-Practices/devops-cicd.md).

---

## 🐙 GitHub Actions

Workflows live in `.github/workflows/*.yml`.

### Full Build → Test → Docker → Deploy
```yaml
name: CI/CD
on:
  push:
	branches: [ main ]
  pull_request:

jobs:
  test:
	runs-on: ubuntu-latest
	steps:
	  - uses: actions/checkout@v4
	  - uses: actions/setup-node@v4
		with: { node-version: 18 }
	  - run: npm ci
	  - run: npm test

  build-and-push:
	needs: test
	runs-on: ubuntu-latest
	steps:
	  - uses: actions/checkout@v4
	  - name: Log in to Docker Hub
		uses: docker/login-action@v3
		with:
		  username: ${{ secrets.DOCKER_USER }}
		  password: ${{ secrets.DOCKER_TOKEN }}
	  - name: Build & push
		run: |
		  docker build -t myorg/app:${{ github.sha }} .
		  docker push myorg/app:${{ github.sha }}

  deploy:
	needs: build-and-push
	runs-on: ubuntu-latest
	environment: production
	steps:
	  - run: echo "Deploying ${{ github.sha }}"
```

**Key concepts:** `on` (triggers), `jobs`, `steps`, `needs` (dependencies), `secrets`, `environment`, matrix builds.

---

## 🏗️ Jenkins (Declarative Pipeline)

`Jenkinsfile` in repo root:
```groovy
pipeline {
  agent any
  environment {
	IMAGE = "myorg/app:${env.BUILD_NUMBER}"
  }
  stages {
	stage('Checkout') { steps { checkout scm } }
	stage('Build')    { steps { sh 'npm ci && npm run build' } }
	stage('Test')     { steps { sh 'npm test' } }
	stage('Docker')   { steps { sh "docker build -t $IMAGE ." } }
	stage('Deploy')   {
	  when { branch 'main' }
	  steps { sh './deploy.sh' }
	}
  }
  post {
	failure { echo 'Pipeline failed!' }
	success { echo 'Deployed successfully.' }
  }
}
```

---

## 🦊 GitLab CI

`.gitlab-ci.yml`:
```yaml
stages: [build, test, deploy]

build:
  stage: build
  script:
	- npm ci
	- npm run build

test:
  stage: test
  script:
	- npm test

deploy:
  stage: deploy
  script:
	- ./deploy.sh
  only:
	- main
```

---

## 🚀 GitOps with ArgoCD

**GitOps** = Git is the single source of truth for deployments.
```
Developer pushes YAML to Git
	   │
   ArgoCD detects change
	   │
   Auto-syncs to Kubernetes cluster
```
- Declarative, auditable, easy rollback (just `git revert`).
- Tools: **ArgoCD**, **Flux**.

---

## ✅ CI/CD Best Practices

1. **Fail fast** — run quick tests first.
2. **Keep pipelines fast** (cache dependencies).
3. **Store secrets securely** (never in code).
4. **Use environments** with approvals for prod.
5. **Immutable artifacts** — build once, promote same image.
6. **Automate rollbacks**.
7. **Run security scans** (SAST, image scanning) in pipeline.
8. **Notify** on failures (Slack, email).

---

**Navigation:** [← Ansible](ansible-deep-dive.md) | [Next → Prometheus & Grafana Deep Dive](monitoring-deep-dive.md) | ⬅ [Back to Index](../README.md)

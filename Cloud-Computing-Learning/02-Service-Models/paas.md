⬅ [Back to Index](../README.md)

# PaaS — Platform as a Service

**PaaS** provides a ready-to-use platform for developers to **build, run, and manage applications** without worrying about the underlying infrastructure (servers, OS, patching).

> 🏢 Think of PaaS as renting a **furnished apartment** — just move in your stuff (code) and start living.

---

## 🎛️ What You Manage vs Provider

| Layer | PaaS: Who Manages? |
|-------|--------------------|
| Applications | **You** |
| Data | **You** |
| Runtime | Provider |
| OS | Provider |
| Virtualization / Servers / Storage / Network | Provider |

You focus **only on code and data**.

---

## 🏭 Industry Examples / Tools

| Provider | PaaS Service |
|----------|--------------|
| AWS | **Elastic Beanstalk**, **App Runner** |
| Azure | **App Service** |
| GCP | **App Engine**, **Cloud Run** |
| Others | **Heroku**, **Vercel**, **Netlify**, **Render**, Red Hat OpenShift |

---

## 💡 Example Scenario

A developer wants to deploy a Node.js app without managing servers:
1. Push code to **Heroku** or **Azure App Service**.
2. The platform automatically provisions servers, runtime, scaling, and load balancing.
3. Developer just runs `git push` — the app is live.

---

## 🚀 Quick Example: Deploy to Heroku

```bash
heroku create my-app
git push heroku main
# App is live at https://my-app.herokuapp.com
```

---

## ✅ When to Use PaaS

- You want to **focus on coding**, not infrastructure.
- Rapid development & deployment of web/mobile apps.
- Teams without dedicated ops/sysadmin resources.

## ⚖️ Pros & Cons

| Pros | Cons |
|------|------|
| Fast development & deployment | Less control over environment |
| No server management | Potential vendor lock-in |
| Built-in scaling & load balancing | Limited to supported runtimes |

---

**Related:** [IaaS](iaas.md) · [SaaS](saas.md) · [Serverless](faas-serverless.md)

**Navigation:** [← IaaS](iaas.md) | [Next → SaaS](saas.md) | ⬅ [Back to Index](../README.md)

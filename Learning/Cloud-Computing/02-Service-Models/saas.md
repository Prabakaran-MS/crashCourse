⬅ [Back to Index](../README.md)

# SaaS — Software as a Service

**SaaS** delivers **fully functional software applications** over the internet, on a subscription basis. The provider manages *everything* — you just use the app via a browser or client.

> 🏨 Think of SaaS as staying in a **hotel** — everything is managed for you; you just enjoy the service.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Delivery | Use it in a browser | Software as a Service (SaaS) delivers ready-made applications online.<br>Access is through a browser with no local installation.<br>The app is multi-tenant, serving many customers at once.<br>Traffic travels over Hypertext Transfer Protocol Secure (HTTPS).<br>Updates roll out centrally to all users.<br>*Example: Salesforce or Microsoft 365 used entirely in a browser.* |
| Billing | Pay a subscription | SaaS uses subscription or per-seat licensing.<br>Customers pay monthly or annually per user.<br>Costs scale with the number of users or usage.<br>There is no hardware or maintenance cost.<br>Plans are easy to upgrade or downgrade.<br>*Example: a monthly per-user Slack plan billed by seat count.* |
| Identity | One login everywhere | Enterprise SaaS integrates centralized identity.<br>Single Sign-On (SSO) lets users log in once for many apps.<br>Federation uses standards like Security Assertion Markup Language (SAML) or OpenID Connect (OIDC).<br>Multi-Factor Authentication (MFA) adds extra security.<br>Access is centrally managed and revoked.<br>*Example: Okta Single Sign-On (SSO) into Google Workspace.* |
| Data & compliance | They keep it safe | The vendor manages availability, backups, and security.<br>They hold certifications proving compliance.<br>Standards include System and Organization Controls (SOC) 2 and International Organization for Standardization (ISO) 27001.<br>Uptime is guaranteed by a Service Level Agreement (SLA).<br>Customers rely on the provider's controls.<br>*Example: a vendor offering a 99.9% uptime SLA.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart LR
    User["👤 You"] -->|"Browser / App"| App["☁️ Ready-to-Use Software"]
    App --> V1["Provider runs the app"]
    App --> V2["Provider runs servers and OS"]
    App --> V3["Provider handles updates and backups"]
    User --> D["You manage only your data and settings"]
```

**Explanation:** With Software as a Service (SaaS) the provider runs the entire stack and you simply use the finished app through a browser. It is like staying in a hotel — everything is handled for you, and you only look after your own belongings (your data and settings).

---

## 🎛️ What You Manage vs Provider

| Layer | SaaS: Who Manages? |
|-------|--------------------|
| Applications | Provider |
| Data | Provider (you own your data) |
| Runtime / OS / Servers / Everything | Provider |

You manage **only your data and user settings**.

---

## 🏭 Industry Examples / Tools

| Category | SaaS Products |
|----------|---------------|
| Email & Productivity | **Google Workspace**, **Microsoft 365** |
| CRM | **Salesforce**, HubSpot |
| Communication | **Slack**, **Zoom**, Microsoft Teams |
| Storage | **Dropbox**, Google Drive |
| Dev Tools | **GitHub**, Jira, Notion |
| Streaming | **Netflix**, Spotify |

---

## 💡 Example Scenario

A company needs email for 500 employees:
- Instead of running mail servers, they subscribe to **Google Workspace**.
- Google handles servers, security, updates, spam filtering, storage.
- Employees just log in via browser.

---

## 🖼️ SaaS Products You Use Every Day

![Google Workspace](https://img.shields.io/badge/Google_Workspace-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Microsoft 365](https://img.shields.io/badge/Microsoft_365-D83B01?style=for-the-badge&logo=microsoftoffice&logoColor=white)
![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Zoom](https://img.shields.io/badge/Zoom-0B5CFF?style=for-the-badge&logo=zoom&logoColor=white)
![Dropbox](https://img.shields.io/badge/Dropbox-0061FF?style=for-the-badge&logo=dropbox&logoColor=white)

---

## 🏗️ Architecture: Multi-Tenant SaaS

```mermaid
flowchart TB
    T1["🏢 Customer A"] -->|HTTPS + SSO| App["☁️ SaaS Application (Shared)"]
    T2["🏢 Customer B"] -->|HTTPS + SSO| App
    T3["🏢 Customer C"] -->|HTTPS + SSO| App
    App --> Auth["🔑 Identity / SSO (SAML/OIDC)"]
    App --> Logic["⚙️ Application Logic (Multi-Tenant)"]
    Logic --> DB["🗄️ Shared DB<br/>(Tenant-Isolated Rows)"]
    Logic --> Files["💾 Object Storage"]
    Vendor["🏭 Vendor Ops: updates · backups · security · SLA"] -.runs everything.-> App
```

**Explanation:** One application instance serves *all* customers, keeping each tenant's data logically isolated. Users log in via **SSO**, and the vendor runs every layer — updates roll out to everyone at once. You manage only your data and settings.

---

## 🖥️ What It Looks Like — SaaS Admin Console (Mockup)

```text
┌──────────────────────────────────────────────────────────┐
│  ⚙️  Workspace Admin › Users            🔍   admin@acme ▾ │
├──────────────────────────────────────────────────────────┤
│  Active users: 487 / 500 seats     [ + Add user ]        │
│  ─────────────────────────────────────────────────────   │
│  ☑ SSO (SAML) enabled          Provider: Okta           │
│  ☑ MFA required                                          │
│  ☑ Auto-updates                Version: (managed)        │
│  Storage: 3.2 TB / 5 TB   ▇▇▇▇▇▇▁▁▁▁                     │
│                                                          │
│  Plan: Business  ·  $12/user/mo  ·  Renews annually      │
└──────────────────────────────────────────────────────────┘
```

---

## 🔍 Deep Dive — Concepts Often Missed

### 🏢 Tenancy Models
- **Single-tenant:** dedicated instance per customer (more isolation, higher cost).
- **Multi-tenant:** shared app, isolated data (cheaper, standard for SaaS).
- **Isolation strategies:** shared DB with tenant IDs → separate schemas → separate databases (increasing isolation & cost).

### 🔑 Identity & Access (Enterprise SaaS Essentials)
- **SSO** (SAML/OIDC), **SCIM** for auto user provisioning/deprovisioning, **MFA**, and **RBAC** are must-haves for business adoption.

### 🗄️ Who Owns the Data?
- **You own your data; the vendor holds it.** Always check **data export**, **retention**, and **residency** terms — and beware exit/lock-in when a vendor makes export hard.

### 📊 SaaS Business Metrics (good to know)
- **MRR/ARR** (recurring revenue), **churn**, **per-seat vs usage-based** pricing — these shape how the product evolves.

### ⚠️ Common Gotchas
- **Shadow IT:** employees signing up for unsanctioned SaaS → security/compliance risk.
- **Integration limits:** you're bound to the vendor's APIs and update cadence.

---

## ✅ When to Use SaaS

- You need ready-to-use software with **zero maintenance**.
- Standard business needs (email, CRM, collaboration).
- Fast onboarding, predictable subscription cost.

## ⚖️ Pros & Cons

| Pros | Cons |
|------|------|
| Zero maintenance | Least control / customization |
| Accessible anywhere | Data lives with vendor |
| Predictable subscription pricing | Dependent on provider uptime |
| Automatic updates | Possible integration limits |

---

## 📊 Service Model Comparison (Pizza Analogy 🍕)

| Model | Analogy |
|-------|---------|
| **On-Premise** | Make pizza from scratch at home |
| **IaaS** | Buy dough, add your own toppings & bake |
| **PaaS** | Order takeout, eat at home |
| **SaaS** | Dine at a restaurant — everything served |

---

**Related:** [IaaS](iaas.md) · [PaaS](paas.md) · [Serverless](faas-serverless.md)

**Navigation:** [← PaaS](paas.md) | [Next → FaaS / Serverless](faas-serverless.md) | ⬅ [Back to Index](../README.md)

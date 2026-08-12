⬅ [Back to Index](../README.md)

# Identity & Access Management (IAM)

**IAM** controls **who** (identity) can access **what** (resources) and **what they can do** (permissions). It's the foundation of cloud security.

---

## 🧩 Core IAM Concepts

| Concept | Description |
|---------|-------------|
| **User** | An individual identity (person or app) |
| **Group** | A collection of users with shared permissions |
| **Role** | A set of permissions assumed temporarily |
| **Policy** | A document defining permissions (allow/deny) |
| **Permission** | A specific action allowed on a resource |
| **MFA** | Multi-factor authentication for extra security |

---

## 🔑 Key Principles

### 1. Least Privilege
Grant **only** the permissions needed — nothing more.

### 2. Authentication vs Authorization
- **Authentication** — proving *who you are* (login, MFA).
- **Authorization** — what *you're allowed to do* (permissions).

### 3. Roles over long-lived credentials
Use temporary **roles** instead of permanent access keys where possible.

---

## 💡 Example: AWS IAM Policy (JSON)

```json
{
  "Version": "2012-10-17",
  "Statement": [
	{
	  "Effect": "Allow",
	  "Action": ["s3:GetObject"],
	  "Resource": "arn:aws:s3:::my-bucket/*"
	}
  ]
}
```
This policy allows **read-only** access to objects in `my-bucket` — nothing else.

---

## 🏭 IAM Across Providers

| Provider | Service |
|----------|---------|
| AWS | **IAM**, IAM Identity Center |
| Azure | **Entra ID** (formerly Azure AD) |
| GCP | **Cloud IAM** |

Related: **SSO** (Single Sign-On), **OAuth 2.0**, **SAML**, **OpenID Connect**.

---

## ✅ IAM Best Practices

1. Enable **MFA** for all users, especially admins.
2. Use **groups** to assign permissions, not individual users.
3. Apply **least privilege** — start with zero, add as needed.
4. Rotate credentials regularly.
5. Never use the **root/admin** account for daily tasks.
6. Audit permissions regularly (remove unused access).
7. Use **roles** for applications & services.

---

**Navigation:** [← Cloud Security](cloud-security.md) | [Next → Compliance](compliance.md) | ⬅ [Back to Index](../README.md)

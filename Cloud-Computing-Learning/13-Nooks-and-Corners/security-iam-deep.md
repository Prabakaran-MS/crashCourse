⬅ [Back to Index](../README.md)

# 🔬 Security & IAM — Nooks, Corners & Gotchas

The subtle security details that cause breaches and interview stumbles.

---

## 🔑 IAM Policy Evaluation Logic (Critical!)

### The Evaluation Order
```
1. Explicit DENY?  → DENY (always wins, overrides everything)
2. Explicit ALLOW? → ALLOW
3. Neither?        → Implicit DENY (default deny)
```

**Golden rule:** An explicit **Deny** ALWAYS beats an explicit **Allow**. Default is deny.

### IAM Policy Anatomy
```json
{
  "Version": "2012-10-17",
  "Statement": [{
	"Sid": "AllowS3Read",
	"Effect": "Allow",
	"Action": ["s3:GetObject"],
	"Resource": "arn:aws:s3:::bucket/*",
	"Condition": {
	  "IpAddress": { "aws:SourceIp": "10.0.0.0/16" },
	  "Bool": { "aws:SecureTransport": "true" }
	}
  }]
}
```

### Policy Types (Know the Difference!)
| Type | Attached To | Purpose |
|------|-------------|---------|
| **Identity-based** | User/group/role | What the identity can do |
| **Resource-based** | Resource (S3 bucket, SQS) | Who can access this resource |
| **Permission boundary** | User/role | Max permissions cap |
| **SCP (Service Control Policy)** | Org/account | Org-wide guardrails |
| **Session policy** | Temporary session | Further restrict |

### ⚠️ IAM Gotchas
- **SCPs don't grant permissions** — they only set the *maximum* allowed.
- **Permission boundary + identity policy** — effective perms = **intersection** of both.
- **Role trust policy** — separate from permissions; defines *who can assume* the role.
- `*` in policies = dangerous over-permissioning.
- **NotAction / NotResource** — confusing inverse logic, use carefully.
- IAM is **eventually consistent** — new policies take seconds to apply.

---

## 👤 Roles vs Users — Deep Corners

| | User | Role |
|---|------|------|
| Credentials | Permanent (access keys) | Temporary (STS tokens) |
| Best for | Humans, legacy | Apps, services, cross-account |
| Rotation | Manual | Automatic |

### Assume Role Flow
```
Identity → sts:AssumeRole → Temporary credentials (expire in 1-12h)
```
- **Instance profiles** attach roles to EC2 (no keys on disk!).
- **IRSA** (IAM Roles for Service Accounts) — K8s pods assume roles.
- **Cross-account access** — role in Account B trusts Account A.

### 💡 Never Do These
- ❌ Hardcode access keys in code/images/git.
- ❌ Use the **root account** for daily work (only for account setup + billing).
- ❌ Attach `AdministratorAccess` broadly.
- ❌ Skip MFA on privileged accounts.

---

## 🔐 Encryption Deep Dive

### KMS (Key Management Service)
| Concept | Meaning |
|---------|---------|
| **CMK / KMS key** | Customer master key |
| **Envelope encryption** | Data key encrypts data; CMK encrypts the data key |
| **AWS-managed keys** | Auto-created, free-ish |
| **Customer-managed keys** | You control rotation, policy ($1/mo/key) |

### ⚠️ Encryption Gotchas
- **KMS API rate limits** — high-throughput apps can get throttled (use data key caching).
- Can't **decrypt** data if you delete the KMS key (7-30 day waiting period on deletion).
- **EBS/S3 encryption** can't be removed in-place — must copy to a new encrypted resource.
- Encryption in transit ≠ at rest — you need **both**.
- **Envelope encryption** is why KMS scales — it never sees your bulk data.

---

## 🛡️ Common Attack Vectors & Defenses

| Threat | Defense |
|--------|---------|
| Public S3 bucket | Block Public Access, bucket policies |
| Leaked credentials | IAM roles, secret rotation, GitGuardian scanning |
| Over-permissioned IAM | Least privilege, Access Analyzer |
| SSRF → metadata theft | **IMDSv2** (token-required) |
| DDoS | Shield, WAF, CloudFront, rate limiting |
| SQL injection | WAF, parameterized queries |
| Open security groups (0.0.0.0/0) | Restrict CIDRs, use bastion/SSM |
| Unencrypted data | KMS, TLS everywhere |

### 🕳️ The Metadata Endpoint Attack (Famous!)
- EC2 metadata at `169.254.169.254` can leak IAM credentials via **SSRF**.
- **IMDSv1** = simple GET (vulnerable). **IMDSv2** = requires a session token (safe).
- The Capital One breach (2019) exploited exactly this. **Always enforce IMDSv2.**

---

## 🔒 Secrets Management Corners
- **Never** put secrets in: env vars in plaintext, code, Docker images, Git.
- Use: **Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager**.
- Secrets Manager supports **automatic rotation** (Lambda-backed).
- **Parameter Store** (SSM) — cheaper for config; SecureString for secrets.
- Mount secrets as **files** or inject at runtime, not baked into builds.

---

## 🏛️ Zero Trust & Best Practices
- **Zero Trust** — "never trust, always verify"; authenticate every request.
- **Defense in depth** — layered security (network + identity + data + app).
- **Least privilege** — start with nothing, add as needed.
- **MFA everywhere**, especially admins.
- **Audit everything** — CloudTrail, Config, access logs.
- **Rotate credentials** regularly.
- **Encrypt** at rest and in transit.
- **Separate accounts/subscriptions** per environment (blast radius).

---

**Navigation:** [← Networking Deep Dive](networking-deep.md) | [Next → Containers Deep Dive](containers-deep.md) | ⬅ [Back to Index](../README.md)

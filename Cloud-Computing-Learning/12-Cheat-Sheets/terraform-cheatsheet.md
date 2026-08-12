⬅ [Back to Index](../README.md)

# 🏗️ Terraform — Complete Cheat Sheet & Shortcuts

Every command, flag, and HCL trick.

---

## 🔄 Core Workflow Commands

| Command | Purpose |
|---------|---------|
| `terraform init` | Initialize (download providers/modules) |
| `terraform init -upgrade` | Upgrade providers |
| `terraform init -reconfigure` | Reconfigure backend |
| `terraform plan` | Preview changes |
| `terraform plan -out=tfplan` | Save plan to file |
| `terraform apply` | Apply changes |
| `terraform apply tfplan` | Apply a saved plan |
| `terraform apply -auto-approve` | Skip confirmation |
| `terraform apply -target=resource` | Apply one resource |
| `terraform destroy` | Destroy all |
| `terraform destroy -target=res` | Destroy one resource |
| `terraform refresh` | Sync state with real infra |

## 🔍 Inspection & Formatting

| Command | Purpose |
|---------|---------|
| `terraform fmt` | Format code |
| `terraform fmt -recursive` | Format all subfolders |
| `terraform validate` | Validate syntax |
| `terraform show` | Show current state |
| `terraform output` | Show outputs |
| `terraform output -json` | Machine-readable |
| `terraform graph` | Dependency graph (DOT) |
| `terraform version` | Version info |
| `terraform providers` | List providers |

## 🗃️ State Management (Advanced)

| Command | Purpose |
|---------|---------|
| `terraform state list` | List resources in state |
| `terraform state show res` | Show a resource |
| `terraform state mv a b` | Rename/move in state |
| `terraform state rm res` | Remove from state (no destroy) |
| `terraform state pull` | Download state |
| `terraform state push` | Upload state |
| `terraform import res id` | Import existing resource |
| `terraform force-unlock LOCK_ID` | Break a stuck lock |

## 🧰 Workspaces (Environments)

```bash
terraform workspace new dev
terraform workspace new prod
terraform workspace list
terraform workspace select prod
terraform workspace show
# Use in code: terraform.workspace
```

## 🧩 HCL Quick Reference

```hcl
# Variables
variable "region" {
  type    = string
  default = "us-east-1"
  validation {
	condition     = can(regex("^us-", var.region))
	error_message = "Must be a US region."
  }
}

# Locals (computed values)
locals {
  name_prefix = "${var.env}-app"
  common_tags = { Project = "demo", Env = var.env }
}

# Count (create N copies)
resource "aws_instance" "web" {
  count         = 3
  instance_type = "t3.micro"
  tags = { Name = "web-${count.index}" }
}

# for_each (map/set iteration)
resource "aws_s3_bucket" "b" {
  for_each = toset(["logs", "data", "backups"])
  bucket   = "myapp-${each.key}"
}

# Conditional expression
instance_type = var.env == "prod" ? "t3.large" : "t3.micro"

# Dynamic block
dynamic "ingress" {
  for_each = var.ports
  content {
	from_port = ingress.value
	to_port   = ingress.value
	protocol  = "tcp"
  }
}
```

## 🔧 Meta-Arguments & Functions

| Feature | Example |
|---------|---------|
| `depends_on` | `depends_on = [aws_iam_role.r]` |
| `lifecycle` | `create_before_destroy = true` |
| `lifecycle` | `prevent_destroy = true` |
| `lifecycle` | `ignore_changes = [tags]` |
| Functions | `join`, `split`, `lookup`, `merge`, `length`, `element`, `coalesce`, `try`, `cidrsubnet` |

```hcl
# Common functions
merge(local.common_tags, { Name = "web" })
lookup(var.amis, var.region, "default-ami")
cidrsubnet("10.0.0.0/16", 8, 2)   # → 10.0.2.0/24
try(var.optional, "fallback")
```

## 💡 Pro Shortcuts & Tricks

```bash
# Target only what changed (faster)
terraform apply -target=module.vpc

# See what will change without color (for CI logs)
terraform plan -no-color

# Auto-approve in pipelines
terraform apply -auto-approve

# Replace (recreate) a single resource — modern taint
terraform apply -replace="aws_instance.web"

# JSON plan output for tooling/policy checks
terraform show -json tfplan > plan.json

# Console for testing expressions interactively
terraform console
> merge({a=1}, {b=2})
```

### Handy Aliases
```bash
alias tf='terraform'
alias tfi='terraform init'
alias tfp='terraform plan'
alias tfa='terraform apply'
alias tfd='terraform destroy'
alias tff='terraform fmt -recursive'
```

## 🗂️ .gitignore Essentials

```
.terraform/
*.tfstate
*.tfstate.*
*.tfvars        # if they contain secrets
crash.log
```

## ⚠️ Gotchas

- **Never edit `.tfstate` by hand** — use `state` commands.
- State can contain **secrets in plaintext** — encrypt the backend.
- `count` vs `for_each`: removing a middle `count` item re-indexes everything → use `for_each` for stable identities.
- `terraform destroy` deletes EVERYTHING in state — be careful with targets.
- Provider version drift breaks builds — always **pin versions**.
- Concurrent applies corrupt state — always use **remote state + locking**.
- Changing an immutable field forces resource **recreation** (downtime).

---

**Navigation:** [← kubectl Cheat Sheet](kubectl-cheatsheet.md) | [Next → Git Cheat Sheet](git-cheatsheet.md) | ⬅ [Back to Index](../README.md)

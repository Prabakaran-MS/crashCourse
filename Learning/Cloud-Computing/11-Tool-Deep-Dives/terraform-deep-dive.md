⬅ [Back to Index](../README.md)

# Terraform — In-Depth Tool Guide

**Terraform** (by HashiCorp) is the most popular **Infrastructure as Code** tool. It's declarative, multi-cloud, and uses **HCL** (HashiCorp Configuration Language).

➡️ Concept intro: [Infrastructure as Code](../06-Tools-and-Practices/iac.md)

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Providers | Plugins per cloud | Providers are plugins for each platform.<br>They map HashiCorp Configuration Language (HCL) to cloud Application Programming Interfaces (APIs).<br>Each cloud has its own provider.<br>They translate config into real resources.<br>They are declared in the configuration.<br>*Example: a `provider "aws"` block.* |
| Plan/apply | Preview then build | Plan and apply drive Terraform changes.<br>Plan previews changes before making them.<br>It diffs desired state against actual state.<br>Apply then executes the approved changes.<br>It prevents surprise modifications.<br>*Example: running `terraform plan` before `apply`.* |
| Remote state | Shared memory of infra | Remote state stores Terraform's record of infrastructure.<br>It is shared safely across a team.<br>State locking prevents concurrent conflicts.<br>It tracks what has been created.<br>It enables collaboration.<br>*Example: a Simple Storage Service (S3) backend with a DynamoDB lock.* |
| Modules | Reusable blueprints | Modules package reusable infrastructure.<br>They are parameterized and versioned.<br>They avoid repeating configuration.<br>They enforce consistent patterns.<br>They can be shared via a registry.<br>*Example: a registry network module.* |

---

## 🔧 Installation

```bash
# macOS
brew install terraform
# Windows
choco install terraform
# Verify
terraform version
```

---

## 🔄 The Terraform Workflow

```
Write (.tf files) → init → plan → apply → (destroy)
```

| Command | What It Does |
|---------|--------------|
| `terraform init` | Downloads providers & sets up backend |
| `terraform plan` | Previews changes (dry run) |
| `terraform apply` | Creates/updates infrastructure |
| `terraform destroy` | Deletes all managed resources |
| `terraform fmt` | Formats code |
| `terraform validate` | Checks syntax |
| `terraform state list` | Lists managed resources |

---

## 🧱 Core Building Blocks

### 1. Providers — which cloud
```hcl
terraform {
  required_providers {
	aws = {
	  source  = "hashicorp/aws"
	  version = "~> 5.0"
	}
  }
}

provider "aws" {
  region = "us-east-1"
}
```

### 2. Resources — what to create
```hcl
resource "aws_instance" "web" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t3.micro"
  tags = { Name = "web-server" }
}
```

### 3. Variables — parameterize
```hcl
variable "instance_type" {
  description = "EC2 instance size"
  type        = string
  default     = "t3.micro"
}
# use it: instance_type = var.instance_type
```

### 4. Outputs — export values
```hcl
output "public_ip" {
  value = aws_instance.web.public_ip
}
```

### 5. Data Sources — read existing resources
```hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  filter {
	name   = "name"
	values = ["ubuntu/images/*22.04*"]
  }
}
```

---

## 🗃️ State Management (Important!)

Terraform tracks resources in a **state file** (`terraform.tfstate`).

- **Never edit it by hand.**
- **Remote backend** for teams (locking prevents conflicts):
```hcl
terraform {
  backend "s3" {
	bucket         = "my-tf-state"
	key            = "prod/terraform.tfstate"
	region         = "us-east-1"
	dynamodb_table = "tf-locks"   # state locking
  }
}
```

---

## 📦 Modules — Reusable Components

```hcl
module "vpc" {
  source     = "terraform-aws-modules/vpc/aws"
  version    = "5.0.0"
  name       = "my-vpc"
  cidr       = "10.0.0.0/16"
}
```
Reuse the same module across dev/staging/prod.

---

## ✅ Best Practices

1. Use **remote state** with locking for teams.
2. **Never commit secrets** — use variables + Vault/Secrets Manager.
3. Organize with **modules** and workspaces (dev/prod).
4. Always run `plan` before `apply`.
5. Use **`.gitignore`** for `.tfstate` and `.terraform/`.
6. Pin provider versions.
7. Run `terraform fmt` and `validate` in CI.

---

## 🆚 Terraform vs Alternatives

| Tool | Note |
|------|------|
| **Terraform** | Multi-cloud, declarative, huge ecosystem |
| **Pulumi** | Real languages (Python, TS) |
| **CloudFormation** | AWS-only |
| **Bicep/ARM** | Azure-only |

---

## 🖼️ Terraform Ecosystem

![Terraform](https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_Provider-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Terraform Cloud](https://img.shields.io/badge/Terraform_Cloud-844FBA?style=for-the-badge&logo=terraform&logoColor=white)
![Infracost](https://img.shields.io/badge/Infracost-EC5C40?style=for-the-badge&logo=terraform&logoColor=white)

---

## 🖥️ What It Looks Like — terraform plan (Mockup)

```text
$ terraform plan
Terraform will perform the following actions:

  # aws_instance.web will be created
  + resource "aws_instance" "web" {
      + ami           = "ami-0abc123"
      + instance_type = "t3.micro"
      + public_ip     = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
Changes to Outputs:
  + public_ip = (known after apply)
```

---

## 🌐 Real-World Usage Example

**Uber, Slack, and Airbnb** manage tens of thousands of cloud resources entirely in Terraform. A team change flows through a pull request: `terraform plan` shows the diff, a peer reviews it, then CI runs `apply`. This makes infrastructure auditable, repeatable, and recoverable — an entire region can be rebuilt from code after a disaster.

---

## 🔍 Deep Dive — Concepts Often Missed

- **State is the source of truth:** corrupt/lost state = Terraform loses track of resources. Use remote state + locking.
- **Drift:** manual console changes diverge from code — `terraform plan` detects it; avoid "ClickOps."
- **`plan` before `apply`, always** — review the diff, especially `destroy`/`replace` lines.
- **Modules** enforce consistency across dev/staging/prod; pin versions.
- **`terraform destroy` is irreversible** — guard prod with policies (Sentinel/OPA).
- **Secrets never in state plaintext:** encrypt the backend; state can contain sensitive values.
- **`count` vs `for_each`:** `for_each` avoids index-shift churn when list items change.

---

**Navigation:** [Next → Docker Deep Dive](docker-deep-dive.md) | ⬅ [Back to Index](../README.md)

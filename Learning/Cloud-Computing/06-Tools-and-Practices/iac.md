⬅ [Back to Index](../README.md)

# Infrastructure as Code (IaC)

**IaC** means managing and provisioning infrastructure (servers, networks, databases) through **code and configuration files** instead of manual clicking in a console.

> 📜 Your entire cloud setup becomes version-controlled, repeatable, and automated.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Declarative IaC | Describe the end state | Declarative Infrastructure as Code (IaC) defines the desired end state.<br>The tool figures out how to reach that state.<br>You describe what you want, not the steps.<br>It reconciles real infrastructure to match.<br>This makes deployments predictable.<br>*Example: Terraform HashiCorp Configuration Language (HCL) defining a Virtual Private Cloud (VPC) and Elastic Compute Cloud (EC2) instance.* |
| State management | Remember what exists | IaC tools track real resources in a state file.<br>State maps configuration to actual infrastructure.<br>It should be stored remotely and locked for teams.<br>This prevents conflicts and drift.<br>State is critical to safe operations.<br>*Example: Terraform state stored in Simple Storage Service (S3) with DynamoDB locking.* |
| Idempotency | Run it safely many times | Idempotency means repeated runs yield the same result.<br>Applying config twice does not cause duplicate changes.<br>The tool only changes what differs from desired state.<br>This makes automation safe to re-run.<br>It reduces the risk of errors.<br>*Example: running `ansible-playbook` repeatedly to converge configuration.* |
| Modules/reuse | Reusable building blocks | Modules package reusable infrastructure components.<br>They are parameterized and versioned.<br>Teams share them to enforce standards.<br>This reduces duplication and errors.<br>It speeds up new deployments.<br>*Example: a shared Terraform network module reused across projects.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart LR
    Code["📄 Infrastructure Code<br/>(e.g. Terraform)"] --> Plan["Plan / Preview"]
    Plan --> Apply["Apply"]
    Apply --> Cloud["☁️ Real Cloud Resources"]
```

**Explanation:** Infrastructure as Code (IaC) means describing your servers and networks in text files instead of clicking buttons. You preview the changes, apply them, and the tool builds the real resources — making setups repeatable, reviewable, and version-controlled.

---

## 🌟 Why IaC?

| Benefit | Explanation |
|---------|-------------|
| **Consistency** | Same setup every time — no manual errors |
| **Version control** | Track changes in Git, roll back easily |
| **Speed** | Provision entire environments in minutes |
| **Repeatability** | Recreate dev/test/prod identically |
| **Documentation** | The code *is* the documentation |

---

## 🏭 Industry IaC Tools

| Tool | Type | Notes |
|------|------|-------|
| **Terraform** | Declarative, multi-cloud | Most popular; HCL language |
| **AWS CloudFormation** | Declarative, AWS-only | JSON/YAML templates |
| **Azure ARM / Bicep** | Declarative, Azure-only | Bicep is friendlier syntax |
| **Pulumi** | Uses real languages (Python, TS, Go) | Programmer-friendly |
| **Ansible** | Config management + provisioning | Agentless, YAML |
| **Chef / Puppet** | Config management | Mature, enterprise |

---

## 📜 Declarative vs Imperative

- **Declarative** ("what") — you describe the *desired end state*; the tool figures out how. (Terraform, CloudFormation)
- **Imperative** ("how") — you specify the exact steps. (scripts, some Ansible)

---

## 💡 Example: Terraform (create an AWS EC2 instance)

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web_server" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t3.micro"

  tags = {
	Name = "MyWebServer"
  }
}
```

Run it:
```bash
terraform init      # initialize
terraform plan      # preview changes
terraform apply     # create infrastructure
terraform destroy   # tear it all down
```

---

## 🔧 Related Practice: Configuration Management

Once servers exist, tools like **Ansible** configure them:
```yaml
- hosts: webservers
  tasks:
	- name: Install nginx
	  apt:
		name: nginx
		state: present
```

---

## 🧩 IaC + CI/CD = GitOps

Store infrastructure code in Git → changes are reviewed, tested, and auto-applied. Tools: **ArgoCD**, **Flux**, **Atlantis**.

➡️ Related: [DevOps & CI/CD](devops-cicd.md) · [Kubernetes](kubernetes.md)

---

## 🖼️ IaC Toolchain

![Terraform](https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white)
![CloudFormation](https://img.shields.io/badge/CloudFormation-FF4F8B?style=for-the-badge&logo=amazonaws&logoColor=white)
![Bicep](https://img.shields.io/badge/Bicep-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Pulumi](https://img.shields.io/badge/Pulumi-8A3391?style=for-the-badge&logo=pulumi&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white)

---

## 🏗️ Architecture: The Terraform Workflow

```mermaid
flowchart LR
    Code["📜 main.tf (HCL)"] --> Init["terraform init"]
    Init --> Plan["terraform plan"]
    Plan --> Review{"👀 PR review"}
    Review -->|approve| Apply["terraform apply"]
    Apply --> Cloud["☁️ Real Resources"]
    Apply --> State[("🗃️ State file<br/>(S3 + lock)")]
    State -.tracks.-> Cloud
```

**Explanation:** You write desired state in code, `plan` previews the diff, a teammate reviews the PR, then `apply` makes it real — recording everything in a locked remote state file so the team never conflicts or drifts.

---

## 🖥️ What It Looks Like — terraform plan (Mockup)

```text
$ terraform plan
Terraform will perform the following actions:
  # aws_instance.web_server will be created
  + resource "aws_instance" "web_server" {
      + ami           = "ami-0abc..."
      + instance_type = "t3.micro"
      + tags          = { "Name" = "MyWebServer" }
    }
Plan: 1 to add, 0 to change, 0 to destroy.
```

---

## 🌐 Real-World Usage Example

**Uber** manages its enormous multi-cloud infrastructure with Terraform, defining thousands of resources as code so any environment can be recreated identically and reviewed like software. When Uber spins up a new region, it's a `terraform apply` — not weeks of manual console clicking — giving consistency, auditability, and instant rollback.

**Other real examples:** Netflix, Slack, and Coinbase codify infra with Terraform; GitHub uses IaC to manage its fleet reproducibly.

---

## 🔍 Deep Dive — Concepts Often Missed

- **State is sacred:** store remotely (S3+DynamoDB lock / Terraform Cloud); never commit it — it can contain secrets.
- **Drift:** manual console changes desync from code; `terraform plan` detects it — always change via code.
- **Modules & DRY:** parameterized modules enforce standards and cut duplication across teams.
- **Provisioning (Terraform) vs config mgmt (Ansible):** create infra vs configure what's inside it — often used together.
- **`plan` before `apply`, always:** the preview is your safety net against accidental destroys.
- **Policy-as-code:** Sentinel/OPA block non-compliant infra before it's created.

---

**Navigation:** [← DevOps & CI/CD](devops-cicd.md) | [Next → Kubernetes](kubernetes.md) | ⬅ [Back to Index](../README.md)

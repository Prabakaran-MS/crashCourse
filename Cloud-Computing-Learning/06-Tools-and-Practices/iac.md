⬅ [Back to Index](../README.md)

# Infrastructure as Code (IaC)

**IaC** means managing and provisioning infrastructure (servers, networks, databases) through **code and configuration files** instead of manual clicking in a console.

> 📜 Your entire cloud setup becomes version-controlled, repeatable, and automated.

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

**Navigation:** [← DevOps & CI/CD](devops-cicd.md) | [Next → Kubernetes](kubernetes.md) | ⬅ [Back to Index](../README.md)

⬅ [Back to Index](../README.md)

# Cloud CLI & SDK — In-Depth Guide

Command-line tools let you automate everything. Every serious cloud engineer lives in the CLI.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| CLI | Type commands to the cloud | A Command-Line Interface (CLI) controls the cloud from the terminal.<br>It gives scriptable access to cloud Application Programming Interfaces (APIs).<br>It automates repetitive tasks.<br>It works well in scripts and pipelines.<br>It is faster than clicking consoles.<br>*Example: `aws s3 ls`, `az vm list`, or `gcloud compute instances list`.* |
| Profiles/auth | Log in securely | Profiles and authentication manage secure access.<br>Named profiles store separate credential sets.<br>Single Sign-On (SSO) enables centralized login.<br>They switch between accounts easily.<br>They keep access organized and safe.<br>*Example: running `aws configure sso`.* |
| SDK | Cloud from your code | A Software Development Kit (SDK) wraps cloud APIs in code.<br>It provides language-native libraries.<br>It simplifies calling cloud services.<br>It handles authentication and retries.<br>It integrates cloud into applications.<br>*Example: the boto3 library (Python) for Amazon Web Services (AWS).* |
| Scripting | Automate tasks | Scripting combines the CLI with shell logic.<br>It automates multi-step operations.<br>It loops over many resources.<br>It reduces manual, error-prone work.<br>It makes tasks repeatable.<br>*Example: a bash loop tagging many resources.* |

---

## ☁️ AWS CLI

### Setup
```bash
aws configure          # enter access key, secret, region
aws sts get-caller-identity   # verify who you are
```

### Common Commands
```bash
# EC2
aws ec2 describe-instances
aws ec2 run-instances --image-id ami-123 --instance-type t3.micro

# S3
aws s3 ls
aws s3 cp file.txt s3://my-bucket/
aws s3 sync ./local s3://my-bucket/   # sync a folder

# IAM
aws iam list-users

# Output formatting
aws ec2 describe-instances --query 'Reservations[].Instances[].InstanceId' --output table
```

💡 Use `--query` (JMESPath) to filter and `--output json|table|text`.

---

## 🔷 Azure CLI

```bash
az login
az group create --name myRG --location eastus
az vm create --resource-group myRG --name myVM --image Ubuntu2204
az vm list --output table
az storage account list
```

---

## 🔴 Google Cloud CLI (gcloud)

```bash
gcloud init
gcloud auth login
gcloud compute instances create my-vm --zone=us-central1-a
gcloud compute instances list
gcloud storage buckets create gs://my-bucket
```

---

## 🧑‍💻 SDKs (Programmatic Access)

Use SDKs to control the cloud from code.

### Python (boto3 for AWS)
```python
import boto3

s3 = boto3.client('s3')
s3.upload_file('local.txt', 'my-bucket', 'remote.txt')

ec2 = boto3.resource('ec2')
for instance in ec2.instances.all():
	print(instance.id, instance.state['Name'])
```

### JavaScript (AWS SDK v3)
```javascript
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
const client = new S3Client({ region: "us-east-1" });
const data = await client.send(new ListBucketsCommand({}));
console.log(data.Buckets);
```

---

## 🔐 Authentication Best Practices

1. **Never hardcode credentials** in code.
2. Use **IAM roles** for EC2/Lambda (no keys needed).
3. Use **environment variables** or credential files locally.
4. Use **short-lived tokens** (STS, `aws sso login`).
5. Rotate access keys regularly.
6. Grant **least privilege**.

---

## 🛠️ Handy CLI Ecosystem Tools

| Tool | Purpose |
|------|---------|
| **aws-vault** | Securely store AWS creds |
| **jq** | Parse JSON output |
| **kubectl** | Kubernetes CLI |
| **eksctl** | Create EKS clusters easily |
| **saml2aws** | SSO login to AWS |

---

## 🖼️ Cloud CLI & SDK Tools

![AWS CLI](https://img.shields.io/badge/AWS_CLI-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![Azure CLI](https://img.shields.io/badge/Azure_CLI-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![gcloud](https://img.shields.io/badge/gcloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![boto3](https://img.shields.io/badge/boto3-3776AB?style=for-the-badge&logo=python&logoColor=white)

---

## 🖥️ What It Looks Like — aws CLI with JMESPath (Mockup)

```text
$ aws ec2 describe-instances \
    --query 'Reservations[].Instances[].[InstanceId,State.Name,InstanceType]' \
    --output table
-------------------------------------------------
|              DescribeInstances                |
+---------------------+----------+--------------+
|  i-0abc123def456    |  running |  t3.micro    |
|  i-0999888777666    |  stopped |  m5.large    |
+---------------------+----------+--------------+
```

---

## 🌐 Real-World Usage Example

**DevOps and SRE teams** live in the CLI: scripting bulk tag updates, spinning up test environments, and wiring commands into CI/CD pipelines. A single bash loop with `aws` can tag 500 resources or rotate keys across accounts — work that would take hours of clicking. **Data engineers** use boto3/SDKs to build cloud automation directly into their apps.

---

## 🔍 Deep Dive — Concepts Often Missed

- **Named profiles + SSO:** `--profile` switches accounts safely; prefer `aws configure sso` over long-lived keys.
- **`--query` (JMESPath)** filters JSON output server-side style — far cleaner than piping to grep.
- **`--dry-run`** validates permissions/actions without making changes.
- **CLI = the API:** anything the console does, the CLI/SDK can automate and put in version control.
- **Pagination:** large lists are paginated — use `--max-items`/`--no-paginate` deliberately.
- **Credentials precedence:** env vars > profile > instance role — know the order to debug auth issues.
- **SDK retries/backoff** handle throttling automatically — don't hand-roll retry loops.

---

**Navigation:** [← Prometheus & Grafana](monitoring-deep-dive.md) | [Next → Docker Cheat Sheet](../12-Cheat-Sheets/docker-cheatsheet.md) | ⬅ [Back to Index](../README.md)

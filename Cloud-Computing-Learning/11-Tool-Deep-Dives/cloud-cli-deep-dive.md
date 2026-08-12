⬅ [Back to Index](../README.md)

# Cloud CLI & SDK — In-Depth Guide

Command-line tools let you automate everything. Every serious cloud engineer lives in the CLI.

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

**Navigation:** [← Prometheus & Grafana](monitoring-deep-dive.md) | [Next → Docker Cheat Sheet](../12-Cheat-Sheets/docker-cheatsheet.md) | ⬅ [Back to Index](../README.md)

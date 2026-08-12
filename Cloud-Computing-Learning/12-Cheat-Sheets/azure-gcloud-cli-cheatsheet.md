⬅ [Back to Index](../README.md)

# 🔷🔴 Azure CLI & Google Cloud CLI — Cheat Sheet

Quick reference for `az` (Azure) and `gcloud` (GCP) commands.

---

# Part 1 — Azure CLI (`az`)

## 🔧 Setup & Auth
```bash
az login
az account show                       # current subscription
az account list --output table
az account set --subscription "Name"  # switch subscription
az configure --defaults location=eastus group=myRG
```

## 📦 Resource Groups
```bash
az group create --name myRG --location eastus
az group list --output table
az group delete --name myRG --yes --no-wait
```

## 🖥️ Virtual Machines
```bash
az vm create --resource-group myRG --name myVM --image Ubuntu2204 \
  --admin-username azureuser --generate-ssh-keys
az vm list --output table
az vm start/stop/deallocate --resource-group myRG --name myVM
az vm delete --resource-group myRG --name myVM --yes
az vm list-ip-addresses --output table
```

## 🗄️ Storage
```bash
az storage account create --name mystorage --resource-group myRG --sku Standard_LRS
az storage account list --output table
az storage blob upload --account-name x --container-name c --file f --name n
az storage blob list --account-name x --container-name c --output table
```

## 🐳 AKS (Kubernetes)
```bash
az aks create --resource-group myRG --name myAKS --node-count 3 --generate-ssh-keys
az aks get-credentials --resource-group myRG --name myAKS   # configure kubectl
az aks scale --resource-group myRG --name myAKS --node-count 5
az aks list --output table
```

## 🌐 Other
```bash
az webapp up --name myapp --runtime "NODE:18-lts"   # deploy web app
az functionapp list --output table
az sql server list --output table
az keyvault secret show --vault-name v --name s
az group list --query "[?location=='eastus'].name" -o tsv   # JMESPath filter
```

## ⚡ Azure Global Flags
| Flag | Purpose |
|------|---------|
| `--output table/json/tsv/yaml` | Format |
| `--query '...'` | JMESPath filter |
| `--resource-group` / `-g` | Resource group |
| `--subscription` | Subscription |
| `--no-wait` | Don't block |
| `--verbose` / `--debug` | Diagnostics |

---

# Part 2 — Google Cloud CLI (`gcloud`)

## 🔧 Setup & Auth
```bash
gcloud init
gcloud auth login
gcloud auth application-default login
gcloud config set project MY_PROJECT
gcloud config list
gcloud projects list
```

## 🖥️ Compute Engine
```bash
gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-micro
gcloud compute instances list
gcloud compute instances start/stop my-vm --zone=us-central1-a
gcloud compute instances delete my-vm --zone=us-central1-a
gcloud compute ssh my-vm --zone=us-central1-a
```

## 🪣 Cloud Storage (gsutil / gcloud storage)
```bash
gcloud storage buckets create gs://my-bucket --location=us
gcloud storage ls
gcloud storage cp file gs://my-bucket/
gcloud storage cp gs://my-bucket/file .
gcloud storage rsync ./dir gs://my-bucket/
gcloud storage rm gs://my-bucket/file
```

## 🐳 GKE (Kubernetes)
```bash
gcloud container clusters create my-cluster --num-nodes=3 --zone=us-central1-a
gcloud container clusters get-credentials my-cluster --zone=us-central1-a
gcloud container clusters list
gcloud container clusters resize my-cluster --num-nodes=5 --zone=us-central1-a
```

## ⚡ Other
```bash
gcloud functions deploy fn --runtime nodejs18 --trigger-http --allow-unauthenticated
gcloud run deploy svc --image gcr.io/proj/img --platform managed
gcloud sql instances list
gcloud iam service-accounts list
gcloud projects get-iam-policy MY_PROJECT
gcloud compute instances list --format="table(name,zone,status)"   # format filter
```

## ⚡ gcloud Global Flags
| Flag | Purpose |
|------|---------|
| `--format=table/json/yaml/value` | Output format |
| `--filter="..."` | Filter results |
| `--project` | Override project |
| `--zone` / `--region` | Location |
| `--quiet` | Skip prompts |

---

## 🔄 Provider CLI Cross-Reference

| Task | AWS | Azure | GCP |
|------|-----|-------|-----|
| Login | `aws configure` | `az login` | `gcloud auth login` |
| List VMs | `aws ec2 describe-instances` | `az vm list` | `gcloud compute instances list` |
| Create VM | `aws ec2 run-instances` | `az vm create` | `gcloud compute instances create` |
| K8s creds | `aws eks update-kubeconfig` | `az aks get-credentials` | `gcloud container clusters get-credentials` |
| Upload file | `aws s3 cp` | `az storage blob upload` | `gcloud storage cp` |
| Filter output | `--query` | `--query` | `--filter` + `--format` |

---

**Navigation:** [← AWS CLI](aws-cli-cheatsheet.md) | [Next → Provider Service Cheat Sheet](provider-services-cheatsheet.md) | ⬅ [Back to Index](../README.md)

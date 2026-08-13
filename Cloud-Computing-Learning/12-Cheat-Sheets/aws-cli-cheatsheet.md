⬅ [Back to Index](../README.md)

# ☁️ AWS CLI — Complete Cheat Sheet & Shortcuts

Control AWS from the terminal. Includes filtering tricks with `--query` and `--filters`.

### 🎓 Professional (IT-Standard) Context

| Task | Layman View | Professional (IT-Standard) Use + Example |
|------|-------------|------------------------------------------|
| Auth | Log in | Authentication establishes secure access to the cloud.<br>It uses role-based or Single Sign-On (SSO) login.<br>It avoids storing long-lived keys.<br>It scopes permissions per session.<br>It is the first step in any workflow.<br>*Example: running `aws configure sso`.* |
| Query | Filter results | Querying filters and shapes command output.<br>It uses the JSON Metadata Expression Path (JMESPath) syntax.<br>It extracts only the fields you need.<br>It enables clean automation.<br>It reduces manual parsing.<br>*Example: `aws ec2 describe-instances --query`.* |
| Automate | Script the cloud | Automation scripts repetitive cloud operations.<br>It runs batch actions in pipelines.<br>It fits Continuous Integration (CI) workflows.<br>It reduces manual, error-prone steps.<br>It makes deployments repeatable.<br>*Example: `aws s3 sync ./build s3://bucket`.* |

---

## 🔧 Setup & Auth

```bash
aws configure                          # interactive setup
aws configure --profile prod           # named profile
aws sts get-caller-identity            # who am I?
aws configure list-profiles
export AWS_PROFILE=prod                 # set default profile
aws sso login --profile prod            # SSO login
```

## 🖥️ EC2

```bash
aws ec2 describe-instances
aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"
aws ec2 run-instances --image-id ami-123 --instance-type t3.micro --count 1
aws ec2 start-instances --instance-ids i-123
aws ec2 stop-instances --instance-ids i-123
aws ec2 terminate-instances --instance-ids i-123
aws ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,State.Name,PublicIpAddress]' --output table
```

## 🪣 S3

```bash
aws s3 ls                              # list buckets
aws s3 ls s3://bucket/path/            # list objects
aws s3 mb s3://my-bucket               # make bucket
aws s3 rb s3://my-bucket               # remove bucket
aws s3 cp file s3://bucket/            # upload
aws s3 cp s3://bucket/file .           # download
aws s3 sync ./dir s3://bucket/         # sync folder up
aws s3 sync s3://bucket/ ./dir         # sync down
aws s3 rm s3://bucket/file             # delete
aws s3 cp file s3://bucket/ --acl public-read
aws s3 presign s3://bucket/file --expires-in 3600   # temp URL
```

## 👤 IAM

```bash
aws iam list-users
aws iam list-roles
aws iam create-user --user-name dev
aws iam attach-user-policy --user-name dev --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess
aws iam list-attached-user-policies --user-name dev
aws iam create-access-key --user-name dev
```

## 🗄️ Other Common Services

```bash
# Lambda
aws lambda list-functions
aws lambda invoke --function-name fn out.json
aws lambda update-function-code --function-name fn --zip-file fileb://f.zip

# RDS
aws rds describe-db-instances

# CloudWatch Logs
aws logs tail /aws/lambda/fn --follow

# ECR (Docker registry)
aws ecr get-login-password | docker login --username AWS --password-stdin <acct>.dkr.ecr.<region>.amazonaws.com

# EKS kubeconfig
aws eks update-kubeconfig --name my-cluster --region us-east-1

# Secrets Manager
aws secretsmanager get-secret-value --secret-id my-secret
```

## 🎯 --query (JMESPath) Filtering Tricks

```bash
# Just instance IDs
aws ec2 describe-instances --query 'Reservations[].Instances[].InstanceId'

# Filter + project into a table
aws ec2 describe-instances \
  --query 'Reservations[].Instances[].{ID:InstanceId,Type:InstanceType,State:State.Name}' \
  --output table

# First element
--query 'Reservations[0].Instances[0].InstanceId'

# Filter by condition
--query "Reservations[].Instances[?State.Name=='running'].InstanceId"

# Pipe to jq for advanced JSON work
aws ec2 describe-instances | jq '.Reservations[].Instances[].InstanceId'
```

## ⚡ Output & Global Flags

| Flag | Purpose |
|------|---------|
| `--output json/table/text/yaml` | Format |
| `--query '...'` | JMESPath filter |
| `--filters '...'` | Server-side filter |
| `--profile name` | Use a profile |
| `--region us-west-2` | Override region |
| `--dry-run` | Test permissions (EC2) |
| `--no-cli-pager` | Disable pager |
| `--max-items N` | Limit results |

## 💡 Pro Tricks

```bash
# Enable CLI auto-completion (bash)
complete -C aws_completer aws

# Set default output & region permanently
aws configure set output table
aws configure set region us-east-1

# Assume a role
aws sts assume-role --role-arn arn:... --role-session-name s1

# List all regions
aws ec2 describe-regions --query 'Regions[].RegionName' --output text
```

### Aliases
```bash
alias awswho='aws sts get-caller-identity'
alias s3ls='aws s3 ls'
```

## ⚠️ Gotchas

- CLI uses a **default region** — commands fail/misfire if unset.
- `s3 rb` needs `--force` if bucket isn't empty.
- `--dry-run` only works for some EC2 actions.
- Access keys in `~/.aws/credentials` are **plaintext** — use SSO/roles.
- Pagination: results may be truncated; use `--max-items` / `--starting-token`.

---

**Navigation:** [← Vim & tmux](vim-tmux-cheatsheet.md) | [Next → Azure & gcloud CLI Cheat Sheet](azure-gcloud-cli-cheatsheet.md) | ⬅ [Back to Index](../README.md)

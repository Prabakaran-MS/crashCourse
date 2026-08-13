⬅ [Back to Index](../README.md)

# 🗂️ Cloud Provider Services — Quick Reference Cheat Sheet

Every major service across AWS, Azure, GCP in one place. Perfect for interviews and exams.

### 🎓 Professional (IT-Standard) Context

| Category | Layman View | Professional (IT-Standard) Use + Example |
|----------|-------------|------------------------------------------|
| Compute | Rent servers | Compute services rent virtual servers on demand.<br>Each cloud has its own offering.<br>Options include Elastic Compute Cloud (EC2), Azure Virtual Machines (VMs), and Compute Engine.<br>They scale with your workload.<br>You pick based on ecosystem fit.<br>*Example: choosing the service matching your ecosystem.* |
| Storage | Store data | Storage services keep data durably.<br>Object storage suits files and backups.<br>Options include Simple Storage Service (S3), Azure Blob, and Cloud Storage.<br>They scale to huge sizes cheaply.<br>They offer high durability.<br>*Example: object storage for backups.* |
| Managed DB | Databases as a service | Managed databases run databases for you.<br>The provider handles patching and backups.<br>Options include Relational Database Service (RDS), Azure SQL, and Cloud SQL.<br>They reduce operational burden.<br>They provide High Availability (HA).<br>*Example: a managed Postgres database.* |

---

## 💻 Compute

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Virtual Machines | EC2 | Virtual Machines | Compute Engine |
| Auto-scaling | Auto Scaling Groups | VM Scale Sets | Managed Instance Groups |
| Serverless functions | Lambda | Azure Functions | Cloud Functions |
| Containers (managed) | ECS / Fargate | Container Instances | Cloud Run |
| Kubernetes | EKS | AKS | GKE |
| PaaS | Elastic Beanstalk | App Service | App Engine |
| Batch | AWS Batch | Azure Batch | Batch |
| Bare metal | EC2 Bare Metal | — | Bare Metal Solution |

## 💾 Storage

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Object | S3 | Blob Storage | Cloud Storage |
| Block | EBS | Managed Disks | Persistent Disk |
| File | EFS | Azure Files | Filestore |
| Archive | S3 Glacier | Archive Storage | Coldline/Archive |
| Hybrid | Storage Gateway | Azure StorSimple | — |

## 🗄️ Databases

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Relational (managed) | RDS | Azure SQL DB | Cloud SQL |
| High-perf relational | Aurora | SQL Hyperscale | AlloyDB / Spanner |
| NoSQL document | DocumentDB | Cosmos DB | Firestore |
| NoSQL key-value | DynamoDB | Table Storage | Bigtable |
| In-memory cache | ElastiCache | Azure Cache Redis | Memorystore |
| Data warehouse | Redshift | Synapse | BigQuery |
| Graph | Neptune | Cosmos DB (Gremlin) | — |

## 🌐 Networking

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Virtual network | VPC | VNet | VPC |
| Load balancer | ELB/ALB/NLB | Load Balancer | Cloud LB |
| DNS | Route 53 | Azure DNS | Cloud DNS |
| CDN | CloudFront | Azure CDN/Front Door | Cloud CDN |
| VPN | VPN Gateway | VPN Gateway | Cloud VPN |
| Dedicated connection | Direct Connect | ExpressRoute | Interconnect |
| API management | API Gateway | API Management | Apigee |
| Firewall | WAF / Network Firewall | Azure Firewall | Cloud Armor |

## 🔐 Security & Identity

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Identity | IAM | Entra ID (Azure AD) | Cloud IAM |
| Secrets | Secrets Manager | Key Vault | Secret Manager |
| Key management | KMS | Key Vault | Cloud KMS |
| Threat detection | GuardDuty | Defender for Cloud | Security Command Center |
| Certificate mgmt | ACM | App Service Certs | Certificate Manager |

## 📊 Analytics & AI/ML

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Big data processing | EMR | HDInsight | Dataproc |
| Streaming | Kinesis | Event Hubs | Pub/Sub + Dataflow |
| ETL | Glue | Data Factory | Dataflow |
| ML platform | SageMaker | Azure ML | Vertex AI |
| Generative AI | Bedrock | Azure OpenAI | Vertex AI / Gemini |
| BI / dashboards | QuickSight | Power BI | Looker |

## 🔄 Integration & Messaging

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| Message queue | SQS | Service Bus / Queue | Pub/Sub |
| Pub/Sub | SNS | Event Grid | Pub/Sub |
| Event bus | EventBridge | Event Grid | Eventarc |
| Workflow | Step Functions | Logic Apps | Workflows |

## 🛠️ DevOps & Management

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| IaC | CloudFormation | ARM/Bicep | Deployment Manager |
| CI/CD | CodePipeline/CodeBuild | Azure DevOps/Pipelines | Cloud Build |
| Container registry | ECR | ACR | Artifact Registry |
| Monitoring | CloudWatch | Azure Monitor | Cloud Monitoring |
| Logging | CloudWatch Logs | Log Analytics | Cloud Logging |
| Cost mgmt | Cost Explorer | Cost Management | Cost Management |

---

## 🎯 Interview Tip
Memorize the "big three" per category: **compute, storage, database, networking, identity**. Interviewers frequently ask "What's the AWS equivalent of Azure X?"

---

**Navigation:** [← Azure & gcloud CLI](azure-gcloud-cli-cheatsheet.md) | [Next → Networking, Ports & Regex Quick Ref](networking-ports-regex-cheatsheet.md) | ⬅ [Back to Index](../README.md)

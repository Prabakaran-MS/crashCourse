⬅ [Back to Index](../README.md)

# FaaS / Serverless Computing

**Serverless** lets you run code **without provisioning or managing servers**. **FaaS (Function as a Service)** is the core: you upload a function, and it runs on demand — you pay only while it executes.

> ⚡ "Serverless" doesn't mean no servers — it means *you* don't manage them.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Functions (FaaS) | Run a snippet of code | Function as a Service (FaaS) runs small, stateless functions on demand.<br>You upload code and the provider runs it when triggered.<br>There are no servers for you to manage.<br>Billing is per invocation and per millisecond of runtime.<br>It scales automatically with demand.<br>*Example: an AWS Lambda function triggered by a Simple Storage Service (S3) upload.* |
| Event triggers | Runs when something happens | Serverless functions are event-driven.<br>Triggers come from queues, Hypertext Transfer Protocol (HTTP) requests, storage, or schedules.<br>Each event invokes the function independently.<br>This enables loosely coupled architectures.<br>Integration with other services is native.<br>*Example: Amazon API Gateway invoking Lambda; EventBridge running a scheduled job.* |
| Scaling | Handles any load | FaaS scales automatically and instantly.<br>It can scale to zero when idle, saving cost.<br>It bursts to many concurrent executions under load.<br>No capacity planning is required.<br>Concurrency limits can be configured.<br>*Example: Lambda scaling from zero to thousands of invocations during a spike.* |
| Cold start | First run is slower | A cold start is the delay when a new execution environment initializes.<br>It happens when no warm instance is available.<br>It adds latency to the first request.<br>It matters most for latency-sensitive apps.<br>It can be reduced with provisioned concurrency.<br>*Example: enabling provisioned concurrency to keep functions warm.* |

---

## 🗺️ Visual Overview

```mermaid
flowchart LR
    Event["🔔 Event<br/>(HTTP, upload, timer)"] --> Fn["⚡ Your Function"]
    Fn --> Run["Runs on demand"]
    Run --> Scale["Scales 0 → thousands"]
    Run --> Pay["Pay per millisecond"]
    Run --> Idle["Zero cost when idle"]
```

**Explanation:** Serverless / Function as a Service (FaaS) runs your code only when an event triggers it. The platform starts your function, scales it automatically, bills you per millisecond, and charges nothing while it sits idle.

---

## 🧩 Key Idea

- Write a small **function** (e.g., "resize an image").
- It runs **only when triggered** (an HTTP request, a file upload, a timer).
- Scales automatically from 0 → thousands of executions.
- **Pay per execution** (per millisecond), zero cost when idle.

---

## 🏭 Industry Examples / Tools

| Provider | FaaS Service |
|----------|--------------|
| AWS | **Lambda** |
| Azure | **Azure Functions** |
| GCP | **Cloud Functions**, **Cloud Run** |
| Open-source | **Knative**, **OpenFaaS**, Apache OpenWhisk |

Other serverless services: **AWS API Gateway**, **DynamoDB**, **S3**, **Aurora Serverless**, **Fargate**.

---

## 💡 Example Scenario

Automatically create a thumbnail whenever a user uploads a photo:
1. User uploads an image to **AWS S3**.
2. S3 event **triggers a Lambda function**.
3. Lambda resizes the image and saves the thumbnail.
4. You pay only for the milliseconds Lambda ran.

---

## 🖥️ Quick Example: AWS Lambda (Python)

```python
def lambda_handler(event, context):
	name = event.get("name", "World")
	return {
		"statusCode": 200,
		"body": f"Hello, {name}!"
	}
```

Deploy it, attach an API Gateway trigger, and you have a scalable API with no servers to manage.

---

## 🖼️ Serverless Tools & Platforms

![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![Azure Functions](https://img.shields.io/badge/Azure_Functions-0062AD?style=for-the-badge&logo=azurefunctions&logoColor=white)
![Cloud Functions](https://img.shields.io/badge/GCP_Cloud_Functions-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Knative](https://img.shields.io/badge/Knative-0865AD?style=for-the-badge&logo=knative&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Serverless Framework](https://img.shields.io/badge/Serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white)

---

## 🏗️ Architecture: An Event-Driven Serverless App

```mermaid
flowchart LR
    U["👤 User"] -->|HTTP| GW["🚪 API Gateway"]
    GW --> Fn1["⚡ Lambda: API Handler"]
    Fn1 --> DDB["🗄️ DynamoDB"]
    S3["💾 S3 Upload"] -->|event| Fn2["⚡ Lambda: Image Resizer"]
    Fn2 --> S3out["💾 S3 (Thumbnails)"]
    Timer["⏰ EventBridge (cron)"] -->|schedule| Fn3["⚡ Lambda: Nightly Job"]
    Queue["📨 SQS Queue"] --> Fn4["⚡ Lambda: Worker"]
```

**Explanation:** Serverless apps are stitched together from **triggers** (HTTP, storage events, timers, queues) that each invoke a small **function**. There are no servers to size — each function scales independently from zero to thousands, and you pay only per invocation.

---

## 🖥️ What It Looks Like — Lambda Invocation Logs (Mockup)

```text
$ aws lambda invoke --function-name resize out.json
START RequestId: 7f3c... Version: $LATEST
  Resizing s3://uploads/photo.jpg → 200x200
END   RequestId: 7f3c...
REPORT Duration: 412.55 ms  Billed Duration: 413 ms
       Memory Size: 256 MB  Max Memory Used: 118 MB
       Init Duration: 289.4 ms  ← cold start
```

*Note the `Init Duration` — that's the **cold start** you pay for only on the first (or scaled-out) invocation.*

---

## 🔍 Deep Dive — Concepts Often Missed

### ❄️ Cold Starts (the #1 gotcha)
- Happens when a **new** execution environment must initialize (first call, scale-out, or after idle).
- **Reduce with:** provisioned concurrency, smaller packages, lighter runtimes (Node/Python < Java/.NET), and avoiding heavy init code.

### 🧊 Statelessness & State
- Functions are **stateless** and **ephemeral** — never store data in local memory/disk between calls. Persist to **DynamoDB, S3, or a cache** instead.

### ⏱️ Hard Limits to Design Around
- **Execution timeout** (e.g. Lambda max 15 min), **payload size**, **/tmp storage**, and **concurrency limits**. Long jobs → use Step Functions / containers (Fargate).

### 🔗 Serverless ≠ just FaaS
- The broader **serverless** family includes managed **DynamoDB**, **S3**, **Aurora Serverless**, **API Gateway**, **EventBridge**, **Fargate** — all "no servers to manage."

### 🎼 Orchestration
- Chain functions with **AWS Step Functions** / **Azure Durable Functions** for workflows, retries, and long-running state machines.

### ⚠️ Cost & Debugging Notes
- Cheap when spiky/idle; can get **expensive at very high sustained volume** vs containers.
- Distributed tracing (**X-Ray**, OpenTelemetry) is essential — debugging many tiny functions is harder than one app.

---

## ✅ When to Use Serverless

- Event-driven workloads (file processing, webhooks, IoT).
- Unpredictable or spiky traffic.
- Microservices & APIs.
- You want minimal ops and pay-per-use.

## ⚖️ Pros & Cons

| Pros | Cons |
|------|------|
| No server management | **Cold starts** (initial latency) |
| Auto-scaling to zero | Execution time limits |
| Pay only when running | Harder to debug/monitor |
| Great for event-driven apps | Vendor lock-in risk |

---

**Related:** [PaaS](paas.md) · [Containers](../04-Core-Technologies/containers.md) · [Kubernetes](../06-Tools-and-Practices/kubernetes.md)

**Navigation:** [← SaaS](saas.md) | [Next → Public Cloud](../03-Deployment-Models/public-cloud.md) | ⬅ [Back to Index](../README.md)

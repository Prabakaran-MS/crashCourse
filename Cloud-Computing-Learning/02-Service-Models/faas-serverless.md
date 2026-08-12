⬅ [Back to Index](../README.md)

# FaaS / Serverless Computing

**Serverless** lets you run code **without provisioning or managing servers**. **FaaS (Function as a Service)** is the core: you upload a function, and it runs on demand — you pay only while it executes.

> ⚡ "Serverless" doesn't mean no servers — it means *you* don't manage them.

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

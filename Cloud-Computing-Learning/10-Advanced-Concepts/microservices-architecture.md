⬅ [Back to Index](../README.md)

# Microservices Architecture

**Microservices** break a large application into small, independent services that each do one thing well, communicate over APIs, and can be deployed separately.

> 🧩 Opposite of a **monolith** (one big codebase). Netflix, Amazon, Uber all run on microservices.

---

## 🏛️ Monolith vs Microservices

```
   MONOLITH                    MICROSERVICES
┌──────────────┐        ┌────────┐ ┌────────┐ ┌────────┐
│ UI           │        │ Users  │ │ Orders │ │ Payment│
│ Business     │        │ Service│ │ Service│ │ Service│
│ Data Access  │        └────┬───┘ └───┬────┘ └───┬────┘
│ (one deploy) │             └─────API Gateway────┘
└──────────────┘
```

| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| Deployment | All at once | Independent |
| Scaling | Whole app | Per-service |
| Tech stack | One | Polyglot (mix) |
| Failure impact | Whole app down | Isolated |
| Complexity | Simple start | Complex ops |

---

## 🧩 Key Patterns & Concepts

| Concept | Description | Tools |
|---------|-------------|-------|
| **API Gateway** | Single entry point routing to services | Kong, AWS API Gateway, NGINX |
| **Service Discovery** | Services find each other dynamically | Consul, Eureka, K8s DNS |
| **Load Balancing** | Distribute requests | Envoy, NGINX |
| **Service Mesh** | Manage service-to-service traffic | **Istio**, Linkerd |
| **Circuit Breaker** | Stop cascading failures | Resilience4j, Hystrix |
| **Saga Pattern** | Manage distributed transactions | Custom, Temporal |
| **Event-Driven** | Services communicate via events | Kafka, RabbitMQ ([details](messaging-event-driven.md)) |

---

## 💡 Example: E-commerce Broken into Services

```
API Gateway
   ├── User Service        (auth, profiles)      → PostgreSQL
   ├── Product Service     (catalog)             → MongoDB
   ├── Cart Service        (shopping cart)       → Redis
   ├── Order Service       (orders)              → PostgreSQL
   ├── Payment Service     (billing)             → Stripe API
   └── Notification Service (emails/SMS)         → SES/Twilio
```

Each can be built by a different team, in a different language, scaled independently.

---

## ✅ Benefits & ⚠️ Challenges

| Benefits | Challenges |
|----------|------------|
| Independent scaling & deployment | Distributed system complexity |
| Team autonomy | Network latency between services |
| Fault isolation | Harder debugging (need tracing) |
| Technology flexibility | Data consistency challenges |

---

## 🛠️ How to Run Microservices

1. **Containerize** each service with [Docker](../04-Core-Technologies/containers.md).
2. **Orchestrate** with [Kubernetes](../06-Tools-and-Practices/kubernetes.md).
3. **Connect** with a service mesh (Istio).
4. **Observe** with [distributed tracing](../06-Tools-and-Practices/monitoring.md) (Jaeger).

---

**Navigation:** [Next → Databases in the Cloud](databases-in-cloud.md) | ⬅ [Back to Index](../README.md)

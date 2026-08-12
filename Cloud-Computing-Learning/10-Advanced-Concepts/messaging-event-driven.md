⬅ [Back to Index](../README.md)

# Messaging & Event-Driven Architecture

**Event-driven architecture** lets services communicate asynchronously through **messages/events** instead of direct calls — improving scalability and decoupling.

> 📨 Service A doesn't wait for Service B. It drops a message and moves on.

---

## 🔄 Synchronous vs Asynchronous

```
SYNCHRONOUS (request/response)      ASYNCHRONOUS (messaging)
A ──request──▶ B                    A ──▶ [Queue/Topic] ──▶ B
A ◀─response── B                    A continues immediately
(A waits, coupled)                  (decoupled, resilient)
```

---

## 🧩 Core Patterns

| Pattern | Description |
|---------|-------------|
| **Message Queue** | Point-to-point; one consumer processes each message |
| **Pub/Sub** | One event → many subscribers |
| **Event Streaming** | Continuous stream of events, replayable |
| **Dead Letter Queue** | Holds failed messages for retry/inspection |

---

## 🏭 Industry Messaging Tools

| Tool | Type | Notes |
|------|------|-------|
| **Apache Kafka** | Event streaming | High-throughput, replayable, industry standard |
| **RabbitMQ** | Message broker | Flexible routing, mature |
| **AWS SQS** | Managed queue | Simple, scalable |
| **AWS SNS** | Managed pub/sub | Fan-out notifications |
| **AWS EventBridge** | Event bus | Serverless event routing |
| **Azure Service Bus** | Message broker | Enterprise messaging |
| **Google Pub/Sub** | Managed pub/sub | Global scale |
| **NATS** | Lightweight messaging | Fast, cloud-native |

---

## 💡 Example: Order Processing (Event-Driven)

```
Order Service ──"OrderPlaced" event──▶ [Kafka Topic]
										  │
		┌─────────────────────────────────┼──────────────────┐
		▼                                 ▼                    ▼
  Payment Service              Inventory Service        Email Service
  (charge card)                (reduce stock)           (send confirmation)
```

Each service reacts independently to the same event. If Email Service is down, orders still process.

---

## 🌊 Kafka Core Concepts

| Term | Meaning |
|------|---------|
| **Producer** | Sends messages |
| **Consumer** | Reads messages |
| **Topic** | A named stream of messages |
| **Partition** | Topic split for parallelism |
| **Broker** | A Kafka server |
| **Consumer Group** | Consumers sharing the work |
| **Offset** | Position in the stream |

---

## ✅ Benefits

- **Decoupling** — services don't depend on each other directly.
- **Scalability** — add consumers to handle load.
- **Resilience** — messages persist if a consumer is down.
- **Flexibility** — add new consumers without changing producers.

---

**Navigation:** [← Databases](databases-in-cloud.md) | [Next → Disaster Recovery & HA](disaster-recovery-ha.md) | ⬅ [Back to Index](../README.md)

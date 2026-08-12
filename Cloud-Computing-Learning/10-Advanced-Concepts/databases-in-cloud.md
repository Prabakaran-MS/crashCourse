⬅ [Back to Index](../README.md)

# Databases in the Cloud

Choosing the right database is critical. The cloud offers many **managed database** options so you don't run the servers yourself.

---

## 🗄️ Database Types

### 1️⃣ Relational (SQL)
- Structured data, tables, relationships, ACID transactions.
- **Use for:** financial data, orders, anything needing strong consistency.
- **Examples:** MySQL, PostgreSQL, SQL Server, Oracle.
- **Managed services:** AWS RDS, Aurora · Azure SQL Database · GCP Cloud SQL.

### 2️⃣ NoSQL
| Sub-type | Description | Examples | Managed |
|----------|-------------|----------|---------|
| **Document** | JSON-like documents | MongoDB, Firestore | DocumentDB, Cosmos DB |
| **Key-Value** | Simple key→value | Redis, DynamoDB | ElastiCache, DynamoDB |
| **Column** | Wide columns, big data | Cassandra, Bigtable | Keyspaces, Bigtable |
| **Graph** | Nodes & relationships | Neo4j | Neptune |

### 3️⃣ Specialized
- **Data Warehouse** (analytics): Redshift, BigQuery, Snowflake.
- **Time-Series**: InfluxDB, Timestream.
- **Search**: Elasticsearch, OpenSearch.

---

## 🤔 SQL vs NoSQL — When to Use

| Use SQL when... | Use NoSQL when... |
|-----------------|-------------------|
| Data is structured & related | Data is unstructured/flexible |
| Need ACID transactions | Need massive scale |
| Complex queries & joins | Simple, fast lookups |
| Consistency is critical | Availability & speed matter more |

---

## 🧠 Key Concepts

- **ACID** — Atomicity, Consistency, Isolation, Durability (SQL guarantees).
- **BASE** — Basically Available, Soft state, Eventual consistency (NoSQL).
- **CAP Theorem** — In a distributed system, pick 2 of 3: **C**onsistency, **A**vailability, **P**artition tolerance.
- **Sharding** — splitting data across servers horizontally.
- **Replication** — copies for redundancy & read scaling.
- **Read Replicas** — copies to handle read traffic.
- **Caching** — Redis/Memcached in front of DB for speed.

---

## 💡 Example: Choosing Databases for an App

```
User profiles       → PostgreSQL (RDS)       [relational, consistent]
Product catalog     → MongoDB (DocumentDB)   [flexible schema]
Shopping cart       → Redis (ElastiCache)    [fast, temporary]
Analytics/reporting → BigQuery/Redshift      [data warehouse]
Full-text search    → Elasticsearch          [search]
```

---

## 🛠️ Managed DB Benefits

- Automated backups, patching, scaling.
- High availability (multi-AZ), failover.
- Read replicas with one click.
- Encryption & monitoring built in.

---

**Navigation:** [← Microservices](microservices-architecture.md) | [Next → Messaging & Event-Driven](messaging-event-driven.md) | ⬅ [Back to Index](../README.md)

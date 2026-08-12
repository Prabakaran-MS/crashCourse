⬅ [Back to Index](../README.md)

# AI/ML & Big Data in the Cloud

The cloud is where most AI/ML and big data workloads run today, thanks to on-demand GPUs, managed services, and massive storage.

---

## 🤖 Cloud AI/ML Services

### Pre-Trained AI APIs (no ML expertise needed)
| Capability | AWS | Azure | GCP |
|------------|-----|-------|-----|
| Vision | Rekognition | Computer Vision | Vision AI |
| Speech | Transcribe/Polly | Speech Services | Speech-to-Text |
| Language/NLP | Comprehend | Language Service | Natural Language AI |
| Translation | Translate | Translator | Translation AI |
| Generative AI | **Bedrock** | **Azure OpenAI** | **Vertex AI / Gemini** |

### ML Platforms (build your own models)
| Provider | Platform |
|----------|----------|
| AWS | **SageMaker** |
| Azure | **Azure Machine Learning** |
| GCP | **Vertex AI** |

---

## 📊 Big Data Concepts

| Concept | Description |
|---------|-------------|
| **The 3 Vs** | Volume, Velocity, Variety of data |
| **Data Lake** | Store raw data of any format (S3, ADLS) |
| **Data Warehouse** | Structured data for analytics (Redshift, BigQuery) |
| **ETL / ELT** | Extract, Transform, Load pipelines |
| **Batch vs Stream** | Process in chunks vs real-time |

---

## 🏭 Big Data Tools

| Purpose | Tools |
|---------|-------|
| **Processing** | Apache Spark, Hadoop, AWS EMR, Databricks |
| **Streaming** | Apache Kafka, Kinesis, Flink, Spark Streaming |
| **Data Warehouse** | BigQuery, Redshift, **Snowflake** |
| **Orchestration** | Apache Airflow, AWS Step Functions |
| **Data Lake** | AWS S3 + Lake Formation, Azure Data Lake |
| **Visualization** | Tableau, Power BI, Looker, Grafana |

---

## 💡 Example: End-to-End Data Pipeline

```
Data Sources (apps, IoT, logs)
	  │
   Ingestion (Kafka / Kinesis)
	  │
   Storage (Data Lake - S3)
	  │
   Processing (Spark / Databricks)   ← ETL
	  │
   Warehouse (BigQuery / Snowflake)
	  │
   Analytics & ML (Vertex AI, dashboards)
	  │
   Insights (Tableau / Power BI)
```

---

## 🖥️ GPUs & Specialized Hardware

- **GPUs** — for training deep learning models (NVIDIA on all clouds).
- **TPUs** — Google's Tensor Processing Units for ML.
- **Inferentia/Trainium** — AWS custom ML chips.

💡 Rent a GPU cluster for hours instead of buying $100K hardware.

---

## 🌟 Why Cloud for AI/ML?

- On-demand GPUs/TPUs (pay per hour).
- Managed services remove infrastructure work.
- Scale training across many machines.
- Pre-trained models for instant capabilities.
- Integrated data pipelines.

---

**Navigation:** [← Edge Computing & CDN](edge-computing-cdn.md) | [Next → Well-Architected Framework](well-architected-framework.md) | ⬅ [Back to Index](../README.md)

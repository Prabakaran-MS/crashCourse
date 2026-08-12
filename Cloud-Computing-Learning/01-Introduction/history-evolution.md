⬅ [Back to Index](../README.md)

# History & Evolution of Cloud Computing

Understanding *how* we got to the cloud helps you understand *why* it's designed the way it is.

---

## 🕰️ Timeline

| Era | Milestone |
|-----|-----------|
| **1960s** | John McCarthy envisions computing as a "public utility." Mainframe **time-sharing** lets multiple users share one machine. |
| **1970s** | IBM introduces **virtual machines** (VM/370) — one physical machine running multiple OSes. |
| **1990s** | **Virtualization** matures. Telecoms offer VPNs. The term "cloud" appears in network diagrams. |
| **1999** | **Salesforce** delivers enterprise apps over the web — early **SaaS**. |
| **2002** | **Amazon Web Services** launches internal infrastructure services. |
| **2006** | AWS launches **S3** (storage) and **EC2** (compute) — birth of modern **IaaS**. |
| **2008** | **Google App Engine** launches — early **PaaS**. Microsoft announces **Azure**. |
| **2010** | Microsoft **Azure** goes live. OpenStack (open-source cloud) founded. |
| **2013** | **Docker** popularizes containers. |
| **2014** | **AWS Lambda** launches **serverless / FaaS**. Google open-sources **Kubernetes**. |
| **2020s** | Multi-cloud, edge computing, AI/ML services, and serverless become mainstream. |

---

## 📈 Evolution of Compute Abstraction

```
Physical Servers → Virtual Machines → Containers → Serverless Functions
	(own metal)      (share machine)   (share OS)     (share runtime)
	 more control ◀───────────────────────────────▶ less management
```

Each step abstracts away more of the underlying infrastructure, letting developers focus on code instead of hardware.

---

## 🧠 Why It Matters

- **Time-sharing** → the idea of sharing resources (multi-tenancy).
- **Virtualization** → the technology that makes cloud economically viable ([read more](../04-Core-Technologies/virtualization.md)).
- **Containers & Kubernetes** → today's standard for deploying apps ([read more](../04-Core-Technologies/containers.md)).

---

**Navigation:** [← What is Cloud Computing](what-is-cloud-computing.md) | [Next → Characteristics](characteristics.md) | ⬅ [Back to Index](../README.md)

# 📚 Learning Hub

> A growing, multi-track **learning platform** with in-depth, hands-on courses across many technologies — served through a lightweight, dynamic web viewer. New tracks and concepts are added over time. The first track is a complete **Cloud Computing** course, with more (C#/.NET, DevOps, and beyond) on the way.

[![C#](https://img.shields.io/badge/C%23-512BD4?style=for-the-badge&logo=csharp&logoColor=white)](https://learn.microsoft.com/dotnet/csharp/)
[![.NET](https://img.shields.io/badge/.NET_8.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![License](https://img.shields.io/badge/License-MIT-3DA639?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Status](https://img.shields.io/badge/Status-In_Progress-2088FF?style=for-the-badge&logo=github&logoColor=white)](#)

### 🧩 Tech Stack

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width="42" height="42" title="C#" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" width="42" height="42" title=".NET Core" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg" alt="Blazor" width="42" height="42" title="Blazor" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="ASP.NET" width="42" height="42" title="ASP.NET" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" width="42" height="42" title="Unity" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" width="42" height="42" title="Microsoft Azure" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="42" height="42" title="Docker" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" alt="Kubernetes" width="42" height="42" title="Kubernetes" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" width="42" height="42" title="SQL Server" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="42" height="42" title="Git" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="42" height="42" title="GitHub" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" width="42" height="42" title="Visual Studio" />
</p>

---

## 📖 About

This repository is a hands-on, curated **learning hub**. Each track is a self-contained course written in Markdown and rendered by a small, dependency-light web app (the **Learning Page**) that supports multiple concepts, search, diagrams, and syntax highlighting.

The content is fully data-driven: adding a new track needs only a new folder plus a JSON entry — no code changes. Whether you're preparing for interviews, switching stacks, or leveling up, each track gives you a structured, industry-focused path.

---

## 🎯 What You'll Learn

| Area | Technologies & Topics |
|------|-----------------------|
| **Language Core** | C# syntax, OOP, generics, LINQ, async/await, records, pattern matching |
| **Web & APIs** | ASP.NET Core, Minimal APIs, REST, gRPC, SignalR |
| **Data** | Entity Framework Core, LINQ to Entities, migrations, Dapper |
| **UI** | Blazor (Server & WebAssembly), .NET MAUI, Razor Pages |
| **Game Dev** | Unity with C# |
| **Cloud** | Azure SDK, Azure Functions, storage, deployment |
| **Architecture** | Microservices, Clean Architecture, Design Patterns, DDD |
| **Quality & DevOps** | TDD, unit/integration testing, Docker, CI/CD pipelines |

---

## 🗺️ Curriculum Roadmap

```
Month 1 ──▶ C# Core & Fundamentals ──▶ OOP, LINQ, Async
Month 2 ──▶ ASP.NET Core, EF Core, Blazor, APIs (REST/gRPC/SignalR)
Month 3 ──▶ MAUI, Unity, Azure, Microservices, Docker, CI/CD & Design Patterns
```

---

## 📚 Included Learning Tracks

- **[☁️ Cloud Computing](Learning/Cloud-Computing/README.md)** — A complete, in-depth course on cloud computing concepts, service models, providers, tools, cheat sheets, deep-dive references, and a final interview-prep test.

*(More tracks — C#/.NET, DevOps, and other concepts — are being added incrementally.)*

---

## 🌐 Browse Online

The Learning Hub is hosted with **GitHub Pages**:

**https://prabakaran-ms.github.io/learning-hub/**

---

## ▶️ Run Locally

The viewer uses `fetch`, so it must be served over HTTP (not opened as a file).

**Visual Studio (Open Folder):** pick the **"Learning Page (web server)"** startup item and press **F5** — it starts a local server and opens your browser.

**Terminal (any OS with PowerShell):**
```powershell
pwsh -ExecutionPolicy Bypass -File serve.ps1
# then open http://localhost:8000/Learning-Page/
```

---

## 🧰 Industry Tools Covered

**Testing & TDD**

![xUnit](https://img.shields.io/badge/xUnit-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![NUnit](https://img.shields.io/badge/NUnit-25A162?style=flat-square&logo=dotnet&logoColor=white)
![MSTest](https://img.shields.io/badge/MSTest-5C2D91?style=flat-square&logo=visualstudio&logoColor=white)
![Moq](https://img.shields.io/badge/Moq-68217A?style=flat-square)
![TDD](https://img.shields.io/badge/TDD-FF6C37?style=flat-square)

**Containers & Orchestration**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)

**CI/CD**

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Azure DevOps](https://img.shields.io/badge/Azure_DevOps-0078D7?style=flat-square&logo=azuredevops&logoColor=white)

**Cloud**

![Microsoft Azure](https://img.shields.io/badge/Microsoft_Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![Azure SDK](https://img.shields.io/badge/Azure_SDK-0078D4?style=flat-square&logo=azurefunctions&logoColor=white)

**Architecture & Patterns**

![SOLID](https://img.shields.io/badge/SOLID-6DB33F?style=flat-square)
![Repository](https://img.shields.io/badge/Repository-blue?style=flat-square)
![CQRS](https://img.shields.io/badge/CQRS-orange?style=flat-square)
![Mediator](https://img.shields.io/badge/Mediator-purple?style=flat-square)
![DI](https://img.shields.io/badge/Dependency_Injection-teal?style=flat-square)

---

## 🚦 Getting Started

### Prerequisites
- A modern web browser
- [Git](https://git-scm.com/)
- PowerShell (built into Windows; [PowerShell 7+](https://learn.microsoft.com/powershell/) on macOS/Linux) to run the local server

### Clone the repository
```bash
git clone https://github.com/Prabakaran-MS/learning-hub.git
cd learning-hub
```

### Add a new track
1. Create `Learning/<Your-Track>/` with your `.md` lessons.
2. Add a `manifest.json` describing its `sections` and `lessons`.
3. Add an entry to `Learning/concepts.json`.

No code changes required — the viewer picks it up automatically.

---

## 📂 Repository Structure

```
learning-hub/
├── Learning/                   # Course content (Markdown)
│   ├── concepts.json           # Registry of available tracks
│   └── Cloud-Computing/        # A track (lessons + manifest.json)
├── Learning-Page/              # Dynamic web viewer (HTML/CSS/JS)
├── index.html                  # Root redirect to the viewer
├── serve.ps1                   # Local static web server
├── launch.vs.json              # Visual Studio startup item
└── README.md                   # You are here
```

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! Feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

---

⭐ If you find this Learning Hub helpful, consider giving the repo a star!

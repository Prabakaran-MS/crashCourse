⬅ [Back to Index](../README.md)

# Ansible — In-Depth Tool Guide

**Ansible** (by Red Hat) is an **agentless** configuration management and automation tool. It configures servers, deploys apps, and orchestrates tasks over SSH using simple YAML.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|-------------------------------------------|
| Inventory | List of machines | The inventory lists the machines Ansible manages.<br>It groups hosts statically or dynamically.<br>Dynamic inventories query the cloud for hosts.<br>It targets tasks at specific groups.<br>It keeps automation organized.<br>*Example: a dynamic Amazon Elastic Compute Cloud (EC2) inventory.* |
| Playbook | The task script | A playbook is the automation script for Ansible.<br>It is written in YAML Ain't Markup Language (YAML).<br>It lists ordered, declarative tasks.<br>It describes the desired end state.<br>It runs against inventory hosts.<br>*Example: running `ansible-playbook site.yml`.* |
| Modules | Prebuilt actions | Modules are prebuilt units of work.<br>Each performs one idempotent action.<br>They cover packages, files, and services.<br>They hide low-level command details.<br>They keep tasks reliable.<br>*Example: the `apt`, `copy`, and `service` modules.* |
| Roles | Reusable bundles | Roles bundle related automation for reuse.<br>They structure tasks, variables, and files.<br>They are shareable across projects.<br>They can be pulled from a shared hub.<br>They keep playbooks clean.<br>*Example: a `webserver` role from Ansible Galaxy.* |

---

## 🌟 Why Ansible?

- **Agentless** — only needs SSH (no software on targets).
- **Declarative & idempotent** — running twice = same result.
- **Simple YAML** — easy to read.
- **Huge module library** — for almost everything.

---

## 🧩 Core Concepts

| Concept | Description |
|---------|-------------|
| **Inventory** | List of hosts to manage |
| **Playbook** | YAML file of tasks to run |
| **Task** | A single action |
| **Module** | Reusable unit (e.g., `apt`, `copy`, `service`) |
| **Role** | Reusable, organized set of tasks |
| **Handler** | Task triggered by a change (e.g., restart) |
| **Variable** | Parameterize playbooks |

---

## 📋 Inventory File

```ini
[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com

[all:vars]
ansible_user=ubuntu
```

---

## 📝 Example Playbook

```yaml
---
- name: Configure web servers
  hosts: webservers
  become: true          # run as sudo
  vars:
	app_port: 3000
  tasks:
	- name: Install nginx
	  apt:
		name: nginx
		state: present
		update_cache: true

	- name: Copy config file
	  template:
		src: nginx.conf.j2
		dest: /etc/nginx/nginx.conf
	  notify: Restart nginx

	- name: Ensure nginx is running
	  service:
		name: nginx
		state: started
		enabled: true

  handlers:
	- name: Restart nginx
	  service:
		name: nginx
		state: restarted
```

---

## 🛠️ Running Ansible

```bash
# Test connectivity
ansible all -i inventory -m ping

# Run a playbook
ansible-playbook -i inventory site.yml

# Dry run (check mode)
ansible-playbook -i inventory site.yml --check

# Limit to a group
ansible-playbook -i inventory site.yml --limit webservers

# Ad-hoc command
ansible webservers -i inventory -m shell -a "uptime"
```

---

## 📁 Roles (Organizing at Scale)

```
roles/
  webserver/
	tasks/main.yml
	handlers/main.yml
	templates/nginx.conf.j2
	vars/main.yml
	defaults/main.yml
```
Use in a playbook:
```yaml
- hosts: webservers
  roles:
	- webserver
```

---

## 🔐 Ansible Vault (Secrets)

```bash
ansible-vault encrypt secrets.yml
ansible-vault edit secrets.yml
ansible-playbook site.yml --ask-vault-pass
```

---

## 🆚 Ansible vs Terraform

| | Ansible | Terraform |
|---|---------|-----------|
| Purpose | Configure servers (config mgmt) | Provision infrastructure |
| State | Stateless | Stateful |
| Approach | Procedural | Declarative |
| Best combo | Use **together**: Terraform builds infra, Ansible configures it |

---

## 🖼️ Ansible Ecosystem

![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white)
![Red Hat](https://img.shields.io/badge/Red_Hat-EE0000?style=for-the-badge&logo=redhat&logoColor=white)
![Galaxy](https://img.shields.io/badge/Ansible_Galaxy-000000?style=for-the-badge&logo=ansible&logoColor=white)

---

## 🖥️ What It Looks Like — ansible-playbook run (Mockup)

```text
$ ansible-playbook -i inventory site.yml

PLAY [webservers] **************************************

TASK [Install nginx] **********************************
changed: [web1.example.com]
ok:      [web2.example.com]

TASK [Start nginx service] ****************************
changed: [web1.example.com]
ok:      [web2.example.com]

PLAY RECAP ********************************************
web1  : ok=4  changed=2  unreachable=0  failed=0
web2  : ok=4  changed=0  unreachable=0  failed=0
```

**Note:** `changed=0` on web2 shows **idempotency** — nothing changed because it was already in the desired state.

---

## 🌐 Real-World Usage Example

**NASA, banks, and telecoms** use Ansible to configure thousands of servers consistently — patching, deploying apps, and enforcing security baselines over SSH with no agents to install. A single playbook can roll a security fix across an entire fleet, and re-running it is safe because tasks are idempotent.

---

## 🔍 Deep Dive — Concepts Often Missed

- **Agentless = SSH only:** no software on targets — easier than agent-based tools (Puppet/Chef).
- **Idempotency:** running twice yields the same state; `changed` vs `ok` tells you what actually changed.
- **Config mgmt vs provisioning:** Ansible configures existing servers; Terraform *creates* infrastructure — often used together.
- **Handlers** run only when notified (e.g., restart service only if config changed).
- **Ansible Vault** encrypts secrets in playbooks — never store plaintext passwords.
- **Dynamic inventory** auto-discovers cloud hosts instead of hardcoding IPs.
- **Roles + Galaxy** promote reuse and clean structure over giant playbooks.

---

**Navigation:** [← Kubernetes](kubernetes-deep-dive.md) | [Next → CI/CD Deep Dive](cicd-deep-dive.md) | ⬅ [Back to Index](../README.md)

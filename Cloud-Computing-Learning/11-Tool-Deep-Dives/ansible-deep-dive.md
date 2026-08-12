⬅ [Back to Index](../README.md)

# Ansible — In-Depth Tool Guide

**Ansible** (by Red Hat) is an **agentless** configuration management and automation tool. It configures servers, deploys apps, and orchestrates tasks over SSH using simple YAML.

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

**Navigation:** [← Kubernetes](kubernetes-deep-dive.md) | [Next → CI/CD Deep Dive](cicd-deep-dive.md) | ⬅ [Back to Index](../README.md)

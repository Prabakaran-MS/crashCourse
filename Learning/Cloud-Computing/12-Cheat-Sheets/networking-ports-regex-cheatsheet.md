⬅ [Back to Index](../README.md)

# 🔌 Networking, Ports, Regex & YAML — Quick Reference

Essential reference tables every cloud engineer needs at their fingertips.

### 🎓 Professional (IT-Standard) Context

| Topic | Layman View | Professional (IT-Standard) Use + Example |
|-------|-------------|------------------------------------------|
| Ports | App doorways | Ports are numbered doorways for network services.<br>Well-known ports are assigned by the Internet Assigned Numbers Authority (IANA).<br>Each service listens on a standard port.<br>They route traffic to the right app.<br>They are key to firewall rules.<br>*Example: 443 for Hypertext Transfer Protocol Secure (HTTPS), 22 for Secure Shell (SSH), 5432 for Postgres.* |
| Private ranges | Internal addresses | Private ranges are internal-only IP addresses.<br>They are defined by Request for Comments (RFC) 1918.<br>They use Classless Inter-Domain Routing (CIDR) blocks.<br>They are not routable on the public internet.<br>They isolate internal networks.<br>*Example: 10.0.0.0/8 for a Virtual Private Cloud (VPC).* |
| Regex/YAML | Pattern & config | Regular Expressions (Regex) match text patterns.<br>YAML Ain't Markup Language (YAML) structures configuration.<br>Regex validates input formats.<br>YAML defines Infrastructure as Code (IaC) and manifests.<br>Both are everyday operations tools.<br>*Example: YAML for Kubernetes and Continuous Integration (CI) configs.* |

---

## 🔢 Common Ports (Memorize These!)

| Port | Protocol / Service |
|------|--------------------|
| 20/21 | FTP |
| 22 | SSH / SFTP |
| 23 | Telnet |
| 25 | SMTP (email) |
| 53 | DNS |
| 67/68 | DHCP |
| 80 | HTTP |
| 110 | POP3 |
| 143 | IMAP |
| 443 | HTTPS |
| 445 | SMB |
| 587 | SMTP (TLS) |
| 993 | IMAPS |
| 995 | POP3S |
| 1433 | SQL Server |
| 1521 | Oracle DB |
| 2049 | NFS |
| 3306 | MySQL / MariaDB |
| 3389 | RDP (Windows Remote Desktop) |
| 5432 | PostgreSQL |
| 5672 | RabbitMQ (AMQP) |
| 6379 | Redis |
| 8080 | HTTP alternate |
| 9092 | Kafka |
| 9200 | Elasticsearch |
| 27017 | MongoDB |

## 🌐 IP Addressing & CIDR

| CIDR | Subnet Mask | # Addresses |
|------|-------------|-------------|
| /8 | 255.0.0.0 | 16,777,216 |
| /16 | 255.255.0.0 | 65,536 |
| /24 | 255.255.255.0 | 256 |
| /26 | 255.255.255.192 | 64 |
| /28 | 255.255.255.240 | 16 |
| /32 | 255.255.255.255 | 1 (single host) |

### Private IP Ranges (RFC 1918)
| Range | CIDR |
|-------|------|
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 |

💡 **Cloud tip:** AWS/Azure reserve the **first 4 and last 1** IP in each subnet. A /24 gives you 251 usable, not 256.

### CIDR Quick Math
```
/24 = 256 IPs   (last octet: 0-255)
/25 = 128 IPs   (split /24 in half)
/26 = 64 IPs
/27 = 32 IPs
/28 = 16 IPs
Formula: 2^(32 - prefix) = total addresses
```

## 📡 HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 301 | Moved Permanently |
| 302 | Found (temp redirect) |
| 304 | Not Modified (cached) |
| 400 | Bad Request |
| 401 | Unauthorized (not authenticated) |
| 403 | Forbidden (no permission) |
| 404 | Not Found |
| 429 | Too Many Requests (rate limited) |
| 500 | Internal Server Error |
| 502 | Bad Gateway |
| 503 | Service Unavailable |
| 504 | Gateway Timeout |

## 🔤 Regex Quick Reference

| Pattern | Matches |
|---------|---------|
| `.` | Any character |
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 |
| `^` | Start of line |
| `$` | End of line |
| `\d` | Digit |
| `\w` | Word char |
| `\s` | Whitespace |
| `[abc]` | a, b, or c |
| `[^abc]` | Not a, b, c |
| `[a-z]` | Range |
| `(a|b)` | a or b |
| `{2,4}` | 2 to 4 times |
| `\b` | Word boundary |

```bash
# Useful regexes
Email:   ^[\w.-]+@[\w.-]+\.\w+$
IPv4:    ^(\d{1,3}\.){3}\d{1,3}$
URL:     ^https?://[\w.-]+
Date:    ^\d{4}-\d{2}-\d{2}$
```

## 📋 YAML Quick Reference (K8s, CI/CD, Compose)

```yaml
# Scalars
name: myapp
port: 8080
enabled: true
ratio: 3.14
nothing: null

# Lists
ports:
  - 80
  - 443
tags: [dev, web]        # inline list

# Maps (nested)
metadata:
  labels:
	app: web
	env: prod

# Multi-line strings
script: |          # literal (keeps newlines)
  echo hello
  echo world
folded: >          # folded (joins lines)
  this becomes
  one line

# Anchors & references (DRY)
defaults: &defaults
  timeout: 30
service:
  <<: *defaults    # merge anchor
  name: web

# Environment variable style
env:
  - name: KEY
	value: "val"
```

### YAML Gotchas ⚠️
- **Indentation must be spaces**, never tabs.
- `yes/no/on/off` may parse as booleans — quote them: `"no"`.
- Strings with `:` need quotes: `time: "10:30"`.
- Consistent indentation (2 spaces standard).

## 🔐 SSH Quick Reference

```bash
ssh-keygen -t ed25519 -C "email"       # generate key
ssh-copy-id user@host                  # copy key to server
ssh user@host                          # connect
ssh -i key.pem user@host               # with specific key
ssh -p 2222 user@host                  # custom port
ssh -L 8080:localhost:80 user@host     # local port forward (tunnel)
ssh -D 1080 user@host                  # dynamic SOCKS proxy
ssh -A user@host                       # forward agent
scp file user@host:/path               # copy file
# ~/.ssh/config for shortcuts:
#   Host myserver
#     HostName 1.2.3.4
#     User ubuntu
#     IdentityFile ~/.ssh/key.pem
```

---

**Navigation:** [← Provider Services](provider-services-cheatsheet.md) | [Next → Nooks & Corners: Compute](../13-Nooks-and-Corners/compute-deep.md) | ⬅ [Back to Index](../README.md)

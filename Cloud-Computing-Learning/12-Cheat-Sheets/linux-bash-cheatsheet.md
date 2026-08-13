⬅ [Back to Index](../README.md)

# 🐧 Linux & Bash — Complete Cheat Sheet & Shortcuts

90% of cloud servers run Linux. These commands are essential for every cloud engineer.

### 🎓 Professional (IT-Standard) Context

| Task | Layman View | Professional (IT-Standard) Use + Example |
|------|-------------|------------------------------------------|
| Navigate/inspect | Look around the server | Navigation and inspection explore a running host.<br>They reveal processes, disk, and memory use.<br>They support operations triage.<br>They help diagnose problems fast.<br>They are core troubleshooting skills.<br>*Example: `ps`, `top`, and `df -h`.* |
| Permissions | Control access | Permissions control who can access files.<br>They follow the Portable Operating System Interface (POSIX) model.<br>They combine access modes and ownership.<br>They protect sensitive files.<br>They enforce least privilege.<br>*Example: `chmod 600 key.pem`.* |
| Scripting | Automate chores | Scripting automates repetitive tasks.<br>It combines commands into shell scripts.<br>It runs inside pipelines reliably.<br>It reduces manual effort and errors.<br>It makes operations repeatable.<br>*Example: bash deploy scripts.* |

---

## 📁 Files & Navigation

| Command | Purpose |
|---------|---------|
| `pwd` | Current directory |
| `ls -lah` | List all, human sizes |
| `cd -` | Previous directory |
| `cd ~` | Home |
| `tree -L 2` | Directory tree |
| `find / -name "*.log"` | Find files |
| `find . -mtime -1` | Modified in last day |
| `find . -size +100M` | Files >100MB |
| `locate file` | Fast find (indexed) |
| `du -sh *` | Size of each item |
| `df -h` | Disk free |
| `stat file` | File details |
| `readlink -f file` | Resolve symlink |

## 📄 Viewing & Editing Text

| Command | Purpose |
|---------|---------|
| `cat file` | Show file |
| `less file` | Page through (q to quit) |
| `head -n 20 file` | First 20 lines |
| `tail -n 50 file` | Last 50 lines |
| `tail -f file` | Follow (live logs!) |
| `wc -l file` | Count lines |
| `nano` / `vim` | Editors |
| `sed 's/old/new/g' file` | Find & replace |
| `awk '{print $1}' file` | Print column 1 |
| `cut -d',' -f2 file` | CSV column 2 |
| `sort file | uniq -c` | Count unique lines |
| `tr 'a-z' 'A-Z'` | Translate chars |

## 🔍 Search — grep (Master This!)

```bash
grep "text" file                 # basic
grep -i "text" file              # case-insensitive
grep -r "text" .                 # recursive
grep -n "text" file              # show line numbers
grep -v "text" file              # invert (exclude)
grep -c "text" file              # count matches
grep -E "err|warn|fail" file     # regex OR
grep -A3 -B3 "text" file         # 3 lines after/before
grep -l "text" *.log             # files that match
ps aux | grep nginx              # find a process
```

## ⚙️ Processes & System

| Command | Purpose |
|---------|---------|
| `ps aux` | All processes |
| `top` / `htop` | Live process monitor |
| `kill PID` / `kill -9 PID` | Terminate / force |
| `killall name` | Kill by name |
| `pkill -f pattern` | Kill by pattern |
| `jobs` / `bg` / `fg` | Job control |
| `nohup cmd &` | Run detached |
| `cmd &` | Run in background |
| `Ctrl+Z` | Suspend |
| `free -h` | Memory usage |
| `uptime` | Load average |
| `lsof -i :80` | What's using port 80 |
| `netstat -tulpn` / `ss -tulpn` | Open ports |
| `systemctl status/start/stop svc` | Manage services |
| `journalctl -u svc -f` | Follow service logs |

## 🔐 Permissions & Ownership

```bash
chmod 755 file        # rwxr-xr-x
chmod +x script.sh    # make executable
chmod -R 644 dir/     # recursive
chown user:group file # change owner
chgrp group file      # change group
umask 022             # default permissions
sudo !!               # rerun last cmd as root
```

### Permission Numbers
| Digit | Perms | Meaning |
|-------|-------|---------|
| 7 | rwx | read+write+execute |
| 6 | rw- | read+write |
| 5 | r-x | read+execute |
| 4 | r-- | read only |

## 🔗 Pipes, Redirects & Chaining

```bash
cmd1 | cmd2              # pipe output
cmd > file              # overwrite stdout
cmd >> file             # append
cmd 2> err.log          # redirect stderr
cmd &> all.log          # both stdout+stderr
cmd1 && cmd2            # run cmd2 if cmd1 succeeds
cmd1 || cmd2            # run cmd2 if cmd1 fails
cmd1 ; cmd2            # run both regardless
xargs                   # build commands from input
echo "hi" | tee file    # print AND save
```

## 🌐 Networking

| Command | Purpose |
|---------|---------|
| `curl -I url` | Headers only |
| `curl -X POST -d '{}' url` | POST request |
| `curl -o file url` | Download to file |
| `wget url` | Download |
| `ping host` | Test connectivity |
| `dig domain` | DNS lookup |
| `nslookup domain` | DNS lookup |
| `traceroute host` | Trace path |
| `ip a` | Show IP addresses |
| `ssh user@host` | SSH connect |
| `scp file user@host:/path` | Copy over SSH |
| `rsync -avz src/ dest/` | Efficient sync |

## ⌨️ Terminal Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Kill current command |
| `Ctrl+Z` | Suspend command |
| `Ctrl+D` | Logout / EOF |
| `Ctrl+L` | Clear screen (= `clear`) |
| `Ctrl+A` / `Ctrl+E` | Start / end of line |
| `Ctrl+U` / `Ctrl+K` | Delete before / after cursor |
| `Ctrl+W` | Delete previous word |
| `Ctrl+R` | 🔍 Search command history |
| `Ctrl+Y` | Paste deleted text |
| `!!` | Repeat last command |
| `!$` | Last argument of previous command |
| `!abc` | Last command starting with "abc" |
| `Tab` | Auto-complete |

## 💡 Pro One-Liners

```bash
# Find & kill process on a port
lsof -ti:8080 | xargs kill -9

# Top 10 largest files
du -ah . | sort -rh | head -10

# Count files in a directory
ls -1 | wc -l

# Watch a command every 2s
watch -n 2 'kubectl get pods'

# Replace text in all files recursively
grep -rl "old" . | xargs sed -i 's/old/new/g'

# Free up disk: find big dirs
du -h --max-depth=1 | sort -rh
```

---

**Navigation:** [← Git Cheat Sheet](git-cheatsheet.md) | [Next → Vim & tmux Cheat Sheet](vim-tmux-cheatsheet.md) | ⬅ [Back to Index](../README.md)

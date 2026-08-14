⬅ [Back to Index](../README.md)

# Functions & Arguments

**Functions** package reusable logic; **arguments** let you feed them different inputs. Together they keep scripts DRY (Don't Repeat Yourself) and maintainable.

### 🎓 Professional (IT-Standard) Reference

| Concept | Layman View | Professional (IT-Standard) View + Example |
|---------|-------------|--------------------------------------------|
| Functions | Reusable named blocks of code | Functions encapsulate logic under a name for reuse.<br>They reduce duplication and improve readability.<br>They can accept parameters and return results.<br>They are the building blocks of maintainable scripts.<br>*Example: a `greet()` function called with different names.* |
| Arguments | Inputs you pass in | Arguments are values passed into a script or function.<br>Positional parameters map by order (`$1`, `$2`).<br>Named parameters improve clarity in PowerShell.<br>Validation guards against bad input.<br>*Example: `./deploy.sh production` where `$1` is the environment.* |
| Local scope | Keeping variables private | Local scope confines a variable to its function.<br>It prevents accidental clobbering of globals.<br>It reduces side effects and bugs.<br>Bash uses `local`; PowerShell scopes by default.<br>*Example: `local name="$1"` inside a Bash function.* |

---

## 🧩 Bash Functions & Arguments

```bash
#!/usr/bin/env bash
greet() {
  local name="$1"          # first argument, kept local
  echo "Hello, ${name:-stranger}"
}

greet "Alice"
greet                      # uses the default "stranger"

# Script-level arguments
echo "Script: $0, first arg: $1, count: $#, all: $*"
```

## 🧩 PowerShell Functions & Params

```powershell
function Greet {
  param([string]$Name = "stranger")
  "Hello, $Name"
}

Greet -Name "Alice"
Greet
```

```mermaid
flowchart LR
	Call["greet 'Alice'"] --> Fn["Function greet(name)"]
	Fn --> Local["local name = 'Alice'"]
	Local --> Out["Hello, Alice"]
```

**Explanation:** You call a function by name and hand it arguments. Inside, those inputs become **local** variables so the function can't accidentally overwrite anything outside it — a key habit for reliable scripts.

---

## 🧰 Simple Analogy

A function is a **coffee machine**: press the button (call it) and give it a choice (argument: latte vs espresso). The internal mechanics (local variables) stay hidden inside the machine — you just get your coffee out.

---

## 🧩 Real-World Examples

- 🔁 A `log()` function used throughout a script for consistent output.
- 🚀 A `deploy <env>` function reused for staging and production.
- 🧹 A `cleanup()` function called on exit to remove temp files.

> 💡 In Bash, always mark function variables with **`local`** so they don't leak into the global scope and cause subtle bugs.

---

## 🧗 What You Gain: 50+ Years of Experience, Condensed

Work through this lesson and you absorb judgment that normally takes a career to earn. Each stage below is not just a shift in viewpoint but a level of mastery you unlock. By the end you carry the instincts of someone with 50+ years in the field:

| Stage | How you see functions | What you can do |
|-------|-----------------------|-----------------|
| 🌱 **Beginner** | "A named block of commands." | Define and call a function. |
| 🧭 **Learner** | Functions take positional args. | Use `$1`/`$args`, return via echo/exit code. |
| 🛠️ **Practitioner** | Functions have local scope and outputs. | Use `local`, validate args, document usage. |
| 🚀 **Advanced** | Functions are reusable, testable units. | Build libraries, named params, error propagation. |
| 🏛️ **Veteran** | Interfaces + contracts, not just code blocks. | Design stable APIs, testable modules, clear failure modes. |

---

## 🔬 Deep Dive — Advanced & Expert Insights

- **Bash returns *status*, not values:** `return` sets an exit code (0–255). To "return" data, `echo` it and capture with `result=$(myfunc)`. Confusing the two is a classic bug.
- **Always `local`:** unscoped Bash variables are global and leak between functions. `local var` (and `local -n` name-refs) prevent action-at-a-distance bugs.
- **Validate inputs:** `: "${1:?usage: myfunc <path>}"` fails fast with a message. Good functions guard their preconditions.
- **PowerShell advanced functions:** `[CmdletBinding()]`, typed `param()` blocks, `[ValidateSet()]`, and pipeline `process{}` turn a function into a first-class cmdlet.
- **Testability:** small, single-purpose functions with clear inputs/outputs can be unit-tested (`bats` for Bash, `Pester` for PowerShell) — the practitioner-to-veteran leap.

> 🏛️ **Veteran habit:** design each function's inputs, outputs, and failure behavior *before* writing the body — treat it as an API others depend on.

---

## ✅ Key Takeaways

- **Functions** package reusable logic under a name.
- **Arguments** feed different inputs (`$1`, `$2`, or named params).
- Use **local scope** to avoid clobbering global variables.
- Functions keep scripts DRY, readable, and maintainable.

---

**Navigation:** [Next → Regex & Text Processing](regex-text-processing.md) | ⬅ [Back to Index](../README.md)

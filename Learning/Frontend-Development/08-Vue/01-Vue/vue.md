# 💚 Vue.js

> 💼 **Industry Perspective:** In professional frontend teams, **Vue.js** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

> **Vue** is a progressive, approachable framework for building UIs. It combines the best of React (reactivity, components) and Angular (templates, directives) with an gentle learning curve. This covers **Vue 3** with the Composition API.

⬅ [Back to Index](../README.md)

---

## 🚀 Getting Started

```bash
npm create vue@latest my-app   # official scaffolding (Vite-based)
```

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
```

---

## 📄 Single File Components (SFC)

Vue's signature: template, logic, and styles in one `.vue` file.

```vue
<script setup>
import { ref } from "vue";
const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <button @click="increment">Count is {{ count }}</button>
</template>

<style scoped>
button { padding: 8px 16px; }  /* scoped to this component */
</style>
```

---

## ⚡ Reactivity

```js
import { ref, reactive, computed, watch, watchEffect } from "vue";

const count = ref(0);            // primitives → .value
count.value++;

const state = reactive({ name: "Ada", age: 30 }); // objects
state.age++;

const double = computed(() => count.value * 2);    // derived, cached

watch(count, (newVal, oldVal) => console.log(newVal)); // explicit deps
watchEffect(() => console.log(count.value));           // auto-tracks deps
```

- **`ref`** — for primitives (access via `.value` in JS; auto-unwrapped in template).
- **`reactive`** — for objects.
- **`computed`** — cached derived values.
- **`watch` / `watchEffect`** — side effects on change.

---

## 🖍️ Template Syntax & Directives

```vue
<template>
  <!-- Interpolation -->
  <p>{{ message }}</p>

  <!-- Attribute binding (v-bind, shorthand :) -->
  <img :src="imageUrl" :alt="caption" />
  <div :class="{ active: isActive }" :style="{ color }"></div>

  <!-- Event binding (v-on, shorthand @) -->
  <button @click="handleClick">Click</button>
  <input @keyup.enter="submit" />

  <!-- Two-way binding -->
  <input v-model="text" />

  <!-- Conditionals -->
  <p v-if="show">Yes</p>
  <p v-else-if="maybe">Maybe</p>
  <p v-else>No</p>
  <p v-show="visible">Toggled via display</p>

  <!-- Lists -->
  <li v-for="(item, i) in items" :key="item.id">{{ i }}: {{ item.name }}</li>

  <!-- Raw HTML (⚠ XSS) -->
  <div v-html="rawHtml"></div>
</template>
```

---

## 🧩 Components, Props & Events

```vue
<!-- Child.vue -->
<script setup>
const props = defineProps({ title: String, count: { type: Number, default: 0 } });
const emit = defineEmits(["update", "close"]);
const notify = () => emit("update", props.count + 1);
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="notify">+1</button>
  <button @click="emit('close')">Close</button>
</template>
```

```vue
<!-- Parent.vue -->
<template>
  <Child :title="'Hello'" :count="5" @update="onUpdate" @close="onClose" />
</template>
```

### Slots (content projection)

```vue
<!-- Card.vue -->
<template>
  <div class="card">
	<slot name="header">Default header</slot>
	<slot></slot>                      <!-- default slot -->
	<slot name="footer" :year="2024"></slot> <!-- scoped slot -->
  </div>
</template>

<!-- Usage -->
<Card>
  <template #header><h2>Title</h2></template>
  <p>Body content</p>
  <template #footer="{ year }">© {{ year }}</template>
</Card>
```

---

## 🔄 Lifecycle Hooks

```js
import { onMounted, onUpdated, onUnmounted } from "vue";
onMounted(() => console.log("in DOM"));
onUpdated(() => console.log("re-rendered"));
onUnmounted(() => console.log("cleaned up"));
```

---

## ♻️ Composables (reusable logic)

Vue's answer to React hooks — extract stateful logic into functions.

```js
// useMouse.js
import { ref, onMounted, onUnmounted } from "vue";
export function useMouse() {
  const x = ref(0), y = ref(0);
  const update = (e) => { x.value = e.pageX; y.value = e.pageY; };
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));
  return { x, y };
}
```
```vue
<script setup>
import { useMouse } from "./useMouse";
const { x, y } = useMouse();
</script>
```

---

## 🌐 The Vue Ecosystem

| Tool | Purpose |
|---|---|
| **Vue Router** | Official SPA routing |
| **Pinia** | Official state management (replaces Vuex) |
| **Nuxt** | Meta-framework: SSR, SSG, file-based routing |
| **VueUse** | Huge collection of composables |
| **Vitest** | Unit testing (Vite-native) |
| **Vue Test Utils** | Component testing |
| **PrimeVue / Vuetify / Element Plus** | Component libraries |

### Pinia store

```js
import { defineStore } from "pinia";
export const useCounter = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: { double: (s) => s.count * 2 },
  actions: { increment() { this.count++; } },
});
```

### Vue Router

```js
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
	{ path: "/", component: Home },
	{ path: "/user/:id", component: User },
  ],
});
```

---

## ⚖️ Vue vs React vs Angular

| | Vue | React | Angular |
|---|---|---|---|
| Style | SFC templates | JSX | TS templates |
| Reactivity | Automatic (proxies) | Manual (setState/hooks) | Zones/Signals |
| Learning curve | Gentle | Medium | Steep |
| Opinionation | Balanced | Library | Full framework |

---

## ✅ Key Takeaways

- **SFCs** bundle template + logic + scoped styles.
- **`ref`/`reactive`/`computed`** power fine-grained reactivity automatically.
- Directives (`v-if`, `v-for`, `v-model`, `@`, `:`) drive templates.
- **Composables** share logic; **Pinia + Vue Router + Nuxt** complete the stack.

➡ **Next:** [Data & APIs](../49-Data-and-APIs/data-and-apis.md)

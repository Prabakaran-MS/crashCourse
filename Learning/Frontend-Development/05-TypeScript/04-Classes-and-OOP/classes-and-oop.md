# 🏛️ Classes & OOP

> 💼 **Industry Perspective:** In professional frontend teams, **Classes & OOP** is applied to build reliable, scalable, and maintainable production software. Engineers are expected to understand its trade-offs, best practices, and how it fits into modern architecture, code reviews, and day-to-day team workflows.

⬅ [Back to Index](../README.md)

> **Big idea:** Classes are **blueprints** for objects. TypeScript adds access modifiers, typed fields, interfaces, and abstract classes so object-oriented code is safe and self-documenting.

---

## 🧱 A basic class

```ts
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet(): string {
		return `Hi, I'm ${this.name}`;
	}
}

const ada = new Person("Ada", 36);
ada.greet(); // "Hi, I'm Ada"
```

### Shorthand: parameter properties

```ts
class Person {
	constructor(public name: string, private age: number) {}
	// name & age fields are created and assigned automatically
}
```

---

## 🔐 Access modifiers

| Modifier | Visible where |
|----------|---------------|
| `public` (default) | Everywhere |
| `private` | Only inside the class |
| `protected` | Inside the class and subclasses |
| `readonly` | Can be set once, then read-only |

```ts
class Account {
	private balance = 0;
	readonly owner: string;

	constructor(owner: string) { this.owner = owner; }

	deposit(amount: number): void { this.balance += amount; }
	getBalance(): number { return this.balance; }
}
```

---

## 🧬 Inheritance

```ts
class Animal {
	constructor(protected name: string) {}
	move(): string { return `${this.name} moves`; }
}

class Dog extends Animal {
	bark(): string { return `${this.name} says woof`; }
	move(): string { return super.move() + " (runs)"; } // override
}

const rex = new Dog("Rex");
rex.bark(); // "Rex says woof"
```

---

## 📜 Implementing interfaces

```ts
interface Drivable {
	speed: number;
	drive(): void;
}

class Car implements Drivable {
	speed = 0;
	drive(): void { this.speed = 60; }
}
```

---

## 🚫 Abstract classes

An abstract class can't be instantiated directly — it defines a contract for subclasses.

```ts
abstract class Shape {
	abstract area(): number;      // must be implemented
	describe(): string { return `Area is ${this.area()}`; }
}

class Circle extends Shape {
	constructor(private r: number) { super(); }
	area(): number { return Math.PI * this.r ** 2; }
}
```

---

## 🎛️ Getters, setters & static members

```ts
class Temperature {
	private _celsius = 0;
	static readonly ABSOLUTE_ZERO = -273.15; // shared across all instances

	get celsius(): number { return this._celsius; }
	set celsius(value: number) {
		if (value < Temperature.ABSOLUTE_ZERO) throw new Error("Too cold");
		this._celsius = value;
	}
}

const t = new Temperature();
t.celsius = 25;      // uses setter
console.log(t.celsius); // uses getter
```

---

⬅ [Back to Index](../README.md)

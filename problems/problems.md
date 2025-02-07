# JavaScript Scenario-Based Questions

## 1. Scope & Closures

### Scenario: Counter Function

You're tasked with creating a **counter function** that increments and keeps track of its state **without using global variables**.

### Question:

Write a function `createCounter` that returns an object with two methods:

-  `increment()`: Increases the counter by 1
-  `getCount()`: Returns the current count

```js
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
```

---

## 2. Hoisting

### Scenario: Function & Variable Hoisting

Consider the following code:

```js
console.log(foo);
var foo = 10;

console.log(bar);
let bar = 20;
```

### Question:

What will be the output of the above code, and why?

---

## 3. Asynchronous JavaScript (Promises & Callbacks)

### Scenario: Fetch Data with Promises

You need to write a function `fetchUserData` that simulates fetching user data from an API, but it should take **2 seconds** before resolving.

### Question:

Write an **async function** that returns a **Promise** which resolves after 2 seconds with `{ name: "John Doe", age: 30 }`.

```js
fetchUserData().then((data) => console.log(data));
// Output after 2 seconds: { name: "John Doe", age: 30 }
```

---

## 4. Event Loop & Microtasks

### Scenario: Execution Order

What will be the output of the following code?

```js
console.log("Start");

setTimeout(() => {
   console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
   console.log("Promise");
});

console.log("End");
```

### Question:

Explain the order of execution and the final output.

---

## 5. Deep Copy vs Shallow Copy

### Scenario: Cloning Objects

You need to create a deep copy of the following object:

```js
const user = {
   name: "Alice",
   address: {
      city: "New York",
      zip: 10001,
   },
};
```

### Question:

How would you create a **deep copy** of `user` so that modifying `address.city` in the copied object does **not** affect the original object?

---

## 6. Prototypal Inheritance

### Scenario: Implementing a Custom Prototype

You're designing a `Person` constructor function that should allow creating objects with `name` and a `greet()` method.

### Question:

Write a constructor function and use prototypal inheritance to add a method `greet()` that logs `"Hello, I am <name>"`.

```js
const person1 = new Person("Alice");
person1.greet(); // Output: Hello, I am Alice
```

---

## 7. Debouncing & Throttling

### Scenario: Optimizing Event Handling

You're building a **search bar** that sends an API request every time a user types. However, to improve performance, you want to **delay** the API request until the user stops typing for 500ms.

### Question:

Write a **debounce function** that ensures the API call is only made **after 500ms of inactivity**.

---

## 8. Array & Object Manipulation

### Scenario: Transform Data Structure

You receive an array of objects representing users:

```js
const users = [
   { id: 1, name: "Alice" },
   { id: 2, name: "Bob" },
   { id: 3, name: "Charlie" },
];
```

### Question:

Transform this array into an object where the `id` is the key, and the value is the corresponding name.

```js
// Expected output:
{
  "1": "Alice",
  "2": "Bob",
  "3": "Charlie"
}
```

---

## 9. Currying

### Scenario: Custom Multiplication Function

You need to create a function `multiply` that supports **currying**.

### Question:

Write a function `multiply` such that it can be used in both ways:

```js
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2)(3)); // Output: 6
```

---

## 10. Memory Leaks in JavaScript

### Scenario: Preventing Memory Leaks

A developer wrote the following code:

```js
let arr = [];
for (let i = 0; i < 1000000; i++) {
   arr.push(() => console.log(i));
}
```

### Question:

What potential issue does this code cause in terms of **memory management**, and how can you optimize it?

---

These questions will help you prepare for JavaScript challenges! 🚀

Here are **short and clear commit messages** for each question:

6. **Prototypal Inheritance**  
   📌 `Created Person constructor with prototype-based greet method`

7. **Debouncing**  
   📌 `Implemented debounce function for optimized input handling`

8. **Array & Object Manipulation**  
   📌 `Transformed array into object using id as key`

9. **Currying**  
   📌 `Implemented curried multiplication function`

10.   **Memory Leaks**  
      📌 `Identified and optimized potential memory leak in loop`

These messages follow best practices: **concise, descriptive, and action-oriented.** 🚀  
Let me know if you need any refinements!

## 11. Module Pattern

### Scenario: Encapsulation with Module Pattern

You need to create a module that encapsulates private variables and exposes public methods.

### Question:

### Question: Create a User Authentication Module

Implement an `AuthModule` using the Module Pattern with the following methods:

-  `login(username, password)`: Simulates logging in by storing the username if the password is correct.
-  `logout()`: Logs the user out by clearing the stored username.
-  `getUser()`: Returns the current logged-in username or "No user logged in" if no one is logged in.


## 12. Event Delegation


### Question:

Explain how you would use **event delegation** to handle click events on the list items.

Write the JavaScript code to handle the click events using event delegation.

```js
function handleItemClick(event) {
   if (event.target && event.target.nodeName === 'LI') {
      console.log('Item clicked:', event.target.textContent);
   }
}

document.getElementById('itemList').addEventListener('click', handleItemClick);
````

```

---
```

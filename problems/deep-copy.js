const user = {
   name: "Alice",
   address: {
      city: "New York",
      zip: 10001,
   },
};

const deepCopy = structuredClone(user);

console.log(deepCopy); // { a: 1, b: { c: 2 } }
console.log(user.address.city === deepCopy.address.city); // true (Deep copy!)


// 📌 `Implemented deep copy function for nested objects`  

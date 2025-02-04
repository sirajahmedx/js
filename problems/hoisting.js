// When you declare a variable using var, the declaration is hoisted to the top of its scope. This means that the variable foo is known to exist throughout the entire function or global scope, but it is not initialized until the line where it is assigned a value.
console.log(foo);
var foo = 10;

// Variables declared with let (and const) are also hoisted, but they are not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
console.log(bar);
let bar = 20;


// 📌 `Explored variable and function hoisting`  

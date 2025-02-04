// 01 --------------------------

let num1 = 10; // primitive data type defined
let num2 = num1; // copy of num1, not the actual reference
num2 = 20; // changing num2 does not affect num1

let user1 = { name: "Alice" }; // non-primitive data type defined
let user2 = user1; // reference to user1, not a copy
user2.name = "Bob"; // changes the actual value in user1

console.log(num1, num2); // num1 will be 10 and num2 will be 20
console.log(user1.name, user2.name); // both will be "Bob"

// 02 --------------------------------

let person1 = { name: "Alice" };
let person2 = person1;

person2.name = "Bob";

let person3 = { ...person1 }; // Spread operator

person3.name = "Charlie";

console.log(person1.name); // Bob
console.log(person2.name); // Bob
console.log(person3.name); // Charlie

// 03 ---------------------------------

let importantData = { data: "important" };
importantData = null; // The object is now unreachable, but memory is freed only when GC runs.

// 04 --------------------------------------

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };

obj2.a = 5;
obj2.b.c = 99; // Changes the original object's nested property

console.log(obj1.a); // it remains the same cause only nested objects directly get reference from the object
console.log(obj1.b.c); // 99 (Both objects share the same reference)

// important notes for avoiding memory leaks

// ✅ Remove event listeners when not needed (removeEventListener)
// ✅ Clear timers (clearInterval, clearTimeout)
// ✅ Avoid unnecessary global variables
// ✅ Manually set large objects to null when done
// ✅ Break circular references (obj.ref = null)

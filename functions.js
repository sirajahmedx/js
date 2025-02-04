function one(...parameters) {
   return parameters; // (...) here is being used as a rest operator which simply bundles the arguments into an array. If other parameters are given, for example (val, val2, ...parameters), the parameters will only get all other rest parameters which are not defined.
}

// console.log(one(1, 2, 4, 5, 6, 7, 8, 9, 10)); // Here it will only print the first value.
console.log(one(11, 12, 13, 14, 15, 16)); // After using the rest operator, we get this result: [ 11, 12, 13, 14, 15, 16 ]

//closure

function closure() {
   const outerUser = {
      name: "siraj",
      age: 15,
   };
   function inner() {
      const innerUser = {
         name: "gpt",
         age: 10,
      };
      console.log(outerUser); //it can access it's parent's values
   }
   inner();
   //    console.log(innerUser); //but it can't acces it's children's values
}
closure();

function another(values) {
   const nums = [];
   function inner() {
      for (let i = 0; i < values.length; i++) {
         nums.push(values[i] + 1);
      }
   }
   inner();
   return nums;
}

console.log(another([1, 2, 3, 4, 5, 6]));

// 01_greet

function greet(name) {
   return `Hello ${name}!`;
}

// 02_add

function add(a, b) {
   return a + b;
}

// 03_isEven
function isEven(n) {
   return n % 2 === 0;
}

// 04_multiplyByTwo

function multiplyByTwo(numbers) {
   return numbers.map((number) => number * 2);
}

// 05_toFahrenheit

function toFahrenheit(c) {
   return (c * 9) / 5 + 32;
}

// 06_longestWord
function longestWord(sentence) {
   const newSentence = sentence.split(" ");
   console.log("Sentence:", newSentence);
   let longestWord = newSentence[0];
   console.log("longest Word ", longestWord);
   for (let i = 0; i < newSentence.length; i++) {
      if (newSentence[i].length > longestWord.length) {
         longestWord = newSentence[i];
      }
   }
   return longestWord;
}
// console.log(longestWord("Siraj Is My Friend Who Are You KAKAKAKAKAKAKAKKAKA"));

// 07_countChar

function countChar(str, char) {
   const arr = str.split("");
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() === char.toLowerCase()) {
         count++;
      }
   }
   return count;
}
// console.log(countChar("SSSSSS", "s"));

// 08_removeDuplicates

function removeDuplicates(arr) {
   return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 31, 1, 1]));

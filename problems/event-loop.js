console.log("Start");

setTimeout(() => {
   console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
   console.log("Promise");
}); //it takes less time than timeout i don't know the reason but yess.

console.log("End"); //it will be executed 2nd because no matter where it is written but there isn't any promise it will be executed


// 📌 `Analyzed event loop execution order`  

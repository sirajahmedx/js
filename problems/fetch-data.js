async function fetchUserData() {
   return await fetch("https://reqres.in/api/users/1");
}
fetchUserData().then((data) => console.log(data));


// 📌 `Implemented async function to fetch user data`  

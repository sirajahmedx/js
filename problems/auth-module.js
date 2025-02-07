const AuthModule = (function () {
   let currentUser = null;

   return {
      login: function (username, password) {
         if (password === "secret") {
            currentUser = username;
            console.log(`User ${username} logged in.`);
         } else {
            console.log("Invalid password!");
         }
      },
      logout: function () {
         console.log(`User ${currentUser} logged out.`);
         currentUser = null;
      },
      getUser: function () {
         return currentUser
            ? `Current user: ${currentUser}`
            : "No user logged in";
      },
   };
})();

AuthModule.login("JohnDoe", "secret");
console.log(AuthModule.getUser());
AuthModule.logout();
console.log(AuthModule.getUser());

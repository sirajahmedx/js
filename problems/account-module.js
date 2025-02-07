const BankAccountModule = (function () {
   let balance = 0;

   return {
      deposit: function (amount) {
         if (amount > 0) {
            balance += amount;
            console.log(`Deposited: $${amount}`);
         } else {
            console.log("Deposit amount must be positive.");
         }
      },
      withdraw: function (amount) {
         if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: $${amount}`);
         } else {
            console.log("Insufficient funds or invalid amount.");
         }
      },
      getBalance: function () {
         return `Current Balance: $${balance}`;
      },
   };
})();

// Example usage:
BankAccountModule.deposit(100);
BankAccountModule.withdraw(30);
console.log(BankAccountModule.getBalance());

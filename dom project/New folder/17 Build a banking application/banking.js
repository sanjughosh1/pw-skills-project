// Define the customer object
const customer = {
    name: "John Doe",
    balance: 5000,
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account. New balance is ${this.balance}`);
    },
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient funds. ${this.name}'s account balance is ${this.balance}`);
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount} from ${this.name}'s account. New balance is ${this.balance}`);
      }
    }
  };
  
  // Test the functions
  customer.deposit(2000); // Deposited 2000 into John Doe's account. New balance is 7000
  customer.withdraw(3000); // Withdrew 3000 from John Doe's account. New balance is 4000
  customer.withdraw(5000); // Insufficient funds. John Doe's account balance is 4000
  
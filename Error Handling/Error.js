// 1. Type Conversion.

function convertToNumber(str) {
    try {
      const number = Number(str);
      
      if (Number.isNaN(number)) {
        throw new Error('Invalid number');
      }
      
      return number;
    } catch (error) {
      return 'Invalid number';
    }
  }

  // exampel

console.log(convertToNumber("123"));  // Output: 123
console.log(convertToNumber("abc"));  // Output: Invalid number

// 2. Building Robust Functions in JavaScript

function getPerson(personObj) {
    try {
      if (typeof personObj !== 'object' || personObj === null || Array.isArray(personObj)) {
        throw new Error('Invalid parameter type');
      }
  
      if (!personObj.hasOwnProperty('name') || !personObj.hasOwnProperty('age')) {
        throw new Error('Invalid parameter type');
      }
  
      const { name, age } = personObj;
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }

  //example

  console.log(getPerson({ name: "Mithun", age: 20 }));  // Output: "Name: Mithun, Age: 20"
console.log(getPerson({ name: "Mithun" }));  // Output: "Invalid parameter type"
console.log(getPerson(["name","Mithun"]));  // Output: "Invalid parameter type"

  
// 3. Car Description Class.

class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  // Instantiate an instance of the Car class
  const myCar = new Car("Skoda", "Rapid", 2022);
  
  // Call the getDescription metho
  console.log(myCar.getDescription()); // Output: "This is a 2022 Skoda Rapidy.

//   4. Employee Class Challenge.

class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee = new Employee("MIthin", "Manager", 8000);
  
  // Call the getSalary method
  console.log(employee.getSalary()); // Output: 8000
  
//   5. Implementing a Person Class with Default Values

class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class
  const person1 = new Person("Mithun", 20);
  const person2 = new Person(); // No arguments provided
  
  // Call the getDetails method
  console.log(person1.getDetails());
  console.log(person2.getDetails());

  
//   6. Using Static Method to Add Two Numbers with Calculator Class

class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  const result = Calculator.add(5, 10)
  console.log(result); 
  

//   7. Password Checker.

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return this.password.replace(/./g, '*');
    }
  
    setPassword(newPassword) {
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this.password = newPassword;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of the User class
  const user = new User("Mithun", "Password123");
  
  // Get the password (masked with asterisks)
  console.log(user.getPassword()); // Output: "***********"
  

  // Set a new unvalid password
  user.setPassword("MyPassword");


  // Set a new valid password
   user.setPassword("MyPassword123");
  
  console.log(user.getPassword());

//   8. Adding a Method to a Prototype.

function Student(name) {
    this.name = name;
  }
  
  Student.prototype.printDetails = function() {
    console.log(`Hello, The Student is ${this.name}`);
  };
  
  // Instantiate a Student object
  const student = new Student("Mithun");
  
  // Call the printDetails method
  student.printDetails();


//   9. Check the presence using closures.


function numberChecker(array) {
    return function(number) {
      return array.includes(number);
    };
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbers);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false

//   10. Filter by Category.

function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { name: "Shari", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  
  const clothingProduct = filterByCategory(products)("Clothing");
  
  console.log(clothingProduct);

  
  
  
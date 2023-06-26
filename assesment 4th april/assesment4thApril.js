// 1.
addNumbers(5, 10);
 // Call the function before it is declared

function addNumbers(a, b) {
  return a + b;
}

// 2.
multiplyNumbers(5, 10); // This will throw an error

var multiplyNumbers = function(a, b) {
  return a * b;
};

multiplyNumbers(5, 10); // Call the function after it is assigned
 

// 3.
function calculateSum(a, b) {
  console.log(num); // Output: undefined
  var num = a + b;
  console.log(num); // Output: sum of a and b
  return num;
}

calculateSum(5, 10);


// 4.
{
  console.log(varVariable); // Output: undefined
  console.log(letVariable); // Output: ReferenceError: Cannot access 'letVariable' before initialization
  console.log(constVariable); // Output: ReferenceError: Cannot access 'constVariable' before initialization

  var varVariable = 'Hello';
  let letVariable = 'World';
  const constVariable = '!';
  
  console.log(varVariable); // Output: 'Hello'
  console.log(letVariable); // Output: 'World'
  console.log(constVariable); // Output: '!'
}


// 5.
{
  console.log(variable); // Output: ReferenceError: Cannot access 'variable' before initialization
  let variable = 'Hello, world!';
  console.log(variable); // Output: 'Hello, world!'
}

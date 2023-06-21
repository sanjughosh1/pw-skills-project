// 1. Double using callback.
function doubleArrayElements(arr, callback) {
  // Create a new array to store the doubled elements
  const doubledArray = [];

  // Iterate over each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Use the callback function to double the current element
    const doubledElement = callback(arr[i]);

    // Add the doubled element to the new array
    doubledArray.push(doubledElement);
  }

  // Return the new array with doubled elements
  return doubledArray;
}

// Example usage:

// Define the callback function to double an element
function doubleElement(element) {
  return element * 2;
}

// Define an array of integers
const numbers = [1, 2, 3, 4, 5];

// Call the function with the array and the callback function
const doubledNumbers = doubleArrayElements(numbers, doubleElement);

// Output the result
console.log(doubledNumbers);

// 2. String Manipulation.

function manipulateString(str) {
  // Convert the string to uppercase
  const manipulatedString = str.toUpperCase();

  // Define the callback function to log the manipulated string
  function logString() {
    console.log("The manipulated string is: " + manipulatedString);
  }

  // Return the callback function
  return logString;
}

// Example usage:

// Call the manipulateString function with a string
const callback = manipulateString("Hello, World!");

// Call the returned callback function to log the manipulated string
callback();


// 3. Age in Days.

function ageInDays(person) {
  // Concatenate first and last name into fullName
  const fullName = person.firstName + " " + person.lastName;

  // Calculate age in days
  const ageInDays = person.age * 365;

  // Define the callback function to log the message
  function logMessage() {
    console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
  }

  // Return the callback function
  return logMessage;
}

// Example usage:

// Define an object with person's information
const personInfo = {
  firstName: "mitu",
  lastName: "s",
  age: 20
};

// Call the ageInDays function with the person's information
const calback = ageInDays(personInfo);

// Call the returned callback function to log the message
calback();


// 4. Arrange in alphabetical order.

function printBookTitles(books, callback) {
    // Use map to create a new list containing only the titles of the books
    const titles = books.map((book) => book.title);
  
    // Sort the titles in alphabetical order
    titles.sort();
  
    // Call the callback function with the sorted titles
    callback(titles);
  }
  
  // Example usage:
  
  // Define an array of book objects
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "1984", author: "George Orwell", year: 1949 }
  ];
  
  // Define the callback function to log the titles to the console
  function logBookTitles(titles) {
    console.log("Book titles in alphabetical order:");
    titles.forEach((title) => console.log(title));
  }
  
  // Call the printBookTitles function with the book list and the callback function
  printBookTitles(books, logBookTitles);
  

//   5. Greeting Promise.
function greetWithName(nam) {
    return new Promise((resolve, reject) => {
      const greetingMessage = "Hello, " + nam + "!";
  
      // Resolve the promise with the greeting message
      resolve(greetingMessage);
    });
  }
  
  // Example usage:
  
  // Call the greetWithName function with a name
  const nam = "Mithun";
  greetWithName(nam)
    .then((message) => {
      console.log(message);
      // Output: Hello, Mithun!
    })
    .catch((error) => {
      console.error(error);
    });

    // 6. Fetch results asynchronously


    function fetchDataFromAPI() {
        // Fetch data from the API
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then((data) => {
            // Log the fetched data to the console
            console.log(data);
          })
          .catch((error) => {
            // Log any errors to the console
            console.error('Error:', error);
          });
      }
      
      // Call the fetchDataFromAPI function
      fetchDataFromAPI();
    //   To use the function, simply call fetchDataFromAPI(). It will asynchronously fetch the data from the API and log the result to the console.
      

    //   7. Multiple requests

    async function fetchDataFromMultipleAPIs() {
        try {
          const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
            response.json()
          );
          const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) =>
            response.json()
          );
      
          // Wait for both promises to resolve
          const [todoData, postData] = await Promise.all([todoPromise, postPromise]);
      
          // Create an object with the combined results
          const combinedData = {
            todo: todoData,
            post: postData
          };
      
          // Log the combined data object
          console.log(combinedData);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      
      // Call the fetchDataFromMultipleAPIs function .. It will asynchronously retrieve data from both API endpoints, combine the results, and log them as an object.
     fetchDataFromMultipleAPIs();


    //   8. Get Data from API and Display it on the browser console.

    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
//   To use the program, simply place the code in a JavaScript file or script tag within an HTML file. When the program is executed, it will fetch the data from the specified API and log it to the console. 


//   9. Error Handling

fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
    // Display the error message on the webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred: ' + error.message;
    document.body.appendChild(errorMessage);
  });
//   To use the program, place the code in a JavaScript file or script tag within an HTML file. When the program is executed, it will attempt to fetch the data from the specified API. If an error occurs, it will log the error to the console and display an error message on the webpage.
  

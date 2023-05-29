// 1. Count the occurrences.

function countWords(string) {
    // Removing any leading or trailing spaces
    string = string.trim();
  
    // Splitting the string into words
    const words = string.split(/\s+/);
  
    // Creating an empty Map to store word counts
    const wordCounts = new Map();
  
    // Counting the occurrences of each word
    for (const word of words) {
      if (wordCounts.has(word)) {
        wordCounts.set(word, wordCounts.get(word) + 1);
      } else {
        wordCounts.set(word, 1);
      }
    }
  
    return wordCounts;
  }

//   for exampel

const text = "This is a sample string. This string contains words, some of which are repeated.";

const wordCounts = countWords(text);
for (const [word, count] of wordCounts) {
  console.log(`${word}: ${count}`);
}


// 2. Only unique items are allowed.

function removeDuplicates(numbers) {
    // Creating a new Set to store unique elements
    const uniqueSet = new Set(numbers);
  
    // Converting the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }

//   for example

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1, 4];

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);



// 3. Swap the values.

function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
//   for example
  
let x = 5;
let y = 10;

const swappedValues = swapValues(x, y);
console.log(swappedValues); // Output: [10, 5]
console.log(x); // Output: 5
console.log(y); // Output: 10


// 4. Access random elements.

function extractElements(array) {
    const [first, second, ...rest] = array;
    const last = rest.pop();
    return [first, second, last];
  }
  //   for example
   
   
  const array = [1, 2, 3, 4, 5];

  const extractedElements = extractElements(array);
  console.log(extractedElements); // Output: [1, 2, 5]
  
//   5. Min and max values.

function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }

    //   for example
  
  const arr = [5, 2, 7, 1, 9];

const result = findMaxAndMin(arr);
console.log(result); // Output: { max: 9, min: 1 }

// 6. Nested Objects.

function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }

  
  const person = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    }
  };
  
  const res = extractNameAndStreet(person);
  console.log(res);
  


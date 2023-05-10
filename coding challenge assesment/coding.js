// 1.reverse string

const input = "Hello, World!";


function reverseString(str) {
  return str.split("").reverse().join("");
}

setTimeout(() => {
  const reversed = reverseString(input);
  console.log(reversed);
}, 2000);

// 2. Random Number Generator with Delay and Progress Indication:

let delayInSeconds = 3;

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log("Random number generated:", randomNumber);
}

function countdown(delay) {
  let seconds = delay;
  const intervalId = setInterval(() => {
    console.log(`Time remaining: ${seconds} second(s)`);
    seconds--;

    if (seconds < 0) {
      clearInterval(intervalId);
      generateRandomNumber();
    }
  }, 1000);
}

setTimeout(() => {
  countdown(delayInSeconds);
}, delayInSeconds * 1000);

// 3. Build a feature for Store's Inventory.

const items = {
    item1: 10, // USD
    item2: 20, // USD
    item3: 30, // USD
  };
  
  const exchangeRate = 80; // 1 USD to 80 INR
  
  const convertedPrices = Object.entries(items).map(([itemName, priceInUSD]) => {
    const priceInRupees = priceInUSD * exchangeRate;
    return { itemName, priceInRupees };
  });
  
  console.log(convertedPrices);
  
//   4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2008 },
    { title: "Book 4", author: "author 4", year: 2015 },
  ];
  
  const filteredBooks = books
    .filter((book) => book.year >= 2010)
    .map((book) => ({
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year,
    }));
  
  console.log(filteredBooks);

  
//   5. URL validation.


function isValidURL(input) {
    const regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][A-Za-z]+$/;
  
    if (regex.test(input)) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }
  
  // Example usage
  isValidURL("http://example.com"); // Valid URL
  isValidURL("https://www.example.com"); // Valid URL
  isValidURL("http://123.com"); // Valid URL
  isValidURL("https://example"); // Invalid URL
  isValidURL("ftp://example.com"); // Invalid URL
  isValidURL("http://example"); // Invalid URL

  

//   6. LinkedIn Profile URL Validator.

function isValidLinkedInURL(input) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;
  
    if (regex.test(input)) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }
  
  // Example usage
  isValidLinkedInURL("https://www.linkedin.com/in/johndoe123"); // Valid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/in/jane-doe"); // Valid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/in/john_doe"); // Valid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/in/johndoexyzabc"); // Valid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/in/123"); // Invalid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/in/john-doe-"); // Invalid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/in/john!doe"); // Invalid LinkedIn profile URL
  isValidLinkedInURL("https://www.linkedin.com/profile"); // Invalid LinkedIn profile URL
  
// Define a function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Example usage
  const celsius = 20;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is ${fahrenheit}°F`);
  
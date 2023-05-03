// Define a function to calculate the rental cost
function calculateRentalCost(numDays, carType) {
    let rentalCost = 0;
    
    switch (carType) {
      case "economy": rentalCost = 4000;
      break;
      case "midsize": rentalCost = 10000;
      break;
      case "luxury": rentalCost = 20000;
      break;
      default: console.log("Invalid car type.");
      break;
    }
    
    const totalCost = rentalCost * numDays;
    return totalCost;
  }
  
  // Example usage
  const numDays = 5;
  const carType = "midsize";
  const rentalCost = calculateRentalCost(numDays, carType);
  console.log(`The total cost for a ${carType} car rental for ${numDays} days is Rs. ${rentalCost}/-`);
  
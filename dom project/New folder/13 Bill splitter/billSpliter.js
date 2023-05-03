// Define a function to calculate the total bill and the bill per person
function calculateBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
    const bill = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
    return bill;
  }
  
  // Example usage
  const costPerDish = 500;
  const numPeople = 4;
  const bill = calculateBill(costPerDish, numPeople);
  console.log(`The total bill is Rs. ${bill.totalBill}/- and each person should pay Rs. ${bill.billPerPerson}/-`);
  
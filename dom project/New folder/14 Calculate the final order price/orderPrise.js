// Define an arrow function to calculate the total cost of items in a cart
const calculateTotalCost = (cart) => {
    let totalCost = 0;
    
    cart.forEach(item => {
      totalCost += item.unitPrice * item.quantity;
    });
    
    return totalCost;
  }
  
  // Example usage
  const cart = [
    { unitPrice: 500, quantity: 2 },
    { unitPrice: 1000, quantity: 1 },
    { unitPrice: 250, quantity: 4 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(`The total cost of items in the cart is Rs. ${totalCost}/-`);
  
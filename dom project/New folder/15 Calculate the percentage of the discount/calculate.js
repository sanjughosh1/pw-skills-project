const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  const originalPrice = 1000;
  const discountedPrice = 750;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`You save ${discountPercentage}%`);
    
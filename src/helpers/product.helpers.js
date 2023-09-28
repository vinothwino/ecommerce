export const getDiscountPrice = (originalPrice, discountPercentage) =>
  originalPrice + (originalPrice * discountPercentage) / 100;

export const getDiscount = (price, percent) => {
  return Math.round(price - (price / 100) * percent)
}

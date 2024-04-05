
export const getTotalPrice = (a) => {
  return a.reduce((sum, el) => el.price + sum, 0)
}

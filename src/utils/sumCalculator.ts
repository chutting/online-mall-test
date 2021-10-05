export const sumCalculator = (price: string, number: string | number) => {
  if (!Number(price) || !Number(number)) {
    return '0.00'
  }
  return (Number(price) * Number(number)).toFixed(2).toString()
}

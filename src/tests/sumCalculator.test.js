const { sumCalculator } = require('../utils/sumCalculator')

test('input two string type number, output the result of multiply', () => {
  expect(sumCalculator('123.23', '2')).toBe('246.46')
})

test('input string and number, output the result of multiply', () => {
  expect(sumCalculator('123.23', 2)).toBe('246.46')
})

test('output 0.00 when input is invalid', () => {
  expect(sumCalculator('123.3F', 2)).toBe('0.00')
})

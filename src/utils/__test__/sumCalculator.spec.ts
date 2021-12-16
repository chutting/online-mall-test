import { sumCalculator } from '../sumCalculator'

describe('sumCalculator', () => {
  it('should output the multiply of two string type numbers', () => {
    expect(sumCalculator('123.23', '2')).toBe('246.46')
  })

  it('should output the multiply of string and number', () => {
    expect(sumCalculator('123.23', 2)).toBe('246.46')
  })

  it('should output 0.00 when input is invalid', () => {
    expect(sumCalculator('123.3F', 2)).toBe('0.00')
  })
})

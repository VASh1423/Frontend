const {sum, nativeNull} = require('./intro')

describe('Sum function', () => {
  test('should return sum of two values', () =>{
    expect(sum(1, 4)).toBe(5)
    expect(sum(1, 4)).toEqual(5)
  })
  
  test('should return value correctly comparing to other', () =>{
    expect(sum(1, 4)).toBeGreaterThan(4)
    expect(sum(1, 4)).toBeGreaterThanOrEqual(5)
    expect(sum(1, 4)).toBeLessThan(6)
    expect(sum(1, 4)).toBeLessThanOrEqual(5)
  })
  
  test('should sum 2 float values correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('nativeNull function', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})


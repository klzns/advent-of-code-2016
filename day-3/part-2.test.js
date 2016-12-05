const input = require('./input')
const { parseInputCol, isTriangle } = require('./modules')

describe('Day 3 - Part 2', () => {
  it('is the right solution', () => {
    const result = parseInputCol(input).filter(isTriangle).length

    expect(result).toBe(1921)
  })
})

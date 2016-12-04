const input = require('./input')
const { parseInputCol, isTriangle } = require('./modules')

describe('Day 3 - Part 2', () => {
  it.only('is the right solution', () => {
    const result = parseInputCol(input).reduce(
      (count, triangle) => isTriangle(triangle) ? count + 1 : count
    , 0)

    expect(result).toBe(1921)
  })
})

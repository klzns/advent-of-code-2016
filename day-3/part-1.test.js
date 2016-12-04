const input = require('./input')
const { parseInputRow, isTriangle } = require('./modules')

describe('Day 3 - Part 1', () => {
  it.only('is the right solution', () => {
    const result = parseInputRow(input).reduce(
      (count, triangle) => isTriangle(triangle) ? count + 1 : count
    , 0)

    expect(result).toBe(1050)
  })
})

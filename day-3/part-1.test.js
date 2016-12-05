const input = require('./input')
const { parseInputRow, isTriangle } = require('./modules')

describe('Day 3 - Part 1', () => {
  it('is the right solution', () => {
    const result = parseInputRow(input).filter(isTriangle).length

    expect(result).toBe(1050)
  })
})

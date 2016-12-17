const { solve } = require('../part-1')

describe('Day 6', () => {
  it('solve the example', () => {
    const input = require('./exampleInput')

    const message = solve(input)

    expect(message).toBe('easter')
  })

  it('solve the puzzle', () => {
    const input = require('./input')

    const message = solve(input)

    expect(message).toBe('kqsdmzft')
  })
})

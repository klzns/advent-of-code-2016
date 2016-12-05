const { parseInput } = require('./modules')

describe('Day 1 - Modules', () => {
  it('should parse the input', () => {
    const input = 'R4, R3, L331, L21, L1'

    const result = parseInput(input)

    expect(result).toEqual(['R4', 'R3', 'L331', 'L21', 'L1'])
  })
})

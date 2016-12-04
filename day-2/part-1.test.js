const { readInstructions } = require('./modules')
const input = require('./input')

describe('Day 2 - Part 1', () => {
  const pad = {
    '2,0': 9,
    '2,1': 6,
    '2,2': 3,
    '1,0': 8,
    '1,1': 5,
    '1,2': 2,
    '0,0': 7,
    '0,1': 4,
    '0,2': 1,
  }

  it('respects the example', () => {
    const input = `ULL
      RRDDD
      LURDL
      UUUUD`

    const code = readInstructions(input, pad)

    expect(code).toBe('1985')
  })

  it('is the right solution', () => {
    const code = readInstructions(input, pad)

    expect(code).toBe('78293')
  })
})

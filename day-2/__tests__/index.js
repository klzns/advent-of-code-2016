const input = require('../input')
const { readInstructions } = require('../modules')

describe('Day 2', () => {
  describe('Part 1', () => {
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

  describe('Part 2', () => {
    it('is the right solution', () => {
      const pad = {
        '0,2': '5',
        '1,1': 'A',
        '1,2': '6',
        '1,3': '2',
        '2,0': 'D',
        '2,1': 'B',
        '2,2': '7',
        '2,3': '3',
        '2,4': '1',
        '3,1': 'C',
        '3,2': '8',
        '3,3': '4',
        '4,2': '9',
      }

      const code = readInstructions(input, pad)

      expect(code).toBe('AC8C8')
    })
  })
})

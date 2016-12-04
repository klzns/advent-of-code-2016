const { readInstructions } = require('./modules')
const input = require('./input')

test('get the code in a normal pad', () => {
  const input = `ULL
    RRDDD
    LURDL
    UUUUD`

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

  const code = readInstructions(input, pad)

  expect(code).toBe('1985')
})

test('get the code in the real pad', () => {
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

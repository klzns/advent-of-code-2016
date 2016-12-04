const input = require('./input')
const { readInstructions } = require('./modules')

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
console.log(code)

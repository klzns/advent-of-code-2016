const input = require('./input')
const { readInstructions } = require('./modules')

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
console.log(code)

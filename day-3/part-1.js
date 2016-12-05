const { isTriangle, parseInputRow } = require('./modules')
const input = require('./input')

const result = parseInputRow(input).filter(isTriangle).length

console.log(result)

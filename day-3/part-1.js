const { isTriangle, parseInputRow } = require('./modules')
const input = require('./input')

const result = parseInputRow(input).reduce(
  (count, triangle) => isTriangle(triangle) ? count + 1 : count
, 0)

console.log(result)

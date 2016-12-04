const input = require('./input')
const { isTriangle, parseInputCol } = require('./modules')

const result = parseInputCol(input).reduce(
  (count, triangle) => isTriangle(triangle) ? count + 1 : count
, 0)

console.log(result)

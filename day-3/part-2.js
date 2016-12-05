const input = require('./input')
const { isTriangle, parseInputCol } = require('./modules')

const result = parseInputCol(input).filter(isTriangle).length

console.log(result)

const input = require('./input')
const { isTriangle } = require('./modules')

function parseInput(input) {
  return input.split('\n')
    .map((line) =>
      line.split(' ').reduce((triangle, item) =>
        item ? triangle.concat([parseInt(item)]) : triangle
      , [])
    )
}

const result = parseInput(input).reduce(
  (count, triangle) => isTriangle(triangle) ? count + 1 : count
, 0)

console.log(result)

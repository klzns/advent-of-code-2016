var input = require('./input')

function isTriangle(triangle) {
  return triangle[0] + triangle[1] > triangle[2] &&
         triangle[1] + triangle[2] > triangle[0] &&
         triangle[2] + triangle[0] > triangle[1]
}

// TODO - add to tests
// const example = [5, 10, 25]

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

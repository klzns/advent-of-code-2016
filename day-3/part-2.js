const { isTriangle } = require('./modules')
const input = require('./input')

function parseInput(input) {
  let lines = input.split('\n')
    .map((line) =>
      line.split(' ').reduce((triangle, item) =>
        item ? triangle.concat([parseInt(item)]) : triangle
      , [])
    )

  let triangles = []
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < lines.length; i = i + 3) {
      triangles.push([lines[i][j], lines[i + 1][j], lines[i + 2][j]])
    }
  }

  return triangles
}

const result = parseInput(input).reduce(
  (count, triangle) => isTriangle(triangle) ? count + 1 : count
, 0)

console.log(result)

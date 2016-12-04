function isTriangle(triangle) {
  return triangle[0] + triangle[1] > triangle[2] &&
         triangle[1] + triangle[2] > triangle[0] &&
         triangle[2] + triangle[0] > triangle[1]
}

function parseInputRow(input) {
  return input.split('\n')
    .map((line) =>
      line.split(' ').reduce((triangle, item) =>
        item ? triangle.concat([parseInt(item)]) : triangle
      , [])
    )
}

function parseInputCol(input) {
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

module.exports = { isTriangle, parseInputRow, parseInputCol }

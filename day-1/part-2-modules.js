const { step, turn, getInstruction } = require('./modules')

function visit(visited, pos) {
  const key = pos.join(',')
  visited[key] = true
  return visited
}

function wasVisitedBefore(visited, pos) {
  return visited[pos.join(',')] || false
}

function findPlaceVisitedTwice(pos, facing, path) {
  let visited = visit({}, pos)

  for (let i = 0; i < path.length; i++) {
    let instruction = getInstruction(path[i])
    facing = turn(facing, instruction.direction)

    for (let j = 0; j < instruction.blocks; j++) {
      pos = step(pos, facing)
      if (wasVisitedBefore(visited, pos)) {
        return pos
      }
      visited = visit(visited, pos)
    }
  }

  return pos
}

module.exports = findPlaceVisitedTwice

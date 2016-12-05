const { walk, turn, getInstruction } = require('./modules')

function walkPath(pos, facing, path) {
  for (let i = 0; i < path.length; i++) {
    let instruction = getInstruction(path[i])
    facing = turn(facing, instruction.direction)
    pos = walk(pos, facing, instruction.blocks)
  }

  return pos
}

module.exports = walkPath

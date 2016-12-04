const U = 'U'
const D = 'D'
const L = 'L'
const R = 'R'

function move(pos, direction, pad) {
  let tempPos

  switch (direction) {
    case U:
      tempPos = [pos[0], pos[1] + 1]
      break
    case D:
      tempPos = [pos[0], pos[1] - 1]
      break
    case L:
      tempPos = [pos[0] - 1, pos[1]]
      break
    case R:
      tempPos = [pos[0] + 1, pos[1]]
      break
    default:
      throw new Error(`Direction ${direction} does not exist`)
  }

  if (canMove(tempPos, pad)) {
    return tempPos
  }

  return pos
}

function canMove(pos, pad) {
  return pad[pos.join(',')] || false
}

function pressButton(code, pos, pad) {
  const button = pad[pos.join(',')]
  return code + button
}

function readLine(pos, line, pad) {
  return line.reduce((pos, direction) =>
    move(pos, direction, pad)
  , pos)
}

function readInstructions(input, pad) {
  let instructions = parseInput(input)
  let result = instructions.reduce((memo, line) => {
    let pos = readLine(memo.pos, line, pad)
    let code = pressButton(memo.code, pos, pad)
    return { code, pos }
  }, { code: '', pos: [1, 1] })

  return result.code
}

function parseInput(input) {
  return input.split('\n').map(line => line.trim().split(''))
}

module.exports = {
  move,
  pressButton,
  readInstructions,
  parseInput,
}

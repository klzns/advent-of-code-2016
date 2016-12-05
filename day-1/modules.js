const RIGHT = 'R'
const LEFT = 'L'
const NORTH = 'N'
const SOUTH = 'S'
const EAST = 'E'
const WEST = 'W'

function turnRight(facing) {
  switch (facing) {
    case NORTH:
      return EAST
    case EAST:
      return SOUTH
    case SOUTH:
      return WEST
    case WEST:
      return NORTH
    default:
      throw new Error(`Direction ${facing} doest not exist`)
  }
}

function turnLeft(facing) {
  switch (facing) {
    case NORTH:
      return WEST
    case EAST:
      return NORTH
    case SOUTH:
      return EAST
    case WEST:
      return SOUTH
    default:
      throw new Error(`Direction ${facing} doest not exist`)
  }
}

function turn(facing, direction) {
  switch (direction) {
    case LEFT:
      return turnLeft(facing)
    case RIGHT:
      return turnRight(facing)
    default:
      throw new Error(`Direction ${direction} is not valid`)
  }
}

function walk(pos, facing, blocks) {
  switch (facing) {
    case NORTH:
      return [pos[0], pos[1] + blocks]
    case EAST:
      return [pos[0] + blocks, pos[1]]
    case SOUTH:
      return [pos[0], pos[1] - blocks]
    case WEST:
      return [pos[0] - blocks, pos[1]]
    default:
      throw new Error(`Direction ${facing} is not valid`)
  }
}

function step(pos, facing) {
  switch (facing) {
    case NORTH:
      return [pos[0], pos[1] + 1]
    case EAST:
      return [pos[0] + 1, pos[1]]
    case SOUTH:
      return [pos[0], pos[1] - 1]
    case WEST:
      return [pos[0] - 1, pos[1]]
    default:
      throw new Error(`Direction ${facing} is not valid`)
  }
}

function distance(pos) {
  return Math.abs(pos[0]) + Math.abs(pos[1])
}

const path = new RegExp(/([LR])(\d{1,3})/)
function getInstruction(instruction) {
  const [, direction, blocks] = path.exec(instruction)

  return {
    direction: direction,
    blocks: parseInt(blocks),
  }
}

function parseInput(input) {
  return input.split(', ')
}

module.exports = { getInstruction, turn, walk, step, distance, parseInput }


const input = ['R4', 'R3', 'L3', 'L2', 'L1', 'R1', 'L1', 'R2', 'R3', 'L5', 'L5', 'R4', 'L4', 'R2', 'R4', 'L3', 'R3', 'L3', 'R3', 'R4', 'R2', 'L1', 'R2', 'L3', 'L2', 'L1', 'R3', 'R5', 'L1', 'L4', 'R2', 'L4', 'R3', 'R1', 'R2', 'L5', 'R2', 'L189', 'R5', 'L5', 'R52', 'R3', 'L1', 'R4', 'R5', 'R1', 'R4', 'L1', 'L3', 'R2', 'L2', 'L3', 'R4', 'R3', 'L2', 'L5', 'R4', 'R5', 'L2', 'R2', 'L1', 'L3', 'R3', 'L4', 'R4', 'R5', 'L1', 'L1', 'R3', 'L5', 'L2', 'R76', 'R2', 'R2', 'L1', 'L3', 'R189', 'L3', 'L4', 'L1', 'L3', 'R5', 'R4', 'L1', 'R1', 'L1', 'L1', 'R2', 'L4', 'R2', 'L5', 'L5', 'L5', 'R2', 'L4', 'L5', 'R4', 'R4', 'R5', 'L5', 'R3', 'L1', 'L3', 'L1', 'L1', 'L3', 'L4', 'R5', 'L3', 'R5', 'R3', 'R3', 'L5', 'L5', 'R3', 'R4', 'L3', 'R3', 'R1', 'R3', 'R2', 'R2', 'L1', 'R1', 'L3', 'L3', 'L3', 'L1', 'R2', 'L1', 'R4', 'R4', 'L1', 'L1', 'R3', 'R3', 'R4', 'R1', 'L5', 'L2', 'R2', 'R3', 'R2', 'L3', 'R4', 'L5', 'R1', 'R4', 'R5', 'R4', 'L4', 'R1', 'L3', 'R1', 'R3', 'L2', 'L3', 'R1', 'L2', 'R3', 'L3', 'L1', 'L3', 'R4', 'L4', 'L5', 'R3', 'R5', 'R4', 'R1', 'L2', 'R3', 'R5', 'L5', 'L4', 'L1', 'L1']

const RIGHT = 'RIGHT'
const LEFT = 'LEFT'
const path = new RegExp(/([LR])(\d{1,3})/)
function getInstruction(instruction) {
  const [all, direction, blocks] = path.exec(instruction)

  return {
    direction: direction === 'R' ? RIGHT : LEFT,
    blocks: parseInt(blocks),
  }
}

const NORTH = 'NORTH'
const SOUTH = 'SOUTH'
const EAST = 'EAST'
const WEST = 'WEST'

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
  }
}

function start(path) {
  let pos = [0, 0]
  let facing = NORTH

  for (let i = 0; i < path.length; i++) {
    let instruction = getInstruction(path[i])
    facing = turn(facing, instruction.direction)
    pos = walk(pos, facing, instruction.blocks)
  }

  return pos
}

function distance(pos) {
  return Math.abs(pos[0]) + Math.abs(pos[1])
}

const pos = start(input)
const distanceWalked = distance(pos)

console.log(distanceWalked)
const input = require('./input')
const { distance, parseInput } = require('./modules')
const walkPath = require('./part-1-modules')

const pos = walkPath([0, 0], 'N', parseInput(input))
const distanceWalked = distance(pos)

console.log(distanceWalked)

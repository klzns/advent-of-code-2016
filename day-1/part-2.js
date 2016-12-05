const input = require('./input')
const { distance, parseInput } = require('./modules')
const findPlaceVisitedTwice = require('./part-2-modules')

const pos = findPlaceVisitedTwice([0, 0], 'N', parseInput(input))
const distanceWalked = distance(pos)

console.log(distanceWalked)

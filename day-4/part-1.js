const decode = require('./part-1-modules')
const input = require('./input')

console.log(input.split('\n').reduce((sum, room) => sum + (decode(room) || 0), 0))

const { parseRoom, rotate } = require('./part-2-modules')

let room = 'qzmt-zixmtkozy-ivhz-343[abxyz]'

const { letters, sectionId } = parseRoom(room)
const rotatedLetters = rotate(letters, sectionId)

const expected = 'very encrypted name'
console.log(`Got:\t\t${rotatedLetters.join('')}
Expected:\t${expected}
${expected === rotatedLetters.join('') ? 'PASSED' : 'ERROR'}`)

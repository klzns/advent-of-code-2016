const { decode, parseRoom, rotate } = require('./day-4-part-2')

let room = 'qzmt-zixmtkozy-ivhz-343[abxyz]'

const { letters, checkSum, sectionId } = parseRoom(room)
const rotatedLetters = rotate(letters, sectionId)

const expected = 'very encrypted name'
console.log(`Got:\t\t${rotatedLetters.join('')}
Expected:\t${expected}
${expected === rotatedLetters.join('') ? 'PASSED' : 'ERROR'}`)
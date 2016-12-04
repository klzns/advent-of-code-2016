const { findRoom, parseRoom, rotate } = require('./part-2-modules')
const input = require('./input')

describe('Day 4 - Part 2', () => {
  it('have the name of the room decrypted', () => {
    const room = 'qzmt-zixmtkozy-ivhz-343[abxyz]'
    const { letters, sectionId } = parseRoom(room)
    const rotatedLetters = rotate(letters, sectionId)
    const name = rotatedLetters.join('')
    const expected = 'very encrypted name'

    expect(name).toBe(expected)
  })

  it('is the right solution', () => {
    const rooms = input.split('\n')
    const foundRoom = findRoom(rooms, 'north')

    expect(foundRoom).toBeDefined()
    expect(foundRoom.sectionId).toBe(482)
  })
})

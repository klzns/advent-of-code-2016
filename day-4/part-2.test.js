const { parseRoom, rotate } = require('./part-2-modules')

test('decrypted name of the room', () => {
  const room = 'qzmt-zixmtkozy-ivhz-343[abxyz]'
  const { letters, sectionId } = parseRoom(room)
  const rotatedLetters = rotate(letters, sectionId)
  const name = rotatedLetters.join('')
  const expected = 'very encrypted name'

  expect(name).toBe(expected)
})

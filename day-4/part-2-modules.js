function parseRoom(room) {
  const r = new RegExp(/([a-z-]+)-(\d+)\[(.+?)]/)
  const [, letters, sectionId] = room.match(r)

  return {
    letters: letters.replace(/-/g, ' ').split(''),
    sectionId: parseInt(sectionId),
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const posAlphabet = alphabet.split('')
const alphabetLenght = posAlphabet.length

function rotateLetter(letter, times) {
  if (letter === ' ') return letter

  const index = posAlphabet.indexOf(letter)
  const newIndex = (index + times) % alphabetLenght

  return posAlphabet[newIndex]
}

function rotate(letters, times) {
  return letters.map((letter) => rotateLetter(letter, times))
}

function decode(room) {
  const { letters, sectionId } = parseRoom(room)
  const rotatedLetters = rotate(letters, sectionId)

  const name = rotatedLetters.join('')

  return { name, sectionId }
}

function findRoom(rooms, name) {
  for (let i = 0; i < rooms.length; i++) {
    const decodedRoom = decode(rooms[i])
    if (decodedRoom.name.indexOf(name) !== -1) {
      return decodedRoom
    }
  }

  return null
}

module.exports = { findRoom, decode, parseRoom, rotate }

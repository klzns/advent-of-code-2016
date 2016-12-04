function parseRoom(room) {
  const r = new RegExp(/([a-z-]+)-(\d+)\[(.+?)]/)
  const [, letters, sectionId] = room.match(r)

  return {
    letters: letters.replace(/-/g, ' ').split(''),
    sectionId: parseInt(sectionId),
  }
}

function nextLetterOf(letter) {
  if (letter === ' ') return letter

  var c = letter.charCodeAt(0)
  switch (c) {
    case 122:
      return 'a'
    default:
      return String.fromCharCode(++c)
  }
}

function rotate(letters, times) {
  for (let i = 0; i < times; i++) {
    letters = letters.map((letter) => nextLetterOf(letter))
  }

  return letters
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

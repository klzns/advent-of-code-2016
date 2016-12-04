function parseRoom(room) {
  const r = new RegExp(/([a-z-]+)-(\d+)\[(.+?)]/)
  const [, letters, sectionId, checkSum] = room.match(r)

  return {
    checkSum,
    letters: letters.replace(/-/g, '').split(''),
    sectionId: parseInt(sectionId),
  }
}

function countLetters(letters) {
  return letters.reduce((memo, letter) => {
    if (memo[letter]) memo[letter]++
    else memo[letter] = 1
    return memo
  }, {})
}

function mapLettersToArray(count) {
  let result = []

  for (let letter in count) {
    result.push({ letter, value: count[letter]})
  }

  return result
}

function sortLetters(a, b) {
  if (a.value > b.value) {
    return -1
  }

  if (a.value < b.value) {
    return 1
  }

  if (a.letter > b.letter) {
    return 1
  }

  if (a.letter < b.letter) {
    return -1
  }

  throw new Error('All cases must be satisfied by now')
}

function check(letters, checkSum) {
  let count = countLetters(letters)
  let sortedLetters = mapLettersToArray(count).sort(sortLetters)

  for (let i = 0; i < checkSum.length; i++) {
    if (checkSum[i] !== sortedLetters[i].letter) {
      return false
    }
  }

  return true
}

function decode(room) {
  const { letters, checkSum, sectionId } = parseRoom(room)
  const realRoom = check(letters, checkSum)

  return realRoom ? sectionId : null
}

module.exports = decode

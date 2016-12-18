const takeFirst = (array) => array[0]
const takeLast = (array) => array[array.length - 1]
const countLine = (line) => line.reduce(incrementOrInsert, {})
const sortCount = (count) => objToArray(count).sort(sort)
const getChar = (obj) => obj.char
const sort = (a, b) => a.value > b.value ? -1 : 1

const objToArray = (obj) => {
  let array = []

  for (let key in obj) {
    array.push({ char: key, value: obj[key] })
  }

  return array
}

const incrementOrInsert = (count, char) => {
  count[char] !== void 0 ? count[char] += 1 : count[char] = 0
  return count
}

const parseInputStringToArray = (input) => input.split('\n').map(line => line.split(''))

const transposeMatrix = (array) =>
  array[0].map((col, i) => array.map(row => row[i]))

const compose = (...funcs) =>
  funcs.reduce((memo, b) => (...args) => memo(b(...args)))

const parseInput = compose(transposeMatrix, parseInputStringToArray)
const leastFrequent = compose(getChar, takeLast, sortCount, countLine)
const mostFrequent = compose(getChar, takeFirst, sortCount, countLine)

const getMessage = (fn) =>
  (input) =>
    input.reduce((message, line) =>
      message + fn(line)
    , '')

module.exports.solvePart1 = compose(getMessage(mostFrequent), parseInput)
module.exports.solvePart2 = compose(getMessage(leastFrequent), parseInput)

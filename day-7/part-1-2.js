const parseInput = (input) => input.split('\n')

function solvePart1(input) {
  return parseInput(input).filter(supportTLS).length
}

function solvePart2(input) {
  return parseInput(input).filter(supportSSL).length
}

const getGroups = (string) =>
  string.split(/\[|]/).reduce((memo, sequence, i) => {
    i % 2 ? memo.hypernet.push(sequence) : memo.supernet.push(sequence)
    return memo
  }, { hypernet: [], supernet: [] })

/* Part 1 */
const hasABBA = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (isFourthEqual(string, i) && differentPairs(string, i) && isInnerPair(string, i)) {
      return true
    }
  }
  return false
}

const isFourthEqual = (string, start) => string[start] === string[start + 3]
const differentPairs = (string, start) => string[start] !== string[start + 1]
const isInnerPair = (string, start) => string[start + 1] === string[start + 2]

function supportTLS(ip) {
  const groups = getGroups(ip)

  return !groups.hypernet.some(hasABBA) && groups.supernet.some(hasABBA)
}

/* Part 2 */
function supportSSL(ip) {
  const groups = getGroups(ip)

  const abas = groups.supernet.reduce(getAllABAs, [])
  const babs = groups.hypernet.reduce(getAllABAs, [])

  return abas.find((aba) => babs.find((bab) => isBABofABA(aba, bab))) || false
}

const getAllABAs = (abas, sequence) => {
  for (let i = 0; i < sequence.length; i++) {
    const subsequence = sequence.slice(i, i + 3)
    if (isABA(subsequence)) {
      abas.push(subsequence)
    }
  }
  return abas
}

const isABA = (string) => string[0] === string[2] && string[0] !== string[1]
const isBABofABA = (aba, bab) => (aba[1] + aba[0] + aba[1]) === bab

module.exports = {
  hasABBA,
  supportTLS,
  getGroups,
  solvePart1,
  solvePart2,
}

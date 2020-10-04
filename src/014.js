const collatzCache = [0, 1]
let maxStart,
  maxCollatzSequenceLength = 0

const getCollatzSequenceLength = (x) => {
  const cache = collatzCache[x]
  let result
  if (cache) return cache
  if (x % 2 === 0) {
    result = getCollatzSequenceLength(x / 2) + 1
  } else {
    result = getCollatzSequenceLength(3 * x + 1) + 1
  }
  collatzCache[x] = result
  return result
}

// console.log(getCollatzSequenceLength(13))

for (let i = 1; i < 1000000; i++) {
  const collatzSequenceLength = getCollatzSequenceLength(i)
  if (maxCollatzSequenceLength < collatzSequenceLength) {
    maxStart = i
    maxCollatzSequenceLength = collatzSequenceLength
  }
}

console.log(maxStart, maxCollatzSequenceLength)

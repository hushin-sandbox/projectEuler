const range = (start, stop) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i)

const sumOfSquares = (x) => {
  return range(1, x)
    .map((x) => x ** 2)
    .reduce((x, y) => x + y)
}

const squaresOfSum = (x) => {
  return range(1, x).reduce((x, y) => x + y) ** 2
}

// console.log(sumOfSquares(10))
// console.log(squaresOfSum(10))

console.log(squaresOfSum(100) - sumOfSquares(100))

const sum = (numText) =>
  numText
    .split('')
    .map((x) => parseInt(x, 10))
    .reduce((a, b) => a + b)

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
    BigInt(start + i * step)
  )

const factorial = (n) => range(n, 1, -1).reduce((a, b) => a * b)

console.log(sum(factorial(100).toString()))

const sum = (numText) =>
  numText
    .split('')
    .map((x) => parseInt(x, 10))
    .reduce((a, b) => a + b)

const bigNum = (2n ** 1000n).toString()

console.log(sum(bigNum))

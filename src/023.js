const range = (start, stop) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i)

// 約数を求める
const getDivisors = (x) => {
  const divisors = [1]
  const sqrt = Math.sqrt(x)
  for (let i = 2; i <= x / sqrt; i++) {
    if (x % i === 0) {
      const y = x / i
      divisors.push(i)
      if (i !== y) {
        divisors.push(y)
      }
    }
  }
  return divisors
}
const sum = (nums) => nums.reduce((a, b) => a + b)

// 28123 以下の過剰数を先に求めておく
const abundantNumbers = range(1, 28123).filter((x) => x < sum(getDivisors(x)))
// console.log(abundantNumbers)
const abundantNumbersLength = abundantNumbers.length

// 2つの過剰数の和で書き表せない正の整数の総和を求める
const canBeWritten = (x) => {
  for (let i = 0; i < abundantNumbersLength; i++) {
    for (let j = i; j < abundantNumbersLength; j++) {
      const sum = abundantNumbers[i] + abundantNumbers[j]
      if (sum > x) break
      if (sum === x) return true
    }
  }
  return false
}
const result = sum(range(1, 28123).filter((x) => !canBeWritten(x)))

// TODO 計算量が多すぎる
console.log(result)

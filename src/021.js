// 約数を求める
const getDivisors = (x) => {
  const divisors = [1]
  const sqrt = Math.sqrt(x)
  for (let i = 2; i <= x / sqrt; i++) {
    if (x % i === 0) {
      divisors.push(i, x / i)
    }
  }
  return divisors
}
const sum = (nums) => nums.reduce((a, b) => a + b)
// console.log(getDivisors(220))
// 約数の和を求める
// console.log(sum(getDivisors(220)))

const sumDivisors = []
for (let i = 2; i < 10000; i++) {
  sumDivisors[i] = sum(getDivisors(i))
}

const amicableNumbers = []
// 10000未満の友愛数の和を求める
for (let i = 2; i < 10000; i++) {
  // 友愛数を判定する
  const sumDivisor = sumDivisors[i]
  const isAmicableNumber = sumDivisors[sumDivisor] === i && sumDivisor !== i
  if (isAmicableNumber) {
    amicableNumbers.push(i)
  }
}

console.log(amicableNumbers)
console.log(sum(amicableNumbers))

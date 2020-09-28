// 三角数を求める
const triangleNumbers = [0, 1]
const getTriangleNum = (x) => {
  const cache = triangleNumbers[x]
  if (cache) return cache
  const result = getTriangleNum(x - 1) + x
  triangleNumbers[x] = result
  return result
}

// 約数の数を求める
const getDivisorsLength = (x) => {
  if (x === 1) return 1
  let divisorsLength = 1
  let minDivisor = 2
  let isDivisible = false
  for (let i = 2; i <= x / minDivisor; i++) {
    if (x % i === 0) {
      isDivisible = true
      divisorsLength++
    } else if (!isDivisible) {
      minDivisor = i
    }
  }
  divisorsLength++
  return divisorsLength
}

// console.log(getDivisorsLength(28))
// console.log(getTriangleNum(7), triangleNumbers)

let i = 1
while (true) {
  const triangleNum = getTriangleNum(i)
  const divisorsLength = getDivisorsLength(triangleNum)
  if (divisorsLength > 200) {
    // 計算時間が長いので途中経過を確認
    console.log(divisorsLength, triangleNum, i)
  }
  if (divisorsLength > 500) {
    console.log(triangleNum)
    break
  }
  i++
}

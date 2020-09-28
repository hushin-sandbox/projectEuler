// 三角数を求める
const getTriangleNum = (x) => (x * (x + 1)) / 2

// 約数の数を求める
const getDivisorsLength = (x) => {
  let divisorsLength = 0
  const sqrt = Math.sqrt(x)
  for (let i = 1; i <= x / sqrt; i++) {
    if (x % i === 0) {
      divisorsLength += 2
    }
  }
  return divisorsLength
}

// console.log(getDivisorsLength(28))
// console.log(getTriangleNum(7))

let i = 1
while (true) {
  const triangleNum = getTriangleNum(i)
  const divisorsLength = getDivisorsLength(triangleNum)
  if (divisorsLength > 500) {
    console.log(triangleNum)
    break
  }
  i++
}

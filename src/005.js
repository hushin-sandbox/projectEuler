const isPrime = (x) => {
  if (x < 2) return false
  let i = 2
  while (i < x) {
    if (x % i === 0) return false
    i++
  }
  return true
}

const calc = (x) => {
  if (x < 2) return NaN
  let result = 1
  let i = 2
  let j
  while (i <= x) {
    if (isPrime(i)) result *= i
    i++
  }

  return result
}

console.log(calc(10))

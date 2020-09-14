const isPrime = (x) => {
  if (x < 2) return false
  if (x === 2) return true
  let i = 2
  const sqrt = Math.ceil(Math.sqrt(x))
  while (i <= sqrt) {
    if (x % i === 0) return false
    i++
  }
  return true
}

const calc = (x) => {
  let i = 1
  let primeCount = 1
  let lastPrime
  while (primeCount <= x) {
    if (isPrime(i)) {
      lastPrime = i
      primeCount++
    }
    i++
  }
  return lastPrime
}

console.log(calc(10001))

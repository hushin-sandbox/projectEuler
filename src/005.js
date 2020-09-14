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

const maxPower = (prime, max) => {
  let result = prime
  let exponent = 2
  let next = prime ** exponent
  while (next < max) {
    result = next
    exponent++
    next = prime ** exponent
  }
  return result
}

const calc = (x) => {
  if (x < 2) return NaN
  let result = 1
  let i = 2
  while (i <= x) {
    if (isPrime(i)) result *= maxPower(i, x)
    i++
  }

  return result
}

// console.log(maxPower(2, 10))
// console.log(calc(10))
console.log(calc(20))

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

const sumPrime = (max) => {
  let sum = 0
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) sum += i
  }
  return sum
}

console.log(sumPrime(2000000))

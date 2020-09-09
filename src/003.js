const goal = 600851475143
const primeFactors = [] // debug用
let i = 2
let next = goal
let maxPrime = 1

while (i <= next) {
  if (next % i === 0) {
    maxPrime = i
    primeFactors.push(i)
    next = next / i
    while (next % i === 0) {
      next = next / i
    }
  }
  i++
}
console.log(primeFactors, maxPrime)

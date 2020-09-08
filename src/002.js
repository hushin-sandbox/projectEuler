const arr = [1, 2]
let length = arr.length
let term = 2
let evenSum = 2

while (term <= 4000000) {
  term = arr[length - 2] + arr[length - 1]
  arr.push(term)
  length++
  if (term % 2 === 0) evenSum += term
}
// NOTE 計算するだけなら配列も不要

console.log(evenSum)

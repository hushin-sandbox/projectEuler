let maxKaibun = 0

const isKaibun = (num) => {
  const numStr = num.toString()
  return numStr === numStr.split('').reverse().join('')
}

for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    const a = i * j
    if (isKaibun(a) && maxKaibun < a) maxKaibun = a
  }
}

console.log(maxKaibun)

const MAX = 1000

for (let a = 1; a < MAX / 3; a++) {
  for (let b = a + 1; b < MAX / 2; b++) {
    const c = MAX - a - b
    if (a ** 2 + b ** 2 === c ** 2) {
      console.log(a, b, c)
      console.log(a * b * c)
    }
  }
}

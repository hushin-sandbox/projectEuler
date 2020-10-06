const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

// 組合せ
const combination = (n, r) => {
  return (
    range(n, n - r + 1, -1).reduce((a, b) => a * b) /
    range(r, 1, -1).reduce((a, b) => a * b)
  )
}

const gridRoutes = (n) => combination(n * 2, n)

console.log(gridRoutes(20))

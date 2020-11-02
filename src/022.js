const fs = require('fs').promises
const path = require('path')

;(async () => {
  const namesRaw = await fs.readFile(
    path.resolve(__dirname, 'p022_names.txt'),
    'utf-8'
  )
  const names = namesRaw
    .split(',')
    .map((name) => name.replace(/"/g, ''))
    .sort()
  // console.log(names)
  const calcScore = (name, index) =>
    name.split('').reduce((a, b) => a + b.charCodeAt(0) - 64, 0) * index

  // console.log(calcScore('COLIN', 938))
  const result = names.reduce((a, b, index) => a + calcScore(b, index + 1), 0)
  console.log(result)
})()

const numberWords = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

const tensWords = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
]

const range = (start, stop) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i)

const numToText = (x) => {
  if (x < 20) return numberWords[x]
  if (x < 100) {
    const tensPlace = Math.floor(x / 10)
    return tensWords[tensPlace] + numToText(x % 10)
  }
  if (x < 1000) {
    const hundredsPlace = Math.floor(x / 100)
    const a = x % 100
    return (
      numberWords[hundredsPlace] +
      'hundred' +
      (a === 0 ? '' : 'and' + numToText(a))
    )
  }
  if (x === 1000) return 'onethousand'
}

const calcLength = (start, end) =>
  range(start, end).reduce((a, b) => a + numToText(b).length, 0)

// range(1, 1000).forEach((i) => console.log(i, numToText(i), numToText(i).length))

// console.log(calcLength(1, 5))
// console.log(numToText(342).length)
// console.log(numToText(115).length)
console.log(calcLength(1, 1000))

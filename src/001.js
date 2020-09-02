const _ = require('lodash')
const sum = _.sum(_.range(1000).filter(v => v % 3 === 0 || v % 5 === 0))

console.log(sum)
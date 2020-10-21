const isLeapYear = (year) => {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  return year % 4 === 0
}
const getMonthDays = (year, month) => {
  if (month === 2) return isLeapYear(year) ? 29 : 28
  if ([4, 6, 9, 11].includes(month)) return 30
  return 31
}
let sundayCount = 0
let days = 1 // 1 = Monday

for (let i = 1900; i < 2001; i++) {
  for (let j = 1; j <= 12; j++) {
    if (i > 1900 && days % 7 === 0) {
      sundayCount++
      // console.log(i, j, days)
    }
    days += getMonthDays(i, j)
  }
}

console.log(sundayCount, days)

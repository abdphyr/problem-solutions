const timeWords = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen", "twenty",  "twenty one", "two", "twenty three", "twenty four", "twenty five",
  "twenty six", "twenty seven", "twenty eight", "twenty nine"
]

function timeInWords(h: number, m: number): string {
  if (m === 0) {
    return `${h} o'cklock`
  } else if (m < 30) {
    if (m === 15){
      return `quarter past ${timeWords[`${h}`]}`
    }
    return `${timeWords[m]} minute${m > 9 ? "s" : ""} past ${timeWords[`${h}`]}`
  } else if (m === 30) {
    return `half past ${timeWords[h]} `
  } else {
    if (m === 45){
      return `quarter to ${timeWords[`${h+1}`]}`
    }
    return `${timeWords[60-m]} minute${60-m > 9 ? "s": ''} to ${timeWords[`${h+1}`]}`
  }
}

for (let i = 0; i < 60; i++) {
  console.log(timeInWords(5, i))
}
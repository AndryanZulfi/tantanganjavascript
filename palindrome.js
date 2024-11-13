function palindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr == reverseStr
  }
  
console.log(palindrome("eye"))
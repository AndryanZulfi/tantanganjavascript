function rot(str, root) {
    let ascii = [] 
    str.split('').forEach((el, i) => ascii.push(str.charCodeAt(i)))
    return ascii.map(el => {
        if (el >= 65 && el <= (90 - root) || el >= 97 && el <= (122-root))return el + root
        else if(el > (90-root) || el > (122-root)) return el - (26-root)
        else return el
    }).map(el => String.fromCharCode(el)).join('')
  }
  console.log(rot("LOVE YOU" ,15))
  console.log(String.fromCharCode(77))
  console.log('z'.charCodeAt(0))

// const rot = (str, root) => str.split('').map(el => {
//     let code =el.charCodeAt(0)
//     if((code >=65 &&  code <= 90) || (code >= 90 && code <=122)){
//         let base = (code >= 65 && code <= 90) ? 65 : 97
//         return String.fromCharCode((code -base +root) % 26 + base)
//     }
//     return el
// }).join('')

console.log(rot("LOVE YOU TO", 13));
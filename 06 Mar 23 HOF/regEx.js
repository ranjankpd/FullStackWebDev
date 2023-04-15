//it is regEx or Regular expression , it is a pattern matching thing
let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'  // g for global , i for case sensitive

let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

const srtingToCheck = "Pw is growing at rapid speed and recntly they are working on pwskillls to create skillls based pwcotent"


// check

const result = regExThree.test(srtingToCheck)
console.log(result)

const anotherResult = srtingToCheck.match(regExThree)
console.log(anotherResult)

const oneMoreResult = srtingToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult)

const webUrl = "https://pwskills.com/hitesh%20ranjan"
const usableUrrl = webUrl.replace(/%20/,'_' )    // here we are replacing only %20
console.log(usableUrrl)
//to replac same %num

const AnotherMethod = webUrl.replace(/%\d0/, '_') // \d ----> indicates a number
console.log(AnotherMethod)


//Visit regexr.com for all details
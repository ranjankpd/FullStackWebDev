let arr = [10 , 15 , 20]

arr.forEach(function(element,index,arr){
    console.log(index, element, arr);
})

//writing arrow fucntion
console.log("Here using Arrow function")

arr.forEach((element,index,arr) =>{
    console.log(index, element, arr);
})

//another example
const heros = ["nagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => {
    console.log(el.toUpperCase()) //here everything changes to uper case as applying topUpperCase...
})

//another for each methods  using method map
arr.map(function(element, index, arr){
    console.log(index, element, arr);
})

heros.map((h) => {
    console.log(h.toUpperCase())
})

//using Filter method

console.log(heros);

const herosWithRaj = heros.filter((h) => {
   return h.endsWith('raj')   //if we dont use return keyword it will return a boolean value i.e. True  or false
})
console.log(herosWithRaj)


//shoping cart

const cartBill = [20, 36, 32]

const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr , 0)  // here we use a method "reduce" ....
console.log(sumOfCartBill)


//

const gameScore = [ 200, 300, 310, 250, 150]

//check if all values are numbers

const gameScorecheck = gameScore.every((v) => typeof v === 'number')
console.log("check : ",gameScorecheck)

//find score of players  above  score 200

const above200 = gameScore.find((score) => score > 200)
console.log(above200) // we will get first higest value

//assignment

//findIndex  //finidng index of high score

console.log(gameScore.indexOf(above200))

//some
//sort
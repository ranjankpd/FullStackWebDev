
//SET alwys stores UNIQUE VALUES

let emptySet = new Set()

// console.log(emptySet.size)

//examples

let myArray = [1, 2, 3, 4, 3]
let newSet = new Set(myArray)
console.log(newSet)

newSet.add(9)
console.log(newSet)
console.log(newSet.has(4))  //it will return a bolean value whether the unique value exists there
newSet.clear()
console.log(newSet)

//Set Difference

function setDifference(setA, setB){
   return new Set( [...setA].filter(element => !setB.has(element)) )

}

//############################################@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################
console.log("map  starts here")
//MAP
let map = new Map()
//console.log(map.size)


//another examples

let arr = [
    [1, "mithun"],
    [2, "ranjan"],
    [3, "sanjay"],
    [4, "chandan"]
];

let ans = arr.map((arrayItem) => map.set(arrayItem[0],arrayItem[1]))
console.log(ans);
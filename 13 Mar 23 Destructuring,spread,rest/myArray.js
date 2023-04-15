//Spread Operator


const oneArray = [1, 2, 3, 4, 5]
const twoArray = [6, 7, 8, 9, 10]

//first method to combine two array

const threeArray1 = oneArray.concat(twoArray);
console.log(threeArray1)


//another method but here acccesing the element of everyarray is hard ..... so then we go a next method
const threeArray2 = [oneArray, twoArray]
console.log(threeArray2);



//here is spread operator by giving ...(three dot)
const threeArray = [...oneArray, ...twoArray]
console.log(threeArray);

/*Here what it mean

... (three dot spreads all the elemennts)

...oneArray = 1, 2, 3, 4, 5

...twoArray = 6, 7, 8, 9, 10*/

//************************************************************************************************************ */

//REST OPERATOR

//converting an object to an arrry by method array.from

console.log("Lets convert an object to an array")

function manyArguments(){
   let args =  Array.from(arguments)
    let finalArray = args.map(e => e) //here we can change e with multiply ,addn,sibs etc for the result.
    console.log(finalArray)
}

manyArguments(1,2,3,4)
manyArguments(1, 2, 3, 4, 5, 6, 7, 8,)

//here we will sove this problem by Rest Function

function manyArguments2(...args){
    let finalArr = args.map(e => e)
    console.log(finalArr)
}

manyArguments2(10, 11, 12, 13)
manyArguments2(10,11,12,13, 6, 7, 8,)

//##########################################################################################################################

const names = ["superman", "flash"]

const newNames = ["batman", ...names, "Thor"]        //spread
console.log(newNames)
// another example
const siteName = "pwSkills"
console.log([...siteName]);                       //spread

//example
function pwskillss(...values){
    return values
}
console.log(pwskillss("superman", "spiderman"))     //rest
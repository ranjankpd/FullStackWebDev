let names = ["Ranjan" , " Anurag", "Ayush", "Ankur","Simran","Akhil"]

console.log(names);
console.log("The Length of the Array is : " , names.length);

//to print name at indices

console.log(names[5])

//printing at last index

console.log(names[names.length-1]);

//to change at an idex

names[2] = "Sanjay";
console.log(names);

//declaring araay by new

let scores = new Array(15, 16,88,23,50)
console.log(scores)

// adding a value to a arrray by push it inserts at last
names.push("Apple")
console.log(names)


//03 apr Revision Class

//POP method
let arr = [1,2,3,4,5,6,7,8,9,11]
// console.log(arr)
// arr.pop();
// console.log(arr)

//find index   arr.indexOf()
console.log(arr.indexOf(7))
//finding value   arr.at()
console.log(arr.at(3))

//shift

//console.log(arr.shift())

//console.log(arr.unshift("Ranjan"))

//console.log(arr.slice(1,5));

//      Splice
//console.log(arr.splice(3,2))


console.log(arr.reverse());          // array reverse method

let arr1 = [1,"b",3,5,"c","e"]

console.log(arr1.sort())    // it sort an array by albhabetic order

let arr = [ 1,2,3,4,5,6];

// to add at last Index
arr.push(6,7);
console.log(arr);

// to remove at Last Index
arr.pop();
console.log(arr);

// to remove element at First Index
let s = arr.shift();
console.log(s);
console.log(arr);

// to  add element at First Index
arr.unshift(9);
console.log(arr);

let a1 = [1,2,3,4,5];
let a2 = [3,4,5];
// to add a1 with a2 
let a3 = a1.concat(a2);
console.log(a3);

// how to make an array string
let j = a3.join("@")
console.log(j);

// to cal Reverse function
a3.reverse();
console.log(a3);

// to  return particular element of an Index if nit present it will return -1
console.log(a3.indexOf(74));

// to fetch a new array from an point to point of an array
// we are fetching an array from Index 2-5
let array = [1,2,3,4,5,6,7]
console.log(array.slice(2,5));
// to addd an Element at an Index
//  without deleting an element type 0 if want to delet element type 1 or 2 , how many element wan tto delet
array.splice(2,0,11);
console.log(array)
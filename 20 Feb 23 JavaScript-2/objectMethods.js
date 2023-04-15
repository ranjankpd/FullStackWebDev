let emp = {
    id : 101,
    name : "Ranjan",
    age : 26
};


//  Exerting all keys

let keys  = Object.keys(emp);
console.log(keys);

// Exerting all values
 let values = Object.values(emp);
 console.log(values);

// exerting all keys and values at a time

let all = Object.entries(emp);
console.log(all);

// to freeze the key value pair
// Object.freeze(emp);
// emp.id = 5002;
// console.log(emp);


// only update value but dont add or remove new keyword
Object.seal(emp);
emp.name = "Nakhi"
emp.address = "dundaria";
console.log(emp);

//  creating a new object from old object
let o = Object.assign({} , emp);
console.log(o);
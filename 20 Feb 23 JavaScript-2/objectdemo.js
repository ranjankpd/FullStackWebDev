let obj = {id:101, name:"alex", salary: 10000};


console.log(obj);

// ANOTHER METHOD
let emp = new Object();
emp.id = 102;
emp.name = "Ranjan "

console.log(emp);

// Another Method using function constructor
function SSS(i, n , s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
    const e = new SSS(103, "Sanjay", 12000);
    console.log(e);

    // Acesssing value
    console.log(emp.id);
    console.log(emp.name);

    //Changing or adding value
    emp.salary = 13000;

    console.log(emp);

    // Deleting or Removing an kery vaslye
    delete emp.name;

    console.log(emp);


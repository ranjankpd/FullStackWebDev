

try{
    console.log(x[0]); //here we write code of undefined variable x
} catch(err) {
    console.log("Error handling in catch", err) // err iss for edetails of errror wwe can skip
} finally{
    console.log(" Finally always gets executed")
}

console.log('end')
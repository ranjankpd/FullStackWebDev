//Conditions And Loops

let age = 19
if(age >= 18){
    console.log("you are allowed");
}else{
    console.log("yo are not allowed");
}

//Anothe rExample
let signal = 'red';
if (signal == 'red')
 {
 console.log("Stop");   
}else if
    (signal == 'yellow'){
        console.log("go slow");
    }else{
        console.log("go fast")
    }

    //
    let user = "Admin"
    switch (user) {
        case "Admin":
            console.log("He is Admin")
            break;

        case "Student":
            console.log("He is Student")
            break;
        case "Mentor":
            console.log("He is Mentor")
            break;     
        default:
            console.log("I ma Default")

    }
    //Loops
    // //for loop
    // for(let i = 0; i < 5; i++){
    //     console.log(i)
    // }

    //while loop(initialization,condition,increment/decrement)
//    let i = 0;
//     while(i < 5){
//         console.log(i)
//         i++;
//     }

    //Do  while loop
//   let i = 0;
//     do{
//         console.log("hello world")
//         i++;
//    }while(i < 5);

//Ternary op/ Ternary condition

// condition ? True: False
let isLoggedIn = true;
isLoggedIn ? console.log("Home Page") : console.log("LoginPage")

//conditionals

let userToken = undefined
let googleAuthToken = " googleToken"

if(userToken || googleAuthToken){
    console.log("User is allowed to login")
}else{
    console.log("please sign up for get ur token")
}

//another example

let isPwStudent = false
let pwEmploye = true

if(isPwStudent){
    console.log("Verified")
}if (pwEmploye) {
    console.log("congrates, you are an employes")
}
else{
    console.log("sorry details not found")
}

//another example

let isLoggedIn = true

//condition ? true : false      TERENARY OPERATOR

isLoggedIn ? console.log("homepage") : console.log("please login")


//SWITCH CASE

//switch(expression){
//     case value:

//     break;

//     default:

//     break;
// }

//example

let month = 4

switch(month){
    case 1 :
        console.log("Mondey")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
   case 4:
        console.log("Thurseday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    
    default:
        console.log("Holiday")
        break;
}     

//lOOPS

//for(initializer;condition;changer){
    //statement
//}


// for(let i = 0; i < 5 ;i++){
//     console.log('value of i is: ${i}');
// }


//example

let obj = {
    name : "pwStudents",
    course: "fsjs",
    doration: 100
}

for (const i in obj) {
    console.log(`${i} - ${obj[i]}` )
    }


    //another example

    let arr = ["ranjan", "college wallah", 5, 8]

    for (const ite of arr) {
        console.log(ite)
    }

    //while
    let i = 0;
    while(i < 5){
        console.log(`value of i is : ${i}`)
        i = i+ 1;
    }

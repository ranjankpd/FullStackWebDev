// 1 st function we can use arrow function or normal function

const powerTwo = (n) => {
    return n ** 2
}

//using function inside function

function powerCube (powerTwo, n){
    return  powerTwo(n) * n
}
// console.log(powerCube(powerTwo,5));

//another Exxample

function sayHello(){
    return () => {
        console.log("Ranjan")
    }
}

let guessValue = sayHello();
// console.log(guessValue);
// guessValue()


//here we know how to run another complex higher order function

const higerOrder = n => {
    const oneFun = m =>{
        const twoFun = p =>{
            return m + n + p  //here we can acees elemnts outside parenthesis
        }
        return twoFun
    }
    return oneFun
}
console.log(higerOrder(2)(3)(4));

//another exampe whether it use anywhere

const myNums = [2, 3 , 4 , 5]

const sumArray = arr => {
    let total = 0;
    arr.forEach(function(elemnts){
        total += elemnts
    });
    return total;
}

console.log(sumArray(myNums));

// setting time interval

function oneMoreHello(){
    console.log("hello Ranjan", Math.random())
}

setInterval(oneMoreHello,1000); // this will print "hello Ranjan" in every interval of 1 sec

//another method is setTimeout ----> it will print / return the function after at an timeout

setTimeout(oneMoreHello,2000);
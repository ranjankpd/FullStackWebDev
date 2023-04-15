// function h(x, fn){
//     //h --> higer order function
//     //fn ---> call back
//     console.log(x*x)
//     fn()
// }

// h(10, function(){
//     console.log("done with call back")
// })

// lets take an asynchronize programme

// console.log("Start")
// setTimeout(function(){
//     console.log("Timer Done")
// },3000)

// console.log("End")


// here same example with some chnags and inserting loop 

console.log("Start")      // 1                  e+output seriel no as depend on runntime environment and call stack
setTimeout(function(){
    console.log("Timer Done")    //5 
},30)

setTimeout(function(){
    console.log("Timer is here")        //4
},30)


console.log("End")             //2
for(let i = 0; i < 10;i++){console.log("hii")}      //3
// here line 25 executed after the for loop




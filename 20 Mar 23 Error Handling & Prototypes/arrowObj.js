// let obj = {
//     x:10 ,
//     fun(){
//         console.log(this.x)
//     }
// }
// obj.fun();  //output = 10




// let obj = {
//     x:10 ,
//     fun :() => {
//         console.log(this.x)
//     }
// }
// obj.fun();   //output = undefinedlet 

obj = {
    x:10 ,
    fun(){
        y = {
        gun : () => {
            console.log(this.x)
        }
        }
        y.gun()

    }
}
obj.fun();




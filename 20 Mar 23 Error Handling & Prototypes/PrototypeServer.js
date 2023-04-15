let myHeros = ["thor", "spiderman"]
let dcHeros = ["Batman", "Flash", "Superman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpidermanPower: function(){
        console.log('spidy power is ${this.spiderman}')
    }

}

Object.prototype.hitesh = function(){
    console.log("hitesh ois present in all objects")
}

console.log(myHeros.hitesh())
console.log(heroPower.hitesh())

//injecting only to Array

Array.prototype.heyHitesh = function(){
    console.log("i am present here for you")
}

console.log(myHeros.heyHitesh())
console.log(heroPower.heyHitesh())


//inheritence

const User = {
    name: " top nme",
    
}
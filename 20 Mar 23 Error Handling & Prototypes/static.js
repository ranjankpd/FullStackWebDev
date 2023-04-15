class product{



    #rating; // making it private so that no one can access it out side the class so that our data wil be seecure

    constructor(n,p,r){   //we can write a single constructor in a class
        this.name = n;
        this.price = p;
        this.#rating = r;
        console.log("calliing the constructor")
        //return 10; if you are returning primitive it will be avoided in constructor
       // return {x :10, y: 20} if you return non primitive than it will be returned
        
    }
        // static method
    static custom(){
        console.log("calling a static method")
}


    display(){
        console.log("displaying currrreent product", this.name, this.price, this.#rating) // 
    }

    // Getter(to fetch value) & Setter(to set value) method for a private data type

    // getRating(){
    //     console.log(this.#rating)
    // }

    // setRating(r){
    //     if(r < 0) return;
    //     this.#rating = r;
    // }

    //or

    
    get gRating(){
        console.log(this.#rating)
    }

    set sRating(r){
        if(r < 0) return;
        this.#rating = r;
    }




}
const p = new product("iphone",100000,5)
// aceessing name 
p.name = "samsung"

console.log(p)

// p.setRating(10)
// p.getRating()

//or

p.sRating = 10;
p.sRating;

p.display()


//p.custom()   its wrong we cant call static method with an pbject we will call it with class
product.custom() // calling staic
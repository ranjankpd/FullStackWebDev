// What Are Classes And Objects
class product{
    //properties & behaviours 
    //properties--> vaiables---> data member
    // name;
    // price;
    // rating;

    constructor(n,p,r){   //we can write a single constructor in a class
        this.name = n;
        this.price = p;
        this.rating = r;
        console.log("calliing the constructor")
        //return 10; if you are returning primitive it will be avoided in constructor
       // return {x :10, y: 20} if you return non primitive than it will be returned
        
    }

    //behaviours ---> fucntions ---> member functions
    display(){
        console.log("displaying current product");
    }
}
    const p = new product("iphone",100000, 5); // new --> creates an empty plain object
    // --> in the above piece of code we are calling the constructor method
    console.log(p);
    p.display()

    // next class


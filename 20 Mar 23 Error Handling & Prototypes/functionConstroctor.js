function product(n,p,r){
    this.name = n;
    this.price = p
    this.rating = r
}

const p = new product("macbook", 150000, 5)
console.log(p)
/**
 * 1.this keyword in js is diff than other languages
 * 2.this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we retunr the object refered by this.
 * - if you  return a custom object, then the custom obj is returned.
 * -if you dont return anything ,object reffered by this is returned.
 */

let x = {
    p: product
};

x.p("airpods", 50000, 5)
console.log(x);
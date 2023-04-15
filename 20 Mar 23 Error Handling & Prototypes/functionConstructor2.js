const Product = function (n, p ,r) {
    this.name = n;
    this.price = p;
    this.reting = r;
}

const p = new Product("ipad",30000, 4)
console.log(p)

//The theory of this keyword pointing to calling context is not applicable with arroe fucntion


// const Product =  (n, p ,r) => {
//     this.name = n;
//     this.price = p;
//     this.reting = r;
// }

// const p = new Product("ipad",30000, 4)
// console.log(p)

let x = function(){
    console.log("hi");
}

x();


// immediatly invoke function expresssion
(function(x){
    console.log("hello here")
})();

// another example
(function(x){
    console.log(x*x);
})(5);
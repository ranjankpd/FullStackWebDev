// function declaration

function sayMessage(){
    console.log("i am happy to learn ")
}

// calling a function

sayMessage();
sayMessage();
sayMessage();

/* 
 Output
  i am happy to learn
  i am happy to learn
  i am happy to learn
 */



//  with Return

// declaration

function passMsg(){
    return " we are happy";
}

// calling a function

let msg = passMsg();
console.log(msg);



// another example

function saySomething(){
    return " everything is fine";
}

// calling a funtion

let saying = saySomething();
console.log(saySomething);

let newFuction = saying + " i am here" ;
console.log(newFuction);
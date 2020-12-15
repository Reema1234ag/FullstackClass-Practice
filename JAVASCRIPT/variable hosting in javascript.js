console.log(x);
var x=20;         //   in variable hosting, js automatically assume the declaration (not initializng)at the top of the scope in case of var only.
                  
console.log(y);
let y=10;      // variable hosting is not possible in case of let and const.

//redeclation using var.let and const keyword
var a=100;
 var a=200;
console.log(a);  //200

let b=100;
let b=200;
console.log(b);    // error

const c=100;
const c=200;
console.log(c);    //error

//reassign using var,let and const keyword
var a=10;
a=20;
console.log(a);    //20

let b=10;
b=20;
console.log(b);    //20

const c=10;
c=20;
console.log(c);   //error
 
// javascript variable
var x;
x=199;
y=20;    // here without using var we can initialize the variable but it is not recommended
y="Reema agrawal"; //reassign the value
console.log(x);
console.log(y);
var z;   // only declaration  then o/p  value will be undefined
console.log(z);  

// strict mode and sloppy mode in javascript(by default sloppy mode)
"use strict"
var x=10;
y=10;    //error in strict mode
var z=010; //error but in sloppy o/p will be 8
console.log(z);

//practice
"use strict"
var x=10;
function hello()
{
    window.z= 20;               // window.x to use x variable globally
    console.log(z);
}
hello();
console.log(z);
console.log(x);

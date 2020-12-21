var a=function(){
    console.log("hi this is called function expression");
};
a();                 // a will be act as fuction call

var b =function(x){
    return (x*x);
};                   //function expression(;)
var z= b(5);
console.log(z);
// In function expression no function name is required


var c=(p)=>{                        //arrow function(=>)
    return(p+p);
};                                  //as well as function expression
var q=c(2);
console.log(q);                           
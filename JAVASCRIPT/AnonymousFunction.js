(function(){
    console.log("hello how r u?")
})
();  //function calling(anonymous function)

(function(x){
    console.log(x)
})
("Reema");


//some properties
function hello(x){
    console.log(hello.name);                     //name of the function
    console.log(hello.length) ;                  // length property- returns number of arguments in function
}
hello(1);
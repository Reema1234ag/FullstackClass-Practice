hello();                          
function hello()
{
    console.log("hi how r u?");
}
//now wht is function hoisting??
// javascript engine physically move all the declarartions of the function at the top of the code;
// so the above will be shown as below

function hello()
{
    console.log("hi how r u??")
}
hello();                                   //function hoisting




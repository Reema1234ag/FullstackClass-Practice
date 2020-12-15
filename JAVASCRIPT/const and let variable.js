const a=10;
a++;     //error occure
{
    var x=10;               //var is function and program oriented. the scope of var is not block scope.so the value of x will prit
    let y=20;               // scope of let is in block only
    console.log(y);         // 20 will print
}
console.log(x);
console.log(y);             // due to let block scope, error will occure (y isnot defined)

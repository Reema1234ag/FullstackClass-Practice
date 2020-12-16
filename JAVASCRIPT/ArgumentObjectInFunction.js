function fun()
{
var sum=0;
for(i=0;i<arguments.length;i++)
{
    sum+=arguments[i];
}
return sum;
}
var a=fun(1,2,3);
var b=fun(4,5 ,6 ,7 ,23,22);
var c=fun(1,4,6,3,7,22,344,5,789,4,5,6,7,8,9);
console.log(a);
console.log(b);
console.log(c);

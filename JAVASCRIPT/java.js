var x=document.getElementById("container");
x.style.width="200px";
x.style.height="200px";
x.style.background="red";
x.innerHTML="hii this is reema";
x.style.textAlign="center";

var y=document.getElementById("btn");
y.onclick=function()
{
    alert(" this is power of javascript");
    x.style.background="green";

}
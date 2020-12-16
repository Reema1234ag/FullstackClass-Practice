//function with argument
function myfun(fname,lname)
{   
    console.log("my name is "+ fname + lname);
}
myfun("reema ",);         //my name is reema undefined(when lname is not given by user )

function myfun1(fname1,lname1="not given")      //default value of lname1
{
    console.log("My name is "+ fname1 + lname1)
}
myfun1("Reema ")            //my name is Reema not given

//practice
function myfun2(fname2,lname2=0)      //default value of lname1 is 0 here
{
    console.log("My name is "+ fname2 + lname2)
}
myfun2("Reema ","agrawal","mittal")          // it will discard the 3rd argument 

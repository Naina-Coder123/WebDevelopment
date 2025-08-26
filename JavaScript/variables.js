// console.log("Hello World");
// console.log("Naina Mishra");

//variable
name="Tony Stark";//string value
console.log(name);
 age=90;//int value

 console.log(age);
 x=null;
 console.log(x);//we know what value is stored but x is empty

 y=undefined;
 console.log(y);//we dont know what value is stored in y container

 //As a good programmer we give meaningful names to variables

isfollow=false;
console.log(isfollow);

name=25;
console.log(name);

//= Assignment operator
//Javascript is a dynamically typed language it means we need not to declare the datatype javascript interpreter interprets at the runtime

//Rules of writing the variable in javascript

//1.case sensitive langauge
//2.only digits keywords underscore dollar is only allowed but space is not allowed
//3.only letter, underscore or dollar can be the first digit
//4.reserved words cannot be the variable name


let full_name="Naina";
let totalPrice=1000;
console.log(full_name);
const a=90;//variable declared with the const can not redeclared and not be updated after once // block scopr variable
// variable declared with let can not be redeclared but can be updated ..// block scope variable
//variable declared with var can be redeclared and can be updated /// global scope variable
// a=89;
console.log(a);
var age=90;
console.log(age);
let b;
console.log(b);//give undefined not error
// const c;// can not be left with initialization gives error
// console.log(c);

{
    // let color="blue";
  let  color="red";//can not be redeclared in the block but cna be declared out of the block
}
let color="red";

let price=100.5;
 let v;
 console.log(v);
 let m=BigInt("123");
 let n=Symbol("Hello!");

//comments
//single line comment
/* This 
is multiple 
line comment*/

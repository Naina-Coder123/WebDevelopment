
//conditional statements

//if statement
let ages=25;
if(ages>=18){
    console.log("You can vote");
}
let mode="dark";
let colour;
if(mode==="dark"){
    colour="black";

}
if(mode==="light"){
    colour="white";

}
console.log(colour);

let u=90;

if(u%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
/* if (){
}
else if(){
}
else if()
{
}
else{
    }*/


    //ternary operators

    let ag=13;
  let result=  ag>18?console.log("adult"):console.log("not adult");
//   console.log(result);



//MDN Docs
//documentation for everything in javascript html css

let day=1;
switch(day){
    case 1:console.log("Monday");
    break;
      case 2:console.log("Tuesday");
      break;
  case 3:console.log("Wednesday");
  break;
  case 4:console.log("Thursday");
  break;

     case 5:console.log("Friday"); 
     break;
     case 6:console.log("Saturday");
     break;
case 7:console.log("Sunday");
break;
default:console.log("iNVALID OUTPUT");
}



//alert popup message
//prompt
// alert("Hello");

//prompt
//gives message and takes input
// let Name=prompt("Name:");
// console.log(Name);

// let number=prompt("Enter a number:");
// if(number%5==0){
//     console.log("Multiple of 5");

// }
// else{
//     console.log("Not Multiple of 5");
// }


//for loop
//loops are used to execute a piece of code
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}


//game for the user
// let num=50;
// let random=prompt("Enter the number:");

// while(num!=random){
//    random= prompt("you enter the wrong number ,Guess again:");

// }
//     console.log("Success ! You got it");

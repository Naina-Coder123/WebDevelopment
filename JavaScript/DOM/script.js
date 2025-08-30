//to access html inside javascript we use DOM
let headi = document.getElementById("heading");
console.dir("headi");

let c=document.getElementsByClassName("first_p");
console.log(c);
console.dir(c);
let n=document.getElementById("h");
let empty=document.getElementsByClassName("id");
console.dir(n);
console.dir(empty);
let first_element=document.querySelector("p");
console.dir(first_element);
let allElements=document.querySelectorAll("p");
console.dir(allElements);

let i=document.querySelector("#heading");
console.log(i);
 let cl=document.querySelectorAll(".first_p");
 console.log(cl);

 console.dir(document.body.firstChild);
 //text nodes
 //comment nodes
 //element nodes
 let h2=document.querySelector("h2");
 console.dir(h2.innerText);
 h2.innerText=h2.innerText + " "+" from students";
 console.dir(h2.innerText);



 let divs=document.querySelectorAll(".box");
 console.log(divs[0]);
 divs[0].innerText="new unique value1";
 divs[1].innerText="new unique value 2";
 divs[2].innerText="new unique value 3";
 let idx=1;
 for(div of divs){
    div.innerText=`hello from div${idx}`;
    idx++;
 }
 for(div of divs){
    console.log(div.innerText);
 }
// let para=document.querySelector("p");
// console.log(para.settAttribute("class","newClass"));
// let div=document.querySelectorAll("div");
// div.style.backgroundColor="grey";



let newBtn=document.createElement("button");
newBtn.innerText="Hello I am button";
console.log(newBtn);
let div=document.querySelector("div");
div.append(newBtn);


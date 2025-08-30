function first(){
    console.log("Hii");
    console.log("Hello");
}
first();//invoke or call a function
first();
//functions are used to minimize the redudancy
function my(msg){
    console.log(msg);
}
my("i Love java");
//arrow functions 
const sum=(a,b)=>{
    console.log(a+b);
}
sum(4,3);
//arrow functions are most important in javascript

const mult=(a,b)=>{
    console.log(a*b);
}
mult(4,6);
const print=()=>{console.log("Hii");}
print();
function countVowels(str){
    //"Naina"
    let count=0;
    for(let vowel of str){
        if(vowel=='a'|| vowel=="e"|| vowel=="i" || vowel =="o "||vowel=="u"){
            count++;
        }
    }
    console.log(count);
}
countVowels("Naina");
//for each loops in arrays


// arr.forEach(callBackFunction)
//callbackFunction:Here it is a function to execute for each element in the array
// a call back is a function passed as an arguement to another function

arr=[1,2,3,1];
// arr.forEach((val)=>{
//     console.log(val);
// })

arr.forEach(function printVal(val){
    console.log(val);
});
function abc(){
    console.log("abc");
}
abc();
let cities=["pune","delhi","mumbai"];
cities.forEach((value)=>{
    console.log(value);
});
// we can pass three parameters index,value,array only used for only arrays

//Higher order functions
//forEach is a higher order function 
//high order function takes another function as a parameter or return another function as an arguement




let nums=[1,2,3,4];
nums.forEach((num)=>{
    console.log(num*num);
});

//array methods
//map method
//mao is very similar to forEach but it creates a new array 
//arr.map(callbackFunction(value,index,arr))

nums.map((num)=>{
    console.log(num*num);
})
let newarr=nums.map((val)=>{
    return val*2;
});
console.log(newarr);
//filter
//give true for a filter

let newar=nums.filter((val)=>{
    return val%2==0;
});
console.log(newar);//stores the even values (filtered elements) in new array

//reduce

//perform some operation and reduces the array to a single value
const c=0;
const sumwith=nums.reduce((c,val)=>{
    return c+val;
})
console.log(sumwith);

let array=[78,90,97,98,45];
const above=array.filter((val)=>{
    return val>90;
});
console.log(above);
let n=prompt("enter a number: ");
let a=[];
for(let i=1;i<n;i++){
a[i-1]=i;
}
console.log(a);
let s=a.reduce((c,curr)=>{
    return c+curr;
});
console.log("hello");
window.console.log("hello")//gloabal object which is provided by the browser
//window object represents an open window

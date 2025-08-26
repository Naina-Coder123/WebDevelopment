
//strings
let str="Name";
let s='char';
console.log(str);
console.log(s);
console.log(str.length);
console.log(str[0]);
//template  literals
let sentence=`This is a template string`;
console.log(typeof sentence);

let obj={
    item:"pen",
    price:10
};
// let output='the cost of '+obj.item+'is'+obj.price;
//with templatae literal
let output=  `the cost of ${obj.item} is ${obj.price}`;
console.log(output);

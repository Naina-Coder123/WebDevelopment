
//strings
let str = "Name";
let s = 'char';
console.log(str);
console.log(s);
console.log(str.length);
console.log(str[0]);
//template  literals
let sentence = `This is a template string`;
console.log(typeof sentence);

let obj = {
    item: "pen",
    price: 10
};
// let output='the cost of '+obj.item+'is'+obj.price;
//with templatae literal
let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);
let firstString = "Naina";
console.log(firstString);
let upper=firstString.toUpperCase();
console.log(upper);
let a="abcdef";
let c="bsc";
let b=str.slice(1,4);
console.log(b);
let res=a.concat(b);
console.log(a.replace("a","j"));
console.log(a.charAt(0));
let full=prompt("Enter the full name: ");
console.log(full);
let gen="@"+full+full.length;
console.log(gen);
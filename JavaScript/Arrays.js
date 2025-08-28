
let student={
    s1:76,
    s2:89,
    s3:90,
};
console.log(student.s1);
let marks=[90,78,34,23];
console.log(marks);
console.log(marks.length);//property
let heroes=["ashjb","gnjf","gdfd"];
console.log(heroes);//arrays is a object 
//array start with oth index;
for(let i=0;i<heroes.length;i++){
 console.log(heroes[i]);

}
for(let hero of heroes){
    console.log(hero);
}
let arr=[45,12,63,45,78];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum/arr.length);
let price=[250,645,300,900,50];
for(let i=0;i<price.length;i++){
   let offer=price[i]/10;
   price[i]-=offer;

}
for(let value of price){
    console.log(value);
}
//to add push()
//to pop and return pop()
//arr to string //toString()

let fooditems=["potato","tomato"];
//concat joins multiple arrays and return result
// unshift() add to start
// shift() delete from start and return

let marvel_heroes=["thor","spideman","ironman"];
let dcHeroes=["batman","superman"];
let heroe=marvel_heroes.concat(dcHeroes);
console.log(heroe);
//slice() //donot change original array
//splice() //change original array
//arr.slice(2,2,101,102);
//2 ke baaad 2 elemnts delete honge 101 102 add honge
let companies=["bLOOMBERG","MICROSOFT","UBER","GOOGLE"];
// companies.shift();//remive first element
companies.splice(2,1,"OLA");
companies.push("AMAZON");



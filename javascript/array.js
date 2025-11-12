// revers
let a=  "hell0";
let reverse =a.split("").reverse().join("");
console.log(reverse)

// duplicate
let b = [1,2,3,5,5,4];
let newarr  = b.filter((value,index) => b.indexOf(value) ===index)
console.log(newarr);






// count character frequnecy
let c= "banana";
let frequency  ={};


c.split("").forEach((char) =>{
    frequency[char] = (frequency[char] ||0) + 1;
})
console.log(frequency);


let arr = [2,3,4,7,9];
// sort in desceding order
const sorted = arr.sort((a, b) => a - b); 
console.log(sorted[1]);


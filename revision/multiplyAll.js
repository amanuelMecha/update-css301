/*  eslint-disable*/
// function  multiplyAll(arr){
//         return arr.reduce((a,b) =>a*b);

// }
//let arr=[1,2,3,4,5];
//console.log(multiplyAll(arr))
// function stringN(str){
//     let x =str.split(",");
//     console.log(x)

// }
// let arr= "the, quick brown fox the second, second";
// stringN(arr);
// // const x = 10;
// // const y = x;
// // y = 100;
// // console.log(x); //
// function  mul(arr){
    
//     return arr.reduce((a,b) => a*b);
// }
// console.log(mul([1,2,3,4,5]));
// let arr = ["a", "b",function(){console.log(this)}];


//console.log(arr[2]())

let array =[10,20,30,40]
let returnVal= array.map(helperr);
console.log(returnVal); // [0, 20, 60, 120]
console.log(array); // ____________[10,20,30,40]
function helperr(value,n){
return value*n;
}





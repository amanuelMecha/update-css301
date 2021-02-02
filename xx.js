/* eslint-disable */
'use strict'
// function haveFun() {
//     let fun = {
//         myFuns: []
//     }
//     let i = 0;
//     while (i < 3) {
//         let myFunc = function () {
//             console.log('Fun : ' + i);
//         }
//         fun.myFuns.push(myFunc);
//         i++;
//     }
//     return fun;
// }
// let anotherFun = haveFun;
// let result = anotherFun();
// let output1 = result.myFuns[1];
// let output2 = result.myFuns[0]();
// console.log(anotherFun); //_function itself_________________
// console.log(result); //_____object__________________
//  console.log(output1);// _________function______________
// console.log(output2);

// function  sortThis(x,z,a) {
//     let b=[x,z,a];
//     return (b.sort((a,b)=>a-b))    
// }
// let y = sortThis(58,72,34)
// console.log(y)
// let arr=[1,2,3,4,5]
// let y=(arr.map((value,index)=>value + index))
// console.log(y.reduce((a,b)=>a+b))
let str = "banana-mango-orange";
function ret(str){
    let y= str.split("-");
    let x =  y.map((value,index)=>index ==0? value: value[0].toUpperCase() + value.slice(1));
    return x.join("");
}
console.log(ret(str))
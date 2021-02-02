/* eslint-disable */
'use strict'
// function haveFun(){
//     let fun ={
//     myFuns : []
//     }
//     let i =0;
//     while(i<3){
//     let myFunc = function(){
//     console.log('Fun : ' + i);
//     }
//     fun.myFuns.push(myFunc);
//     i++;
//     }
//     return fun;
//     }
//     let anotherFun = haveFun;
//     let result = anotherFun();
//     let output1 = result.myFuns[1];
//     let output2 = result.myFuns[0]();
//     console.log(anotherFun); _______fn itself___________
//     console.log(result); _______object________________
//     console.log(output1 ); ______________________
//     console.log(output2); 

// function  sumOfSquares(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum += i*i;
//     }
//     return sum;
// }
// console.log(sumOfSquares(3))


// to borderLeftWidth
// function lef(str){    
//     let x=str.split("-");
//     let y = x.map((word,index) => index == 0? word: word[0].toUpperCase()+ word.slice(1))
//     console.log(y.join(""))
// }

// let arr ="border-left-width";//borderLeftWidth
// lef(arr)

function x(arr){
 let r = arr.map((z,i) => z*i)
 return r
}

let arr =[0,25,14,5,4]
console.log(x(arr))
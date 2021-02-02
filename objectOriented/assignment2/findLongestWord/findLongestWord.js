/* eslint-disable */
'use strict';
function findLongestWord(arr) {
    let max=arr[0].length;
    let output;
    for(let i=1;i<arr.length;i++){
        if(arr[i].length>max){
            max =arr[i].length;
        }
    }
    for(let j=0;j<arr.length;j++){
        if(max===arr[j].length){
            output=arr[j]
        }
    }
    return output;
}

let arr = ["Amanuel","mecha","ammaniaddff","Dero","ammaniadd"]
console.log(findLongestWord(arr))
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
} 
 let arr =[1,2,3,5]
console.log(sum(arr))
let sum2 = arr.reduce((a,b) => (a+b));
console.log(sum2)



function multiply(arr){
    let mul=1;
    for(let i=0;i<arr.length;i++){
        mul *=arr[i]
    }
    return mul;
}

console.log(multiply(arr))
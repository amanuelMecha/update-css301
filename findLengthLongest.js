function findLengthLongest(arr) {
    let max=arr[0].length;
    for(let i=1;i<arr.length;i++){
        if(arr[i].length>max){
            max =arr[i].length;
        }
    }
    
    return max
}

let arr = ["Amanuel","mecha","ammaniaddff","Dero","ammaniadd"]
console.log(findLengthLongest(arr))
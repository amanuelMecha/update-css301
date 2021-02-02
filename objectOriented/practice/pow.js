// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//     result *= x;
//     }
//     return result;
//     }

// //     console.log(pow(2,4))
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
//  //styles.shift() 
// styles.unshift("Rap", "Reggae");
// console.log(styles)

// function sumInput(){
//     let input; 
//     do{
//         input= prompt("enter any number: ");    

//     }while(input )
// }

// let fruits = ["Apple", "Orange", "Plum"];
// let count=0
// for(let i=0;i<fruits.length;i++){
//         count +=fruits[i].length;
        
// }

// console.log(count/fruits.length)
// let fruits = ["Banana"]
// let arr = fruits; // copy by reference (two variables reference the same array)
// //alert( arr === fruits ); // true
// arr.push("Pear"); // modify the array by reference
// arr.length =0
// console.log( arr); //
// let matrix = [    [1, 2, 3],    [4, 5, 6],    [7, 8, 9]    ];
// let s=String(matrix)
//     console.log(1+[1,2]  );
let arr = ["a", "b"];
arr.push(function() {
alert( this );
})
arr[2]();

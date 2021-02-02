function showPrimes(n) {
     nextPrime:    for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        continue nextPrime;

    } 
    }
    console.log( i ); // a prime
    }
    }
    showPrimes(9)

// function checkPrime(n){
//     isPrime=true;
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             isPrime=false;
//             break
//         }
        
//     }
//     return isPrime;
// }
// console.log(checkPrime(9))
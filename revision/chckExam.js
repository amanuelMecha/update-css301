/* eslint-disable */

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])
function checkExam(arr1,arr2){
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]===arr2[i]){
            sum +=4;
        }else{
            sum -=1;
            
        }
    }
    return sum<0? 1:sum;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) )
//  //→7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) →16
// checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →

// let userName="Joe";
// let from = "Ann";
// function showMessage(from, text) {
//     from = "hamid";//'*' + from + '*'; // make "from" look nicer
//     return
// }
    
//     showMessage(from, "Hello"); // *Ann*: Hello
//     // the value of "from" is the same, the function modified a local copy
//     // this is called ‘shadowing’, best to avoid shadowing for clarity
//     console.log(from); // Ann or * Ann * ? 
// function marry(man,woman){
//     woman.husband = man;
//     man.wife = woman;
//     return {
//         father:man,
//         mother:woman
//     }
// }
// let family= marry({name:"John"},{name:"Ann"});
// console.log(family)
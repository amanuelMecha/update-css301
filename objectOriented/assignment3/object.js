// /* eslint-disable */
// 'use strict';


// 1 question #1 Hello, object
// let hello = {
//     name: "Amanuel",
//     sex: "Male",
//     "phone number": 30164799
// }
// alert(hello["phone number"])
// alert(hello)
// alert(hello.name)


// 2 question #2 Check for emptiness
// let user = {};
// alert(user.noSuchProperty === undefined);



// 3 question #3 Constant objects
// const user = {
//     name: "Hamid"
// };
// /user.age = 25; 
// alert(user.age);
// user.name = "Solomon";
// alert(user.name);

// But, cannot be reassigned

// const user = {
//     name: "Amanuel"
// };
// //Error (can't reassign user)
// user = {
//     name: "Bipin"
// };

// console.log(user)


// 4 question 4 Sum object properties
// let assignments = {
//     cs301: "Assignment1",
//     cs303: "Assignment3",
//     algorithm: "Assignment4",
//     React: "Assignment 3"
// }
// alert(assignments.cs301 + " " + " " + assignments.cs303 + " " + assignments.algorithm + " " + assignments.React)


// 5 Multiply numeric properties by 2
// let grades = {
//     cs301: 48,
//     cs303: 50,
//     algorithm: "Not graded yet"
// }
// alert("cs301 result = " + grades.cs301 * 2 + " " + "cs303 result = " + grades.cs303 * 2)


// Section Object methods, “this”
// • Using “this” in object literal
// • Create a calculator
// • Chaining
// calculator
// let calculator = {
//     x: prompt("enter a number: "),
//     y: prompt("enter another number: "),
//     z: prompt("please enter the operator: / * - + "),
//     cal() {
//         if (this.z === "/") {
//             alert(this.x / this.y);
//         } else if (this.z === "*") {
//             alert(this.x * this.y);
//         } else if (this.z === "+") {
//             alert(this.x + this.y);
//         } else if (this.z === "-") {
//             alert(this.x - this.y);
//         }
//     }
// }
// calculator.cal()











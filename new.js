/* eslint-disable */
'use strict'

// function concat() {
//     let fn = document.getElementById('fname').value;
//     let ln = document.getElementById('lname').value;
//     let age_person = document.getElementById('ag').value;
//     let state_person = document.getElementById('st').value;
//     let departm = document.getElementById('dt').value;
//     let fullAddress = fn + " " + ln + " " + age_person + " " + state_person + " " + departm;
//     document.getElementById('output').innerHTML = fullAddress;
// }
// function showPrimes (n){
//     nextPrime;
//     for (let     i = 2; i < n; i ++){

    
//     // check if    i is a prime number
//     for (let j = 2; j <  i ; j++){
//     if (    i % j == 0) continue nextPrime
//     }
//     alert(i)
//     }
//     }




// class User {
//     constructor(name = "Anonymous") {
//     this.name = name;
//     }
//     sayHi() {
//     console.log(`Hello, ${this.name}!`);
//     }}
//    let fred = new User();
//     console.log(fred);
//     console.log(fred.__proto__);
//     console.log(User.prototype);
//     fred.sayHi();
//    let bob = new User("Bob");
// console.log(bob);
// bob.sayHi();

/*eslint-disable*/
// function person(name)
// {
//     console.log("pereson:this",this)
//     this.name=name
//     console.log("person1 :this ",this)
// }
// function Doctor(name,department)
// {
//     console.log("doctor this befoe bind person:===",this)
//     person.call(this,name,department)
//     console.log("doctor this after bind person:===",this)
//     this.dept=department;
// }
// Doctor.prototype.report=function()
// {
//     return "medical report"
// }
// function Surgeon(name,department)
// {
//    this.department =department;
//     console.log("Suregin this befor call doctor",this)
//     Doctor.call(this,name,department)
//     console.log("surgeon this after bind doctor",this)
    
// }
// Surgeon.prototype.operate=function()
// {
//     return "operation performed";
// }
 
// Surgeon.prototype.__proto__=Doctor.prototype;
// let surg1=new Surgeon("Fred","cardiology")
// console.log(surg1.dept)
// console.log(surg1.name)
// console.log(surg1.report())
// console.log(surg1)
// console.log(surg1.__proto__)
// console.log(surg1.prototype)
// console.log(Surgeon.__proto__)
// console.log(Surgeon.prototype)
// console.log(Surgeon.prototype.__proto__)

// // function Player(name, age){
// //     this.age = age;
// //     this.name = name
// // }

// // Player.prototype.play = function(){
// //     return this.name + ' is playing';
// // }
// // Player.prototype.last = function(){
// //     return this.name + ' is playing';
// // }
// // let fred = new Player("Fred", 12);
// // console.log(fred.age);
// // console.log(fred.__proto__);
// // console.log("name," , Player.__proto__);
// // console.log(Player.prototype.play());
// // console.log(fred.play())
// // // class User {
// // //     constructor(name = "Anonymous") {
// // //     this.name = name;
// // //     }
// // //     sayHi() {
// // //     console.log(`Hello, ${this.name}!`);
// // //     }}
// // //    let fred = new User();
// // //     console.log(fred);
// // //     console.log(fred.__proto__);
// // //     console.log(User.prototype);
    
// // //     console.log(User.__proto__);
// // // let bob = new User("Bob");
// // // console.log(bob);
// // // bob.sayHi();

function sum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum;
    //  return (n*(n-1)/2);
}
let start = Date.now();
console.log(sum(5050));

    let end = Date.now();
    console.log("best",end-start)

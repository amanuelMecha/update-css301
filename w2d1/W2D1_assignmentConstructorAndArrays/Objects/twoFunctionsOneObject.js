/* eslint-disable */
'use strict'
/*two functions - one object 
is it possible to create functions A and B such as new A() == B()?*/

//its possible and here is an example
let obj = {}
function A() { return obj; }
function B() { return obj; }
alert(new A() === B());
/* eslint-disable */
'use strict'
/* Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts. First, implement the method calculate(str)
 that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited)
  and returns the result. Should understand plus + and minus -.*/
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}
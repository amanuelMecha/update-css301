/* eslint-disable */
'use strict';
function isVowel(n){
    let vowel = "aeoui";

    if(vowel.indexOf(n)!==-1){
        return true;
    }
    return false;
}
console.log(isVowel("e"))
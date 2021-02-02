/* eslint-disable */
'use strict'
/* Write the function shuffle(array) that shuffles (randomly reorders) 
elements of the array.Multiple runs of shuffle may lead to different orders of elements. */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}
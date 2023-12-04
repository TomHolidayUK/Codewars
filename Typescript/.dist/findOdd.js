"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
const findOdd = (xs) => {
    const frequency = {};
    xs.forEach(el => {
        if (frequency[el]) {
            frequency[el]++;
        }
        else {
            frequency[el] = 1;
        }
    });
    let final = '';
    for (let x in frequency) {
        if (frequency[x] % 2 !== 0) {
            final = x;
        }
    }
    return parseInt(final);
};
exports.findOdd = findOdd;
console.log((0, exports.findOdd)([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

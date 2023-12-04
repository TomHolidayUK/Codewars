"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = void 0;
function persistence(num) {
    let array = num.toString().split('');
    let final = 0;
    if (array.length === 1) {
        return 0;
    }
    else {
        while (array.length > 1) {
            const multipliedValue = array.map(el => parseInt(el)).reduce((acc, v) => {
                return acc * v;
            });
            array = multipliedValue.toString().split('');
            final++;
        }
    }
    return final;
}
exports.persistence = persistence;
console.log(persistence(999));

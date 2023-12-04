"use strict";
function add(a, b) {
    if (((parseInt(a) + parseInt(b)) <= Number.MAX_SAFE_INTEGER)) {
        return (Number(a) + Number(b)).toString();
    }
    else {
        console.log('Big number');
        let arrayA = a.split('');
        let arrayB = b.split('');
        function totalCalculation(longArray, shortArray) {
            let total = 0;
            let totalString = '';
            let remainder = false;
            const differenceInLength = Math.abs(shortArray.length - longArray.length);
            for (let i = longArray.length - 1; i >= 0; i--) {
                if (remainder === false) {
                    console.log('hello', ~~longArray[i]);
                    let addition = (parseInt(shortArray[i - differenceInLength]) || 0) + parseInt(longArray[i]);
                    remainder = (addition > 9) ? true : false;
                    totalString = (addition > 9) ? addition.toString().slice(1, 2) + totalString : addition.toString() + totalString;
                    total += (addition * (Math.pow(10, longArray.length - i - 1)));
                }
                else {
                    let addition = (parseInt(shortArray[i - differenceInLength]) || 0) + parseInt(longArray[i]) + 1;
                    remainder = (addition > 9) ? true : false;
                    totalString = (addition > 9) ? addition.toString().slice(1, 2) + totalString : addition.toString() + totalString;
                    total += (addition * (Math.pow(10, longArray.length - i - 1)));
                }
            }
            return (remainder === false) ? totalString : '1' + totalString;
        }
        return (a.length > b.length) ? totalCalculation(arrayA, arrayB) : totalCalculation(arrayB, arrayA);
    }
}
console.log(add('99', '9999'));
console.log(add('19', '9991'));
console.log(add('262', '294'));

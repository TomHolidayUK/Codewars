"use strict";
function incrementString(strng) {
    const array = strng.split('');
    let endNumber = '';
    let pass = true;
    let numberCheck = false;
    for (let i = 0; i < array.length; i++) {
        if (/\d/.test(array[i])) {
            numberCheck = true;
        }
    }
    if (numberCheck === false) {
        return (array.concat("1").join(''));
    }
    for (let i = array.length - 1; i >= 0; i--) {
        if ((/\d/.test(array[i])) && (pass === true)) {
            endNumber += array[i];
        }
        else {
            pass = false;
        }
    }
    const arrayWithoutNumbers = array.slice(0, (array.length - endNumber.length));
    const newNumber = parseInt(endNumber.split('').reverse().join('')) + 1;
    const numberOfZerosToAdd = endNumber.length - newNumber.toString().length;
    if (numberOfZerosToAdd >= 0) {
        const additionalZeros = '0'.repeat(numberOfZerosToAdd);
        return arrayWithoutNumbers.join('') + additionalZeros + newNumber.toString();
    }
    else {
        return arrayWithoutNumbers.join('') + newNumber.toString();
    }
}
console.log(incrementString("foobar999"));

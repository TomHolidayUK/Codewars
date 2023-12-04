"use strict";
function listSquared(m, n) {
    let arrayOfObjects = [];
    for (let i = m; i <= n; i++) {
        let divisorsObject = {
            value: 0,
            value2: 0,
        };
        let divisors = [];
        let temp = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors.push(j);
                temp = i;
            }
        }
        const divisorsSquared = divisors.map(el => Math.pow(el, 2));
        const sumOfDivisors = divisorsSquared.reduce((acc, val) => (acc += val), 0);
        if ((Number.isInteger(Math.sqrt(sumOfDivisors)))) {
            divisorsObject.value = temp;
            divisorsObject.value2 = sumOfDivisors;
            arrayOfObjects.push(divisorsObject);
        }
    }
    console.log(arrayOfObjects);
    const finalArray = [];
    arrayOfObjects.forEach(el => finalArray.push([el.value, el.value2]));
    return finalArray;
}
console.log(listSquared(1, 250));

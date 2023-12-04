// loop through all number in the range
// for each number find all the divisors - loop through all numbers 0 < x < n and see if they 
// square them and sum them 
// see if this is a square number, if it is return [the number at whcih this occurs, the sum of the squared divisors]

//start with finding the divisors of 42 
// sum of squared divisors should equal 2500

interface DivisorsObject { // define a type for the divisors object
    value: number;
    value2: number;
  }
  
function listSquared(m: number, n: number): number[][] {
    let arrayOfObjects: DivisorsObject[] = []; // an array of divisor objects

    for (let i = m; i <= n; i++) {
        let divisorsObject: DivisorsObject = { // type has aready been defined
        value: 0,
        value2: 0,
        };

        let divisors: number[] = [];
        let temp: number = 0;

        for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            divisors.push(j);
            temp = i;
        }
        }
        const divisorsSquared: number[] = divisors.map(el => Math.pow(el, 2))
        const sumOfDivisors: number = divisorsSquared.reduce((acc, val) => (acc += val), 0);
        if ((Number.isInteger(Math.sqrt(sumOfDivisors)))) {
            divisorsObject.value = temp;
            divisorsObject.value2 = sumOfDivisors;
            arrayOfObjects.push(divisorsObject);
        }
    }

    console.log(arrayOfObjects);
    const finalArray: number[][] = []
    arrayOfObjects.forEach( el => finalArray.push([el.value, el.value2]))

    return finalArray;
}

console.log(listSquared(1,250))
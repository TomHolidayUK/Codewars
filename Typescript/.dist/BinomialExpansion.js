"use strict";
function expand(expr) {
    let a = 0;
    let x = '';
    let isbpositive = true;
    let arrayA = [];
    let arrayB = [];
    const regex_number = new RegExp(/[0-9]/);
    const exprArray = expr.split('');
    function findaxb(input) {
        let shouldContinue = true;
        let shouldContinue2 = true;
        let shouldContinue3 = true;
        for (let i = input; i < exprArray.length; i++) {
            if (regex_number.test(expr[i]) && shouldContinue === true) {
                arrayA.push(expr[i]);
            }
            else if (shouldContinue === true) {
                shouldContinue = false;
                x = expr[i];
            }
            else if ((shouldContinue === false) && (shouldContinue2 === true)) {
                if (expr[i] === '-') {
                    isbpositive = false;
                }
                else if (expr[i] === '+') {
                    isbpositive = true;
                }
                shouldContinue2 = false;
            }
            else if ((shouldContinue2 === false) && (shouldContinue3 === true)) {
                if (regex_number.test(expr[i])) {
                    arrayB.push(expr[i]);
                }
                else if (!regex_number.test(expr[i])) {
                    shouldContinue3 = false;
                }
            }
        }
    }
    let isAMinusOne = false;
    if (expr.split('')[1] === '-') {
        if (!regex_number.test(expr[2])) {
            isAMinusOne = true;
            findaxb(2);
            a = -parseInt(arrayA.join(''));
        }
        else {
            findaxb(2);
            a = -parseInt(arrayA.join(''));
        }
    }
    else {
        findaxb(1);
        a = parseInt(arrayA.join(''));
    }
    const bvalue = parseInt(arrayB.join(''));
    let b = 0;
    if (isbpositive) {
        b = bvalue;
    }
    else {
        b = -bvalue;
    }
    if (!a) {
        a = 1;
    }
    if (isAMinusOne) {
        a = -1;
    }
    console.log('a:', a);
    console.log('x:', x);
    console.log('b:', b);
    const regexn = new RegExp(/\^([^]*)/);
    const match_n = expr.match(regexn);
    let n = 0;
    if (match_n) {
        n = parseInt(match_n[1]);
        console.log('n:', n);
    }
    else {
        console.log("No match found for 'n'");
    }
    function factorial(input) {
        let accumulator = 1;
        for (let i = 1; i <= input; i++) {
            accumulator *= i;
        }
        return accumulator;
    }
    function binomialCoefficient(n, m) {
        return factorial(n) / (factorial(m) * factorial(n - m));
    }
    let z = -5;
    let numericalOutput = 0;
    let stringOutput = '';
    function expansionExpression(i, j) {
        return binomialCoefficient(n, i) * Math.pow(a, j) * Math.pow(b, i);
    }
    function expansionExpressionOneAhead(i, j) {
        return binomialCoefficient(n, i + 1) * Math.pow(a, j - 1) * Math.pow(b, i + 1);
    }
    for (let i = 0, j = n; i <= n && j >= 0; i++, j--) {
        numericalOutput += binomialCoefficient(n, i) * Math.pow(a, j) * Math.pow(z, j) * Math.pow(b, i);
        if (i < n - 1) {
            if (expansionExpressionOneAhead(i, j) < 0 || expansionExpressionOneAhead(i, j) === 0) {
                if (expansionExpression(i, j) === 1) {
                    stringOutput += `${x}^${j}`;
                }
                else if (expansionExpression(i, j) === -1) {
                    stringOutput += `-${x}^${j}`;
                }
                else if (expansionExpression(i, j) === 0) {
                }
                else {
                    stringOutput += `${expansionExpression(i, j)}${x}^${j}`;
                }
            }
            else {
                if (expansionExpression(i, j) === 1) {
                    stringOutput += `${x}^${j}+`;
                }
                else if (expansionExpression(i, j) === -1) {
                    stringOutput += `-${x}^${j}+`;
                }
                else if (expansionExpression(i, j) === 0) {
                }
                else {
                    stringOutput += `${expansionExpression(i, j)}${x}^${j}+`;
                }
            }
        }
        else if ((i === n - 1)) {
            if (expansionExpressionOneAhead(i, j) < 0 || expansionExpressionOneAhead(i, j) === 0) {
                if (expansionExpression(i, j) === 1) {
                    stringOutput += `${x}`;
                }
                else if (expansionExpression(i, j) === -1) {
                    stringOutput += `-${x}`;
                }
                else if (expansionExpression(i, j) === 0) {
                }
                else {
                    stringOutput += `${expansionExpression(i, j)}${x}`;
                }
            }
            else {
                if (expansionExpression(i, j) === 1) {
                    stringOutput += `${x}+`;
                }
                else if (expansionExpression(i, j) === -1) {
                    stringOutput += `-${x}`;
                }
                else if (expansionExpression(i, j) === 0) {
                }
                else {
                    stringOutput += `${expansionExpression(i, j)}${x}+`;
                }
            }
        }
        else {
            if (expansionExpression(i, j) !== 0) {
                stringOutput += `${expansionExpression(i, j)}`;
            }
            else {
            }
        }
    }
    console.log('numericalOutput:', numericalOutput);
    return stringOutput;
}
console.log(expand("(-t+4)^3)"));
console.log(expand("(9t-0)^2)"));

// PLAN - use general binomial expansion formula: (ax + b)^n
// 1 - extract values for a, b and n (aswell as the one charahcter variable - it is not always 'x')
// 2 - create function for calculating binomial coefficient
// 3 - apply general binomial expansion formula to the input variable and return string output

type RegExpMatchResult = RegExpMatchArray | null;

function expand(expr: string): string {

// ------- STAGE 1 -------------
// FIND a (and x and b)
let a: number = 0;
let x: string = '';
let isbpositive: boolean = true;
let arrayA: string[] = []
let arrayB: string[] = []
const regex_number = new RegExp(/[0-9]/);
const exprArray = expr.split('')

function findaxb(input: number): void {
    let shouldContinue: boolean = true
    let shouldContinue2: boolean = true
    let shouldContinue3: boolean = true
    for (let i=input; i<exprArray.length; i++) {
        if (regex_number.test(expr[i]) && shouldContinue === true) {
            arrayA.push(expr[i])
        } else if (shouldContinue === true) {
            shouldContinue = false
            x = expr[i]
        } else if ((shouldContinue === false) && (shouldContinue2 === true)) {
            if (expr[i] === '-') {
                isbpositive = false
            } else if (expr[i] === '+') {
                isbpositive = true
            }
            shouldContinue2 = false 
        } else if ((shouldContinue2 === false) && (shouldContinue3 === true)) {
            if (regex_number.test(expr[i])) {
                arrayB.push(expr[i]) 
            } else if (!regex_number.test(expr[i])) {
                shouldContinue3 = false
            }
        }
    }
}

let isAMinusOne: boolean = false

if (expr.split('')[1] === '-') { // if 'a' is negative
    if (!regex_number.test(expr[2])) {
        isAMinusOne = true
        findaxb(2)
        a = -parseInt(arrayA.join(''))
    } else {
        findaxb(2)
        a = -parseInt(arrayA.join(''))
    }
} else {  // if 'a' is positive
    findaxb(1)
    a = parseInt(arrayA.join(''))
}


const bvalue: number = parseInt(arrayB.join(''))
let b: number = 0
if (isbpositive) {
    b = bvalue
} else {
    b = -bvalue
}

if (!a) {
    a = 1
}

if (isAMinusOne) {
    a = -1
}

console.log('a:', a)
console.log('x:', x)
// console.log(isbpositive)
console.log('b:', b)

// FIND n
const regexn = new RegExp(/\^([^]*)/);
const match_n: RegExpMatchResult = expr.match(regexn);
let n: number = 0;

if (match_n) {
    n = parseInt(match_n[1]);
    console.log('n:', n)
} else {
    console.log("No match found for 'n'");
}

// ------- STAGE 2 -------------
// create function for calculating the binomial coefficient of two numbers

function factorial (input: number): number { // first we need a function to find the factorial
    let accumulator: number = 1
    for (let i=1; i<=input; i++) {
        accumulator *= i
    }
 return accumulator
}

function binomialCoefficient (n: number, m: number): number {
    return factorial(n) / (factorial(m) * factorial(n - m))
}

// ------- STAGE 3 -------------
// apply general binomial expansion formula

let z: number = -5
let numericalOutput: number = 0
let stringOutput: string = ''

function expansionExpression (i: number, j: number): number {
    return  binomialCoefficient(n, i) * Math.pow(a, j) * Math.pow(b, i)
}

function expansionExpressionOneAhead (i: number, j: number): number {
    return  binomialCoefficient(n, i + 1) * Math.pow(a, j - 1) * Math.pow(b, i + 1)
}

for (let i = 0, j = n; i <= n && j >= 0; i++, j--) {
    numericalOutput += binomialCoefficient(n, i) * Math.pow(a, j) * Math.pow(z, j) * Math.pow(b, i)
    if (i < n - 1) {
        if (expansionExpressionOneAhead(i, j) < 0 || expansionExpressionOneAhead(i, j) === 0) {
            if (expansionExpression(i, j) === 1) {
                stringOutput += `${x}^${j}`
            } else if (expansionExpression(i, j) === -1) {
                stringOutput += `-${x}^${j}`
            } else if (expansionExpression(i, j) === 0) {
                
            } else {
                stringOutput += `${expansionExpression(i, j)}${x}^${j}`
            }
        } else {
            if (expansionExpression(i, j) === 1) {
                stringOutput += `${x}^${j}+`
            } else if (expansionExpression(i, j) === -1) {
                stringOutput += `-${x}^${j}+`
            } else if (expansionExpression(i, j) === 0) {
                
            } else {
                stringOutput += `${expansionExpression(i, j)}${x}^${j}+`
            }
        }
    } else if ((i === n - 1)) {
        if (expansionExpressionOneAhead(i, j) < 0 || expansionExpressionOneAhead(i, j) === 0) {
            if (expansionExpression(i, j) === 1) {
                stringOutput += `${x}`
            } else if (expansionExpression(i, j) === -1) {
                stringOutput += `-${x}`
            } else if (expansionExpression(i, j) === 0) {
                
            } else {
                stringOutput += `${expansionExpression(i, j)}${x}`
            }
        } else {
            if (expansionExpression(i, j) === 1) {
                stringOutput += `${x}+`
            } else if (expansionExpression(i, j) === -1) {
                stringOutput += `-${x}`
            } else if (expansionExpression(i, j) === 0) {
                
            } else {
                stringOutput += `${expansionExpression(i, j)}${x}+`
            }
        }
    } else {
        if (expansionExpression(i, j) !== 0) {
            stringOutput += `${expansionExpression(i, j)}`
        } else {
            
        }
    }
}

console.log('numericalOutput:', numericalOutput)

return stringOutput
}

// console.log(expand("(5m+3)^4"))
// console.log(expand("(x+1)^1"))
// console.log(expand("(x-1)^1"))
// console.log(expand("(2x-3)^3"))
// console.log(expand("(-5m+3)^4"))

console.log(expand("(-t+4)^3)"))
// console.log(expand("(-d-16)^7"))
console.log(expand("(9t-0)^2)"))
// console.log(expand("(-n-12)^5)"))


// need to factor for b and n being longer than 2
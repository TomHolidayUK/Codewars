//find the number at the end
//increase it by 1

function incrementString (strng: string): string {
    const array: string[] = strng.split('')
    let endNumber: string = '';
    let pass: boolean = true;

    let numberCheck: boolean = false
    for (let i=0; i<array.length;i++) {
        if (/\d/.test(array[i])) {
            numberCheck = true
        }
    }
    if (numberCheck === false) {
        return (array.concat("1").join(''))
    }
    for (let i = array.length-1; i>=0;i--) {
        if ((/\d/.test(array[i])) && (pass === true)) {
            endNumber += array[i]
        } else {
            pass = false
        }
    }

    const arrayWithoutNumbers: string[] = array.slice(0, (array.length - endNumber.length))
    const newNumber: number = parseInt(endNumber.split('').reverse().join('')) + 1
    const numberOfZerosToAdd: number = endNumber.length - newNumber.toString().length
    if (numberOfZerosToAdd >= 0) {
        const additionalZeros: string = '0'.repeat(numberOfZerosToAdd)
    return arrayWithoutNumbers.join('') + additionalZeros + newNumber.toString()
    } else {
        return arrayWithoutNumbers.join('') + newNumber.toString()
    }
  }

  
// console.log(incrementString('foobar000'))
// console.log(incrementString('foobar23'))
// console.log(incrementString("foobar00999"))
console.log(incrementString("foobar999"))
// console.log(incrementString('foo'))
// console.log(incrementString('1'))
// for large numbers treat the numbers as string and add them digit by digit (clue form chatGPT)
// do this with school-like addition method starteing from the end and leaving remainders if larger than 9

function add(a:string, b:string): string {
    if (((parseInt(a) + parseInt(b)) <= Number.MAX_SAFE_INTEGER)) {
        return (Number(a) + Number(b)).toString();
    } else {
    console.log('Big number')

    let arrayA: string[] = a.split('')
    let arrayB: string[] = b.split('')

    // Calculate the total sum of two strings:
    function totalCalculation(longArray: string[], shortArray: string[]): string {
        let total: number = 0
        let totalString: string = ''
        let remainder: boolean = false
        const differenceInLength: number = Math.abs(shortArray.length - longArray.length)
        for (let i = longArray.length - 1; i >= 0; i--) {
            if (remainder === false) {
                console.log('hello', ~~longArray[i])
                let addition: number = (parseInt(shortArray[i - differenceInLength]) || 0) + parseInt(longArray[i])
                remainder = (addition > 9) ? true : false 
                totalString = (addition > 9) ? addition.toString().slice(1,2) + totalString : addition.toString() + totalString
                total += (addition * (Math.pow(10, longArray.length-i-1)))
            } else {
                let addition: number = (parseInt(shortArray[i - differenceInLength]) || 0) + parseInt(longArray[i]) + 1
                remainder = (addition > 9) ? true : false 
                totalString = (addition > 9) ? addition.toString().slice(1,2) + totalString : addition.toString() + totalString
                total += (addition * (Math.pow(10, longArray.length-i-1)))
            }
        }
        return (remainder === false) ? totalString : '1' + totalString // if there is still a remainder at the end, add '1' to the front
    }
   
    return (a.length > b.length) ? totalCalculation(arrayA, arrayB) : totalCalculation(arrayB, arrayA)

    }
  }

console.log(add('99', '9999'))
console.log(add('19', '9991'))
console.log(add('262', '294'))
// split into individual numbers
// multiple them until single number
// return number of multiplications

export function persistence(num: number): number {
    let array: string[] = num.toString().split('')
    let final: number = 0
    if (array.length === 1) {
        return 0 // if length is 1 return 0
    } else {
        while(array.length > 1) {
            const multipliedValue: number = array.map(el => parseInt(el)).reduce((acc, v) => {
                return acc * v
            });
            array = multipliedValue.toString().split('')
            final++
        }
    }
    return final
   }

console.log(persistence(999))
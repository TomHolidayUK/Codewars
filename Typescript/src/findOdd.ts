// find frequency - use reduce
// create object (or array) of frequencies
// return numbers with odd frequencies

export const findOdd = (xs: number[]): number => {
    const frequency: { [key: string]: number } = {}; // define frequency object
    
    // loop through array
    xs.forEach(el => {
        if (frequency[el]) { // check if element already exists in the frequency object
            frequency[el]++ // if it does already exist, increase it's frequency by one 
        } else {
            frequency[el] = 1; // if not, create an instance in the array for that number and let it equal 1
        }
    })
    let final: string = ''
    for (let x in frequency) {
        if (frequency[x] % 2 !== 0) { // if odd return 
            final = x
        }
    }
    return parseInt(final) //convert to number
  };  

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
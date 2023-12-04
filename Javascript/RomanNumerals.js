class RomanNumerals {

    static toRoman(num) {
        if (num < 1 || num > 3999) {
            return false
        }
        const array = num.toString().split('');
        // console.log('array', array)
        let roman_numeral_array = [];

        // 1000
        if ((num / 1000) >= 1) {
            const number_of_1000 = Math.floor(num / 1000);
            const output_1000 = 'M'.repeat(number_of_1000)
            roman_numeral_array.push(output_1000)
        } else {
            console.log('Smaller than 1000');
        }

        // 100 
        if ((num / 100) >= 1) {
            if (array[array.length - 3] === '1') {
                roman_numeral_array.push('C')
            } else if (array[array.length - 3] === '2') {
                roman_numeral_array.push('CC')
            } else if (array[array.length - 3] === '3') {
                roman_numeral_array.push('CCC')
            } else if (array[array.length - 3] === '4') {
                roman_numeral_array.push('CD')
            } else if (array[array.length - 3] === '5') {
                roman_numeral_array.push('D')
            } else if (array[array.length - 3] === '6') {
                roman_numeral_array.push('DC')
            } else if (array[array.length - 3] === '7') {
                roman_numeral_array.push('DCC')
            } else if (array[array.length - 3] === '8') {
                roman_numeral_array.push('DCCC')
            } else if (array[array.length - 3] === '9') {
                roman_numeral_array.push('CM')
            } 
        } else {
            console.log('smaller than 100')
        }

        // 10
        if ((num / 10) >= 1) {
            if (array[array.length - 2] === '1') {
                roman_numeral_array.push('X')
            } else if (array[array.length - 2] === '2') {
                roman_numeral_array.push('XX')
            } else if (array[array.length - 2] === '3') {
                roman_numeral_array.push('XXX')
            } else if (array[array.length - 2] === '4') {
                roman_numeral_array.push('XL')
            } else if (array[array.length - 2] === '5') {
                roman_numeral_array.push('L')
            } else if (array[array.length - 2] === '6') {
                roman_numeral_array.push('LX')
            } else if (array[array.length - 2] === '7') {
                roman_numeral_array.push('LXX')
            } else if (array[array.length - 2] === '8') {
                roman_numeral_array.push('LXX')
            } else if (array[array.length - 2] === '9') {
                roman_numeral_array.push('XC')
            } 
        } else {
            console.log('smaller than 10')
        }

        // 1
        if (array[array.length - 1] === '1') {
            roman_numeral_array.push('I')
        } else if (array[array.length - 1] === '2') {
            roman_numeral_array.push('I')
        } else if (array[array.length - 1] === '3') {
            roman_numeral_array.push('I')
        } else if (array[array.length - 1] === '4') {
            roman_numeral_array.push('IV')
        } else if (array[array.length - 1] === '5') {
            roman_numeral_array.push('V')
        } else if (array[array.length - 1] === '6') {
            roman_numeral_array.push('VI')
        } else if (array[array.length - 1] === '7') {
            roman_numeral_array.push('VII')
        } else if (array[array.length - 1] === '8') {
            roman_numeral_array.push('VIII')
        } else if (array[array.length - 1] === '9') {
            roman_numeral_array.push('IX')
        } 
        
        console.log('output', roman_numeral_array)
        const output_roman_numerals = roman_numeral_array.join('')
       return output_roman_numerals;
    }
  
    static fromRoman(str) {
        let output_normal_numbers = [];
        let array2 = str.split('')
        console.log('array2', array2)
        let array3 = ['','','','']
        let array4 = []
        let state = ''
        let elseExecuted = false;
        let elseExecuted2 = false;
        let elseExecuted3 = false;
        let elseExecuted4 = false;

        firstPart(array2)

        function firstPart (arr) {
            for (let i=0; i<arr.length; i++) {
                if (arr[i] == 'M') {
                    array3[0] += 'M'
                } else {
                    if (!elseExecuted) {
                        secondPart(array3 , i);
                        elseExecuted = true;  
                    }
                }
                }
            }

        // function firstPart (arr) {
        //     for (let i=0; i<arr.length; i++) {
        //         if ((array2[i] == 'D') || (array2[i] == 'C')) {
        //             if (!elseExecuted) {
        //                 secondPart(array3 , i);
        //                 elseExecuted = true;  
        //             }
        //         } else {
        //             array3[0] += 'M'
        //         }
        //         }
        //     }

    //     function secondPart (arr, input) {
    //         console.log(arr, input)
    //         for (let i=input; i<array2.length; i++) {
    //         if ((array2[i] == 'C') || (array2[i] == 'D')) {     
    //             array3[1] += array2[i]
    //                 } else {
    //                     if (!elseExecuted2) {
    //                         thirdPart(array3 , i);
    //                         elseExecuted2 = true;  
    //                     }
    //                 }
    //     }
    // }

    function secondPart (arr, input) {
        console.log('2', arr, input)
        for (let i=input; i<array2.length; i++) {
        if ((array2[i] == 'X') || (array2[i] == 'L')) {    
            if (!elseExecuted2) {
                thirdPart(array3 , i);
                elseExecuted2 = true;  
            } 
                } else {
                    array3[1] += array2[i]
                    // console.log(array3)
                } 
    }
}

        // function thirdPart (arr, input) {
        //     console.log(arr, input)
        //     for (let i=input; i<array2.length; i++) {
        //         if ((array2[i] == 'X') || (array2[i] == 'L')) {     
        //             array3[2] += array2[i]
        //                 } else {
        //                     if (!elseExecuted3) {
        //                         fourthPart(array3 , i);
        //                         elseExecuted3 = true;  
        //                     }
        //                 }
        //     }
        // }

        function thirdPart (arr, input) {
            console.log('3', arr, input)
            for (let i=input; i<array2.length; i++) {
                if ((array2[i] == 'V') || (array2[i] == 'I')) {  
                    if (!elseExecuted3) {
                        fourthPart(array3 , i);
                        elseExecuted3 = true;  
                    }  
                        } else {
                            array3[2] += array2[i]
                        }
            }
        }

        function fourthPart (arr, input) {
            console.log('4', arr, input)
            for (let i=input; i<array2.length; i++) { 
                    array3[3] += array2[i]
            }
            // console.log('test', array3)
            array4 = [...array3]
        }
        console.log('test2', array4)

        let final_total = 0;
        // final_total += (array4[0].length * 1000)
        if (array4[0] === 'M') {
            final_total += (1 * 1000)
        } else if (array4[0] === 'MM') {
            final_total += (2 * 1000)
        } else if (array4[0] === 'MMM') {
            final_total += (3 * 1000)
        }

        if (array4[1] === 'C') {
                final_total += (1 * 100)
            } else if (array4[1] === 'CC') {
                final_total += (2 * 100)
            } else if (array4[1] === 'CCC') {
                final_total += (3 * 100)
            } else if (array4[1] === 'CD') {
                final_total += (4 * 100)
            } else if (array4[1] === 'D') {
                final_total += (5 * 100)
            } else if (array4[1] === 'DC') {
                final_total += (6 * 100)
            } else if (array4[1] === 'DCC') {
                final_total += (7 * 100)
            } else if (array4[1] === 'DCCC') {
                final_total += (8 * 100)
            } else if (array4[1] === 'CM') {
                final_total += (9 * 100)
            } 

        if (array4[2] === 'X') {
            final_total += (1 * 10)
        } else if (array4[2] === 'XX') {
            final_total += (2 * 10)
        } else if (array4[2] === 'XXX') {
            final_total += (3 * 10)
        } else if (array4[2] === 'XL') {
            final_total += (4 * 10)
        } else if (array4[2] === 'L') {
            final_total += (5 * 10)
        } else if (array4[2] === 'LX') {
            final_total += (6 * 10)
        } else if (array4[2] === 'LX') {
            final_total += (7 * 10)
        } else if (array4[2] === 'LX') {
            final_total += (8 * 10)
        } else if (array4[2] === 'XC') {
            final_total += (9 * 10)
        } 

        if (array4[3] === 'I') {
            final_total += (1)
        } else if (array4[3] === 'I') {
            final_total += (2)
        } else if (array4[3] === 'I') {
            final_total += (3)
        } else if (array4[3] === 'IV') {
            final_total += (4)
        } else if (array4[3] === 'V') {
            final_total += (5)
        } else if (array4[3] === 'VI') {
            final_total += (6)
        } else if (array4[3] === 'VII') {
            final_total += (7)
        } else if (array4[3] === 'VIII') {
            final_total += (8)
        } else if (array4[3] === 'IX') {
            final_total += (9)
        } 
        
      return final_total  
    }
  }

console.log(RomanNumerals.toRoman(1))
// console.log(RomanNumerals.fromRoman('MMCMXLI'))
console.log(RomanNumerals.fromRoman('I'))
// console.log(RomanNumerals.fromRoman('DCC'))
// CM IX XC
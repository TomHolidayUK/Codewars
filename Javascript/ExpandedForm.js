function expandedForm (number) {
const array = number.toString().split('')
let answer_array = []
array.forEach((element, index) => {
    if (element !== '0') {
        answer_array.push(element*(10**(array.length-index-1)))
    }
})
return answer_array.join(' + ')
}

console.log(expandedForm(70304))
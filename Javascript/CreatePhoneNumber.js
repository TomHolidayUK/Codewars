function createPhoneNumber(numbers){
const first_part = [...numbers].splice(0,3).join('')
const second_part = [...numbers].splice(3,3).join('')
const third_part = [...numbers].splice(6,4).join('')
return ('(' + first_part + ') ' + second_part + '-' + third_part)
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
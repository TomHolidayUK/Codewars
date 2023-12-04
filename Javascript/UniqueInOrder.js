var uniqueInOrder=function(iterable){
    console.log(typeof iterable)
    let array = iterable;
    if (typeof iterable == 'string') {
        array = iterable.split('')
    }
    let new_array = [];
    for (let i=0; i < iterable.length; i++) {
        if (array[i] == array[i-1]) {
            console.log('array[i]', array[i])
        } else if (array[i] !== array[i-1]) {
            new_array.push(array[i])
        }
  }
  return new_array;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
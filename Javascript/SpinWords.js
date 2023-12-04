function spinWords(string){
    const array = string.split(' ');
    for (let i=0; i<array.length; i++) {
        if (array[i].length >= 5) {
            array[i] = array[i].split('').reverse().join('')
        }
    }
    return array.join(' ')
  }

  console.log(spinWords("Hey fellow warriors"))
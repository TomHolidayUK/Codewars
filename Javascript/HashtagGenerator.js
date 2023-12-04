function generateHashtag (str) {
    if (str == false) {
        return false
    }
    
    const array = str.split(' ')
    console.log(array)

    let first_letter = []
    let rest = []
    let full = ''
    for (let i=0;i<array.length;i++) {
        if (array[i] != false) {
            first_letter = (array[i].split(''))[0].toUpperCase()
            rest = array[i].slice(1)
            full = full.concat(first_letter + rest)
        }
    }
    const final = '#' + full
    if (final.length > 140) {
        return false
    } else {
        return final
    }
}

// console.log(generateHashtag('Hello there thanks for trying my Kata'))
// console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(" "))
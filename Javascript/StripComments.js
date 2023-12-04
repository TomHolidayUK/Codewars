function solution(input, markers) {

  let uncommented_array = [];

  for (let i=0; i<input.split('\n').length; i++) {
    uncommented_array.push(input.split('\n')[i].split(''))
  }

  for (let i=0; i<uncommented_array.length; i++) {
    for (let j=0; j<uncommented_array[i].length; j++) {
        if ((uncommented_array[i][j] === markers[0]) || (uncommented_array[i][j] === markers[1])) {
            uncommented_array[i] = uncommented_array[i].slice(0, j)
            } 
        }
    }

  for (let i=0; i<uncommented_array.length; i++) {
        uncommented_array[i] = uncommented_array[i].join('').trim()
    }
    
return uncommented_array.join('\n')
};

// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
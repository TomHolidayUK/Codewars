const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((n) => n * 2);

console.log(doubledNumbers); 

// function solution(number){
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         if (i % 3 == 0) {
//             sum += i
//         } else if (i % 5 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(solution(10));
// console.log(-3 / 3)
// console.log(-3 % 3)

// ----------------------

// function recursiveFunction(array) {
//     // Some condition to stop recursion
//     if (array.length == 0) {
//         return "Done";
//     }

//     // Process the value
//     array.pop()
//     console.log(array);

//     // Call the function with a modified or updated value
//     return recursiveFunction(array);
// }

// console.log(recursiveFunction([1,2,3,4,5]))

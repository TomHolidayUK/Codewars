snail = function(array) {
    // METHOD
    // Go around outside of square adding to the return value and remove elements as you do so 
    // When the square is empty, stop 
    let final = []

    function recursiveFunction(array) {
        if (array.length == 0) {
            return final;
        } else {

        removeOutside = function (array) {
            if (array.length == 0) {
            return "Done2";
            } else {
            // TOP
            Array.prototype.push.apply(final, array[0]);
            array.shift()
            }
            // RIGHT
            if (array.length == 0) {
                return final;
            } else {
            let width = array[0].length
            for (let i=0; i<array.length; i++) {
                final.push(array[i][width-1])
                array[i].pop()
            }
            }
            // BOTTOM (NEED TO REVERSE)
            if (array.length == 0) {
                return final;
            } else {
            let bottom = array.slice(-1)
            let bottom_reversed = bottom[0].reverse()
            Array.prototype.push.apply(final, bottom_reversed);
            array.pop()
            }
            // LEFT
            if (array.length == 0) {
                return final;
            } else {
            let height = array.length
            for (let i=height-1; i>=0; i--) {
                final.push(array[i][0])
                array[i].shift()
            }
            }
        }
    

        removeOutside(array)
        }
    
    return recursiveFunction(array);
    }

    return recursiveFunction(array).join()
  }

// pop() = last element = bottom row 
// shift() = first element = top row

// console.log(snail([[1,2],
//     [3,4]]))

//   console.log(snail([[1,2,3],
//                      [4,5,6],
//                      [7,8,9]]))

    // console.log(snail([
    // [1 , 2 , 3 , 4 , 5 ], 
    // [6 , 7 , 8 , 9 , 10],
    // [11, 12, 13, 14, 15], 
    // [16, 17, 18, 19, 20], 
    // [21, 22, 23, 24, 25]]))

     console.log(snail([
    [1 , 2 , 3 , 4 , 5, 6 ], 
    [7 , 8 , 9 , 10, 11, 12],
    [13, 14, 15, 16, 17, 18], 
    [19, 20, 21, 22, 23, 24], 
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]]))

    // console.log(snail([]))

    // RETURN THE RIGHT ANSWER
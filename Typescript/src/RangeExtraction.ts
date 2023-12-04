// Split the list into groups of consecutuve numbers
// IF the length of the group is more than 2 then it needs to be written as a range

function solution (list: number[]) {
    let groups: number[][] = [[list[0]]]
    let groupNumber: number = 0
    for (let i=1; i<list.length; i++) {
        if (list[i] === list[i-1]+1) {
            groups[groupNumber].push(list[i]);
        }
        else {
            groupNumber++;
            groups[groupNumber] = [list[i]]; 
        }
    }
    console.log(groups)
    let output: string = ''
    groups.forEach((element) => {
        if (element.length > 2) {
            output += (`${element[0]}-${element[element.length-1]}`) + ','
        } else {
            output += element.join(',') + ','
        }
    })
    return output.slice(0,output.length -1 )
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
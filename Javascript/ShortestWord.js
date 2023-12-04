function findShort(s){
let array = s.split(' ');
let array2 = [];
for (let i=0; i<array.length; i++) {
    array2.push((array[i].length))
}
// return array2.sort(function(a, b){return a - b})[0];
return Math.min.apply(null, array2)
return Math.min(...array2)
}


console.log(findShort("BTC Ethereum Classic Mine ProofOfStake Mine ProofOfWork Factom Bitcoin"))
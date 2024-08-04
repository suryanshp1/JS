const myNums = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`${acc}-----------${currVal}`);
    
    return acc + currVal
}, 0)

console.log(myTotal);

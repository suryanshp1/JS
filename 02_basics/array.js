// array

const myArray = [0,1,2,3,4,5]

const myHeroes = ["rer", "maddy", "codd"]

const myArray2 = new Array(1,2,3,4,5)
// console.log(myArray[0]);

// Array Methods

// myArray.push(6)
// console.log(myArray);
// myArray.push(7)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(9)
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9))
// console.log(myArray.indexOf(3))

const newArr = myArray.join()
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);

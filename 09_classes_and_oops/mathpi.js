// console.log(Math.PI)

// Math.PI = 5
// console.log(Math.PI)

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani");
        
    }
}
// console.log(chai);

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })

const descripter = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(descripter);

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
    
}
coding = ["js", "go", "python", "ruby", "cpp"]

// coding.forEach(function (element) {
//     console.log(element);
// });

// coding.forEach((element) => {
//     console.log(element);
// });

// function printMe (item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((element, index, arr) => {
//     console.log(element, index, arr);
// });

const myCoding = [
    {
        name: "javascript",
        file: "js"
    },
    {
        name: "python",
        file: "py"
    },
    {
        name: "java",
        file: "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.name);
    
})
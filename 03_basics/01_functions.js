

function sayMyName () {
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2)
// }
function addTwoNumbers (number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
    if (!username) return "Please enter a username"
    
    return `${username} just logged In..`
}

// console.log(loginUserMessage("Suraj"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return [val1, val2, num1]
}

// console.log(calculateCartPrice(1, 200, 400, 500, 2000));

const user = {
    username: "Suraj", 
    price: 112
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject?.price}`); 
}
// handleObject(user)

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(myNewArray) {
    return myNewArray[1]
}

console.log(returnSecondValue(myNewArray))
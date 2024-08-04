const user = {
    username: "hitesh",
    price: 999,

    welcomMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomMessage()
// user.username = "Sam"
// user.welcomMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }

// console.log(chai);

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => {username: hitesh}

// console.log(addTwo(2,3));


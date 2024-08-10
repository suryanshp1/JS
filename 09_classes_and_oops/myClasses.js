// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}dwqdwd`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "cd@default.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

}

User.prototype.encryptPassword = function() {
    return `${this.password}dwqdwd`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const chai = new User("chai", "cd@default.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username id ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@em.com", "pssaww")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(chai === masalaChai)

console.log(chai instanceof Teacher)
console.log(chai instanceof User)

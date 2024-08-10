const user = {
    username: "surya",
    loginCount: 6,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Got user name is ${this.username}`);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function() {
        console.log(`Hello ${this.username}!`);
        
    }
    
    return this
}

const userOne = new User("surya", 4, true)
const userTwo = new User("chipeelo", 10, true)

console.log(userOne.constructor);
console.log(userOne instanceof User);




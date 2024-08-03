// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    age: 18,
    "full name": "Hitesh Gujjar",
    location: "hyderabad",
    email: "suryansh@wer.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "mykey1"
}

myArr = ["h", "i"]

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser[mySym]);

// jsUser.email = "hitesh@chatgpt.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email = "hitesh@ms.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello js user");  
}

// console.log(jsUser.greeting());

jsUser.greeting2 = function() {
    console.log(`hello js user, ${this.name}`);  
}
console.log(jsUser.greeting2());
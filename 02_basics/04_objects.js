// const tinderUser = new Object()  //singleton object
const tinderUser = {} //non songleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@we.com",
    fullName: {
        userFullName:
        {firstName: 'Suraj',
        lastName: 'Pandey'}
    }
}

// console.log(regularUser.fullName.userFullName?.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const mergedObj = {...obj1, ...obj2}
const mergedObj = Object.assign({}, obj1, obj2)
// console.log(mergedObj);


const users = [{id: 1, name: "Surya"}, {id:2, name: "Sam"}]
// console.log(users[0].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(users));
// console.log(Object.entries(users));
// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Suraj"
}

const {courseInstructor: instructor} = course
console.log(instructor);

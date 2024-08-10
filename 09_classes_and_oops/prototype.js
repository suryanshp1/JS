let myName = "Surya     "

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderManPower: function() {
        console.log(`Spidy power id ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function() {
    console.log("hitesh is present in all objects");
    
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
    
}

// heroPower.hitesh()
// myHeroes.hitesh()
// Array.hitesh()

// heroPower.heyHitesh()
// myHeroes.hitesh()
// Array.hitesh()

// inheritance

const User = {
    username: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignments: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function() {
    console.log(this)
    console.log(this.name);
    console.log(`True length is : ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()

"Surya   ".trueLength()
"uhdwudhuwh".trueLength()
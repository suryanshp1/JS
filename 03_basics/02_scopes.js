let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);

function one() {
    const username = "surya"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "surya"
    if (username == "surya") {
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ========================== interesting ===============================
console.log(addOne(5))

function addOne(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))

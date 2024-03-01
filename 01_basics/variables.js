const accountId = 144532
let name = "Surya"
var accountPassword = "12345"
accountCity = "Jodhpur"

// accountId = 2 // not allowed

name = "Surya Pathak"
accountPassword = "232442"
accountCity = "Hyderabad"
/* Prefer not to use var because of issue in block scope and functional scope */
console.log(name);
let accountState;
console.table([accountId, accountPassword, name, accountCity, accountState])

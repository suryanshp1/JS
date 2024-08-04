// Immidietly Invoked Functio Expressions (IIFE)

// (function chai() {
//     console.log("DB connected");
// })();

// chai()

((name) => {
    console.log(`DB connected ${name}`);
})("Surya")
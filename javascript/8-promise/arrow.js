// const sayHello = function(name){
//     console.log("hello");
// }

// const sayHello = () => {
//     console.log("Hello")
// }

// one line function does not need braces
// const sayHello = () => console.log("Hello")

// One line return

// const sayHello = () => "Hello";

// const sayHello = function(){
//     return "Hello";
// }

// Return Object
// const sayHello = () => ({msg: "Hello"});

// Single params does not need parenthesis

// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

const users = ["Javid", "guru", "Akash"];

// const nameLength = users.map(function(name){
//     return name.length; // as Array
// })

const nameLength = users.map((name) => {
    return name.length; // as Array
})

const allUser = users.forEach((name) => {
    console.log(name)
})

console.log(nameLength);

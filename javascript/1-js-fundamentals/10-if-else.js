// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100; // number

// Equal to value

// if(100 == "100"){
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// Not Equal to

// if(id != 101){
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// Equal to value & Type

// if(100 === 100){
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// if(100 !== "100"){
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// Test If UNDEFINED
// let greet = "HEllO";

// if(typeof greet === "undefined"){
//     console.log(`Yeah im undefined cos im not get value of greet ${greet}`)
// } else {
//     console.log(`Yeah im undefined cos i got value of greet ${greet}`)
// }

// Greater or less than

// if(100 <= 100){
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// if(100 >= 99){
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }


// else if

// const color = "red";

// if(color === "Yellow"){
//     console.log("Color is red");
// } else if(color === "blue"){
//     console.log("Color is blue");
// } else {
//     console.log("There is no color or color not match");
// }


// Logical operator

const name = "Javid";
const age = 66;

// AND - && check both value true

// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`)
// } else if(age >= 20 && age <= 100){
//     console.log(`${name} is a adult`)
// } else {
//     console.log(`${name} is a dead`)
// }

// OR - || check only one true or false''

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}


// TERNARY OPERATOR es6

console.log(100 !== 101 ? "correct" : "incorrect");
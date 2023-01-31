// Function Decalaration

// The function declaration (function Statement) defines a function with the specified parameters

// Two Phases

// 1 - Creatation

// 2 - Excutation

// const firstName = "jagan";

// function greet(firstName = "John", lastName = "Doe"){
//    if(typeof firstName === "undefined"){firstName = "John"}
//    if(typeof lastName === "undefined"){lastName = "Doe"}
    //   console.log("Hello " + firstName + " " + lastName);
//    return "Hello " + firstName + " " + lastName;
//       return `Hello ${firstName} ${lastName}`;
// }
// console.log(greet())

// console.log(greet("Jagan")); function , Invoke

// const add = function(x = 5, y = 10){
//   return x + y;
// }

// console.log(add())


// An IIFE (Immediately Invokded Function Expression) is a Javascript
// (function(firstname){
//     console.log(`My name is ${firstname}`);
// })("jagan");


const person = {
    // Properties
    firstName : "Jagan",
    lastName : "Javid",
    // Methode
    getFullName: function(){
        return `Hello ${this.firstName} ${this.lastName}`
    },
    test: function(){
        console.log("this",this);
    }
}

// console.log(person.firstName);
// console.log(person.getFullName());
// person.test();
console.log(person);


person.age = 25;



person.bye = function(){
    return `Goodnight we can start tommarow`;
}

console.log(person.bye());

// const arr = [1, 2];

// arr.push(3);

// console.log(arr);













// Create a Array

// []

const number = [5,76,9,6,2,4,6,88,454,235];  // ***
const number2 = new Array(5,76,9,6,2,4);



let val;

// Get Array Length
val = number.length;

// Check if is array
val = Array.isArray(number);

// Get Single Value
val = number[3];

// Insert into array
// val = number[3] = 100;

// Find the index of value
val = number.indexOf(88876); // if array match is return the index number if not -1

// Mutating Array

// Add on the end
// number.push(1000);

// Add on to front
// number.unshift(2000);

// Take off from end
// number.pop();

// Take off from front
// number.shift();
// number.shift();

// Slice
// val = fruits.slice(0,2);


// Splice
const fruits = ["Apple", "Banana", "Orange"];

// Splice to Remove
// val = fruits.splice(1,2);

// Splice to Add
// fruits.splice(3,0,"Lemon");

console.log("Splice Return",val);
console.log("Furits",fruits);


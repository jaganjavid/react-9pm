const firstName = "Jagan";
const lastName = "Javid";
const age = 25;
const str = "Hello there my name is javid";
const tags = "web dev,web design,coding,programming";


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Hello";
val += "Buddy";

val = "Hello, My name is " + firstName + " " + "and i am " + age; 

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ",lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// String Index

val = firstName[0];
val = firstName[1];
val = firstName[4];

// CharAt()
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);

// Slice()
const fruit = "Apple";

// val = fruit.slice(1);
// val = fruit.slice(-3);

// Split
val = str.split(" ");
val = tags.split(",");


console.log(val);
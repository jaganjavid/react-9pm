const num1 = 100;
const num2 = 50;

let val;

// Simple math with number

val = num1 + num2; //add
val = num1 * num2; // multiply
val = num1 - num2; // sub
val = num1 / num2; // division
val = num1 % num2; // reminder

// Math Object

val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.1); // upper number
val = Math.floor(2.9); // lower number
val = Math.sqrt(36);
val = Math.abs(-67); // always return positive value
val = Math.min(-5,6,3,4,6,0);
val = Math.max(-5,6,3,4,7,0);
val = Math.random();

val = Math.floor(Math.random() * 30);



console.log(val);

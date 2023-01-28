let val;

// Number to string

val = String(555);
val = String(2 + 2);

// Bool to string
val = String(true);

// Arr to string
val = String([1,2,3,"Hello"]);

val = (5).toString();
val = (true).toString();

// String to Number
val = Number("5");

// Boolean to Number
val = Number(true);
val = Number(false);


val = Number(null);
val = Number("Hello"); // NAN - Not a Number
val = Number([1,2,3,4,5]); // NaN - Not a Number

val = parseInt('100.30');
val = parseFloat('100.35');




console.log(val);
console.log(typeof val);
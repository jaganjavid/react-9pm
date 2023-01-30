let val;

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const today = new Date();

// In Javscript month return 0 - 11

// val = today.getMonth();
// val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


const birthDay = new Date("05-09-1990 10:20:55");

birthDay.setMonth(2);
birthDay.setDate(15);
birthDay.setFullYear(2000);
birthDay.setHours(5);
birthDay.setMinutes(25);
birthDay.setSeconds(59)





console.log(birthDay);
// console.log(today);





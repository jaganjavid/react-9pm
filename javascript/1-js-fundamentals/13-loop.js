// For Loopd

// Loop can execute a block of code number of times

// for(let i = 0; i <= 10; i++){
//   if(i === 2){
//     console.log(`2 is printed`);
//     continue;
//   }

//   if(i === 5){
//     console.log("Hit 5 stop the loop");
//     break;
//   }
//   console.log(i);
// }  

// let i = 0;
// while (i < 10) {
   
//   if(i === 2){
//     console.log(`2 is printed`);
//     continue;
//   }
//   console.log("The number is " + i);

//   i++;
// }

// var furits = ["apple", "orange", "perl"];

// const f = furits.forEach((furit) => {
// console.log(furit);
// })


// const fu = furits.map((furit) => {
// return furit;
// })

// const fi = furits.filter((furit) => {
// return furit === "apple";
// })

// console.log(fi);
// console.log(furits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const vegs = ["carrot"];

// const result = fruits.at(2);

// const result = fruits.concat(vegs);


const ages = [32,33, 34, 17];

const result = ages.every((age) => {
  return age >= 18;
})


// const result = ages.find((age) => {
//   return age >= 18;
// })

// const result = ages.findIndex((age) => {
//   return age >= 18;
// })

console.log(result);


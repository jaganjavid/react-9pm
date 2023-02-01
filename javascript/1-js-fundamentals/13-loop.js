// For Loopd

// Loop can execute a block of code number of times

for(let i = 0; i <= 10; i++){
  if(i === 2){
    console.log(`2 is printed`);
    continue;
  }

  if(i === 5){
    console.log("Hit 5 stop the loop");
    break;
  }
  console.log(i);
}  

// let i = 0;
// while (i < 10) {
   
//   if(i === 2){
//     console.log(`2 is printed`);
//     continue;
//   }
//   console.log("The number is " + i);

//   i++;
// }
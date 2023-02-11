// GOBAL,FUNCTION,BLOCK SCOPE

var a = 1;
let b = 2;
const c = 3;

// function funScope(){
//     var a = 4;
//     let b = 5;
//     const c = 6

//     console.log(`FUNCTION SCOPE `, a, b, c);
// }

// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log(`BLOCK SCOPE`, a, b, c);
// }

for(let a = 0; a < 10; a++){
    console.log(`LOOP, ${a}`);
}


console.log(`GLOBAL SCOPE`, a,b,c);
// funScope();
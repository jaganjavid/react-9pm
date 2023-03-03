// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// async function myFunc(){
//   const promise = new Promise((resovle, reject) => {
//     setTimeout(() => resovle("Hello"), 3000);
//   })

//   const error = false;

//   if(!error){
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went worng"));
//   }
// }

// myFunc().then(res => console.log(res))
//         .catch(err => console.log(err));

async function getUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 

    // only proceed once its resolved

    const data = await response.json();

    return data;
}


getUser().then(users => console.log(users));



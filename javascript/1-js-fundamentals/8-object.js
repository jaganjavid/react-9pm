const person = {
    // Properties
    firstName:"Jagan", // Name and value pairs or Key and Value Pairs
    lastName:"Javid",
    age:25,
    email:"Jaganjavid@gmail.com",
    hasKids:true,
    hobbies: ["music","sports"],
    address: {
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName: function(){
    // console.log(person.firstName + " " + person.lastName);
       return this.firstName + " " + this.lastName;
    },
    personWalk: function(){
        return this.firstName + " " + "is walking";
    }
}


console.log(person.firstName); //***/
console.log(person["lastName"]);
console.log(person.hasKids);
console.log(person.hobbies[1]);
console.log(person.address.state);
console.log(person.getFullName());
console.log(person.personWalk())
console.log(typeof person.getFullName());







// function run(){
//    return function(){
//      return "Inner Hello";
//    }
// }


// console.log(run()());
// console.log(typeof run());

// "Hello";






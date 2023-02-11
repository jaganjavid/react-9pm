// In a constructor function this does not have a value. 
// It is a substitute for the new object. The value of this
// will become the new object when a new object is created.


function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const javid = new Person("Jagan", "Javid");
const aurn = new Person("Arun", "Kumar");

console.log(javid);
console.log(aurn.fullName());


function test(){
    this.firstName = "Jagan";
};

const testResult = new test(); // object

console.log(testResult);

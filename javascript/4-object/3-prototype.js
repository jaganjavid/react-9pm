// Person Contructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
}

const javid = new Person("Jagan", "Javid");
const josh = new Person("Josh", "Sri");

// console.log(javid.fullName());
console.log(josh);
console.log(josh.fullName());




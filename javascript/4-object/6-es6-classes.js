class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    getFullName(){
        return `Hello there my name is ${this.firstName} ${this.lastName}`
    }
}


class Customer extends Person{
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); // call the props
        this.phone = phone;
        this.membership = membership;
    }

    getFullName(){
        return `Hello Welcome ${this.firstName} ${this.lastName}`
    }
}


const javid = new Person("Jagan","Javid");
const arun = new Customer("Arun", "Kumar", "555-5555-555", "standard");

console.log(arun);
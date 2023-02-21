const personPrototype = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`; 
    }
}

const javid = Object.create(personPrototype);

const arun = Object.create(personPrototype, {
    firstName: {value: "Jagan"},
    lastName: {value:"javid"}
});

javid.firstName = "Jagan";
javid.lastName = "Javid";

console.log(arun.greeting());
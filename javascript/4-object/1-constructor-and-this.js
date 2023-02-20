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


// function Car(brand,color){
//     this.brand = brand;
//     this.color = color;
//     console.log(brand, color);
// }

// const car = new Car("BMW","RED");

// console.log(brand);
// console.log(car);

// console.log(window);

// const arr = ["Hello", 1, true, {name:"Javid"}, [1,2,3,4,5], function(){
//     return "Hola"
// },]

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3].name);
// console.log(arr[4][2]);
// console.log(arr[5]());

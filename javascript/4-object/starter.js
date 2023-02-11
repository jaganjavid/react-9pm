


// console.log(this); // window
// console.log(window);

// window.alert("Hey")
// this.alert("Hey")

function run(){
    console.log(this); // window
}

// run();

const MyObject = {
    x:"Hello",
    run:function(){
        // console.log(this); // direct object
        var self = this;
        return function(){
            // console.log(self.x = "Hola"); // window
            console.log(self.x = "Hola");
        }
    }
};


window.yo = "yoooo";

// console.log(MyObject);
console.log(MyObject.run()());
// console.log(window);
console.log(MyObject);
let val;


val = document;
val = document.all;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.links;
val = document.links[0];
val = document.links[0].className; // String
val = document.links[0].classList; // DOM TOKEN LIST
val = document.links[0].classList[0]; 
val = document.images;
val = document.images[0];
val = document.images[0].src;
val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[1].getAttribute("src");

let scripts = document.scripts;



// for(let i = 0; i < scripts.length; i++){
//     // console.log(i);
//     console.log(scripts[i]);
// }

// let i = 0;

// while(i<scripts.length){
//     console.log(scripts[i]);
//     i++;
// }

console.log(scripts);

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(element, index){
    console.log(`my Index ${index} + ${element.src}`);
})


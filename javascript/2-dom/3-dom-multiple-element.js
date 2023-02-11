// document.getElementsByClassName()


// const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION

// console.log(items);
// console.log(items[0]);
// items[0].style.background = "blue";
// items[0].textContent = "Hello";

// let list = Array.from(items); // Convert to list

// list.forEach(function(element){
//     console.log(element.textContent);
//     element.style.color = "blue";
// })


// document.querySelectorAll()

const items = document.querySelectorAll(".collection-item"); // NODELIST

// for(i = 0; i<items.length; i++){
//     items[i].style.color = "blue";
// }

// items.forEach(function(element){
//     console.log(element.textContent);
//     element.style.color = "blue";
// })

// document.querySelector(".clear-tasks").addEventListener("click", () => {
//     document.querySelector(".card-action").style.background = "red";
// })
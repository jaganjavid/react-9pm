// Replace Element


// Create Element

const newHeading = document.createElement("h2");

newHeading.className = "heading";
newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task Title"));

const oldHeading = document.querySelector("#task-title");
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

// Remove Element

// const list = document.querySelectorAll("li");
// list[1].remove();

// Class & Attr

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST
console.log(val);
val = link.classList[0];


// DOMTOKENLIST METHODE

// val = link.className = "Hello";
// val = link.classList.add("test-link");
// val = link.classList.remove("delete-item");
// val = link.classList.contains("delete-item");
// val = link.classList.replace("delete-item", "Jagan");
console.log(val);

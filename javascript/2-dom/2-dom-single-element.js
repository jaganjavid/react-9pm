// document.getElementById()

console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change Style
taskTitle.style.background = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "15px";
// taskTitle.style.display = "none";

// Change Content
taskTitle.textContent = "Task List";
taskTitle.innerText = "Task List 2";
taskTitle.innerHTML = "<p>Hello World</p>";


// document.querySelector()

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-action"));
// console.log(document.querySelector("ul"));

document.querySelector("li").style.color = "blue";
document.querySelector("ul li").style.color = "red";
document.querySelector("li:nth-child(3)").textContent = "Hello";
document.querySelector("li:nth-child(3)").style.color = "green";
document.querySelector("li:first-child").style.color = "yellow";
document.querySelector("li:last-child").style.color = "brown";



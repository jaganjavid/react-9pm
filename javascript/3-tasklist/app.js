// DEFINE UI VARS
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// Load All Event Listeners

loadEventListerners();

function loadEventListerners(){

    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks);

    // ADD TASK EVENT
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);

    // Filter Task

    filter.addEventListener("keyup", filterTasks);

    
}


// DOM LOADED
function getTasks(){
  let tasks;

  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task){
        // Create A LI Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";
    
        // Create A text node and append to li
        li.appendChild(document.createTextNode(task));
    
        // Creare a new link element
        const link = document.createElement("a");
    
        // Add class
        link.className = "delete-item secondary-content";
    
        // Add Icon HTMl
        link.innerHTML = `<i class="fa fa-remove"></i>`;
    
        // Append the link to li
        li.appendChild(link);
    
        // Append the li to ul
        taskList.appendChild(li);
  });

}

function addTask(e){
    e.preventDefault(); //stop relode 
    
    if(taskInput.value === ""){
        alert("Please Fill the Field");
        return false;
    }

    // Create A LI Element
    const li = document.createElement("li");

    // Add Class
    li.className = "collection-item";

    // Create A text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Creare a new link element
    const link = document.createElement("a");

    // Add class
    link.className = "delete-item secondary-content";

    // Add Icon HTMl
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // Append the link to li
    li.appendChild(link);

    // Append the li to ul
    taskList.appendChild(li);

    // Store to ls
    storeTaskInLocalStorage(taskInput.value);
    
    // taskInput.value clear
    taskInput.value = "";

  
}

// Store Task LS

function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Remove The TAsk

function removeTask(e){
  if(e.target.parentElement.className === "delete-item secondary-content"){
    if(confirm("Are you Sure")){
        e.target.parentElement.parentElement.remove();

        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
  
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index){
    // console.log(task, index);
    // console.log(taskItem.textContent);
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  })

  localStorage.setItem("tasks", JSON.stringify(tasks));

}

// clearTask

function clearTask(e){
    taskList.innerHTML = "";

    // Clear From LS
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}


function filterTasks(e){
  const text = e.target.value.toLowerCase();
 
  const allLi = document.querySelectorAll(".collection-item");

  allLi.forEach(function(task){
    const item = task.firstChild.textContent;
    
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  })
}


// const arr = [1,2,3,4,5];

// const covertarrtostring = JSON.stringify(arr);
// const stringtoarr = JSON.parse(covertarrtostring);

// console.log(arr);
// console.log(covertarrtostring);
// console.log(typeof covertarrtostring);
// console.log(stringtoarr);



// console.log("Hello");
// console.log([1]);

// var x = "a";
// var y = "a";

// if(x === y){
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// var str = "Hello";

// console.log(str.indexOf("H"));
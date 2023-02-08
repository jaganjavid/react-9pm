// DEFINE UI VARS

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load All Event Listeners

loadEventListerners();

function loadEventListerners(){
    // ADD TASK EVENT
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);
}

// Add TO TASK

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
    console.log("I will create a box");
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    console.log("I got a box");
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Remove The TAsk

function removeTask(e){
  if(e.target.parentElement.className === "delete-item secondary-content"){
    if(confirm("Are you Sure")){
        e.target.parentElement.parentElement.remove();
    }
  }
  console.log(e.target);
}

// clearTask

function clearTask(e){
    taskList.innerHTML = "";
}


// const arr = [1,2,3,4,5];

// const covertarrtostring = JSON.stringify(arr);
// const stringtoarr = JSON.parse(covertarrtostring);

// console.log(arr);
// console.log(covertarrtostring);
// console.log(typeof covertarrtostring);
// console.log(stringtoarr);
// Create Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add Id
li.id = "test";

// Add Attribute
li.setAttribute("title", "New-Item");

// Create Text node and append
li.appendChild(document.createTextNode("Hello world"))

// Create new link element
const link = document.createElement("a");

// Add class to link item
link.className = "delete-item secondary-content";

// Add icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

document.querySelector(".collection").appendChild(li);


// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// All comments are comment nodes

let val;

const list = document.querySelector(".collection"); // nodelist

const listItem = document.querySelector("li.collection-item:last-child");

val = list;
console.log(list.childNodes)
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 3 - Textnode
// 8 - comment

// Get Children element nodes //***

val = list.children; // HTMLCOLLECTION
val = list.children[0];
val = list.children[1].textContent = "Hello";
val = list.children[2].children[0].className;


// First child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;


// Count Child Element
val = list.childElementCount;

// Get Parent Node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// Get next Sibling
val = listItem.nextElementSibling;
console.log(val);
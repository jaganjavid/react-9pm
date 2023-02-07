// Event delegation
// Capturing and bubbling allow us to implement one of
// the most powerful event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a 
// similar way, then instead of assigning a handler to each of
//  them – we put a single handler on their common ancestor.

// In the handler we get event.target to see where 
// the event actually happened and handle it. 

const delItem = document.querySelector(".delete-item");

document.body.addEventListener("click", deleteItem);

function deleteItem(e){
    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     e.target.parentElement.parentElement.remove();
    // }
    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove();
    }
    // console.log(e.target.parentElement.classList);
}
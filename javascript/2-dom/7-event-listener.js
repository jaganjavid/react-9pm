// The addEventListener() method allows you to add event listeners on any 
// HTML DOM object such as HTML elements

document.querySelector(".clear-tasks").addEventListener("click", onClick)


function onClick(event){
    let val;

    val = event;
    console.log(val);

    val = event.target;
    console.log(val);
    val = event.target.id;
    val = event.target.innerText;
    val = event.target.className;
    val = event.target.parentElement.children[1].children[0].style.background = "blue";
    console.log(val);

}



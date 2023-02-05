const clearBtn = document.querySelector(".clear-tasks");
const cardAction = document.querySelector(".card-action");

// Mouse Event

// Click

// clearBtn.addEventListener("click", runEvent);

// Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
// clearBtn.addEventListener("mouseenter", runEvent);

// Mouse Leave
// clearBtn.addEventListener("mouseleave", runEvent);

// Mouse Move

clearBtn.addEventListener("mousemove", runEvent);


function runEvent(e){
    // console.log(e);
  console.log(`Event Type : ${e.type}`);
  cardAction.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},  ${e.offsetY})`;
  console.log(e.offsetX);
  console.log(e.clientX);
}

document.querySelector("body").addEventListener("mousemove", function(e){
    cardAction.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},  ${e.offsetY})`;
})
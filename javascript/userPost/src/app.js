import { http } from "./https";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for edit 
document.querySelector("#posts").addEventListener("click", enablePost);


function getPosts(){
    http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

const id = document.getElementById("id").value;
console.log(id);

function submitPost(){
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;

    const data = {
       title,
       body
    }

    if(title === "" || body === ""){
        ui.showAlert("Please fill in all fields", "alert alert-danger");
    } else {
        http.post("http://localhost:3000/posts",data)
        .then(data => {
            ui.showAlert("Post Added", "alert alert-success");
            ui.clearFields();
            getPosts();
        })
    }
}

function enablePost(e){
  if(e.target.parentElement.classList.contains("edit")){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
        id,
        title,
        body
    }

    ui.fillForm(data);
  }
}


function clearBtn(){
    const a = document.createElement("a");
    a.className = "btn btn-dark";
    a.appendChild(document.createTextNode("clear"));
    // document.body.appendChild(a);
    // a.style.position = "absolute";
    // a.style.top = "15px";
    // a.style.right = "15px";

    const nav = document.querySelector(".navbar .container>div");
    nav.style.display = "flex";
    nav.style.width = "100%";
    nav.style.justifyContent = "space-between";
    nav.appendChild(a);
}

clearBtn();
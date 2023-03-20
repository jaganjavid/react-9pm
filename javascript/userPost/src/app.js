import { http } from "./https";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost)




function getPosts(){
    http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

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
        console.log(data);
    }
   
    
}


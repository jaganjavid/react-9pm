import { http } from "./https";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for edit 
document.querySelector("#posts").addEventListener("click", enablePost);

// Listen to cancel
document.querySelector(".card-form").addEventListener("click", cancelPost);

// Listen to delete
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen to delete
document.querySelector(".card-body").addEventListener("click", updatePost);




function getPosts(){
    http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}


function submitPost(){
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;
    const id = document.getElementById("id").value;

    const data = {
       title,
       body
    }

    if(title === "" || body === ""){
        ui.showAlert("Please fill in all fields", "alert alert-danger");
    } else {
        if(id === ""){
            http.post("http://localhost:3000/posts",data)
            .then(data => {
                ui.showAlert("Post Added", "alert alert-success");
                ui.clearFields();
                getPosts();
            })
        } else {
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert("Post Added", "alert alert-success");
                ui.clearFields();
                getPosts();
            }).catch(err => console.log(err));
        }
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

function deletePost(e){
    if(e.target.parentElement.classList.contains("delete")){
      const id = e.target.parentElement.dataset.id;
      if(confirm("Are you sure")){
        http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
            ui.showAlert("Post Removed", "alert alert-success");
            getPosts();
        })
        .catch(err => console.log(err));
      }
    }
}

function cancelPost(e){
   if(e.target.classList.contains("post-cancel")){
    ui.changeFormState("add");
   }
}


function updatePost(e){
    if(e.target.classList.contains("post-update")){
        ui.changeFormState("add");
    }
}



// function clearBtn(){
//     const a = document.createElement("a");
//     a.className = "btn btn-dark";
//     a.appendChild(document.createTextNode("clear"));
//     // document.body.appendChild(a);
//     // a.style.position = "absolute";
//     // a.style.top = "15px";
//     // a.style.right = "15px";

//     const nav = document.querySelector(".navbar .container>div");
//     nav.style.display = "flex";
//     nav.style.width = "100%";
//     nav.style.justifyContent = "space-between";
//     nav.appendChild(a);
// }

// clearBtn();
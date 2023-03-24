class UI {
    constructor(){
        this.post = document.querySelector("#posts")
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.forState = "add";
    }

    showPosts(posts){
        let output = "";

        posts.forEach((post) => {
            output += `
            <div class="card mb-3">
            <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}">
                        <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                </a>
            </div>
            </div>
            `;
        });

        this.post.innerHTML = output;
    }

    // Show alert message
    showAlert(message, className){
        this.clearAlert(); 
        const div = document.createElement("div");
        
        div.className = className;
        
        div.appendChild(document.createTextNode(message));

        document.querySelector(".show-alert").appendChild(div);

         
        setTimeout(() => {
           this.clearAlert() 
        },5000)
       
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearFields(){
        this.titleInput.value = "";
        this.bodyInput.value = "";
    }

    fillForm(data){
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;
        this.changeFormState("edit");
    }

    clearIdInput(){
        this.idInput.value = "";
    }

    changeUpdatetoPost(){
        this.postSubmit.textContent = "Post It";
        this.postSubmit.className = "post-submit btn btn-success btn-block";
        this.idInput = "";
    }

    changeFormState(type){
        if(type === "edit"){
            this.postSubmit.textContent = "Update Post";
            this.postSubmit.className = "post-submit btn btn-warning btn-block post-update";

            // Create btn
            const button = document.createElement("button");
            
            // Add class
            button.className = "post-cancel mt-3 btn btn-light";

            // Add Style
            button.style.width = "100%";
            
            button.appendChild(document.createTextNode("Cancel Edit"));

            document.querySelector(".cancel").appendChild(button);

            const currentBtn = document.querySelectorAll(".post-cancel");
        

            if(currentBtn.length>1){
               if(currentBtn[0]){
                  currentBtn[0].remove();
               }
            }

           
        } else {
            this.postSubmit.textContent = "Post It";
            this.postSubmit.className = "post-submit btn btn-success btn-block";
            // Remove Cancel btn
            if(document.querySelector(".post-cancel")){
                document.querySelector(".post-cancel").remove();
            }

            // Clear ID from the hidden field
            this.clearIdInput();

        }
    }
}


export const ui = new UI();
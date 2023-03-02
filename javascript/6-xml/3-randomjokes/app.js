document.querySelector(".get-jokes").addEventListener("click", getUsers);

function getUsers(e){
    
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.github.com/users`, true);

    xhr.onload = function(){
        if(this.status === 200){
           const response = JSON.parse(this.responseText);

           let output = "";

           response.forEach(user => {
             output += `
                <div class="d-flex gap-2">
                    <img style="width: 50px" src=${user.avatar_url} alt="">
                    <p>${user.login}</p>
                </div>
             `
           });

           document.querySelector(".user-output").innerHTML = output;
        }
    }
    xhr.send();

    e.preventDefault();
}

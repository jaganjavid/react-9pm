// INIT GITHUB 

const github = new Github();

// INIT UI
const ui = new UI;

const submitBtn = document.getElementById("submitUser");

submitBtn.addEventListener("click", (e) => {
    const usertext = document.getElementById("getUser").value;
    if(usertext !== ""){
        github.getUser(usertext)
        .then(data => {
            if(data.profile.message === "Not Found"){
                alert("No User");
                return false;
            } else {
                ui.showProfile(data.profile);
            }
        })
    }
})


// console.log(github.getUser("jaganJHsafdjhvasDHKGFHGjavid")
// .then(data => console.log(data.profile)))

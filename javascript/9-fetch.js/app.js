
document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);



// Get a local text file

function getText(){
    fetch("test.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data) {
        // console.log(data)
        document.querySelector(".output").innerHTML = data;
    }).catch(function(err){
        console.log(err)
    })
}

// Get local json data
function getJson(){
    fetch("posts.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        let output = "";
        data.forEach((post)=> {
            output += `<li>${post.title}</li>`
        });
        document.querySelector(".output").innerHTML = output;
    }).catch(function(err){
        console.log(err)
    })
}

// Get local json data
function getExternal(){
    fetch("https://api.github.com/users")
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        let output = "";
        data.forEach((post)=> {
            output += `<li>${post.login}</li>`
        });
        document.querySelector(".output").innerHTML = output;
    }).catch(function(err){
        console.log(err)
    })
}


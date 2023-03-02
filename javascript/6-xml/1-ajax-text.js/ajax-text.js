// Create an XMLHttpRequest object
// Define a callback function
// Open the XMLHttpRequest object
// Send a Request to a server

document.getElementById("btn").addEventListener("click", loadData);

function loadData(){
   const xhr = new XMLHttpRequest();

  

   xhr.open("GET", "data.txt", true);


   xhr.onload = function(){
     if(this.status === 200){
        document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`
     }

     if(this.status === 404){
        document.getElementById("output").innerHTML = `<h1>Not Found</h1>`
     }
   }

   xhr.send();
}

// HTTP STATUS
// 200 : OK
// 404 : "Not Found"
// 403 : "Forbidden"

// Ready state value
// 0: request not initialized
// 1: server connection established
// 2 : request received
// 3 : processing request 
// 4 : The operation is complete.

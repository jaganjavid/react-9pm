const http = new EasyHTTP(); //INIT

// Get User
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(err => console.log(err));


// User Data

const data = {
    name: "Javid",
    userName: "JaganJavid",
    email:"jaganjavid@gmail.com"
}

// Create User
http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Update User
http.put("https://jsonplaceholder.typicode.com/users/5", data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Delete User
http.delete("https://jsonplaceholder.typicode.com/users/5", data)
.then(data => console.log(data))
.catch(err => console.log(err));
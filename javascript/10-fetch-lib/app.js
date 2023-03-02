const http = new EasyHTTP;


http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(err => console.log(err));

    // User Data
    const data = {
        name: "John",
        userName: "John123",
        email: "John@gmail.com"
    }

http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(data => console.log("Post",data))
    .catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/3", data)
    .then(data => console.log("Put",data))
    .catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/5")
    .then(data => console.log("Put",data))
    .catch(err => console.log(err));
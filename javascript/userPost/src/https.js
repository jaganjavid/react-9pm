class EasyHTTP {
    // Make an HTTP GET Request

    async get(url){
        const response = await fetch(url); 
        // only proceed once its resolved
        const resData = await response.json();
        return resData;
    }
    // Post
    async post(url, data){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }); 
        // only proceed once its resolved
        const resData = await response.json();
        return resData;
    }
    // Put
    async put(url, data){
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }); 
        // only proceed once its resolved
        const resData = await response.json();
        return resData;
    }

    // DELETE
    async delete(url){
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }); 
        // only proceed once its resolved
        const resData = await "Resource Deleted";
        return resData;
    }

}
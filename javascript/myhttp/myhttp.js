function MyHttp(){
    this.http = new XMLHttpRequest();
}

// GET

MyHttp.prototype.get = function(url, callBack){

    this.http.open("GET", url, true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callBack(null,self.http.responseText);
        } else {
            callBack("Error :" + self.http.status);
        }
    }

    this.http.send();

}

// POST

MyHttp.prototype.post = function(url,data,callBack){
    this.http.open("POST", url, true);

    this.http.setRequestHeader('Content-type', 'appication/json');

    let self = this;
    this.http.onload = function(){
        callBack(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Update Post

MyHttp.prototype.put = function(url,data,callBack){
    this.http.open("PUT", url, true);
    this.http.setRequestHeader('Content-type', 'appication/json')
    let self = this;
    this.http.onload = function(){
        callBack(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// DELETE POST

MyHttp.prototype.delete = function(url,callBack){
    this.http.open("DELETE", url, true);
    let self = this;
    this.http.onload = function(){
        callBack(null, "Post Deleted");
    }

    this.http.send(JSON.stringify(data));
}






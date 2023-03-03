class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }

    // Display Profile In User

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card car-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}" alt="">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gist : ${user.public_gists}</span>
                <span class="badge badge-success">Follwers : ${user.followers}</span>
                <span class="badge badge-info">Following : ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Twitter : ${user.twitter_username}</li>
                    <li class="list-group-item">type : ${user.type}</li>
                </ul>
            </div>
        </div>
    </div>
        `
    }
}
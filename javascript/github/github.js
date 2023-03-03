class Github {
    constructor(){
        this.client_id = "e233cbd4187aa2fc3587";
        this.client_secret = "59f45eaca935fb328b05fe6203f82791aa70b37e";
    }

    async getUser(user){
          const profileResponse = await fetch(`https://api.github.com/users/${user}
          ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

          const profile = await profileResponse.json();

          return {
            profile
          }
    }
}
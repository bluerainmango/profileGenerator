const axios = require("axios");

class Api {
  constructor({ username, color }) {
    this.username = username;
    this.color = color;
    this.info = {};
  }

  async getInfo() {
    const url = `https://api.github.com/users/${this.username}`;
    try {
      const result = await axios.get(url);

      [
        "name",
        "avatar_url",
        "location",
        "repos_url",
        "blog",
        "bio",
        "public_repos",
        "followers",
        "public_gists",
        "following",
        "starred_url"
      ].forEach(el => {
        this.info[el] = result.data[el];
      });

      console.log("this info: ", this.info);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Api;

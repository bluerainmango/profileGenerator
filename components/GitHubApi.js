const axios = require("axios");

class GitHubApi {
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
        "html_url",
        "blog",
        "bio",
        "public_repos",
        "followers",
        "company",
        "following",
        "starred_url"
      ].forEach(key => {
        this.info[key] = result.data[key];
      });
    } catch (err) {
      console.log(err);
    }
  }

  async addNofStars() {
    const url = this.info.starred_url.replace("{/owner}{/repo}", "");
    console.log(url);
    try {
      const result = await axios.get(url);
      this.info.numOfStars = result.data.length;
    } catch (err) {
      console.log(err);
    }
  }

  addLocationURL() {
    const location = this.info.location;

    if (!location) return;
    this.info.locationURL = `https://www.google.com/maps/place/${location}`;

    //if space exists, exchange with + for better search in Google Map
  }
}

module.exports = GitHubApi;

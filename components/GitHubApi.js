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

      // Add only necessary data to the info obj
      [ "login", "name", "avatar_url", "location", "html_url", "blog", "bio", "public_repos", "followers", "company", "following", "starred_url" ]
      .forEach( key => {
        this.info[key] = result.data[key];
      });

    } catch (err) {

      if (err.response.status === 404) {

        throw new Error("❓ This user cannot be found. Please restart the app and enter the valid username.");

      } else {

        throw new Error("🚧 Unknown Github API error occured while retrieving user data. Please restart the app.");
      }
    }
  }

  async addNofStars() {

    // Utilize 'starred_url' to get the number of stars
    const url = this.info.starred_url.replace("{/owner}{/repo}", "");

    try {

      const result = await axios.get(url);
      this.info.numOfStars = result.data.length;

    } catch (err) {

      throw new Error(
        "🚧 Unknown Github API error occured while retrieving the number of starts. Please restart the app or try later."
      );

    }

  }

  addLocationURL() {
    
    let location = this.info.location;

    if (!location) return;

    // If any space exists, replace it with '+' for more accurate search in Google Map
    // ex) Moreno valley => Moreno+valley
    if (location.includes(" ")) location = location.split(" ").join("+");

    this.info.locationURL = `https://www.google.com/maps/place/${location}`;
  }
}

module.exports = GitHubApi;

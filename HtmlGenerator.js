const { rawHtml } = require("./content/html");
const { icons } = require("./content/icons");
const { style } = require("./content/css");

class HtmlGenerator {
  constructor(color, userData) {
    this.color = color;
    this.html = rawHtml;
    this.icons = icons;
    this.style = style;
    this.userData = userData;
  }

  injectData() {
    const replaceList = {
      "{NAME}": this.userData.name,
      "{AVATAR_URL}": this.userData.avatar_url,
      "{LOCATION}": this.userData.location,
      "{HTML_URL}": this.userData.html_url,
      "{BLOG}": this.userData.blog,
      "{BIO}": this.userData.bio,
      "{PUBLIC_REPOS}": this.userData.public_repos,
      "{FOLLOWERS}": this.userData.followers,
      "{COMPANY}": this.userData.company,
      "{FOLLOWING}": this.userData.following,
      "{NUMOFSTARS}": this.userData.numOfStars
    };

    const targetHTMLs = Object.keys(replaceList);

    targetHTMLs.forEach((el, i) => {
      this.html = this.html.replace(new RegExp(el, "g"), replaceList[el]);
    });
  }

  injectStyle() {
    this.html = this.html.replace("{STYLE}", this.style);
  }

  injectIcons() {
    this.html = this.html.replace("{ICONS}", this.icons);
  }

  paintColor() {
    const builtInColor = {
      blue: "rgb(0, 113, 252);",
      orange: "rgb(255, 174, 0);",
      green: "rgb(0, 182, 36);",
      purple: "rgb(149, 0, 255);"
    };
  }

  getHtml() {
    return this.html;
  }
}

module.exports = HtmlGenerator;

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
    // Purpose: Replace raw HTML's placeholders to actual data
    const replaceList = {
      "{NAME}": this.userData.name,
      "{COMPANY}": this.userData.company,
      "{LOCATION}": this.userData.location,
      "{AVATAR_URL}": this.userData.avatar_url,
      "{LOCATION_URL}": this.userData.locationURL,
      "{HTML_URL}": this.userData.html_url,
      "{BLOG}": this.userData.blog,
      "{BIO}": this.userData.bio,
      "{PUBLIC_REPOS}": this.userData.public_repos,
      "{FOLLOWERS}": this.userData.followers,
      "{FOLLOWING}": this.userData.following,
      "{NUMOFSTARS}": this.userData.numOfStars
    };

    const keys = Object.keys(replaceList);

    // 1. Set data & targetHTML
    keys.forEach(placeholder => {
      let data = replaceList[placeholder];
      let targetHTML = new RegExp(placeholder, "g");

      // When data is null, undefined, empty string but not 0, just print "".
      if (!data && data !== 0) {
        data = "";

        // If that data belongs to one of the below <a> links,
        // just delete that <a> tag from HTML.
        const linkIdx = ["{LOCATION_URL}", "{HTML_URL}", "{BLOG}"].indexOf(
          placeholder
        );

        if (linkIdx > -1) {
          const regExp = new RegExp(
            `(<a href=${placeholder})(.|\n|\t|\r|\s)*?(<\/a>$)`,
            "gim"
          );

          targetHTML = regExp.exec(this.html)[0];
        }
      }

      // 2. Update html with the data & targetHTML
      this.html = this.html.replace(targetHTML, data);
    });
  }
  // console.log("targetHTML: ", placeholder, targetHTML, data);
  // console.log(`-------${placeholder} : ${iconIndex} : ${data}------`);

  injectStyle() {
    const builtInColor = {
      blue: "rgb(0, 113, 252)",
      orange: "rgb(255, 174, 0)",
      green: "rgb(0, 182, 36)",
      purple: "rgb(149, 0, 255)"
    };

    this.style = this.style.replace(/{COLOR}/g, builtInColor[this.color]);
    this.html = this.html.replace("{STYLE}", this.style);
  }

  injectIcons() {
    this.html = this.html.replace("{ICONS}", this.icons);
  }

  getHtml() {
    return this.html;
  }
}

module.exports = HtmlGenerator;

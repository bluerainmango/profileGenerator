// prompt fav color(bg color), github username
const inquirer = require("inquirer");

const Api = require("./api");

const { questions } = require("./questions");
let state;

inquirer.prompt(questions).then(answers => {
  console.log("inquiry answers:", answers);

  const info = new Api(answers);

  info.getInfo();
});

//
// Profile image - avatar_url
// User name - name
// Links to the following:
// User location via Google Maps - location
// User GitHub profile - repos_url
// User blog - blog

// User bio - bio
// Number of public repositories - public_repos
// Number of followers - followers
// Number of GitHub stars - starred_url => before {/owner}{/repo}.length
// Number of users following - following

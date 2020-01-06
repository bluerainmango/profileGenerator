// prompt fav color(bg color), github username
const inquirer = require("inquirer");
const axios = require("axios");

let state;

const questions = [
  {
    type: "input",
    name: "username",
    message: "What's your github username?",
    validate: function(answer) {
      //Github valid username: Alphanumeric with single hyphens / Cannot begin or end with a hyphen / Max length of 39 characters
      const reg = /(?:[^a-zA-Z0-9-]|(?:-{2,})|(?:\B-)|(?:-\B)|(?:.{40,}))/gi;
      const valid = !reg.test(answer);

      return valid;
    },
    filter: answer => answer.toLowerCase()
  },
  {
    type: "list",
    name: "color",
    message:
      "What is your favorite color? This color will be used as the background color for PDF file.",
    choices: ["Blue", "Red", "Green"],
    filter: answer => answer.toLowerCase()
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(answers);
  getRepo(answers);
});

async function getRepo(answers) {
  const url = `https://api.github.com/users/${answers.username}`;
  try {
    const result = await axios.get(url);
    // console.log(result.data);
    const {
      name,
      avatar_url,
      location,
      repos_url,
      blog,
      bio,
      public_repos,
      followers,
      public_gists,
      following
    } = result.data;

    state = {
      name,
      avatar_url,
      location,
      repos_url,
      blog,
      bio,
      public_repos,
      followers,
      public_gists,
      following
    };
    console.log(state);
  } catch (err) {
    console.log(err);
  }
}

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
// Number of GitHub stars - public_gists
// Number of users following - following

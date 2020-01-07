// prompt fav color(bg color), github username

const getAnswers = require("./inquiry");
const Api = require("./api");

const init = async () => {
  const answers = await getAnswers();
  console.log(answers);
  const user = new Api(answers);

  await user.getInfo();
  await user.addNofStars();
  console.log(user.info);
};

init();
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

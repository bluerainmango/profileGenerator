const fs = require("fs");
const pdf = require("html-pdf");

const getAnswers = require("./inquiry");
const GitHubApi = require("./api");
const HtmlGenerator = require("./HtmlGenerator");

const init = async () => {
  const answers = await getAnswers();
  const user = new GitHubApi(answers);

  await user.getInfo();
  await user.addNofStars();
  user.addLocationURL();

  console.log("Answers: ", answers, "Data: ", user.info);

  let htmlObj = new HtmlGenerator(answers.color, user.info);
  htmlObj.injectData();

  htmlObj.injectStyle();
  htmlObj.injectIcons();

  const html = htmlObj.getHtml();

  // const html = fs.readFileSync("./index.html", "utf8");

  pdf
    .create(html, { format: "Letter" })
    .toFile(`./${user.info.name}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
};

init();

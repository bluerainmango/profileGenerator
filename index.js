const fs = require("fs");
const pdf = require("html-pdf");

const getAnswers = require("./inquiry");
const Api = require("./api");
const HtmlGenerator = require("./HtmlGenerator");

const init = async () => {
  const answers = await getAnswers();
  console.log(answers);
  const user = new Api(answers);

  await user.getInfo();
  await user.addNofStars();
  console.log(user.info);

  let htmlObj = new HtmlGenerator(answers.color, user.info);
  htmlObj.injectData();
  htmlObj.injectStyle();
  htmlObj.injectIcons();

  const html = htmlObj.getHtml();

  console.log("FINAL: ", html);

  // const html = fs.readFileSync("./index.html", "utf8");

  pdf
    .create(html, { format: "Letter" })
    .toFile(`./${user.info.name}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
};

init();

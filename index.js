// const fs = require("fs");
const pdf = require("html-pdf");

const inquiry = require("./components/inquiry");
const GitHubApi = require("./components/GitHubApi");
const HtmlGenerator = require("./components/HtmlGenerator");

const init = async () => {
  // 1. Get answers
  const answers = await inquiry();

  // 2. Get user info accordingly
  const user = new GitHubApi(answers);

  await user.getInfo();
  await user.addNofStars();
  user.addLocationURL();

  console.log("\n💬  Answers:", answers, "\n🔍  Data: ", user.info);

  // 3. Generate HTML accordingly
  const htmlObj = new HtmlGenerator(answers.color, user.info);
  htmlObj.injectData();
  htmlObj.injectStyle();
  htmlObj.injectIcons();

  // [FOR TEST ONLY] HTML -> PDF conversion
  // const html = fs.readFileSync("./dev/test.html", "utf8");

  const html = htmlObj.getHtml();

  // 4. Convert HTML to PDF
  pdf
    .create(html)
    .toFile(`./output/${user.info.login}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(`\n✅  COMPLETED! \n📂  Location: ${res.filename}`);

      //Added for Windows 10 that doesn't automatically exit.
      process.exit(0);
    });
};

init();

// Unhandled rejection handler
process.on("unhandledRejection", error => {
  console.log("🚨 [ERROR]", error.message);

  process.exit(0);
});

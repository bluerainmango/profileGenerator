const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "username",
    message:
      "What's your github username? \n(Valid username: Alphanumeric with single hyphens | Cannot begin or end with a hyphen | Max length of 39 characters)",
    validate: function(answer) {
      // CASE 1: no input
      if (!answer) return false;

      // CASE 2: invalid input
      // When the answer has an invalid factor
      // **Github valid username: Alphanumeric with single hyphens / Cannot begin or end with a hyphen / Max length of 39 characters
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
      "What is your favorite color? This will be used as the background color for your PDF file.",
    choices: ["Blue", "Orange", "Green", "Purple"],
    filter: answer => answer.toLowerCase()
  }
];

const getAnswers = async () => {
  try {
    return await inquirer.prompt(questions);
  } catch (err) {
    throw new Error(
      "🚧 Unkown error occured while processing your inquiry. Please restart the app or try later."
    );
  }
};

module.exports = getAnswers;

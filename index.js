//Required modules/dependencies for the readmefile
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How can it be installed?",
    },

    {
      type: "input",
      name: "usage",
      message: "How can you use it?",
    },
    {
      type: "list",
      name: "licenses",
      messages: "license?",
      choices: ["MIT", "ISC", "GNUPLv3"],
      filter(val) {
        return val.toLowerCase();
      },
    },
    {
      type: "input",
      name: "contributors",
      message: "Contributing?",
    },
    {
      type: "input",
      name: "test",
      message: "How can you test this project?",
    },
    {
      type: "input",
      name: "email",
      message: "Add your email address here for questions:",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github profile link:",
    },
  ]);

// function that will handle prompting and generation of the read me file
promptUser()
  .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
  .then(() => console.log("Successfully generated a README.md"))
  .catch((err) => console.error(err));



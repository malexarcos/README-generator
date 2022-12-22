const inquirer  = require("inquirer");
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
        type: "input", 
        name: "projectTittle",
        message: "What Is The tittle",
    },
    {
        type: "input", 
        name: "projectDescription",
        message: "What is the description",
    },
    {
        type: "input", 
        name: "projectInstallation",
        message: "What Is The installation",
    },
    {
        type: "input", 
        name: "projectUsageInformation",
        message: "What Is The usage information",
    },
    {
        type: "input", 
        name: "projectContribution",
        message: "Who Contributed",
    },
    {
        type: "input", 
        name: "projectTest",
        message: "What Is The test",
    },
    {
        type: "input", 
        name: "projectLicense",
        message: "What Is The Lincense",
    },
    {
        type: "input", 
        name: "projectGithubUsername",
        message: "What Is The Username",
    },
    {
        type: "input", 
        name: "projectEmail",
        message: "What Is The email",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log (answers)
    var README = generateMarkdown(answers)
    console.log(README)
    fs.writeFile("result.md", README, function(){
        console.log("fileCreation")
    })
  })
}

// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }


// Function call to initialize app
init();

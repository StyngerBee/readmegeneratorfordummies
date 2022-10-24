const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.utils/readme.js');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'fname',
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Which license would you like to use for this project?',
        choices: ["MIT", "Apache", "BSD", "No License"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependency',
    },
    {
        type: 'input',
        message: 'What should be done to run tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who else helped contribute to the project?',
        name: 'contributions',
    },

]

function writeToFile(data) {
    fs.writeFile('DUMMYREADME.md', data, (err) =>
        err ? console.error(err) : console.log('README file saved under DUMMYREADME.md')
    )
};


function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateMarkdown(responses)));
};

// Function call to initialize app
init();
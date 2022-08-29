// Require is a old way of using ESM modules
// The standard is using native esm modules and importing them.

const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'input',
    name: 'number',
    message: "Give me a number!",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
  console.log(`Your number is ${answers.number}`)
});
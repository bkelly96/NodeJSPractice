//import chalk from 'chalk';

const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')

const yourNotes = getNotes

console.log(yourNotes)

const greenMsg = chalk.red.inverse.bold('Error')
console.log(greenMsg)

// console.log(validator.isEmail('brian@example.com'))

// console.log(validator.isURL('https://mead.io'))
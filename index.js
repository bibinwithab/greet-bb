#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');

const prompt = require('prompt-sync')();

function greet() {
    console.log(chalk.cyan("Who is this?"));
    let name = prompt(">");

    figlet(`Hello ${name}`, (err, data) => {
        if (err) {
            console.log(`Hello name-less person`);
        } else {
            console.log((data));
        }
    });
}

greet();

#! /usr/bin/env node

const prompt = require('prompt-sync')();
const chalk  = require('chalk');

async function greet() {

    console.log(chalk.blue("who is this?"));
    let name = prompt(">");
    console.log(`Hello ${name}`);
}

greet();
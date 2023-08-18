#! /usr/bin/env node

async function greet() {

    const prompt = require('prompt-sync')();

    console.log("who is this?")
    let name = prompt(">");
    console.log(`Hello ${name}`);
}

greet();
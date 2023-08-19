#!/usr/bin/env node

const figlet = require('figlet');

const prompt = require('prompt-sync')();

async function greet() {
    console.log(("Who is this?"));
    let name = prompt(">");

    figlet(`Hello ${name}`, (err, data) => {
        if (err) {
            console.log(`Hello ${name}`);
        } else {
            console.log((data));
        }
    });
}

greet();

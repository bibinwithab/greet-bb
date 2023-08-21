#!/usr/bin/env node

const figlet = require('figlet');

const prompt = require('prompt-sync')();

function greet() {
    console.log("Who is this?");
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

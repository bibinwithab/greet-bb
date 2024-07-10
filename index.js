#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import readlineSync from 'readline-sync';

const packageVersion = '1.1.3'

function help(){
    console.log('Usage: greet [OPTIONS] <or> [MESSAGE]');
    console.log('  -h, --help\t\t\tDisplay this help message');
    console.log('  -v, --version\t\t\tDisplay the version of greet');
}

function version(){
    console.log('Version: ' + packageVersion);
}

function call(){
    const args = process.argv.slice(2);
        if (args.length == 0) {
            const name = readlineSync.question('Please provide a name: ');
        greet(name);
        } 
        else if (args.length == 1) {
            if (args[0] == '-h' || args[0] == '--help') {
                help();
            } else if (args[0] == '-v' || args[0] == '--version') {
                version();
            } else {
                greet(args[0]);
            }
        }
}

async function fetchQuote(){
    const url = 'https://dummyjson.com/quotes/random';
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error occurred while fetching quote:", error);
    }
}

async function greet(n){
    const name = n;
    figlet(`Hello ${name}`,'Larry 3D 2', (err,data) => {
        if(err){
            console.error("Error occurred while generating figlet text:", err);
            console.log(`Hello ${name}`);
        }
        else{
            console.log((data));
        }
    });

    const quote = await fetchQuote();

    if(quote){
        let content = chalk.greenBright(quote.quote);
        console.log(`\n${content}\n`);
        console.log(`-${quote.author}\n`);
    }
}


call();


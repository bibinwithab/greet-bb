#!/usr/bin/env node

const figlet = require('figlet');


const packageVersion = "1.0.5";

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
            greet(args[0]);
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

function greet(n){
    const name = n;
    figlet( `Hello nameless being`, (err,data) => {
        if(err){
            console.log('Hello nameless being');
        }
        else{
            console.log((data));
        }
    });
}


call();


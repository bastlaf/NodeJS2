#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const gradient = require('gradient-string');


const info = {
    name: "Lafalize Bastien",
    nickname: "LaBabase",
    work : "Developer Web",
    twitter: chalk.blueBright("https://twitter.com/" + "Best_laf"),
    npm: chalk.yellow("https://npmjs.com/" + "~bastlaf"),
    github: chalk.black("https://github.com/" + "bastlaf"),
    linkedin: chalk.blueBright("https://linkedin.com/in/" + "bastien-lafalize/"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    boxen(
        [
            (gradient('magenta', 'white', 'magenta','white', 'magenta','white', 'magenta',)(`${info.name} / ${info.nickname}`)),
            EMPTYLINE,
            `${info.labelWork} ${info.work}`,
            EMPTYLINE,
            `${info.labelTwitter} ${info.twitter}`,
            `${info.labelNpm} ${info.npm}`,
            `${info.labelGitHub} ${info.github}`,
            `${info.labelLinkedIn} ${info.linkedin}`,
            EMPTYLINE,
            (gradient('magenta', 'white', 'magenta')("Thank you for downloading my card, you are a CRACK !")),
        ].join(NEWLINE),
        {
            padding: 1,
            margin: 1,
            borderStyle: "singleDouble",
            backgroundColor: "#5A646A",
            align: "left"
        }, 
    )
);
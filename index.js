const box = require("boxen");
const chalk = require("chalk");
const figlet= require("figlet");

figlet.text("                              NPX V-CARD", (err, data) => {
  
    console.log(chalk.green.bold(data) + "\n" + box(chalk.blue.bold("                        olygood \n")+
    chalk.blue.bold("                  Web Developer @Becode \n \n")+
    chalk.red.underline("GitHub:") + chalk.white (" https://github.com/olygood\n\n") +
    chalk.red.underline("Npm:") + chalk.white (" https://www.npmjs.com/olygood\n\n")+
    chalk.red.underline("LinkedIn:") + chalk.white(" https://www.linkedin.com/in/olivier-huttmacher/\n\n") +
    chalk.red.underline("Email:") + chalk.white (" olivier.huttmacher@gmail.com"), 
    {
        borderColor: "white",
       // borderStyle: "single-double",
        float: "center",
        padding: 2
    }));
});

// /survey
// home.html


let chalk = require("chalk");
let path = require("path");

console.log(chalk.red("HTML route connected successfully"));

function htmlRoute(app) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });
}

module.exports = htmlRoute;


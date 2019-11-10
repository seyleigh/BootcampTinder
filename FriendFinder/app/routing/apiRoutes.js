//   /api/friends GET
//   /api/friends POST

let chalk = require("chalk");


console.log(chalk.cyan("API route connected"));

    

    let matchData = require("../data/friends.js");

    function apiRoute(app) {

        app.get("/api/friends", function (req, res) {
            res.json(matchData)
        });

        app.post("/api/friends", function(req, res){

            let newMatch = {
                name: req.body.name,
                photo: req.body.photo,
                scores: []
            };

            let scoresArr = [];
            for (let i = 0; i <req.body.scores.length; i++){
                scoresArr.push(parseInt(req.body.scores[i]))
            }
            newMatch.scores = scoresArr;

            let comparison = [];
            for (let i = 0; i < matchData.length; i++){

                let currentComp = 0;

                for (let j = 0; j < newMatch.scores.length; j++){
                    currentComp += Math.abs (newMatch.scores[j] - matchData[i].scores[j]);
                }

                comparison.push(currentComp);
            }

            var bestMatch = 0;
            for (let i = 1; i < comparison.length; i++) {
                if(comparison[i] <= comparison[bestMatch]){
                    bestMatch = i;
                }
            }

            let besties = matchData[bestMatch];

            res.json(besties);

            matchData.push(newMatch);


        })

    }

    module.exports = apiRoute;



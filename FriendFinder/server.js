let express = require("express");
let path = require("path");
let bodPar = require("body-parser");
let chalkAnimation = require("chalk-animation");


let apiRoute = require("./app/routing/apiRoutes.js");
let htmlRoute = require("./app/routing/htmlRoutes.js");

let app = express();

var PORT = process.env.PORT || 8080;

app.use(bodPar.json());
app.use(bodPar.urlencoded({ extended: true}));
app.use(bodPar.text());
app.use(bodPar.json({ type: 'application/vnd.api+json' }));


apiRoute(app);
htmlRoute(app);

app.listen(PORT, function(){
    chalkAnimation.rainbow("App listening on PORT: " + PORT, .3)
});


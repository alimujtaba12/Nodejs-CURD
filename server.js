var express = require("Express");
var app = express();
app.use(express.json());

//Routing Module
var routeObj = require("./app/routes/app.route");
routeObj.route(app);

//Listening
app.listen(3000, function () {
  console.log("listening on 3000");
});

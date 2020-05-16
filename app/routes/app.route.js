module.exports.route = function (app) {
  var controllerObj = require("../controllers/app.course.controller");

  // Create a new controllerObj

  app.post("/api/courses", controllerObj.create);

  //Retrieve All courses

  app.get("/api/courses", controllerObj.findAll);

  //Retrieve a single controllerObj by ID

  app.get("/api/courses/:id", controllerObj.findOne);

  //Update a controllerObj with Id

  app.put("/api/courses/:id", controllerObj.update);

  //Delete a controllerObj with Id

  app.delete("/api/courses/:id", controllerObj.delete);
};

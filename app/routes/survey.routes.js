module.exports = app => {
  const tutorials = require("../controllers/survey.controller.js");

  var router = require("express").Router();

  // Retrieve all published Tutorials
  router.put("/createSurvey", tutorials.createSurvey);

  app.use('/', router);
};

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");




// Routes
// =============================================================
module.exports = function(app) {


  // POST route for saving a new Burger
  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  

  // PUT route for updating devoured
  app.put("/api/burgers/:id", function(req, res) {

    db.Burger.update(
      {devoured: true},
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });



};
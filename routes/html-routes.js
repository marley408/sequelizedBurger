// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");



// Routes

//GET route to render index file and display all burgers
module.exports = function(app){
  app.get("/", function(req, res) {
    db.Burger.findAll().then(function(dbBurger) {
    // res.json(dbBurger);
    const handlebarObj = {burgers: dbBurger}
    console.log(dbBurger)
    res.render('index', handlebarObj) 
  });
});
}
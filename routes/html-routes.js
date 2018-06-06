// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");




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
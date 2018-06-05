// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  //* GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Todo.findAll().then(function(todos){
      res.json(todos)
    })
  });

  //* POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/burgers", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Todo.create(req.body).then(function(newTodo){
      res.json(newTodo)
    }).catch(function(error){
      console.log(error)
    })
  });

  //* DELETE route for deleting todos. We can get the id of the todo to be deleted from
  //* req.params.id
  // app.delete("/api/todos/:id", function(req, res) {
  //   db.Todo.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(destroyedTodo){
  //     res.json(destroyedTodo)
  //   }).catch(function(err){
  //     res.status(400).send(err.message)
  //   })
  // });

  //* PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers", function(req, res) {
    db.Todo.update({
      tetx: req.body.text,
      complete: req.body.complete,
    },{
      where: {
        id: req.body.id
      }
    }).then(function(updateTodo){
      res.json(updateTodo)
    })
  });
};
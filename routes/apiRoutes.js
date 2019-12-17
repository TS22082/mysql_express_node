const express = require("express");
const router = express.Router();
const db = require("../config/connection");

router.get("/", (req, res) => {
  console.log("getting all todos");
  db.seeAllTodos(results => {
    res.send(results);
  });
});

router.get("/:id", (req, res) => {
  console.log("getting single todo");
  db.seeTodo(req.params.id, result => {
    res.send(result);
  });
});

module.exports = router;

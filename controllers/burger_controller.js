const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function(result) {
      console.log("hello");
      res.json({ id: result.insertId });
    });
  });

module.exports = router;
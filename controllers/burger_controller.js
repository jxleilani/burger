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

module.exports = router;
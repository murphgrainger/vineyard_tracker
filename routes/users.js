var express = require('express');
var router = express.Router();
var queries = require("../queries");


/* GET users listing. */
router.post('/add', function(req, res, next) {
    console.log(req.body);
    var vineyard = {
        id: vineyard.length,
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        appointment: req.body.appointment,
        wine_purchase: req.body.wine_purchase,
        visit_date: req.body.visit_date,
    };
    comments.push(comment);
    res.json(comment);
});

module.exports = router;

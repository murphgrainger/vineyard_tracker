var express = require('express');
var router = express.Router();
var queries = require("../queries");
const knex = require('../db/knex');

/* GET home page. */
router.get("/", function(request, response, next) {
    queries.getVineyards().then(function(vineyards) {
        response.render("index", {
            vineyards: vineyards
        });
    });
});

router.get("/:id", function(req, res, next) {
    knex('vineyard').where('id', req.params.id).first()
        .then(function(data) {
            res.render('id', {
                vineyard: data
            });
        });
});

module.exports = router;

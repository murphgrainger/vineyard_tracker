var express = require('express');
var router = express.Router();
var queries = require("../queries");
const knex = require('../db/knex');

/* GET home page. */
router.get("/vineyard", function(request, response, next) {
    queries.getVineyards().then(function(vineyards) {
        response.render("index", {
            vineyards: vineyards
        });
    });
});

router.get("/add", function(request, response, next) {
    response.render("add");
});

router.post('/', function(req, res, next) {
    knex('vineyard').insert({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            website: req.body.website,
            appointment: req.body.appointment,
            wine_purchase: req.body.wine_purchase,
            visit_date: req.body.visit_date
        }, 'id')
        .then(function(vineyard) {
            res.redirect('/vineyard/' + vineyard);
        });
});

router.get("/vineyard/:id", function(req, res, next) {
    knex('vineyard').where('id', req.params.id).first()
        .then(function(data) {
            res.render('id', {
                vineyard: data
            });
        });
});

router.put('/vineyard/:id', function(req, res, next) {
    queries.vineyardEdit(req.params.id).then(function() {
        res.redirect('/vineyard');
    });
});

router.delete('/vineyard/:id', function(req, res, next) {
    queries.vineyardDelete(req.params.id).then(function() {
        res.redirect('/vineyard');
    });
});


module.exports = router;

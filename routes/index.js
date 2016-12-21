const express = require('express');
const router = express.Router();
const queries = require("../queries");
const knex = require('../db/knex');
const Joi = require('joi');

router.get("/", function(request, response, next) {
    response.redirect('/vineyard');
});

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

router.post('/vineyard', function(req, res, next) {
    if (validVineyard(req.body)) {
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
    } else {
        resError(res, 500, 'Not a valid entry!');
    }
});

router.get("/vineyard/:id/edit", function(req, res, next) {
    knex('vineyard').select().where('id', req.params.id).first().then(function(data) {
        res.render('edit', {
            vineyard: data
        });
    });
});

router.put('/vineyard/:id', function(req, res, next) {
    knex('vineyard').where('id', req.params.id).update(req.body)
        .then(function() {
            res.redirect('/vineyard/' + req.params.id);
        });
});

router.delete('/vineyard/:id', function(req, res, next) {
    queries.vineyardDelete(req.params.id).then(function() {
        res.redirect('/vineyard');
    });
});

router.get("/vineyard/:id", function(req, res, next) {
    if (!isNaN(req.params.id)) {
        knex('vineyard').where('id', req.params.id).first()
            .then(function(vineyard) {
                if (vineyard) {
                    res.render('id', {
                        vineyard: vineyard
                    });
                } else {
                    resError(res, 404, 'Vineyard does not exist!');
                }
            });
    } else {
        resError(res, 500, 'Use a valid ID');
    }
});

function validVineyard(vineyard) {
    return typeof vineyard.name == 'string' &&
        vineyard.name.trim() !== '' &&
        typeof vineyard.address == 'string' &&
        typeof vineyard.phone == 'string' &&
        typeof vineyard.website == 'string';
}

function resError(res, statusCode, message) {
    res.status(statusCode);
    res.send(message);
}

module.exports = router;

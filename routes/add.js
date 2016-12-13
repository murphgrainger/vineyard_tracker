var express = require('express');
var router = express.Router();
var queries = require("../queries");

/* GET home page. */
router.get("/", function(request, response, next) {
    queries.getVineyards().then(function(vineyards) {
        response.render("index", {
            vineyards: vineyards
        });
    });
});

module.exports = router;

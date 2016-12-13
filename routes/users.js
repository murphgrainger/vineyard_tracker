var express = require('express');
var router = express.Router();
var queries = require("../queries");


router.get("/:id", function(request, response, next) {
    queries.getVineyardsbyId(request.params.id).then(function(vineyard) {
        response.render("id", {
            vineyard: vineyard
        });
    });
});

module.exports = router;

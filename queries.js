const knex = require('./db/knex');

module.exports = {
    // Return a promise that gets all breweries
    getVineyards: function() {
        return knex('vineyard');
    }
}, {
    getVineyardsbyId: function(id) {
        // Return a promise that gets all beers for a single brewery
        // Where the beer name is set to the property beer_name
        // Each beer should also have a property with the name of it's brewery called brewery_name
        return knex('vineyard')
            .where('vineyard')
            .select('beer.name as beer_name', 'beer.abv', 'brewery.name as brewery_name');
    }
};

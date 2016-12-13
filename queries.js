const knex = require('./db/knex');

module.exports = {
    // Return a promise that gets all breweries
    getVineyards: function() {
        return knex('vineyard');
    }
};

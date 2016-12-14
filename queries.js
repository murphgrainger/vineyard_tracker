const knex = require('./db/knex');

module.exports = {
    // Return a promise that gets all breweries
    getVineyards: function() {
        return knex('vineyard');
    },
    vineyardEdit: function() {
        return knex('vineyard').where('id', id);
    },
    vineyardDelete: function(id) {
        return knex('vineyard').where("id", id).del();
    }
};

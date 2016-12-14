const knex = require('./db/knex');

module.exports = {
    // Return a promise that gets all breweries
    getVineyards: function() {
        return knex('vineyard');
    },
    vineyardEdit: function(id, data) {
        return knex('vineyard').where('id', id).update(data);
    },
    vineyardDelete: function(id) {
        return knex('vineyard').where("id", id).del();
    }
};

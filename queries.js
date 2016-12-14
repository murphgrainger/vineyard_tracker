const knex = require('./db/knex');

module.exports = {
    // Return a promise that gets all breweries
    getVineyards: function() {
        return knex('vineyard');
    }
}, {
    delete: function(id) {
        console.log('this is running');
        return knex('vineyard').where("id", id).del();
    }
};

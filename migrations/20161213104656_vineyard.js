exports.up = function(knex, Promise) {
    return knex.schema.createTable('vineyard', function(table) {
        table.increments();
        table.string('name');
        table.string('address');
        table.string('phone');
        table.string('website');
        table.boolean('appointment');
        table.boolean('wine_purchase');
        table.date('visit_date');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vineyard');
};

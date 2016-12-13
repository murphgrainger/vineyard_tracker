exports.seed = function(knex, Promise) {
    return knex.raw('TRUNCATE vineyard; ALTER SEQUENCE vineyard_id_seq restart with 1;')
        .then(function() {
            const vineyard = [{
                name: 'Joseph Phelps',
                address: '200 Taplin Rd, St Helena, CA 94574',
                phone: '(800) 707-5789',
                website: 'https://www.josephphelps.com',
                appointment: true,
                wine_purchase: true,
                visit_date: '2015-10-10'
            }, {
                name: 'Jordan',
                address: '1474 Alexander Valley Rd, Healdsburg, CA 95448',
                phone: '(707) 431-5250',
                website: 'https://www.jordanwinery.com',
                appointment: true,
                wine_purchase: true,
                visit_date: '2015-10-11'
            }, {
                name: 'Silver Oak',
                address: '24625 Chianti Rd, Geyserville, CA 95441',
                phone: '(707) 942-7082',
                website: 'https://www.silveroak.com',
                appointment: false,
                wine_purchase: false,
                visit_date: '2015-10-11'
            }, {
                name: 'Viader',
                address: '1120 Deer Park Rd, Deer Park, CA 94576',
                phone: '(707) 963-3816',
                website: 'https://www.viader.com',
                appointment: true,
                wine_purchase: true,
                visit_date: '2016-10-11'
            }, {
                name: 'Ehlers',
                address: '3222 Ehlers Ln, St Helena, CA 94574',
                phone: '(707) 963-5972',
                website: 'https://www.ehlersestate.com',
                appointment: false,
                wine_purchase: false,
                visit_date: '2016-10-10'
            }, {
                name: 'Heitz',
                address: '436 St Helena Hwy, St Helena, CA 94574',
                phone: '(707) 963-3542',
                website: 'https://www.heitzcellar.com',
                appointment: false,
                wine_purchase: false,
                visit_date: '2016-10-10'
            }, {
                name: 'Sterling',
                address: '1111 Dunaweal Ln, Calistoga, CA 94515',
                phone: '(800) 726-6136',
                website: 'https://www.sterlingvineyards.com',
                appointment: true,
                wine_purchase: false,
                visit_date: '2016-10-11'
            }, {
                name: 'Kuleto',
                address: '2470 Sage Canyon Rd, St Helena, CA 94574',
                phone: '(707) 302-2209',
                website: 'https://www.kuletoestate.com',
                appointment: true,
                wine_purchase: false,
                visit_date: '2016-10-11'
            }, {
                name: 'Chateau Montelena',
                address: '1429 Tubbs Ln, Calistoga, CA 94515',
                phone: '(707) 942-5105',
                website: 'https://www.montelena.com',
                appointment: false,
                wine_purchase: true,
                visit_date: '2016-10-11'
            }, {
                name: 'Tamber Bey',
                address: '1251 Tubbs Ln, Calistoga, CA 94515',
                phone: '(707) 942-2100',
                website: 'https://www.tamberbey.com',
                appointment: true,
                wine_purchase: true,
                visit_date: '2016-10-12'
            }, {
                name: 'Castello di Amorosa',
                address: '4045 St Helena Hwy, Calistoga, CA 94515',
                phone: '(707) 967-6272',
                website: 'https://www.castellodiamorosa.com',
                appointment: false,
                wine_purchase: true,
                visit_date: '2016-10-12'
            }, {
                name: 'Frank Family',
                address: '1091 Larkmead Ln, Calistoga, CA 94515',
                phone: '(707) 942-0859',
                website: 'https://www.frankfamilyvineyards.com',
                appointment: false,
                wine_purchase: false,
                visit_date: '2016-10-12'
            }];

            return knex('vineyard').insert(vineyard);
        });
};

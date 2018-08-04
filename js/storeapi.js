'use strict';

(function(module) {

    //might not need some of this json stuff
    let stores;

    let json = window.localStorage.getItem('stores');

    if(json && json !== 'undefined') {
        stores = JSON.parse(json);
    }
    else {
        createStores();
    }

    function createStores(){
        stores = [{
            name: 'Pike Place Market',
            minCustomers: 10,
            maxCustomers: 40,
            avgSale: 5,
        }, {
            name: 'SeaTac Airport',
            minCustomers: 7,
            maxCustomers: 53,
            avgSale: 7,
        }, {
            name: 'Seattle Center',
            minCustomers: 8,
            maxCustomers: 25,
            avgSale: 4,
        }, {
            name: 'Capitol Hill',
            minCustomers: 12,
            maxCustomers: 44,
            avgSale: 6,
        }, {
            name: 'Alki',
            minCustomers: 14,
            maxCustomers: 39,
            avgSale: 8,
        }];
    }

    let storeApi = {
        get: function() {
            return stores;
        },
        add: function(store) {
            stores.push(store);
        }
    };

    //also need to put all the hourly calculations into this file
    //stores[] will have all its stuff in it this way
    //don't need addKey

    module.storeApi = storeApi;
})(window.module = window.module || {});

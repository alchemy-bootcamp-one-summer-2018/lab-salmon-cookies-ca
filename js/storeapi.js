'use strict';

(function(module) {

    let stores = [{
        name: 'Pike Place Market',
        minCustomers: 10,
        maxCustomers: 40,
        avgSale: 5,
        hours: []
    }, {
        name: 'SeaTac Airport',
        minCustomers: 7,
        maxCustomers: 53,
        avgSale: 7,
        hours: []
    }, {
        name: 'Seattle Center',
        minCustomers: 8,
        maxCustomers: 25,
        avgSale: 4,
        hours: []
    }, {
        name: 'Capitol Hill',
        minCustomers: 12,
        maxCustomers: 44,
        avgSale: 6,
        hours: []
    }, {
        name: 'Alki',
        minCustomers: 14,
        maxCustomers: 39,
        avgSale: 8,
        hours: []
    }];
    
    

    for(let i = 0; i < stores.length; i++){
        stores[i] = getHourlySales(stores[i]);
        console.log(stores[i]);
    }

    
    let storeApi = {
        load: function() {
            return stores;
        },
        
        add: function(store) {
            stores.push(store);
        }
    };

    console.log(stores);

    module.storeApi = storeApi;
})(window.module = window.module || {});



function customerCount(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
    
function getHourlySales(store){
    let customers = 0;
    let cookies = 0;
    for(let j = 0; j < 14; j++){
        customers = customerCount(store.minCustomers, store.maxCustomers);
        cookies = customers * store.avgSale;
        store.hours.push(cookies);
        console.log(store.name, customers, cookies);
    }
}


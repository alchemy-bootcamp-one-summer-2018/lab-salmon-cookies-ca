'use strict';

(function(module) {

    
    let stores = [{
        name: 'Pike Place Market',
        minCust: 23,
        maxCust: 65,
        avgCookies: 6
    }, {
        name: 'SeaTac Airport',
        minCust: 3,
        maxCust: 24,
        avgCookies: 1
    }, {
        name: 'Seattle Center',
        minCust: 11,
        maxCust: 38,
        avgCookies: 4
    }, {
        name: 'Capitol Hill',
        minCust: 20,
        maxCust: 38,
        avgCookies: 2
    }, {
        name: 'Alki',
        minCust: 2,
        maxCust: 16,
        avgCookies: 5
    }];
    
    for(let i = 0; i < stores.length; i++) {
        addKey(stores[i]);
    }
    
    function addKey(store) {
        store.key = store.name.split('').reverse().join();
    }
    
    let storeApi = {
        load: function() {
            return stores;
        },
        add: function(store) {
            addKey(store);
            stores.push(store);
        },
        remove: function(store) {
            for(let i = 0; i < stores.length; i++) {
                if(stores[i] === store) {
                    stores.splice(i, 1);
                    break;
                }
            }
        }
    };
    module.storeApi = storeApi;
})(window.module = window.module || {});
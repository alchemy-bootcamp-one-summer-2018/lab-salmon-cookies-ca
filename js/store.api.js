'use strict';

(function(module) {

    let stores;

    let json = window.localStorage.getItem('stores');

    if(json && json !== 'undefined') {
        stores = JSON.parse(json);
    }
    else {
        createStores();
    }

    function createStores() {
        stores = [{
            name: 'Pike Place Market',
            key: 'pike',
            minCust: 23,
            maxCust: 65,
            avgCookies: 6
        }, {
            name: 'SeaTac Airport',
            key: 'seatac',
            minCust: 3,
            maxCust: 24,
            avgCookies: 1
        }, {
            name: 'Seattle Center',
            key: 'seattlecenter',
            minCust: 11,
            maxCust: 38,
            avgCookies: 4
        }, {
            name: 'Capitol Hill',
            key: 'caphill',
            minCust: 20,
            maxCust: 38,
            avgCookies: 2
        }, {
            name: 'Alki',
            key: 'alki',
            minCust: 2,
            maxCust: 16,
            avgCookies: 5
        }];

        for(let i = 0; i < stores.length; i++) {
            addKey(stores[i]);
        } 
    }

    window.resetStores = createStores;

    window.addEventListener('beforeunload', () => {
        window.localStorage.setItem('stores', JSON.stringify(stores));
    });


    function addKey(store) {
        store.key = store.name.split('').reverse().join();
    }

    let storeApi = {
        get: function() {
            return stores;
        },
        add: function(store) {
            addKey(store);
            stores.push(store);
        }
    };

    module.storeApi = storeApi;
    
})(window.module = window.module || {});
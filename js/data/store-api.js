'use strict';

(function(module) {

    let stores;

    let createStores = () => {
        stores = [
            {
                name: 'Pike Place Market',
                custPerHourMin: 23,
                custPerHourMax: 65,
                cookiesPerCust: 6.3,
                cookiesByHour: []
            },
            {
                name: 'SeaTac Airport',
                custPerHourMin: 3,
                custPerHourMax: 24,
                cookiesPerCust: 1.2,
                cookiesByHour: []
            },
            {
                name: 'Seattle Center',
                custPerHourMin: 11,
                custPerHourMax: 38,
                cookiesPerCust: 3.7,
                cookiesByHour: []
            },
            {
                name: 'Capitol Hill',
                custPerHourMin: 20,
                custPerHourMax: 38,
                cookiesPerCust: 2.3,
                cookiesByHour: []
            },
            {
                name: 'Alki',
                custPerHourMin: 2,
                custPerHourMax: 16,
                cookiesPerCust: 4.6,
                cookiesByHour: []
            }
        ];

        stores.forEach(store => {
            hourlyCookieSales(store);
            cookiesSoldPerStore(store);
        });
    };
    
    let hourlyCookieSales = store => {
        let { custPerHourMin, custPerHourMax, cookiesPerCust, cookiesByHour } = store;

        for(let i = 0; i < 13; i++) {
            let customersPerHour = Math.random() * (custPerHourMax - custPerHourMin) + custPerHourMin;
            let cookieSales = Math.floor(customersPerHour * cookiesPerCust);
    
            cookiesByHour.push(cookieSales);
        }
    };

    let cookiesSoldPerStore = store => {
        let { cookiesByHour } = store;
        store.totalCookiesSold = cookiesByHour.reduce((acum, sum) => acum + sum);
    };


    let json = window.localStorage.getItem('stores');
    json && json !== 'undefined' ? stores = JSON.parse(json) : createStores();


    window.addEventListener('beforeunload', () => {
        window.localStorage.setItem('stores', JSON.stringify(stores));
    });

    let storeAPI = {
        create: (store) => {
            hourlyCookieSales(store);
            cookiesSoldPerStore(store);
            stores.push(store);
        },
        read: () => stores,
        update: 'I need to be defined',
        delete: (storeToRemove) => {
            stores.forEach((store, index) => {
                store === storeToRemove ? stores.splice(index, 1) : console.log('not the store you are looking for');
            });
        },
    };

    window.resetStores = createStores;

    module.storeAPI = storeAPI;

})(window.module = window.module || {});
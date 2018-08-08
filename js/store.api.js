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


    }

    window.resetStores = createStores;

    window.addEventListener('beforeunload', () => {
        window.localStorage.setItem('stores', JSON.stringify(stores));
    });

    for(let j = 0; j < stores.length; j++) {

        stores[j].cookieSalesPerStore = [];

        for(let i = 0; i < 14; i++) {
            let custPerHours = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
            let cookieSales = custPerHours * stores[j].avgCookies;
            //console.log('cookie sales:', cookieSales); 
            
            stores[j].cookieSalesPerStore.push(cookieSales);
        }

    }
    console.log('stores array:', stores);

    // let getTotals = function(stores) {

    //     let totals = [];
    //     for(let i = 0; i < 14; i++) {
    //         let total = 0;
    
    //         for(let j = 0; j < stores.length; j++) {
    //             total = total + stores[j].cookieSalesPerStore[i];
    //         }
            
    //         totals.push(total);
    //     }
    
    //     let grandTotal = totally(totals);
    
    //     function totally(totals) {
    //         let grandTotal = 0;
    //         for(let j = 0; j < 14; j++) {
    //             grandTotal = grandTotal + totals[j];
    //         } 
    //         return grandTotal;
    //     }
    
    //     module.totals = {
    //         name: 'Totals',
    //         cookieSalesPerStore: totals,
    //         dailyStoreTotal: grandTotal
    //     };
    //     console.log('hour totals:', module.totals);
        
    //     // let storeTotals = horizontalTotals(stores);
    //     function horizontalTotals(stores) {
    //         let storeTotals = 0;
            
    //         for(let j = 0; j < stores.length; j++) {
    //             stores[j].dailyStoreTotal = 0;
                
    //             let salesPerHourPerStoreArray = stores[j].cookieSalesPerStore;
    //             console.log('horizontal array aka salesPerHourPerStoreArray:', salesPerHourPerStoreArray);
                
    //             for(let i = 0; i < 14; i++) {
    //                 stores[j].dailyStoreTotal += salesPerHourPerStoreArray[i];
    //             }
    
    //             storeTotals = storeTotals + stores[j].cookieSalesPerStore[j];
    //             console.log('dailyStoreTotal', stores[j].dailyStoreTotal);
                
    //         } 
    //         console.log('Total of the totals', grandTotal);  
    //     }
    // }; 

    let storeApi = {
        get: function() {
            return stores;
        },
        add: function(store) {
            stores.push(store);
        }
    };

    module.storeApi = storeApi;
    module.stores = stores;
    
})(window.module = window.module || {});
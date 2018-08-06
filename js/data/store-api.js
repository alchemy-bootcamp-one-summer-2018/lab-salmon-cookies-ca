'use strict';

(function(module) {

    let stores, stats;

    let storeAPI = {

        create: 'I need to be defined',

        read: function() {
            return stores;
        },

        update: 'I need to be defined',

        delete: 'I need to be defined',

    };

    createData();
    cookiesByHourTotals(stores, stats, 0, 'cookiesByHour', 'cookiesPerDay');


    function createData() {

        stores = [
            {
                name: 'Pike Place Market',
                key: 'pike',
                custPerHourMin: 23,
                custPerHourMax: 65,
                cookiesPerCust: 6.3,
            },
            {
                name: 'SeaTac Airport',
                key: 'seatac',
                custPerHourMin: 3,
                custPerHourMax: 24,
                cookiesPerCust: 1.2,
            },
            {
                name: 'Seattle Center',
                key: 'seattlecenter',
                custPerHourMin: 11,
                custPerHourMax: 38,
                cookiesPerCust: 3.7,
            },
            {
                name: 'Capitol Hill',
                key: 'caphill',
                custPerHourMin: 20,
                custPerHourMax: 38,
                cookiesPerCust: 2.3,
            },
            {
                name: 'Alki',
                key: 'alki',
                custPerHourMin: 2,
                custPerHourMax: 16,
                cookiesPerCust: 4.6,
            },
        ];
        
        stats = [
            {
                name: 'Hourly Totals for All Locations',
                cookiesByHour: [],
                cookiesPerDay: [],
            }
        ];
    }

    function cookiesByHourTotals(storeArray, statsArray, statIndex, stat1, stat2) {
        for(let i = 0; i < 13; i++) {
            let columnTotal = 0;
            for(let j = 0; j < storeArray.length; j++) {
                columnTotal += storeArray[j]['cookiesByHour'][i];
            }
            statsArray[statIndex][stat1][i] = columnTotal;
        }

        // this should be a separate function called cookiesPerDayTotals or cookiesByHourTotalsTotal
        let rowSum = 0;

        for(let hr = 0; hr < 13; hr++) {
            rowSum += statsArray[statIndex][stat1][hr];
        }
        statsArray[statIndex][stat2].push(rowSum);
    }

    module.cookiesByHourTotals = cookiesByHourTotals;
        
    module.stats = stats;

    module.storeAPI = storeAPI;

    // expose for dev purposes:
    window.resetStores = createStores;

})(window.module = window.module || {});
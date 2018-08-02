

'use strict';

(function(module) {

    let stores = module.stores;


    let stats = [
        {
            name: 'Hourly Totals for All Locations',
            cookiesByHour: [],
            cookiesPerDay: [],

        },
    ];

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


    cookiesByHourTotals(stores, stats, 0, 'cookiesByHour', 'cookiesPerDay');
    module.cookiesByHourTotals = cookiesByHourTotals;
    module.stats = stats;

})(window.module = window.module || {});


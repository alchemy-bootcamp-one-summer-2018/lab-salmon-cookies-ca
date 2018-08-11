'use strict';

(function(module){
    
    let hourlyTotal = [];
    let grandTotal = 0;
    let Totals = {
        update(store) {
            for(let i = 0; i < store.cookiesPerHour.length; i++) {
                hourlyTotal[i] += store.cookiesPerHour[i];
            }
            grandTotal += store.totalSales;
        },
        getGrandTotal() {
            return grandTotal;
        },
        getHourlyTotal() {
            return hourlyTotal;
        }
    };
    module.totals = Totals;

})(window.module = window.module || {});
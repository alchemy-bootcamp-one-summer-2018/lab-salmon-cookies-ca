'use strict';
(function(module){
 
    let totalByHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let grandTotal = 0;
    let totalsApi = {
        //update function that takes a new store and adds to current totals
        update(store) {
            for(let i = 0; i < store.cookiesPerHour.length; i++) {
                // Add hourly cookie sales for store to matching totalByHour element
                totalByHour[i] += store.cookiesPerHour[i];
            }
            // Add new store total to the grand total
            grandTotal += store.totalSales;
        },

        getGrandTotal() {
            return grandTotal;
        },

        getTotalByHour() {
            return totalByHour;
        }
        
    };
    module.totals = totalsApi;

})(window.module = window.module || {});
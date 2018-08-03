'use strict';
(function(module) {
    let html = module.html;

    // create all the rows in table
    let template = function(store) {

    // create store label (column 0)
        let rowString = '<tr> <td>' + store.location + '</td>';

        // create a counter variable for the total cookies for that store
        let store_total = 0;

        // create column entries for store cookie hourly data
        let cookies = 0;
        for(let i = 0; i < 14; i++){
            cookies = store.hours[i];
            rowString += '<td>' + cookies + '</td>';
            store_total += cookies;
        }
        // create store total entry
        rowString += '<td>' + store_total + '</td> </tr>';

        return html`${rowString}`;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
        }

        render() {
            // create store row
            let dom = template(this.store);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});
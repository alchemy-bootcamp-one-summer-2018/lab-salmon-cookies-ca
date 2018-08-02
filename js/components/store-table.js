'use strict';
(function(module) {
    let html = module.html;

    let template = function(store) {

        let rowString = '<tr> <td>' + store.location + '</td>';

        // create a counter variable for the total cookies for that store
        let store_total = 0;
        let cookies = 0;
        for(let i = 0; i < 14; i++){
            cookies = store.hours[i];
            rowString += '<td>' + cookies + '</td>';
            store_total += cookies;
        }
        rowString += '<td>' + store_total + '</td> </tr>';

        return html`${rowString}`;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
        }

        render() {
            let dom = template(this.store);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});
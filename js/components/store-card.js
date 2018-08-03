'use strict';

(function(module) {
    let html = module.html;
    let template = function(fruit) {

        return html`
            <tr>
            <td>${store.name}</td>
            <td>${store.cookiesSalesPerHour[0]}</td>
            <td>${store.cookiesSalesPerHour[1]}</td>
            <td>${store.cookiesSalesPerHour[2]}</td>
            <td>${store.cookiesSalesPerHour[3]}</td>
            <td>${store.cookiesSalesPerHour[4]}</td>
            <td>${store.cookiesSalesPerHour[5]}</td>
            <td>${store.cookiesSalesPerHour[6]}</td>
            <td>${store.cookiesSalesPerHour[7]}</td>
            <td>${store.cookiesSalesPerHour[8]}</td>
            <td>${store.cookiesSalesPerHour[9]}</td>
            <td>${store.cookiesSalesPerHour[10]}</td>
            <td>${store.cookiesSalesPerHour[11]}</td>
            <td>${store.cookiesSalesPerHour[12]}</td>
            <td>${store.cookiesSalesPerHour[13]}</td>
            <td class="location-totals">${store.storeTotals}</td>
        </tr>`;
    };

    class StoreCard {
        constructor(props) {
            this.store = props.store;
        }
        
        render() {
            let dom = template(this.store);
            return dom;
        }
    }

    module.StoreCard = StoreCard;

    

})(window.module = window.module || {});
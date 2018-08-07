'use strict';

(function(module) {
    let html = module.html;
    let template = function(store) {

        return html`
        <tr>
            <td>${store.name}</td>
            <td>${store.cookiesPerHour[0]}</td>
            <td>${store.cookiesPerHour[1]}</td>
            <td>${store.cookiesPerHour[2]}</td>
            <td>${store.cookiesPerHour[3]}</td>
            <td>${store.cookiesPerHour[4]}</td>
            <td>${store.cookiesPerHour[5]}</td>
            <td>${store.cookiesPerHour[6]}</td>
            <td>${store.cookiesPerHour[7]}</td>
            <td>${store.cookiesPerHour[8]}</td>
            <td>${store.cookiesPerHour[9]}</td>
            <td>${store.cookiesPerHour[10]}</td>
            <td>${store.cookiesPerHour[11]}</td>
            <td>${store.cookiesPerHour[12]}</td>
            <td>${store.cookiesPerHour[13]}</td>
            <td class="location-totals">${store.totalSales}</td>
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
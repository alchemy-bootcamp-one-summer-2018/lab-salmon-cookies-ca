'use strict';

(function(module){

    let html = module.html;

    let template = store => {
        return html`
            <tr>
                <td class="name">${store.name}</td>
                <td>${store.cookiesByHour[0]}</td>
                <td>${store.cookiesByHour[1]}</td>
                <td>${store.cookiesByHour[2]}</td>
                <td>${store.cookiesByHour[3]}</td>
                <td>${store.cookiesByHour[4]}</td>
                <td>${store.cookiesByHour[5]}</td>
                <td>${store.cookiesByHour[6]}</td>
                <td>${store.cookiesByHour[7]}</td>
                <td>${store.cookiesByHour[8]}</td>
                <td>${store.cookiesByHour[9]}</td>
                <td>${store.cookiesByHour[10]}</td>
                <td>${store.cookiesByHour[11]}</td>
                <td>${store.cookiesByHour[12]}</td>
                <td class="dark-cells">${store.totalCookiesSold}</td>
            </tr>
        `;
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


(function(module) {

    let html = module.html;
    let template = function() {
        return html`        
            <tr>
                <td>${store.name}</td>
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
                <td class="end-totals" style="background: navy; color: rgba(192, 192, 192, 1)">
                    ${store.cookiesPerDay}    </td>
            </tr>
        `;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
            this.onRemove = props.onRemove;
        }

        render() {
            let dom = template(this.store);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});


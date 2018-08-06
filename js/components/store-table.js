'use strict';

(function(module) {

    let html = module.html; 
    let storeRow = module.StoreRow;


    let template = function() {
        return html`
            <section>
                <h2>Cookies Sold Per Hour by Location</h2>
                <table>
                    <thead>
                        <tr>
                            <td class="name">Stores</td>
                            <td>7 am</td>
                            <td>8 am</td>
                            <td>9 am</td>
                            <td>10 am</td>
                            <td>11 am</td>
                            <td>12 am</td>
                            <td>1 pm</td>
                            <td>2 pm</td>
                            <td>3 pm</td>
                            <td>4 pm</td>
                            <td>5 pm</td>
                            <td>6 pm</td>
                            <td>7 pm</td>
                            <td>Daily Totals</td>    
                        </tr>
                    </thead>
                    <tbody></tbody>
                    <tfoot></tfoot>
                </table>
            </section>
        `;

    };

    class StoreTable {
        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores.slice();

        }


        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;
            this.tfoot.children[0].remove();

            for (let i = 0; i < lastStores.length; i++) {
                let index = stores.indexOf(lastStores[i]);
                if (index > -1) continue;
                this.table.children[i].remove();
            }

            for (let i = 0; i < stores.length; i++) {
                let store = stores[i];
                if (lastStores.includes(store)) continue;
                this.renderStore(store, 'tbody');
                this.calcTotals(store);
            }

            this.renderStore(this.cookiesPerDay, 'tfoot');

            this.lastStores = stores.slice();
        }

        renderStore(store, element) {
            let storeRow = new StoreRow({
                store: store
            });

            this[element].appendChild(storeRow.render());
        }



        calcTotals(store) {
            let { cookiesByHour } = this.cookiesByHourTotals;
            store.cookiesByHour.forEach((cookies, index) => {
                cookiesByHour[index] += cookies;
            });
            this.hourlyTotals.totalCookiesSold = cookiesByHour.reduce((acum, sum) => acum + sum);
        }

        render() {
            let stores = this.stores;

            let dom = template();
            this.tbody = dom.querySelector('tbody');
            this.tfoot = dom.querySelector('tfoot');

            this.hourlyTotals = {
                name: 'Hourly Totals',
                cookiesPerHour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            };


            stores.forEach(store => {
                this.renderStore(store, 'tbody');
                this.calcTotals(store);
            });

            this.renderStore(this.hourlyTotals, 'tfoot');

            return dom;
        }


    }

    module.StoreTable = StoreTable;


})(window.module = window.module || {});



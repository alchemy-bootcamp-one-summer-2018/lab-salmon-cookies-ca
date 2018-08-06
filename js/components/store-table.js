'use strict';

(function(module){

    let html = module.html;
    let StoreRow = module.StoreRow;

    let template = () => {
        return html`
        <section>
            <h2>Cookies Sold Per Hour by Location</h2>
            <table>
                <thead>
                    <tr>
                        <td class="name dark-cells">Stores</td>
                        <td class="dark-cells">7 am</td>
                        <td class="dark-cells">8 am</td>
                        <td class="dark-cells">9 am</td>
                        <td class="dark-cells">10 am</td>
                        <td class="dark-cells">11 am</td>
                        <td class="dark-cells">12 am</td>
                        <td class="dark-cells">1 pm</td>
                        <td class="dark-cells">2 pm</td>
                        <td class="dark-cells">3 pm</td>
                        <td class="dark-cells">4 pm</td>
                        <td class="dark-cells">5 pm</td>
                        <td class="dark-cells">6 pm</td>
                        <td class="dark-cells">7 pm</td>
                        <td class="dark-cells">Daily Totals</td>
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
            this.onRemove = props.onRemove;
        }

        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;
            this.tfoot.children[0].remove();

            for(let i = 0; i < lastStores.length; i++) {
                let index = stores.indexOf(lastStores[i]);
                if(index > -1) continue;
                this.table.children[i].remove();
            }

            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];
                if(lastStores.includes(store)) continue;
                this.renderStore(store, 'tbody');
                this.calcTotals(store);
            }

            this.renderStore(this.hourlyTotals, 'tfoot');

            this.lastStores = stores.slice();
        }

        renderStore(store, element) {
            let storeRow = new StoreRow({
                store: store
            });

            this[element].appendChild(storeRow.render());
        }       

        calcTotals(store) {
            let { cookiesByHour } = this.hourlyTotals;
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
                cookiesByHour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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


(function(module) {
    let html = module.html;
    let footer = module.footer;
    let totalsApi = module.totals;
    let StoreCard = module.StoreCard;
    let template = function() {
        return html`
        <section>
            <h2>Locations</h2>
            <p>You have <span class="store-count"></span> stores</p>
            <table>
                <thead>
                    <th>Locations</th>
                    <th>6am</th>
                    <th>7am</th>
                    <th>8am</th>
                    <th>9am</th>
                    <th>10am</th>
                    <th>11am</th>
                    <th>12pm</th>
                    <th>1pm</th>
                    <th>2pm</th>
                    <th>3pm</th>
                    <th>4pm</th>
                    <th>5p</th>
                    <th>6pm</th>
                    <th>7pm</th>
                    <th>Location Totals</th>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr id="t-footer-row">
                    </tr>
                </tfoot>
            </table>
        </section>
        `;
    };

    

    class StoreList {
        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores.slice();
        }

        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;

            // Go through collection of stores
            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];
                // Check if store was already present in lastStores
                if(lastStores.includes(store)) continue;
                // If not, add store to lastStores and update totals in footer
                this.updateStore(store);
                this.updateFooter();
            }

            this.updateCount(stores.length);
    
            this.lastStores = stores.slice();
        }

        updateStore(store) {
            let storeCard = new StoreCard({
                store: store
            });
            totalsApi.update(store);
            this.body.appendChild(storeCard.render());
        }

        // Triggers re-render of footer
        updateFooter() {
            // Get new footer row HTML string
            let newFoot = footer.render();
            // Add new footer row to table footer
            this.footer.appendChild(newFoot);
        }

        updateCount(count) {
            this.spanCount.textContent = count;
        }

        render() {
            let dom = template();
            let stores = this.stores;
            this.table = dom.querySelector('table');
            this.footer = dom.querySelector('tfoot');
            this.body = dom.querySelector('tbody');
            this.spanCount = dom.querySelector('span.store-count');
            
            // Initialization. Add seed data stores to store list
            for(let i = 0; i < stores.length; i++) {
                this.updateStore(stores[i]);
            }
             
            this.updateCount(stores.length);
            this.updateFooter();

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});
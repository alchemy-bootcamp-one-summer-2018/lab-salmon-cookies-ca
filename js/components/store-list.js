'use strict';

(function(module) {
    let html = module.html;
    let Totals = module.totals;
    let StoreRow = module.StoreRow;

    let template = function() {
        return html`
            <section>
                <p>Current Locations:</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Locations</th>
                            <th>6am</th>
                            <th>7am</th>
                            <th>8am</th>
                            <th>9am</th>
                            <th>10am</th>
                            <th>11am</th>
                            <th>12am</th>
                            <th>1pm</th>
                            <th>2pm</th>
                            <th>3pm</th>
                            <th>4pm</th>
                            <th>5pm</th>
                            <th>6pm</th>
                            <th>7pm</th>
                            <th>8pm</th>
                            <th>Totals/th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                    <tfoot>
                        <tr id="tfoot-row>
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
            
            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];
                if(lastStores.includes(store)) continue;
                
                this.updateStore(store);
            }
            
            this.replaceFooter(stores);
            //this.updateCount(stores.length);
            
            // update the "last" know store we saw
            this.lastStores = stores.slice();
        }
        
        updateStore(store) {
            let storeRow = new StoreRow({
                store: store
            });
        
            this.tBody.appendChild(storeRow.render());
            
        }

        
        
        updateTotals(stores) {
            let totals = new Totals({
                stores: stores
            });

            this.tbody.appendChild(totals.render());
        }
        render() {
            let dom = template();
            let store = this.stores;
            this.tBody = dom.querySelector('tBody');
            
            for(let i = 0; i < store.length; i++) {
                this.updateStore(store[i]);
            }
            
            
            return dom;
        }
    }
    
    
    module.StoreList = StoreList;
    
})(window.module = window.module || {});
'use strict';
//fruitCard is storeRow

(function(module) {
    let html = module.html;

    let StoreRow = module.StoreRow;

    let template = function() {
        return html`
        <div>
            <table id="table">
                <thead>
                    <tr>
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
                        <th>5pm</th> 
                        <th>6pm</th> 
                        <th>7pm</th> 
                        <th>Location Totals</th> 
                    </tr>
                </thead>
                <tbody id="tbody">

                </tbody>
                <tfoot id ="tfoot">

                </tfoot>
            </table>
        </div>
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

            // update the "last" know Stores we saw
            this.lastStores = stores.slice();
        }

        updateStore(store) {
            let storeRow = new StoreRow({
                store: store
            });
            this.tbody.appendChild(storeRow.render());
        }

        render() {
            let dom = template();
            let stores = this.stores;
            this.tbody = dom.querySelector('tbody');

            for(let i = 0; i < stores.length; i++) {
                this.updateStore(stores[i]);
            }

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});

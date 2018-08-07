'use strict';

(function(module) {
    let html = module.html;
    let StoreRow = module.StoreRow;

    let template = function() {
        return html`
            <!-- -->
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
                let store = fruits[i];
                if(lastStores.includes(store)) continue;

                this.updateFruit(store);
            }
    
            // update the "last" know fruits we saw
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

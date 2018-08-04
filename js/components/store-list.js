'use strict';

(function(module) {
    let html = module.html;
    let StoreRow = module.StoreRow;

    let template = function() {
        return html`
            <section>
                <h2>Current Locations</h2>
                <table>
                </table>
            </section>
        `;
    };

    class StoreList {
        
        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores;
        }
        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;
            
            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];
                if(lastStores.includes(store)) continue;
                
                this.updateFruit(store);
            }
            
            this.updateCount(stores.length);
            
            // update the "last" know store we saw
            this.lastStores = stores.slice();
        }
        
        updateStore(store) {
            let storeRow = new StoreRow({
                store: store
            });
            this.ul.appendChild(storeRow.render());
        }
        
        
        
        render() {
            let dom = template();
            let store = this.stores;
            this.ul = dom.querySelector('ul');
            
            
            for(let i = 0; i < store.length; i++) {
                this.updateStore(store[i]);
            }
            
            
            return dom;
        }
    }
    
    
    module.StoreList = StoreList;
    
})(window.module = window.module || {});
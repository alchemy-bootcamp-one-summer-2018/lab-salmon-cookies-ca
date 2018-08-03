'use strict';

(function(module){

    let html = module.html;
    let StoreCard = module.StoreCard;
    
    let template = function() {
        return html `
            <section>
                <p>We have <span class="store-count"></span> locations.</p>
                <table></table>
            </section>
        `;
    };

    class StoreList {
        // I dont understand this part
        constructor(props) {
            this.stores = props.stores;
            let lastStores = this.LastStores;
        }

        update(props) {
            let fruits = props.fruit;
            let lastStores = this.lastStores;

            for(let i=0; i < stores.length; i++) {
                let store = stores[i];
                if(lastStore.includes(store)) continue;
                this.renderStore(store);
            }

            this.updateCount(this.stores.length);
            this.lastStores = stores.slice();
        }

        renderStore(store) {
            let storeCard = new storeCard({
                store: store,
            });
            this.table.appendChild(storeCard.render());
        }

        updateCount(count) {
            this.countSpan.textContent = count;
        }

        render() {
            let stores = this.stores;
            let dom = template();
            this.table = dom.querySelector('table');
            this.countSpan = dom.querySelector('store-count');

            for(let i = 0; i < fruits.length; i++) {
                this.renderStore(stores[i]);
            }

            this.updateCount(stores.length);

            return dom;
        }
    }

    module.FruitList = FruitList;

})(window.module = window.module || {});
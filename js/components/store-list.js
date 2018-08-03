(function(module) {
    let html = module.html;
    let StoreCard = module.StoreCard;
    let template = function() {
        return html`
        <section>
            <h2>Locations</h2>
            <p>You have <span class="store-count"></span> stores</p>
            <table></table>
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

            this.updateCount(stores.length);
    
            this.lastStores = stores.slice();
        }

        updateStore(store) {
            let storeCard = new StoreCard({
                store: store
            });
            this.table.appendChild(storeCard.render());
        }

        updateCount(count) {
            this.spanCount.textContent = count;
        }

        render() {
            let dom = template();
            let stores = this.stores;
            this.table = dom.querySelector('table');
            this.spanCount = dom.querySelector('span.store-count');

            for(let i = 0; i < stores.length; i++) {
                this.updateStore(stores[i]);
            }

            this.updateCount(stores.length);

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});
'use strict';

(function(module)) {
    let html = module.html;

    let template = function() {
        return html`
            <section>
                <h2>Store List</h2>
                <ul></ul>
            </section


        `;

    };

    class storeList {

        constructor(props) {
            this.store = props.store;
        }

        update(props) {
            let stores = props.stores;

            for(let i=0; i < stores.length; i++) {
                let store = stores[i];

                this.updateStore(store);
            }

            this.updateCount(fruits.length);
        });
        this.ul.appendChild(store.render();)
    }

    updateCount(count) {
        this.spanCount.textContent = count;
    }

    render() {
        let dom = template();
        let stores = this.stores;
        this.ul = dom.querySelector('ul');
        this.spanCount = dom.querySelector('span.store-count');

        for(let i = 0; i < stores.length; i++) {
            this.updateStore(stores[i]);

            return dom;
        }
    }

    module.StoreList = StoreList;

})(window.module = window.module || {});


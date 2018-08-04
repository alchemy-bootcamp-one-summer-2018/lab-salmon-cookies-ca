'use strict';

(function(module) {
    
    let html = module.html;
    
    // let countSpan = document.getElementById('store-count');
    // countSpan.textContent = storeAPI.read().length;


    let template = function(count) {
        return html`
            <section>
                <h3 id="store-counter">
                    Choose from one of over ${count} amazing stores!
                </h3>
            </section>
        `;
    };

    
    class StoreCounter {
        constructor(props) {
            this.stores = props.stores;
            this.count = props.count;

        }


        render() {
            let dom = template(this.count);

            return dom;
        }


    }

    module.StoreCounter = StoreCounter;

})(window.module = window.module || {});
'use strict';

(function(module) {
    
    let html = module.html;
    
    // let countSpan = document.getElementById('store-count');
    // countSpan.textContent = storeAPI.read().length;


    let template = function() {
        return html`
            <section>
                <h3>
                    Chose from one of over
                    <span id="store-count"></span>
                    amazing stores!
                </h3>
            </section>
        `;
    };

    
    class StoreCounter {

        render() {
            let dom = template();

            return dom;
        }


    }

    module.StoreCounter = StoreCounter;

})(window.module = window.module || {});
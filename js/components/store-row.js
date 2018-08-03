'use strict';

(function(module) {
    let html = module.html;

    let template = function(store) {

        return html`
            <li>
                <!-- <h2>${store.name}</h2> -->
                
            </li>
        `;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
        }
        
        render() {
            let dom = template(this.fruit);
            return dom;
        }
    }

    module.StoreRow = StoreRow;

})(window.module = window.module || {});
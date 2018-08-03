'use strict';

(function(module) {
    let html = module.html;
    let storeApi = module.storeApi;
    let StoreList = module.StoreList;
    let StoreForm = module.StoreForm;
    
    let template = function() {
        return html`
        <header>
            <h1>Pat's Salmon Cookie Co.</h1>
        </header>
        <main></main>
        `;
    };
    
    class App {
        render() {
            let dom = template();

            let main = document.querySelector('main');

            let stores = storeApi.load();

            let storeList = new StoreList({
                stores:store
            });

            let storeForm = new storeForm({
                onAdd: function(store) {
                    storeApi.add(store);
                    storeList.update({
                        stores:store
                    });
                }
            });

            main.appendChild(storeList.render());
            main.appendChild(storeForm.render());
            
            return dom;
        }
    }

    module.App = App

})(window.module = window.module || {});
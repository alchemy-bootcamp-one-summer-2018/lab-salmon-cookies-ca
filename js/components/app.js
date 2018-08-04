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
                stores
            });

            let storeForm = new StoreForm({
                onAdd: function(store) {
                    storeApi.add(store);
                    storeList.update({
                        stores
                    });
                }
            });

            main.appendChild(storeForm.render());
            main.appendChild(storeList.render());
            
            return dom;
        }
    }

    module.App = App;

})(window.module = window.module || {});
'use strict';

(function(module) {
    let html = module.html;
    let storeApi = module.storeApi;
    let StoreList = module.StoreList;
    let StoreForm = module.StoreForm;

    let template = function() {
        return html`
            <header>
                <h1>Daily Sales</h1>
            </header>

            <main></main>
        `;
    };


    class App {

        render() {
            let dom = template();

            let main = dom.querySelector('main');

            let stores = storeApi.load();

            let storeList = new StoreList({
                stores: stores
            });
        
            let storeForm = new StoreForm({
                onAdd: function(store) {
                    storeApi.add(store);
                    storeList.update({
                        stores: stores
                    });
                }
            });

            main.appendChild(storeList.render());
            main.appendChild(storeForm.render());
            return dom;
            
        }
    }

   
    module.App = App;
})(window.module = window.module || {});

'use strict';

(function(module) {
    let html = module.html;
    let storesApi = module.storesApi;
    let StoresTable = module.StoresTable;
    let StoresForm = module.StoresForm;


    let template = function() {
        return html`
            <header>
                <h1>Pat's Salmon Cookie Stores</h1>;
            </header>

            <main></main>
        `;    
    };
                 

    class App { 
        render() {
            let dom = template();
            let main = dom.querySelector('main');
            let stores = storesApi.load();
            let storesTable = new StoresTable({
                stores: stores
            });

            let storesForm = new StoresForm({
                onAdd: function(store) {
                    storesApi.add(store);
                    storesTable.update({
                        stores: stores
                    });
                }
            });

            main.appendChild(storesTable.render());
            main.appendChild(storesForm.render());

            return dom;
        }
    }
    module.App = App;

})(window.module = window.module || {});
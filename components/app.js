'use strict';

(function(module) {

    let html = module.html;
    let StoresApi = module.StoresApi;
    let StoreTable = module.StoreTable;
    let StoreForm = module.StoreForm;

    let template = function() {

        return html`
            <header> 
                <h1>This is Pat's Sales </h1>
                <h2></h2>
             </header>

            <main>
            </main>

            `;
    };

//load data create store list and  store from, update list
    class App {
        render() {
            let dom = template();

            let main = dom.querySelector('main');

            let stores = StoresApi.load();

            let storeTable = new StoreTable({
                stores: stores,
                onRemove: (store) => {
                    StoresApi.remove(store);
                    storeTable.update({
                        stores: stores
                    });
                }
            });

            let storeForm = new StoreForm({
                onAdd: function(store) {
                    StoresApi.add(store);
                    storeTable.update({
                        stores: stores
                    });
                }
            });
        
            main.appendChild(storeForm.render());
            main.appendChild(storeTable.render());


            return dom;
        } 
    }


    module.App = App;

})(window.module = window.module || {});




   


   
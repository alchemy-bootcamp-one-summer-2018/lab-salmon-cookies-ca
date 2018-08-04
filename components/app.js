'use strict';

(function(module) {

    let html = module.html;
    let StoreRow = module.StoreRow;
    let StoreTable = module.StoreTable;
    let storesApi = module.storesApi;
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

            let stores = storesApi.get();
            let storeTable = new StoreTable ({
                stores: stores
            })
        
            let storeForm = new StoreForm ()
            main.appendChild(storeTable.render());

            return dom;
        } 
    }

    module.App = App;

})(window.module = window.module || {});




   


   
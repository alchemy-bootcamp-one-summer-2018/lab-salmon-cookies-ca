'use strict';

(function(module) {

    let html = module.html;
    let StoreForm = module.StoreForm;
    let StoreCounter = module.StoreCounter;
    let StoreTable = module.StoreTable;
    let storeAPI = module.storeAPI;


    let template = function() {
        return html`        
            <header>
                <h2>Our Partners</h2>
            </header>
            
            <main></main>
        `;
    };

    class App {
        render() {
            let dom = template();
            let main = dom.querySelector('main');

            let stores = storeAPI.read();

    



            let storeForm = new StoreForm;
            let storeCounter = new StoreCounter(
                {
                    count: storeAPI.read().length,
                }
            );
            let storeTable = new StoreTable(
                {
                    stores: stores,
                }
            );

            main.appendChild(storeForm.render());
            main.appendChild(storeCounter.render());
            main.appendChild(storeTable.render());

            return dom;

        }
    }

    module.App = App;

})(window.module = window.module || {});
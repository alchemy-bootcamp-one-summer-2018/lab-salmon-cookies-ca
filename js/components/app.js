'use strict';

(function(module) {
    let html = module.html;
    let storeApi = module.storeApi;
    let storeList = module.storeList;

    let template = function() {
        return html`
            <header>
                <h1>Hello world!</h1>
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
            console.log(stores);
            main.appendChild(storesList.render());
        
            return dom;
            
        }
    }

   

    module.App = App;
})(window.module = window.module || {});

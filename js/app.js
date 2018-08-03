'use strict';

(function(module) {

    let html = module.html;
    let StoreTable = module.StoreTable;
    let StoreForm = module.StoreForm;

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

            let storeTable = new StoreTable;
            let storeForm = new StoreForm;

            main.appendChild(storeForm.render());
            main.appendChild(storeTable.render());

            return dom;

        }
    }

    module.App = App;

})(window.module = window.module || {});
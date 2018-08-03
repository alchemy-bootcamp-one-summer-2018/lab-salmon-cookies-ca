'use strict';
(function(module){
    let html = module.html;
    //let StoreTable = module.StoreTable;
    //let StoreForm = module.StoreForm;

    let template = function() {
        return html`
        <header>
            <h1>Salmon Cookies</h1>
        </header>

        <main>It burnzes</main>
        `;
    };

    class App {
        render() {
            let dom = template();

            //let main = dom.querySelector('main');
            //let storeTable = new StoreTable();

            //main.appendChild(storeTable.render());

            return dom;
        }
    }

    module.App = App;
})(window.module = window.module || {});
'use strict';

(function(module) {

    let html = module.html;
    let StoreTable = module.StoreTable;

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


            main.appendChild(StoreTable.render());


            return dom;

        }
    }

    module.App = App;

})(window.module = window.module || {});
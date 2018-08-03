'use strict';
(function(module){

    let html = module.html;
    let StoreTable = module.StoreTable;
    let StoreCard = module.StoreCard;

    let template = function() {
        return html `
            <header>
                <h1> Hello World!</h1>
            </header>

            <main></main>
        `;
    };

    class App {
        render() {
            let dom = template();

            let main = dom.querySelector('main');
            let storeTable = new StoreTable();
                       
            

            main.appendChild(storeTable.render());
            
            return dom;
        }
    }

    module.App = App;
    // module.sayHello = sayHello;

})(window.module = window.module || {});
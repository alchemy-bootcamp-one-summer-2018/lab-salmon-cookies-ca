'use strict';
(function(module){

    let html = module.html;
    let StoreTable = module.StoreTable;
    let storeApi = module.storeApi;

    let template = function() {
        return html `
            <header>
                <h1> Hello World!</h1>
            </header>
            
            <table></table>
        `;
    };

    class App {
        render() {
            let dom = template();

            let table = dom.querySelector('table');
            
            let stores = storeApi.get();
            let storeTable = new StoreTable({  
                stores: stores
            });

            console.log(storeTable);

            
            
            
            
            
            

            table.appendChild(storeTable.render());
            
            return dom;
        }
    }

    module.App = App;
    

})(window.module = window.module || {});
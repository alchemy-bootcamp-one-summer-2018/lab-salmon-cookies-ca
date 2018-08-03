'use strict';
(function(module){

    let html = module.html;
    let StoreTable = module.StoreTable;
    
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
            let storeTable = new StoreTable();
            
            // let stores = [{
            //     name: 'Pike',
            //     hourSales: 1, 3, 4, 5, 6, 6, 7, 7, 8,
            //     storeTotal: 28
            // }]
            

            table.appendChild(storeTable.render());
            
            return dom;
        }
    }

    module.App = App;
    

})(window.module = window.module || {});
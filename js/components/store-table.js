'use strict';
(function(module){

    let StoreCard = module.StoreCard;
    let html = module.html;
    // let StoreCard = module.StoreCard;

    let template = function() {
        return html`
            <table>
                hello from the table
                
            </table>
        `;
    };

    class StoreTable {
        

        render() {
            let dom = template();

            let table = dom.querySelector('table');
            let storeCard = new StoreCard();

            table.appendChild(storeCard.render());

            return dom;
        }

        // renderStore(store) {
        //     let storeCard = new StoreCard({
        //         store: store,
        //     });
        //     this.ul.appendChild(storeCard.render());
        // }
    }

    
    module.StoreTable = StoreTable;

})(window.module = window.module || {});
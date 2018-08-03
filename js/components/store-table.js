'use strict';
(function(module){

    let StoreCard = module.StoreCard;
    let html = module.html;
    // let StoreCard = module.StoreCard;

    let template = function() {
        return html`
            <section>
                <h4>I'm dyin over here</h4>
                <ul></ul>
            </section>
        `;
    };

    class StoreTable {
        // constructor(props) {
        //     // this.stores = props.stores;
            
        // }

        render() {
            let dom = template();

            // let 
            
            

            // main.appendChild(StoreCard.render());

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
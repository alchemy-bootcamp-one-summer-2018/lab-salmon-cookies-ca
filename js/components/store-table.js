'use strict';
(function(module){
    let html = module.html;
    //let StoreCard = module.StoreCard;

    let template = function(){
        return html`
            <section>
                <h1>Trashcan fire</h1>
            <section>
        `;
    };

    class StoreTable {
    // constructor(props) {
    // this.stores = props.stores;
    // }
        render() {
            let dom = template();

            return dom;
        }
    }

    module.StoreTable = StoreTable;

})(window.module = window.module || {});


'use strict';
(function(module){

    let html = module.html;
    let template = function() {
        return html`
            <p>There's always money in the banana stand</p>
        `;
    };
    // build out each table row, representing a single store and its data

    class StoreCard {
        // constructor(props) {
        //     this.store = props.store;
        // }

        render() {
            let dom = template();
            
            return dom;
        }    
    }
    module.StoreCard = StoreCard;

})(window.module = window.module || {});
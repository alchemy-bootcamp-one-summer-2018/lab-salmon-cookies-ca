'use strict';

(function(module) {
    
    let html = module.html;

    let template = function() {

        return html`
            <section>
            <h1>This is Pat's Sales </h1>
                <h2></h2>
            <table> </table>
            <ul> </ul>
            </section>
        `;
    };

    class StoreList {

       

        render() {

            let dom = template();
            let storeList = this.storeList;

            this.ul = dom.querySelector('ul');
           
            return dom;
        }
    
    }


    module.StoreList = StoreList;

})(window.module = window.module || {});
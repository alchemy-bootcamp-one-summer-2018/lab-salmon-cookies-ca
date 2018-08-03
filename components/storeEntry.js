'use strict';

(function(module) {
    
    let html = module.html;
    let StoreList = module.StoreList;

    let template = function() {

        return html`
            <section>
            <p></p>

            <ul></ul>
            
            </section>
        `;
    };

    class StoreEntry {
        render() {

            let dom = template();
            
            this.ul = dom.querySelector('ul');
    
            return dom;
        }
    
    }
   
    module.StoreEntry = StoreEntry;

})(window.module = window.module || {});
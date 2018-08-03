'use strict';

(function(module) {
    
    let html = module.html;

    let template = function(store) {

        return html`
            <p></p>
            <tr>
            <td>${store.name}</td>
            <td>${store.min}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            <td></td>
            <td></td>
            </tr> 
        `;
    };

    class StoreEntry {
        constructor(props){
            this.store = props.store;
            console.log('working in constructor', this.store);

        }

        render() {

            let dom = template(this.store);
            console.log('working in render', this.store);
    
            return dom;
        }
    
    }
   
    module.StoreEntry = StoreEntry;

})(window.module = window.module || {});
'use strict';
(function(module){

    let StoreRow = module.StoreRow;
    let html = module.html;
    

    let template = function() {
        return html`
            <table>
            <td>LOCATION</td>
            <td>6AM</td>
            <td>7AM</td>
            <td>8AM</td>
            <td>9AM</td>
            <td>10AM</td>
            <td>11AM</td>
            <td>12PM</td>
            <td>1PM</td>
            <td>2PM</td>
            <td>3PM</td>
            <td>4PM</td>
            <td>5PM</td>
            <td>6PM</td>
            <td>7PM</td>
            <td>LOCATION TOTAL</td>
            </table>
        `;
    };

    class StoreTable {

        constructor(props) {
            this.stores = props.stores;
            //this.lastStores = this.stores.slice();
        }
        
        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;

            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];
                if(lastStores.includes(store)) continue;

                this.updateStore(store);
            }
            //continue means it won't execute anything below
            this.lastStores = stores.slice();
        }

        updateStore(store) {
            let storeRow = new StoreRow({
                store: store
            });
            this.tr.appendChild(storeRow.render());
        }

        
        render() {
            let dom = template();

            let table = dom.querySelector('table');
            let storeRow = new StoreRow();

            table.appendChild(storeRow.render());

            return dom;
        }

    }

    
    module.StoreTable = StoreTable;

})(window.module = window.module || {});
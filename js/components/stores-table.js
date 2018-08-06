'use strict';

(function(module) {
    let html = module.html;
    let StoresCard = module.StoresCard;


    let template = function() {
        return html`
            <section>
            <p>Come visit our locations!</p>
                <table class="table">
                <thead>
                    <tr>
                        <th>Locations</th>
                        <th>6am</th>
                        <th>7am</th>
                        <th>8am</th>
                        <th>9am</th>
                        <th>10am</th>
                        <th>11am</th>
                        <th>12pm</th>
                        <th>1pm</th>
                        <th>2pm</th>
                        <th>3pm</th>
                        <th>4pm</th>
                        <th>5pm</th>
                        <th>6pm</th>
                        <th>7pm</th>
                        <th>8pm</th>
                        <th>Totals</th>
                    </tr>
                </thead>
                </table>
                </section>
            </table>
            </section>
        `;    
    };
                 

    class StoresTable {     
        
        constructor(props){
            this.stores = props.stores;
            this.lastStores = this.stores.slice();
        }   

        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStores;

            //update if new store is added
            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];

                if(lastStores.includes(store)) continue;

                this.updateStore(store);
            }
            this.lastStores = stores.slice();
        }

        updateStore(store) {
            let storesCard = new StoresCard ({
                store: store
            });
            this.table.appendChild(storesCard.render());
        }
        render() {
            let dom = template();
            let stores = this.stores;
            this.table = dom.querySelector('table');

            for(let i = 0;i < stores.length; i++) {
                this.updateStore(stores[i]);
            }

            return dom;
        }
    
    }
    module.StoresTable = StoresTable;

})(window.module = window.module || {});
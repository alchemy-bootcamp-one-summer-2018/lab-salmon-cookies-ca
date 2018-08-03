'use strict';

(function(module){

    let html = module.html;
    let StoreCard = module.StoreCard;
    
    let template = function() {
        return html `
            <section>
                <p>Check out our locations!</p>
                <table>
                    <thead>
                        <tr>
                            <th>Location</th>
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
                            <th>Daily Location Total</th>
                        </tr>
                    </thead>  
                    <tbody id="stores">
                    </tbody> 
                    <tfoot id="tfoot">
                    </tfoot> 
                </table>
            </section>
        `;
    };

    class StoreList {
        constructor(props) {
            this.stores = props.stores;
            this.lastStores = this.stores.slice();
        }
    
        update(props) {
            let stores = props.stores;
            let lastStores = this.lastStore;

            for(let i = 0; i < stores.length; i++) {
                let store = stores[i];
                if(lastStores.includes(store)) continue;
                this.renderStore(store);
            }

            this.lastStores = stores.slice();
        }
    
        renderStore(store) {
            let storeCard = new StoreCard({
                store: store,
            });

            this.tbody.appendChild(storeCard.render());
        }
    
        render() {
            let stores = this.stores;
            let dom = template();
            this.tbody = dom.querySelector('tbody');
    
            for(let i = 0; i < stores.length; i++) {
                this.renderStore(stores[i]);
            }
    
            return dom;
        }
    }

    console.log('store list:', StoreList);

    module.StoreList = StoreList;

})(window.module = window.module || {});



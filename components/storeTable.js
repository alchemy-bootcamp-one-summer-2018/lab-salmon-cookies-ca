    'use strict';

    (function(module) {

        let html = module.html;
        let StoreRow = module.StoreRow;

        let template = function() {

            return html`

            <table class="table">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>6am</th>
                        <th>7am</th>
                        <th>8am</th>
                        <th>9am</th>
                        <th>10am</th>
                        <th>11m</th>
                        <th>12pm</th>
                        <th>1pm</th>
                        <th>2pm</th>
                        <th>3pm</th>
                        <th>4pm</th>
                        <th>5pm</th>
                        <th>6pm</th>
                        <th>7pm</th>
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody > 
                </tbody>
            `;
        };

        class StoreTable{
            constructor(props){
                console.log('working in constructor', this.stores);
                this.stores = props.stores;
                //this.lastStores = this.stores.slice
            }

            update(props) {
                let stores = props.stores;
                let lastStores = this.lastStore;
                //if line here
                //this.updateStore(store)continues updates row below
            }
            
            renderStore(store){
                let storeRow = new StoreRow({
                    store: store
                });
                this.tbody.appendChild(storeRow.render());
            }
        
            render() {
                let stores = this.stores;
                console.log('what this', stores);
                let dom = template();
                this.tbody = dom.querySelector('tbody');

                for(let i = 0; i < stores.length; i++) {
                    this.renderStore(stores[i]);
                }

                return dom;
             
            }  
             
        }

        module.StoreTable = StoreTable;

    })(window.module = window.module || {});
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

        }

        render() {
            let dom = template();
            let stores = this.stores;
            let table = dom.querySelector('table');

            for(let i = 0;i < stores.length; i++) {
                let storesCard = new StoresCard({
                    store: stores[i]
                });
                table.appendChild(storesCard.render());
            }

            return dom;
        }
    }
    
    module.StoresTable = StoresTable;

})(window.module = window.module || {});
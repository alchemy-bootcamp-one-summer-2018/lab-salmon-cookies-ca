'use strict';

(function(module) {

    let html = module.html; 
    let TableRow = module.TableRow;


    let template = function() {
        return html`
            <section>
                <h2>Cookies Sold Per Hour by Location</h2>
                <table></table>
            </section>
        `;

    };

    class StoreTable {
        constructor(props) {
            this.stores = props.fruits;

        }


        renderRow() {
            console.log(TableRow);

            let tableRow = new TableRow();
            

            this.table.appendChild(tableRow.render());
        }

        render() {
            let stores = this.stores;

            let dom = template();
            this.table = dom.querySelector('table');
            this.renderRow();

            return dom;
        }


    }

    module.StoreTable = StoreTable;


})(window.module = window.module || {});



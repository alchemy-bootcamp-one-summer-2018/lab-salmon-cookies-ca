'use strict';

(function(module) {

    let html = module.html; 

    let template = function() {
        return html`
            <section>
                <h2>Cookies Sold Per Hour by Location</h2>
                <table></table>
            </section>
        `;

    }

    class StoreTable {


        renderRow() {
            this.table.appendChild(`<tr><td>I'm a cell</td></tr>`)
        }

        render() {
            let dom = template();
            this.table = dom.querySelector('table');
            this.renderRow();

            return dom;
        }


    }

    module.StoreTable = StoreTable;


})(window.module = window.module || {});



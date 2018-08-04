'use strict';

(function(module) {
    
    let html = module.html;
    //let StoreTable = module.StoreTable

    let template = function(store) {

        return html`
    <tr>
        <td>${store.name}</td>
        <td>${store.cookiesPerHour[0]}</td>
        <td>${store.cookiesPerHour[1]}</td>
        <td>${store.cookiesPerHour[2]}</td>
        <td>${store.cookiesPerHour[3]}</td>
        <td>${store.cookiesPerHour[4]}</td>
        <td>${store.cookiesPerHour[5]}</td>
        <td>${store.cookiesPerHour[6]}</td>
        <td>${store.cookiesPerHour[7]}</td>
        <td>${store.cookiesPerHour[8]}</td>
        <td>${store.cookiesPerHour[9]}</td>
        <td>${store.cookiesPerHour[10]}</td>
        <td>${store.cookiesPerHour[11]}</td>
        <td>${store.cookiesPerHour[12]}</td>
        <td>${store.cookiesPerHour[13]}</td>
        <td>${store.total}</td>

    
    </tr> 
        `;
    };

    class StoreRow {
        constructor(props) {
            this.store = props.store;
        }

        render() {
            let dom = template(this.store);

            return dom;
        }
    
    }
   
    module.StoreRow = StoreRow;

})(window.module = window.module || {});
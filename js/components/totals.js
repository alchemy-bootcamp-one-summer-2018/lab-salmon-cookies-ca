'use strict';

(function(module){

    let html = module.html;
    let template = function(store) {
        return html`
        <tr>
            <td>${store.name}</td>
            <td>${store.cookieSalesPerStore[0]}</td> 
            <td>${store.cookieSalesPerStore[1]}</td>
            <td>${store.cookieSalesPerStore[2]}</td>
            <td>${store.cookieSalesPerStore[3]}</td> 
            <td>${store.cookieSalesPerStore[4]}</td>
            <td>${store.cookieSalesPerStore[5]}</td>
            <td>${store.cookieSalesPerStore[6]}</td> 
            <td>${store.cookieSalesPerStore[7]}</td>
            <td>${store.cookieSalesPerStore[8]}</td>
            <td>${store.cookieSalesPerStore[9]}</td> 
            <td>${store.cookieSalesPerStore[10]}</td>
            <td>${store.cookieSalesPerStore[11]}</td>
            <td>${store.cookieSalesPerStore[12]}</td> 
            <td>${store.cookieSalesPerStore[13]}</td>
        </tr>
        `;
    };



    class Totals {
        constructor(props) {
            this.store = props.store;
        }

        render() {
            let dom = template(this.store);
            return dom;
        }
    }

    module.Totals = Totals;
    module.getTotals = getTotals;
    
})(window.module = window.module || {});
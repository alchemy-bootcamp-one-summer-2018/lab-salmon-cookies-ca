'use strict';
(function(module){
    let html = module.html;
    let template = function(store){
        return html`
        <tr>
            <td>${store.name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `;
    };

    function getTotals(stores) {
        let totalSalesPerHour = [];
        for(let i = 0; i < 14; i++) {
            let total = 0;
            for(let j = 0; j < stores.length; j++) {
                total += stores[j].cookiesPerHour[i];
            }
            totalSalesPerHour.push(total);
        }
        
        for(let i = 0; i < stores.length; i++) {
            stores[i].totalSales = [];
            let totalSale = totally(stores[i].cookiesPerHour);
            stores[i].totalSales.push(totalSale);
            console.log('store totals', stores[i].totalSales);
        }
        
        let grandTotal = totally(totalSalesPerHour);
        
        let totalsPerHour = {
            name: 'Hourly Totals',
            cookiesPerHour: totalSalesPerHour,
            totalSales: grandTotal
        };
        
        console.log(totalsPerHour);
        
        
        console.log('grand total', grandTotal);
        function totally(totals) {
            let grandTotal = 0;
            for(let j = 0; j < 14; j++) {
                grandTotal += totals[j];
            }
            return grandTotal;
        }
    }

    class Footer {
        constructor(props){
            let stores = props.stores;
            this.totals = getTotals(stores);
        }
        render() {
            let dom = template(this.store);
            return dom;
        }
        
    }

    module.Footer = Footer;
    
})(window.module = window.module || {});
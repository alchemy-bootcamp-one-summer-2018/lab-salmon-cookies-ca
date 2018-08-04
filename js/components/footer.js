'use strict';
(function(module){
    let html = module.html;
    let totals = module.totals;

    let template = function(totalsByHour, grandTotal){
        return html`
        <tr id="t-foot-row">
            <td>Hourly Totals</td>
            <td>${totalsByHour[0]}</td>
            <td>${totalsByHour[1]}</td>
            <td>${totalsByHour[2]}</td>
            <td>${totalsByHour[3]}</td>
            <td>${totalsByHour[4]}</td>
            <td>${totalsByHour[5]}</td>
            <td>${totalsByHour[6]}</td>
            <td>${totalsByHour[7]}</td>
            <td>${totalsByHour[8]}</td>
            <td>${totalsByHour[9]}</td>
            <td>${totalsByHour[10]}</td>
            <td>${totalsByHour[11]}</td>
            <td>${totalsByHour[12]}</td>
            <td>${totalsByHour[13]}</td>
            <td>${grandTotal}</td>
        </tr>
        `;
    };
    
    let footer = {
        render() {
            // Generate new dom string with hourly totals and grand total maintained by totalsApi
            let dom = template(totals.getTotalByHour(), totals.getGrandTotal());
            return dom;
        }
        
    };

    module.footer = footer;
    
})(window.module = window.module || {});
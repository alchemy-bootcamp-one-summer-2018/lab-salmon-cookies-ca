'use strict';

(function(module) {
    let html = module.html;
    let totals = module.totals;

    let template = function(hourlyTotals, grandTotal) {
        return html`
        <tr id="tfoot">
            <td>Hourly Totals</td>
            <td>${hourlyTotals[0]}</td>
            <td>${hourlyTotals[1]}</td>
            <td>${hourlyTotals[2]}</td>
            <td>${hourlyTotals[3]}</td>
            <td>${hourlyTotals[4]}</td>
            <td>${hourlyTotals[5]}</td>
            <td>${hourlyTotals[6]}</td>
            <td>${hourlyTotals[7]}</td>
            <td>${hourlyTotals[8]}</td>
            <td>${hourlyTotals[9]}</td>
            <td>${hourlyTotals[10]}</td>
            <td>${hourlyTotals[11]}</td>
            <td>${hourlyTotals[12]}</td>
            <td>${hourlyTotals[13]}</td>
            <td>${hourlyTotals[14]}</td>
            <td>${grandTotal}</td>
        </tr>
        `;
    };

    let footer = {
        render() {
            let dom = template(totals.getHourlyTotal(), totals.getGrandTotal());
            return dom;
        }
    };

    module.footer = footer;

})(window.module = window.module || {});
